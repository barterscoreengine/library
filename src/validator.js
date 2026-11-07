/**
 * @fileoverview BarterScore Engine - Schema & Dataset Validator (UMD Module)
 * @license Apache-2.0
 * @version 1.0.0
 *
 * Zero-dependency, cross-platform schema validation module compatible with
 * local file:// protocol (window.BarterCore.Validator), CommonJS (Node.js),
 * and ES Module environments.
 */

(function (root, factory) {
  'use strict';

  var validatorModule = factory();

  // 1. Always attach to global namespace for offline file:// protocol compatibility
  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.Validator = validatorModule;
  }

  // 2. Support CommonJS / Node.js environments
  if (typeof module === 'object' && module.exports) {
    module.exports = validatorModule;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  /**
   * Official immutable item categories defined by the BarterScore Engine specification.
   * @type {ReadonlyArray<string>}
   */
  var VALID_CATEGORIES = Object.freeze([
    'cat_staple_foods',
    'cat_critical_nutrition',
    'cat_spices_morale',
    'cat_pharma_essential',
    'cat_trauma_hygiene',
    'cat_water_fire_shelter',
    'cat_tools_energy_comms',
    'cat_store_of_value'
  ]);

  /**
   * Official atomic unit measures allowed for items.
   * @type {ReadonlyArray<string>}
   */
  var VALID_UNIT_MEASURES = Object.freeze(['g', 'ml', 'un']);

  /**
   * Supported IETF BCP 47 locale identifiers.
   * @type {ReadonlyArray<string>}
   */
  var SUPPORTED_LOCALES = Object.freeze(['en-US', 'pt-BR', 'es-ES', 'zh-Hans']);

  /**
   * Parameter mathematical boundaries enforced by the specification.
   */
  var BOUNDS = Object.freeze({
    COST_OF_PREP_MIN: 0.5,
    COST_OF_PREP_MAX: 1.0,
    PSYCHOLOGICAL_FACTOR_MIN: 1.0,
    PSYCHOLOGICAL_FACTOR_MAX: 2.5,
    FRAGILITY_INDEX_MIN: 0.7,
    FRAGILITY_INDEX_MAX: 1.2,
    EEB_NON_FOOD_MIN: 500,
    EEB_NON_FOOD_MAX: 50000,
    MACRO_RATIO_MIN: 0.0,
    MACRO_RATIO_MAX: 1.0,
    MACRO_SUM_TOLERANCE: 1.05
  });

  /**
   * Prohibited commercial brand names to uphold scientific neutrality (WHO/INN, IEC, Codex).
   * @type {ReadonlyArray<string>}
   */
  var PROHIBITED_BRAND_TERMS = Object.freeze([
    'tylenol',
    'advil',
    'alivium',
    'motrin',
    'aspirin',
    'bayer',
    'panadol',
    'benadryl',
    'neylen',
    'duracell',
    'energizer',
    'rayovac',
    'panasonic',
    'bic',
    'zippo',
    'silver_tape',
    'silvertape',
    'duct_tape',
    'scotch',
    'band_aid',
    'bandaid',
    'leatherman',
    'victorinox',
    'gerber',
    'lifestraw',
    'sawyer',
    'clorox',
    'lysol',
    'nido',
    'nestle',
    'gatorade',
    'pedialyte',
    'redbull',
    'nescafe',
    'spam',
    'nutella'
  ]);

  /**
   * Regular expression for semantic lowercase snake_case slugs.
   * Must start with a lowercase letter and contain only [a-z0-9_], never purely numeric.
   * @type {RegExp}
   */
  var SNAKE_CASE_SLUG_REGEX = /^[a-z][a-z0-9_]{2,120}$/;

  /**
   * Regular expression for semantic tags in lowercase snake_case.
   * @type {RegExp}
   */
  var TAG_SLUG_REGEX = /^[a-z][a-z0-9_]{1,64}$/;

  /**
   * Checks whether a value is a finite number.
   * @param {*} value
   * @returns {boolean}
   */
  function isFiniteNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
  }

  /**
   * Checks whether a value is a non-null plain object.
   * @param {*} value
   * @returns {boolean}
   */
  function isPlainObject(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  }

  /**
   * Checks if a string contains any prohibited commercial brand token on word boundaries.
   * Prevents false positives on scientific terms such as "bicarbonate", "anaerobic", or "ascorbic".
   * @param {string} text
   * @returns {string|null} Matched prohibited brand token or null.
   */
  function findProhibitedBrand(text) {
    if (typeof text !== 'string' || !text) {
      return null;
    }
    var normalized = text.toLowerCase();
    var tokens = normalized.split(/[^a-z0-9]+/);
    for (var i = 0; i < PROHIBITED_BRAND_TERMS.length; i++) {
      var brand = PROHIBITED_BRAND_TERMS[i];
      if (brand.indexOf('_') !== -1) {
        if (normalized.indexOf(brand) !== -1) {
          return brand;
        }
      } else if (tokens.indexOf(brand) !== -1) {
        return brand;
      }
    }
    return null;
  }

  /**
   * Extracts nutrition properties from either `item.nutrition` or flat properties on `item`.
   * @param {Object} item
   * @returns {Object}
   */
  function extractNutritionObject(item) {
    if (isPlainObject(item.nutrition)) {
      return item.nutrition;
    }
    return {
      pct_kcal_protein: item.pct_kcal_protein,
      pct_kcal_fat: item.pct_kcal_fat,
      pct_kcal_added_sugar: item.pct_kcal_added_sugar,
      high_vit_c: item.high_vit_c,
      high_sodium_potassium: item.high_sodium_potassium,
      high_calcium_iron: item.high_calcium_iron
    };
  }

  /**
   * Validates a single BarterScore item object against the scientific & mathematical schema.
   *
   * @param {Object} item - The item object to validate.
   * @returns {{
   *   is_valid: boolean,
   *   item_id: string,
   *   errors: string[],
   *   warnings: string[]
   * }}
   */
  function validateItem(item) {
    var errors = [];
    var warnings = [];

    if (!isPlainObject(item)) {
      return {
        is_valid: false,
        item_id: 'unknown_item',
        errors: ['Item entry must be a non-null plain JavaScript object.'],
        warnings: []
      };
    }

    var itemId = typeof item.id === 'string' && item.id.trim() !== '' ? item.id.trim() : 'unknown_item';

    // 1. Validate semantic ID (snake_case, non-numeric, brand-free)
    if (typeof item.id !== 'string' || item.id.trim() === '') {
      errors.push('Missing or empty required field "id" (must be a semantic snake_case string).');
    } else {
      if (/^\d+$/.test(item.id)) {
        errors.push('Invalid "id" ("' + item.id + '"): sequential numeric IDs are strictly prohibited.');
      } else if (!SNAKE_CASE_SLUG_REGEX.test(item.id)) {
        errors.push(
          'Invalid "id" ("' +
            item.id +
            '"): must be lowercase snake_case starting with a letter ([a-z][a-z0-9_]{2,120}).'
        );
      }

      var matchedBrandInId = findProhibitedBrand(item.id);
      if (matchedBrandInId) {
        errors.push(
          'Prohibited commercial brand term "' +
            matchedBrandInId +
            '" detected in item "id" ("' +
            item.id +
            '"). Use WHO/INN, IEC/ANSI, or Codex Alimentarius nomenclature.'
        );
      }
    }

    // 2. Validate category
    if (typeof item.category !== 'string' || item.category.trim() === '') {
      errors.push('Item "' + itemId + '" is missing required field "category".');
    } else if (VALID_CATEGORIES.indexOf(item.category) === -1) {
      errors.push(
        'Item "' +
          itemId +
          '" has invalid category "' +
          item.category +
          '". Allowed categories: ' +
          VALID_CATEGORIES.join(', ') +
          '.'
      );
    }

    // 3. Validate atomic consumption & divisibility properties
    if (typeof item.is_divisible !== 'boolean') {
      errors.push('Item "' + itemId + '" is missing or has non-boolean field "is_divisible".');
    }

    if (!isFiniteNumber(item.sub_units) || item.sub_units < 1 || Math.floor(item.sub_units) !== item.sub_units) {
      errors.push('Item "' + itemId + '" must have an integer "sub_units" >= 1.');
    } else if (item.is_divisible === false && item.sub_units > 1) {
      warnings.push(
        'Item "' +
          itemId +
          '" is marked as indivisible (is_divisible: false) but declares sub_units = ' +
          item.sub_units +
          '. Atomic indivisible units typically declare sub_units = 1.'
      );
    }

    if (typeof item.unit_measure !== 'string' || VALID_UNIT_MEASURES.indexOf(item.unit_measure) === -1) {
      errors.push(
        'Item "' +
          itemId +
          '" has invalid "unit_measure" ("' +
          String(item.unit_measure) +
          '"). Must be one of: ' +
          VALID_UNIT_MEASURES.join(', ') +
          '.'
      );
    }

    // 4. Validate food flag & nutrition parameters
    if (typeof item.is_food !== 'boolean') {
      errors.push('Item "' + itemId + '" is missing or has non-boolean field "is_food".');
    } else if (item.is_food === true) {
      var nutr = extractNutritionObject(item);

      if (
        !isFiniteNumber(nutr.pct_kcal_protein) ||
        nutr.pct_kcal_protein < BOUNDS.MACRO_RATIO_MIN ||
        nutr.pct_kcal_protein > BOUNDS.MACRO_RATIO_MAX
      ) {
        errors.push(
          'Food item "' +
            itemId +
            '" must provide "pct_kcal_protein" as a number between 0.0 and 1.0 (received: ' +
            String(nutr.pct_kcal_protein) +
            ').'
        );
      }

      if (
        !isFiniteNumber(nutr.pct_kcal_fat) ||
        nutr.pct_kcal_fat < BOUNDS.MACRO_RATIO_MIN ||
        nutr.pct_kcal_fat > BOUNDS.MACRO_RATIO_MAX
      ) {
        errors.push(
          'Food item "' +
            itemId +
            '" must provide "pct_kcal_fat" as a number between 0.0 and 1.0 (received: ' +
            String(nutr.pct_kcal_fat) +
            ').'
        );
      }

      if (
        !isFiniteNumber(nutr.pct_kcal_added_sugar) ||
        nutr.pct_kcal_added_sugar < BOUNDS.MACRO_RATIO_MIN ||
        nutr.pct_kcal_added_sugar > BOUNDS.MACRO_RATIO_MAX
      ) {
        errors.push(
          'Food item "' +
            itemId +
            '" must provide "pct_kcal_added_sugar" as a number between 0.0 and 1.0 (received: ' +
            String(nutr.pct_kcal_added_sugar) +
            ').'
        );
      }

      if (
        isFiniteNumber(nutr.pct_kcal_protein) &&
        isFiniteNumber(nutr.pct_kcal_fat) &&
        isFiniteNumber(nutr.pct_kcal_added_sugar)
      ) {
        var macroSum = nutr.pct_kcal_protein + nutr.pct_kcal_fat + nutr.pct_kcal_added_sugar;
        if (macroSum > BOUNDS.MACRO_SUM_TOLERANCE) {
          errors.push(
            'Food item "' +
              itemId +
              '" has caloric macro ratios summing to ' +
              macroSum.toFixed(3) +
              ' (> 1.0). Verify pct_kcal_protein, pct_kcal_fat, and pct_kcal_added_sugar.'
          );
        }
      }

      if (typeof nutr.high_vit_c !== 'boolean') {
        errors.push('Food item "' + itemId + '" must provide boolean field "high_vit_c".');
      }
      if (typeof nutr.high_sodium_potassium !== 'boolean') {
        errors.push('Food item "' + itemId + '" must provide boolean field "high_sodium_potassium".');
      }
      if (typeof nutr.high_calcium_iron !== 'boolean') {
        errors.push('Food item "' + itemId + '" must provide boolean field "high_calcium_iron".');
      }
    }

    // 5. Validate physical & mathematical formula variables
    if (!isFiniteNumber(item.energy_or_utility_base) || item.energy_or_utility_base <= 0) {
      errors.push(
        'Item "' +
          itemId +
          '" must have a positive number for "energy_or_utility_base" (E > 0). Received: ' +
          String(item.energy_or_utility_base) +
          '.'
      );
    } else if (
      item.is_food === false &&
      (item.energy_or_utility_base < BOUNDS.EEB_NON_FOOD_MIN ||
        item.energy_or_utility_base > BOUNDS.EEB_NON_FOOD_MAX)
    ) {
      warnings.push(
        'Non-food item "' +
          itemId +
          '" has "energy_or_utility_base" = ' +
          item.energy_or_utility_base +
          ', outside the standard EEB reference scale [500, 50000].'
      );
    }

    if (!isFiniteNumber(item.weight_kg) || item.weight_kg <= 0) {
      errors.push(
        'Item "' +
          itemId +
          '" must have a positive number for "weight_kg" (P > 0). Received: ' +
          String(item.weight_kg) +
          '.'
      );
    }

    if (!isFiniteNumber(item.volume_liters) || item.volume_liters < 0) {
      errors.push(
        'Item "' +
          itemId +
          '" must have a non-negative number for "volume_liters" (Vol >= 0). Received: ' +
          String(item.volume_liters) +
          '.'
      );
    }

    if (!isFiniteNumber(item.lifecycle_units) || item.lifecycle_units <= 0) {
      errors.push(
        'Item "' +
          itemId +
          '" must have a positive number for "lifecycle_units" (V > 0). Received: ' +
          String(item.lifecycle_units) +
          '.'
      );
    }

    if (
      item.current_lifecycle_remaining !== undefined &&
      item.current_lifecycle_remaining !== null &&
      (!isFiniteNumber(item.current_lifecycle_remaining) || item.current_lifecycle_remaining < 0)
    ) {
      errors.push(
        'Item "' +
          itemId +
          '" has an invalid "current_lifecycle_remaining" (must be a finite number >= 0).'
      );
    }

    if (
      !isFiniteNumber(item.cost_of_prep) ||
      item.cost_of_prep < BOUNDS.COST_OF_PREP_MIN ||
      item.cost_of_prep > BOUNDS.COST_OF_PREP_MAX
    ) {
      errors.push(
        'Item "' +
          itemId +
          '" has "cost_of_prep" (CP) = ' +
          String(item.cost_of_prep) +
          ', which is outside the required range [' +
          BOUNDS.COST_OF_PREP_MIN +
          ', ' +
          BOUNDS.COST_OF_PREP_MAX +
          '].'
      );
    }

    if (
      !isFiniteNumber(item.psychological_factor) ||
      item.psychological_factor < BOUNDS.PSYCHOLOGICAL_FACTOR_MIN ||
      item.psychological_factor > BOUNDS.PSYCHOLOGICAL_FACTOR_MAX
    ) {
      errors.push(
        'Item "' +
          itemId +
          '" has "psychological_factor" (FP) = ' +
          String(item.psychological_factor) +
          ', which is outside the required range [' +
          BOUNDS.PSYCHOLOGICAL_FACTOR_MIN +
          ', ' +
          BOUNDS.PSYCHOLOGICAL_FACTOR_MAX +
          '].'
      );
    }

    if (
      !isFiniteNumber(item.fragility_index) ||
      item.fragility_index < BOUNDS.FRAGILITY_INDEX_MIN ||
      item.fragility_index > BOUNDS.FRAGILITY_INDEX_MAX
    ) {
      errors.push(
        'Item "' +
          itemId +
          '" has "fragility_index" (Frag) = ' +
          String(item.fragility_index) +
          ', which is outside the required range [' +
          BOUNDS.FRAGILITY_INDEX_MIN +
          ', ' +
          BOUNDS.FRAGILITY_INDEX_MAX +
          '].'
      );
    }

    // 6. Validate functional tags
    if (!Array.isArray(item.tags) || item.tags.length === 0) {
      errors.push('Item "' + itemId + '" must declare a non-empty array of functional "tags".');
    } else {
      for (var t = 0; t < item.tags.length; t++) {
        var tag = item.tags[t];
        if (typeof tag !== 'string' || !TAG_SLUG_REGEX.test(tag)) {
          errors.push(
            'Item "' +
              itemId +
              '" contains an invalid tag "' +
              String(tag) +
              '" at index ' +
              t +
              ' (must be lowercase snake_case).'
          );
        } else {
          var brandInTag = findProhibitedBrand(tag);
          if (brandInTag) {
            warnings.push(
              'Item "' +
                itemId +
                '" tag "' +
                tag +
                '" matches restricted commercial term "' +
                brandInTag +
                '".'
            );
          }
        }
      }
    }

    return {
      is_valid: errors.length === 0,
      item_id: itemId,
      errors: errors,
      warnings: warnings
    };
  }

  /**
   * Validates a full array of items, checking individual schemas and detecting duplicate semantic IDs.
   *
   * @param {Array<Object>} items - Array of item definitions.
   * @returns {{
   *   is_valid: boolean,
   *   total_items: number,
   *   valid_items: number,
   *   invalid_items: number,
   *   errors: string[],
   *   warnings: string[],
   *   item_reports: Array<Object>
   * }}
   */
  function validateDataset(items) {
    if (!Array.isArray(items)) {
      return {
        is_valid: false,
        total_items: 0,
        valid_items: 0,
        invalid_items: 0,
        errors: ['Dataset must be a valid JavaScript Array of item objects.'],
        warnings: [],
        item_reports: []
      };
    }

    var allErrors = [];
    var allWarnings = [];
    var itemReports = [];
    var seenIds = Object.create(null);
    var validCount = 0;
    var invalidCount = 0;

    if (items.length === 0) {
      allWarnings.push('Dataset array is empty (0 items provided).');
    }

    for (var i = 0; i < items.length; i++) {
      var currentItem = items[i];
      var report = validateItem(currentItem);

      if (currentItem && typeof currentItem.id === 'string' && currentItem.id.trim() !== '') {
        var normalizedId = currentItem.id.trim();
        if (seenIds[normalizedId] !== undefined) {
          var dupError =
            'Duplicate semantic "id" detected: "' +
            normalizedId +
            '" at dataset index ' +
            i +
            ' (already defined at index ' +
            seenIds[normalizedId] +
            ').';
          report.errors.push(dupError);
          report.is_valid = false;
        } else {
          seenIds[normalizedId] = i;
        }
      }

      if (report.is_valid) {
        validCount++;
      } else {
        invalidCount++;
      }

      for (var e = 0; e < report.errors.length; e++) {
        allErrors.push('[Index ' + i + '] ' + report.errors[e]);
      }
      for (var w = 0; w < report.warnings.length; w++) {
        allWarnings.push('[Index ' + i + '] ' + report.warnings[w]);
      }

      itemReports.push(report);
    }

    return {
      is_valid: allErrors.length === 0,
      total_items: items.length,
      valid_items: validCount,
      invalid_items: invalidCount,
      errors: allErrors,
      warnings: allWarnings,
      item_reports: itemReports
    };
  }

  /**
   * Validates a localization dictionary against IETF BCP 47 standards, category coverage,
   * commercial brand prohibitions, and optional reference item IDs or item objects.
   *
   * Supports both `(localeCode, localeData, referenceItemsOrIds)` and
   * `(localeData, referenceItemsOrIds, localeCode)` call signatures for developer ergonomics.
   *
   * @param {string|Object} localeCodeOrData - IETF BCP 47 code (e.g., 'en-US') or localization dictionary object.
   * @param {Object|Array<string|Object>} localeDataOrItems - Localization dictionary object or reference items/IDs.
   * @param {Array<string|Object>|string} [referenceItemsOrLocaleCode] - Reference items/IDs or IETF BCP 47 code.
   * @returns {{
   *   is_valid: boolean,
   *   locale_code: string,
   *   errors: string[],
   *   warnings: string[]
   * }}
   */
  function validateLocale(localeCodeOrData, localeDataOrItems, referenceItemsOrLocaleCode) {
    var errors = [];
    var warnings = [];

    var localeCode = localeCodeOrData;
    var localeData = localeDataOrItems;
    var referenceItemIds = referenceItemsOrLocaleCode;

    // Support (localeData, referenceItemsOrIds, localeCode) argument order
    if (isPlainObject(localeCodeOrData) && !isPlainObject(localeDataOrItems)) {
      localeData = localeCodeOrData;
      if (typeof localeDataOrItems === 'string') {
        localeCode = localeDataOrItems;
        referenceItemIds = Array.isArray(referenceItemsOrLocaleCode) ? referenceItemsOrLocaleCode : undefined;
      } else {
        referenceItemIds = localeDataOrItems;
        localeCode =
          typeof referenceItemsOrLocaleCode === 'string'
            ? referenceItemsOrLocaleCode
            : localeData.locale || localeData.code || 'en-US';
      }
    }

    if (typeof localeCode !== 'string' || localeCode.trim() === '') {
      errors.push('Locale code must be a non-empty IETF BCP 47 string (e.g., "en-US").');
    } else if (SUPPORTED_LOCALES.indexOf(localeCode) === -1) {
      warnings.push(
        'Locale "' +
          localeCode +
          '" is a custom locale outside the core quartet (' +
          SUPPORTED_LOCALES.join(', ') +
          ').'
      );
    }

    if (!isPlainObject(localeData)) {
      errors.push('Locale dictionary for "' + String(localeCode) + '" must be a non-null plain object.');
      return {
        is_valid: false,
        locale_code: String(localeCode || 'unknown'),
        errors: errors,
        warnings: warnings
      };
    }

    if (isPlainObject(localeData.categories)) {
      for (var c = 0; c < VALID_CATEGORIES.length; c++) {
        var catKey = VALID_CATEGORIES[c];
        var catEntry = localeData.categories[catKey];
        if (!catEntry) {
          warnings.push('Locale "' + localeCode + '" is missing translation entry for category "' + catKey + '".');
        } else if (typeof catEntry === 'object' && (!catEntry.name || typeof catEntry.name !== 'string')) {
          errors.push('Locale "' + localeCode + '" category "' + catKey + '" is missing a valid "name" string.');
        }
      }
    }

    var itemsDict = isPlainObject(localeData.items) ? localeData.items : localeData;

    if (Array.isArray(referenceItemIds) && referenceItemIds.length > 0) {
      for (var i = 0; i < referenceItemIds.length; i++) {
        var rawRef = referenceItemIds[i];
        var reqId = isPlainObject(rawRef) && typeof rawRef.id === 'string' ? rawRef.id : String(rawRef);
        var entry = itemsDict[reqId];
        if (!entry) {
          warnings.push('Locale "' + localeCode + '" is missing translation entry for item "' + reqId + '".');
        } else if (typeof entry === 'object') {
          if (!entry.name || typeof entry.name !== 'string' || entry.name.trim() === '') {
            errors.push('Locale "' + localeCode + '" entry for "' + reqId + '" is missing a valid "name" string.');
          } else {
            var brandHit = findProhibitedBrand(entry.name);
            if (brandHit) {
              errors.push(
                'Locale "' +
                  localeCode +
                  '" item "' +
                  reqId +
                  '" name contains prohibited commercial brand term "' +
                  brandHit +
                  '".'
              );
            }
          }
        }
      }
    }

    return {
      is_valid: errors.length === 0,
      locale_code: String(localeCode),
      errors: errors,
      warnings: warnings
    };
  }

  var validatorApi = {
    VERSION: '1.0.0',
    VALID_CATEGORIES: VALID_CATEGORIES,
    VALID_UNIT_MEASURES: VALID_UNIT_MEASURES,
    SUPPORTED_LOCALES: SUPPORTED_LOCALES,
    BOUNDS: BOUNDS,
    PROHIBITED_BRAND_TERMS: PROHIBITED_BRAND_TERMS,
    validateItem: validateItem,
    validateDataset: validateDataset,
    validateLocale: validateLocale
  };
  validatorApi.Validator = validatorApi;

  return Object.freeze(validatorApi);
});
