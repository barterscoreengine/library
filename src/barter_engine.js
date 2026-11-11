/**
 * @fileoverview BarterScore Engine - Core Mathematical & Trade Engine (UMD Module)
 * @author Erisson Marques (https://github.com/erissontech)
 * @license Apache-2.0
 * @version 1.1.0
 *
 * Pure Vanilla JavaScript (ES6+) implementation of the BarterScore mathematical
 * valuation formulas, real-time shelf-life depreciation, External Context Modifiers (MEC),
 * barter exchange parity with indivisibility alerts (trade_imbalance / tradeImbalanceWarning),
 * hot-swappable item registries, and IETF BCP 47 localization fallback.
 *
 * Hybrid SDK Design:
 * - Can be instantiated via `new BarterEngine(options)` for isolated/instance workflows.
 * - Can be called statically via `BarterEngine.evaluateItem(...)`, `BarterEngine.calculateTrade(...)`, etc.
 * - Compatible with offline local `file://` execution (`window.BarterCore.BarterEngine`),
 *   CommonJS (`module.exports`), and ES Module bundlers.
 */

(function (root, factory) {
  'use strict';

  var ValidatorRef =
    typeof root !== 'undefined' && root.BarterCore && root.BarterCore.Validator
      ? root.BarterCore.Validator
      : typeof require === 'function'
      ? (function () {
          try {
            return require('./validator.js');
          } catch (_err) {
            return null;
          }
        })()
      : null;

  var engineModule = factory(root, ValidatorRef);

  // 1. Always attach to global namespace for offline file:// protocol compatibility
  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.BarterEngine = engineModule;
  }

  // 2. Support CommonJS / Node.js environments
  if (typeof module === 'object' && module.exports) {
    module.exports = engineModule;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function (
  root,
  Validator
) {
  'use strict';

  /**
   * Immutable mathematical constants mandated by the BarterScore Engine specification.
   * @readonly
   */
  var MATH_CONSTANTS = Object.freeze({
    IN_BASELINE: 1.0,
    IN_MIN_CLAMP: 0.5,
    IN_MAX_CLAMP: 2.5,
    MACRO_PROTEIN_WEIGHT: 1.5,
    MACRO_FAT_WEIGHT: 1.0,
    MACRO_ADDED_SUGAR_PENALTY: 1.2,
    MICRO_VIT_C_BONUS: 0.3,
    MICRO_SODIUM_POTASSIUM_BONUS: 0.2,
    MICRO_CALCIUM_IRON_BONUS: 0.2,
    GRAVIMETRIC_VOLUMETRIC_EPSILON: 0.1,
    STORE_OF_VALUE_CATEGORY: 'cat_store_of_value',
    ACUTE_COLLAPSE_STORE_OF_VALUE_MULT: 0.01,
    RECONSTRUCTION_STORE_OF_VALUE_MULT: 5.0,
    DEFAULT_LOCALE: 'en-US',
    DEFAULT_CRISIS_PHASE: 'acute_collapse',
    IMBALANCE_TOLERANCE_PCT: 0.01
  });

  /**
   * Built-in crisis scenario presets for the External Context Modifier (MEC).
   * Presets strictly include `acute_collapse` and `economic_reconstruction` by default,
   * while allowing runtime custom scenario injection or tag multiplier overrides.
   * @readonly
   */
  var DEFAULT_CONTEXT_SCENARIOS = Object.freeze({
    acute_collapse: Object.freeze({
      id: 'acute_collapse',
      category_multipliers: Object.freeze({
        cat_store_of_value: MATH_CONSTANTS.ACUTE_COLLAPSE_STORE_OF_VALUE_MULT,
        cat_water_fire_shelter: 1.5,
        cat_trauma_hygiene: 1.45,
        cat_pharma_essential: 1.4,
        cat_essential_services: 1.4,
        cat_critical_nutrition: 1.35,
        cat_staple_foods: 1.25,
        cat_spices_morale: 1.15,
        cat_tools_energy_comms: 1.1
      }),
      tag_multipliers: Object.freeze({
        water_purification: 1.8,
        hydration: 1.6,
        oral_rehydration: 1.65,
        hemostatic: 1.75,
        trauma_care: 1.6,
        wound_antiseptic: 1.5,
        antibiotic_systemic: 1.7,
        analgesic_antipyretic: 1.35,
        fire_ignition: 1.55,
        thermal_shelter: 1.4,
        ready_to_eat: 1.45,
        high_calorie_density: 1.3,
        electrolytes: 1.4,
        precious_metal: 0.01,
        numismatic_bullion: 0.01,
        service_medical_trauma: 1.75,
        service_obstetrics: 1.75,
        service_dental: 1.55,
        service_wash_sanitation: 1.65,
        service_security_tactical: 1.6,
        service_comms_rf: 1.3,
        service_power_electronics: 1.25,
        service_shelter_construction: 1.25,
        service_mechanical_metallurgy: 1.15,
        service_agrarian_vet: 1.1,
        service_it_cybernetics: 1.1,
        service_instruction_pedagogy: 1.05
      })
    }),
    economic_reconstruction: Object.freeze({
      id: 'economic_reconstruction',
      category_multipliers: Object.freeze({
        cat_store_of_value: MATH_CONSTANTS.RECONSTRUCTION_STORE_OF_VALUE_MULT,
        cat_tools_energy_comms: 1.5,
        cat_essential_services: 1.45,
        cat_spices_morale: 1.35,
        cat_staple_foods: 1.15,
        cat_pharma_essential: 1.2,
        cat_trauma_hygiene: 1.1,
        cat_water_fire_shelter: 1.1,
        cat_critical_nutrition: 1.1
      }),
      tag_multipliers: Object.freeze({
        precious_metal: 1.0,
        store_of_value: 1.0,
        hand_tool_durable: 1.5,
        mechanical_fastener: 1.4,
        cordage_structural: 1.35,
        power_storage_rechargeable: 1.45,
        solar_charging: 1.5,
        radio_communications: 1.4,
        food_preservation: 1.45,
        agricultural_seed: 1.6,
        morale_stimulant: 1.3,
        service_power_electronics: 1.6,
        service_it_cybernetics: 1.6,
        service_instruction_pedagogy: 1.55,
        service_mechanical_metallurgy: 1.55,
        service_agrarian_vet: 1.6,
        service_shelter_construction: 1.5,
        service_comms_rf: 1.45,
        service_wash_sanitation: 1.35,
        service_obstetrics: 1.3,
        service_medical_trauma: 1.25,
        service_dental: 1.25,
        service_security_tactical: 1.1
      })
    })
  });

  /**
   * Internal state registries for items, custom scenarios, and localization dictionaries.
   */
  var internalItemsList = [];
  var internalItemsMap = Object.create(null);
  var customScenariosMap = Object.create(null);
  var internalLocalesMap = Object.create(null);
  var activeLocaleCode = MATH_CONSTANTS.DEFAULT_LOCALE;
  var activeCrisisPhaseId = MATH_CONSTANTS.DEFAULT_CRISIS_PHASE;

  /**
   * Clamps a numeric value strictly between a minimum and maximum boundary.
   *
   * @param {number} value - Input numeric value to constrain.
   * @param {number} min - Lower boundary.
   * @param {number} max - Upper boundary.
   * @returns {number} Clamped numeric value within `[min, max]`.
   * @example
   * const clamped = BarterEngine.clamp(2.85, 0.5, 2.5); // Returns 2.5
   */
  function clamp(value, min, max) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      return min;
    }
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Rounds a floating-point number to a deterministic number of decimal places.
   *
   * @param {number} value - Input floating-point value.
   * @param {number} [decimals=4] - Number of decimal places.
   * @returns {number} Rounded number.
   */
  function roundTo(value, decimals) {
    var places = typeof decimals === 'number' ? decimals : 4;
    var factor = Math.pow(10, places);
    var result = Math.round((value + Number.EPSILON) * factor) / factor;
    return result === 0 ? 0 : result;
  }

  /**
   * Synchronizes items and locales attached to `window.BarterCore` if loaded via `<script>` tags,
   * or automatically loads canonical dataset and locale packs in CommonJS environments if not yet populated.
   */
  function syncGlobalNamespaces() {
    if (typeof root !== 'undefined' && root.BarterCore) {
      if (Array.isArray(root.BarterCore.ItemsCore) && internalItemsList.length === 0) {
        registerCustomItems(root.BarterCore.ItemsCore, { mode: 'merge', strict: false });
      }

      if (root.BarterCore.Locales && typeof root.BarterCore.Locales === 'object') {
        var codes = Object.keys(root.BarterCore.Locales);
        for (var i = 0; i < codes.length; i++) {
          var code = codes[i];
          if (!internalLocalesMap[code] && root.BarterCore.Locales[code]) {
            internalLocalesMap[code] = root.BarterCore.Locales[code];
          }
        }
      }
    }

    if (typeof require === 'function') {
      if (internalItemsList.length === 0) {
        try {
          var cjsItems = require('../data/items_core.js');
          if (Array.isArray(cjsItems) && cjsItems.length > 0) {
            registerCustomItems(cjsItems, { mode: 'merge', strict: false });
          }
        } catch (_eItems) {
          // Ignore if running in an isolated bundle without ../data/items_core.js
        }
      }

      var defaultLocaleFiles = ['en-US', 'pt-BR', 'es-ES', 'fr-FR', 'ru-RU', 'sw-KE', 'ar-SA', 'zh-Hans'];
      for (var l = 0; l < defaultLocaleFiles.length; l++) {
        var locCode = defaultLocaleFiles[l];
        if (!internalLocalesMap[locCode]) {
          try {
            var cjsLoc = require('../locales/' + locCode + '.js');
            if (cjsLoc && typeof cjsLoc === 'object') {
              internalLocalesMap[locCode] = cjsLoc;
            }
          } catch (_eLoc) {
            // Ignore if locale file is not present
          }
        }
      }
    }
  }

  /**
   * Extracts nutrition attributes from either `item.nutrition` or flat item properties.
   *
   * @param {Object} item - Standardized item object.
   * @returns {Object} Nutrition properties object.
   */
  function getNutritionData(item) {
    if (item && item.nutrition && typeof item.nutrition === 'object') {
      return item.nutrition;
    }
    return item || {};
  }

  /**
   * Calculates the detailed Nutritional Index (IN) breakdown of an item.
   *
   * Mathematical Formula:
   * - For non-foods (`is_food === false`): `IN = 1.0`
   * - For foods (`is_food === true`):
   *   `MacroFactor = (PctKcal_Protein * 1.5) + (PctKcal_Fat * 1.0) - (PctKcal_AddedSugar * 1.2)`
   *   `MicroFactor = (+0.3 if high_vit_c) + (+0.2 if high_sodium_potassium) + (+0.2 if high_calcium_iron)`
   *   `IN = Clamp(1.0 + MacroFactor + MicroFactor, 0.5, 2.5)`
   *
   * @param {Object} item - Standardized item definition object.
   * @returns {{
   *   nutritional_index: number,
   *   macro_factor: number,
   *   micro_factor: number,
   *   unclamped_value: number,
   *   is_food: boolean
   * }} Detailed Nutritional Index computation report.
   * @example
   * const item = BarterEngine.getItemById('rice_white_polished_raw_1000g');
   * const inReport = BarterEngine.calculateNutritionalIndexDetailed(item);
   * console.log(inReport.nutritional_index); // 1.132
   */
  function calculateNutritionalIndexDetailed(item) {
    if (!item || typeof item !== 'object') {
      throw new Error('calculateNutritionalIndex requires a valid item object.');
    }

    if (!item.is_food) {
      return {
        nutritional_index: MATH_CONSTANTS.IN_BASELINE,
        macro_factor: 0.0,
        micro_factor: 0.0,
        unclamped_value: MATH_CONSTANTS.IN_BASELINE,
        is_food: false
      };
    }

    var nutr = getNutritionData(item);
    var pctProtein = clamp(Number(nutr.pct_kcal_protein || 0), 0.0, 1.0);
    var pctFat = clamp(Number(nutr.pct_kcal_fat || 0), 0.0, 1.0);
    var pctAddedSugar = clamp(Number(nutr.pct_kcal_added_sugar || 0), 0.0, 1.0);

    var macroFactor =
      pctProtein * MATH_CONSTANTS.MACRO_PROTEIN_WEIGHT +
      pctFat * MATH_CONSTANTS.MACRO_FAT_WEIGHT -
      pctAddedSugar * MATH_CONSTANTS.MACRO_ADDED_SUGAR_PENALTY;

    var microFactor =
      (nutr.high_vit_c === true ? MATH_CONSTANTS.MICRO_VIT_C_BONUS : 0.0) +
      (nutr.high_sodium_potassium === true ? MATH_CONSTANTS.MICRO_SODIUM_POTASSIUM_BONUS : 0.0) +
      (nutr.high_calcium_iron === true ? MATH_CONSTANTS.MICRO_CALCIUM_IRON_BONUS : 0.0);

    var unclamped = MATH_CONSTANTS.IN_BASELINE + macroFactor + microFactor;
    var clampedIN = clamp(unclamped, MATH_CONSTANTS.IN_MIN_CLAMP, MATH_CONSTANTS.IN_MAX_CLAMP);

    return {
      nutritional_index: roundTo(clampedIN, 4),
      macro_factor: roundTo(macroFactor, 4),
      micro_factor: roundTo(microFactor, 4),
      unclamped_value: roundTo(unclamped, 4),
      is_food: true
    };
  }

  /**
   * Returns the numeric Nutritional Index (IN) clamped strictly to the range `[0.5, 2.5]`.
   *
   * @param {Object} item - Standardized item definition object.
   * @returns {number} Clamped Nutritional Index (`IN`).
   * @example
   * const inScore = BarterEngine.calculateNutritionalIndex(item);
   */
  function calculateNutritionalIndex(item) {
    return calculateNutritionalIndexDetailed(item).nutritional_index;
  }

  /**
   * Resolves the effective lifecycle units (V), accounting for real-time depreciation
   * if `current_lifecycle_remaining` or `remainingDays` is provided in options or on the item itself.
   *
   * @param {Object} item - Item object.
   * @param {Object} [options] - Optional lifecycle override parameters.
   * @returns {number} Effective remaining shelf life in days.
   */
  function resolveEffectiveLifecycle(item, options) {
    if (options && typeof options === 'object') {
      if (options.current_lifecycle_remaining !== undefined && options.current_lifecycle_remaining !== null) {
        return Math.max(0, Number(options.current_lifecycle_remaining));
      }
      if (options.remainingDays !== undefined && options.remainingDays !== null) {
        return Math.max(0, Number(options.remainingDays));
      }
    }
    if (item.current_lifecycle_remaining !== undefined && item.current_lifecycle_remaining !== null) {
      return Math.max(0, Number(item.current_lifecycle_remaining));
    }
    return Math.max(0, Number(item.lifecycle_units || 0));
  }

  /**
   * Calculates the official Base Score (`ScoreBase`) of an item.
   *
   * Mathematical Formula:
   * `ScoreBase = ( (E * IN) / (P + Vol + 0.1) ) * Math.log10(V + 1) * CP * FP * Frag`
   *
   * Where:
   * - `E` = `energy_or_utility_base` (kcal for foods or Equivalent Energy Base `[500, 50000]` for non-foods)
   * - `IN` = Nutritional Index (`calculateNutritionalIndex(item)`)
   * - `P` = `weight_kg`
   * - `Vol` = `volume_liters`
   * - `V` = `lifecycle_units` (or `current_lifecycle_remaining` for real-time depreciation)
   * - `CP` = `cost_of_prep` `[0.5, 1.0]`
   * - `FP` = `psychological_factor` `[1.0, 2.5]`
   * - `Frag` = `fragility_index` `[0.7, 1.2]`
   *
   * @param {Object} item - Standardized item definition object.
   * @param {Object} [options] - Optional overrides (e.g. `{ current_lifecycle_remaining: 365 }`).
   * @returns {number} Deterministic `ScoreBase` rounded to 4 decimal places.
   * @example
   * const item = BarterEngine.getItemById('rice_white_polished_raw_1000g');
   * const baseScore = BarterEngine.calculateBaseScore(item, { current_lifecycle_remaining: 900 });
   */
  function calculateBaseScore(item, options) {
    if (!item || typeof item !== 'object') {
      throw new Error('calculateBaseScore requires a valid item object.');
    }

    var E = Number(item.energy_or_utility_base);
    var P = Number(item.weight_kg);
    var Vol = Number(item.volume_liters);
    var V = resolveEffectiveLifecycle(item, options);
    var CP = Number(item.cost_of_prep);
    var FP = Number(item.psychological_factor);
    var Frag = Number(item.fragility_index);

    if (E <= 0 || P <= 0 || Vol < 0 || V <= 0) {
      return 0;
    }

    var IN = calculateNutritionalIndex(item);
    var densityTerm = (E * IN) / (P + Vol + MATH_CONSTANTS.GRAVIMETRIC_VOLUMETRIC_EPSILON);
    var longevityTerm = Math.log10(V + 1);
    var rawBaseScore = densityTerm * longevityTerm * CP * FP * Frag;

    return roundTo(rawBaseScore, 4);
  }

  /**
   * Registers or updates a custom crisis scenario for External Context Modifier (MEC) calculations.
   *
   * @param {string} scenarioId - Semantic identifier for the scenario (e.g., `'grid_down_winter'`).
   * @param {{
   *   category_multipliers?: Object<string, number>,
   *   tag_multipliers?: Object<string, number>
   * }} scenarioConfig - Multipliers by category and functional tag.
   * @returns {Object} The registered scenario configuration object.
   * @example
   * BarterEngine.registerContextScenario('extreme_drought', {
   *   category_multipliers: { cat_water_fire_shelter: 2.5 },
   *   tag_multipliers: { hydration: 3.0, water_purification: 2.8 }
   * });
   */
  function registerContextScenario(scenarioId, scenarioConfig) {
    if (typeof scenarioId !== 'string' || !scenarioId.trim()) {
      throw new Error('registerContextScenario requires a non-empty string scenarioId.');
    }
    var cleanId = scenarioId.trim();
    var config = scenarioConfig && typeof scenarioConfig === 'object' ? scenarioConfig : {};

    customScenariosMap[cleanId] = {
      id: cleanId,
      category_multipliers: Object.assign({}, config.category_multipliers || {}),
      tag_multipliers: Object.assign({}, config.tag_multipliers || {})
    };

    return customScenariosMap[cleanId];
  }

  /**
   * Sets the active crisis phase (scenario) used by default when evaluating items or trades.
   *
   * Built-in crisis phases:
   * - `'acute_collapse'` (`cat_store_of_value` penalized at `0.01x`)
   * - `'economic_reconstruction'` (`cat_store_of_value` appreciated at `5.0x`)
   * - `'baseline'` (`1.0x` neutral multipliers)
   *
   * @param {string} phaseId - Crisis scenario identifier (`'acute_collapse'`, `'economic_reconstruction'`, `'baseline'`, or custom registered ID).
   * @returns {string} The active crisis phase identifier.
   * @example
   * BarterEngine.setCrisisPhase('economic_reconstruction');
   */
  function setCrisisPhase(phaseId) {
    if (typeof phaseId === 'string' && phaseId.trim() !== '') {
      activeCrisisPhaseId = phaseId.trim();
    }
    return activeCrisisPhaseId;
  }

  /**
   * Gets the currently active crisis phase identifier.
   *
   * @returns {string} Active crisis phase ID (e.g., `'acute_collapse'`).
   * @example
   * const phase = BarterEngine.getCrisisPhase(); // 'acute_collapse'
   */
  function getCrisisPhase() {
    return activeCrisisPhaseId;
  }

  /**
   * Calculates the External Context Modifier (MEC) breakdown for an item given a crisis phase and/or custom modifiers.
   *
   * Specification Rules:
   * - In `acute_collapse`, `cat_store_of_value` is strictly multiplied by `0.01x`.
   * - In `economic_reconstruction`, `cat_store_of_value` is strictly multiplied by `5.0x`.
   * - Functional `tags` on the item receive cumulative or custom multipliers defined by the active scenario.
   *
   * @param {Object} item - Standardized item definition object.
   * @param {string} [scenarioId] - Crisis phase ID (`'acute_collapse'`, `'economic_reconstruction'`, `'baseline'`, or custom).
   * @param {Object} [customModifiers] - Optional runtime overrides `{ category_multipliers, tag_multipliers, direct_multiplier }` or flat `{ tag_name: multiplier }`.
   * @returns {{
   *   mec: number,
   *   scenario_id: string,
   *   category_multiplier: number,
   *   tag_multiplier: number,
   *   applied_tags: Array<{ tag: string, multiplier: number }>
   * }} Detailed External Context Modifier report.
   */
  function calculateContextModifierDetailed(item, scenarioId, customModifiers) {
    if (!item || typeof item !== 'object') {
      throw new Error('calculateContextModifier requires a valid item object.');
    }

    var activeScenarioId =
      typeof scenarioId === 'string' && scenarioId.trim() !== '' ? scenarioId.trim() : 'baseline';
    var baseScenario =
      customScenariosMap[activeScenarioId] || DEFAULT_CONTEXT_SCENARIOS[activeScenarioId] || null;

    var categoryMult = 1.0;
    var tagMult = 1.0;
    var appliedTags = [];

    // 1. Apply scenario category multiplier
    if (baseScenario && baseScenario.category_multipliers) {
      if (typeof baseScenario.category_multipliers[item.category] === 'number') {
        categoryMult = baseScenario.category_multipliers[item.category];
      }
    }

    // Enforce immutable store-of-value rule on core scenarios
    if (item.category === MATH_CONSTANTS.STORE_OF_VALUE_CATEGORY) {
      if (activeScenarioId === 'acute_collapse') {
        categoryMult = MATH_CONSTANTS.ACUTE_COLLAPSE_STORE_OF_VALUE_MULT;
      } else if (activeScenarioId === 'economic_reconstruction') {
        categoryMult = MATH_CONSTANTS.RECONSTRUCTION_STORE_OF_VALUE_MULT;
      }
    }

    // 2. Apply runtime custom category multiplier override if provided
    if (
      customModifiers &&
      customModifiers.category_multipliers &&
      typeof customModifiers.category_multipliers[item.category] === 'number'
    ) {
      categoryMult = customModifiers.category_multipliers[item.category];
    }

    // 3. Apply tag multipliers (avoiding double-penalizing store_of_value in acute_collapse if already 0.01x)
    var mergedTagMap = Object.assign(
      {},
      baseScenario && baseScenario.tag_multipliers ? baseScenario.tag_multipliers : {},
      customModifiers && customModifiers.tag_multipliers ? customModifiers.tag_multipliers : {}
    );

    if (
      customModifiers &&
      typeof customModifiers === 'object' &&
      !customModifiers.tag_multipliers &&
      !customModifiers.category_multipliers &&
      !customModifiers.direct_multiplier
    ) {
      // Allow flat map of `{ tag_name: multiplier }` in customModifiers for convenience
      var flatKeys = Object.keys(customModifiers);
      for (var k = 0; k < flatKeys.length; k++) {
        var key = flatKeys[k];
        if (typeof customModifiers[key] === 'number') {
          mergedTagMap[key] = customModifiers[key];
        }
      }
    }

    if (Array.isArray(item.tags)) {
      for (var i = 0; i < item.tags.length; i++) {
        var tag = item.tags[i];
        if (typeof mergedTagMap[tag] === 'number') {
          // If item is already in cat_store_of_value during acute_collapse (0.01x), skip redundant 0.01x tag
          if (
            item.category === MATH_CONSTANTS.STORE_OF_VALUE_CATEGORY &&
            activeScenarioId === 'acute_collapse' &&
            mergedTagMap[tag] === MATH_CONSTANTS.ACUTE_COLLAPSE_STORE_OF_VALUE_MULT
          ) {
            continue;
          }
          tagMult *= mergedTagMap[tag];
          appliedTags.push({ tag: tag, multiplier: mergedTagMap[tag] });
        }
      }
    }

    var directMult =
      customModifiers && typeof customModifiers.direct_multiplier === 'number'
        ? customModifiers.direct_multiplier
        : 1.0;

    var finalMec = roundTo(categoryMult * tagMult * directMult, 4);

    return {
      mec: finalMec,
      scenario_id: activeScenarioId,
      category_multiplier: roundTo(categoryMult, 4),
      tag_multiplier: roundTo(tagMult, 4),
      applied_tags: appliedTags
    };
  }

  /**
   * Returns the numeric External Context Modifier (MEC) for an item.
   *
   * @param {Object} item - Standardized item definition object.
   * @param {string} [scenarioId] - Crisis phase ID.
   * @param {Object} [customModifiers] - Optional custom tag/category multipliers.
   * @returns {number} Computed External Context Modifier (`MEC`).
   */
  function calculateContextModifier(item, scenarioId, customModifiers) {
    return calculateContextModifierDetailed(item, scenarioId, customModifiers).mec;
  }

  /**
   * Computes the complete valuation breakdown (`IN`, `ScoreBase`, `MEC`, `FinalScore`, and real-time shelf-life depreciation)
   * for any standardized item or registered semantic ID.
   *
   * @param {Object|string} itemOrId - Standardized item object or semantic `id` string registered in the engine.
   * @param {Object} [options] - Valuation options.
   * @param {number} [options.current_lifecycle_remaining] - Real-time remaining shelf life in days (replaces nominal `lifecycle_units`).
   * @param {number} [options.remainingDays] - Alias for `current_lifecycle_remaining` in days.
   * @param {string} [options.scenario] - Crisis phase ID (`'acute_collapse'`, `'economic_reconstruction'`, `'baseline'`).
   * @param {Object} [options.contextModifiers] - Custom tag or category multiplier overrides (e.g. `{ antibiotic_systemic: 2.5, hydration: 2.0 }`).
   * @returns {{
   *   item_id: string,
   *   category: string,
   *   nutritional_index: number,
   *   base_score: number,
   *   nominal_base_score: number,
   *   context_modifier: number,
   *   final_score: number,
   *   lifecycle_nominal: number,
   *   lifecycle_effective: number,
   *   depreciation_pct: number,
   *   is_expired: boolean,
   *   scenario_id: string
   * }} Complete mathematical valuation object.
   * @example
   * const evaluation = BarterEngine.evaluateItem('amoxicillin_500mg_capsule', {
   *   scenario: 'acute_collapse',
   *   current_lifecycle_remaining: 730,
   *   contextModifiers: { antibiotic_systemic: 2.0 }
   * });
   * console.log(evaluation.final_score);
   */
  function evaluateItem(itemOrId, options) {
    var item = resolveItemReference(itemOrId);
    var opts = options && typeof options === 'object' ? options : {};

    var inReport = calculateNutritionalIndexDetailed(item);
    var nominalScoreBase = calculateBaseScore(item, {
      current_lifecycle_remaining: item.lifecycle_units
    });
    var effectiveLifecycle = resolveEffectiveLifecycle(item, opts);
    var effectiveScoreBase = calculateBaseScore(item, {
      current_lifecycle_remaining: effectiveLifecycle
    });

    var mecReport = calculateContextModifierDetailed(item, opts.scenario, opts.contextModifiers);
    var finalScore = roundTo(effectiveScoreBase * mecReport.mec, 4);

    var depreciationPct =
      nominalScoreBase > 0
        ? roundTo(Math.max(0, ((nominalScoreBase - effectiveScoreBase) / nominalScoreBase) * 100), 2)
        : 100;

    return {
      item_id: item.id,
      category: item.category,
      nutritional_index: inReport.nutritional_index,
      base_score: effectiveScoreBase,
      nominal_base_score: nominalScoreBase,
      context_modifier: mecReport.mec,
      final_score: finalScore,
      lifecycle_nominal: item.lifecycle_units,
      lifecycle_effective: effectiveLifecycle,
      depreciation_pct: depreciationPct,
      is_expired: effectiveLifecycle <= 0,
      scenario_id: mecReport.scenario_id
    };
  }

  /**
   * Resolves an item object from either a direct object reference or a registered semantic slug.
   *
   * @param {Object|string} itemOrId - Item object or semantic ID string.
   * @returns {Object} Resolved item object.
   */
  function resolveItemReference(itemOrId) {
    syncGlobalNamespaces();

    if (itemOrId && typeof itemOrId === 'object') {
      return itemOrId;
    }
    if (typeof itemOrId === 'string') {
      var found = internalItemsMap[itemOrId.trim()];
      if (found) {
        return found;
      }
      throw new Error('Item with semantic ID "' + itemOrId + '" is not registered in BarterEngine.');
    }
    throw new Error('Invalid item reference: provide a valid item object or semantic ID string.');
  }

  /**
   * Calculates a bilateral barter trade between an offered item and a requested item,
   * applying real-time shelf-life depreciation (`offerRemainingDays` / `offer_lifecycle_remaining`),
   * External Context Modifiers (`contextModifiers`), integer rounding on indivisible items
   * (`is_divisible: false`), and returning both camelCase SDK properties (`exchangeRate`,
   * `exactUnitsPossible`, `tradeImbalanceWarning`) and detailed `snake_case` telemetry.
   *
   * Supports two invocation signatures:
   * 1. Positional: `calculateTrade(offerItemOrId, offerQuantity, requestItemOrId, options)`
   * 2. Single Config Object: `calculateTrade({ offerItemId, offerQuantity, requestItemId, offerRemainingDays, requestRemainingDays, scenario, contextModifiers })`
   *
   * @param {Object|string} offerItemOrId - Offered item object, semantic ID string, or full trade parameter object.
   * @param {number} [offerQuantity=1] - Quantity of offered atomic units (`> 0`).
   * @param {Object|string} [requestItemOrId] - Requested item object or semantic ID string.
   * @param {Object} [options] - Optional crisis scenario, real-time lifecycle overrides, and context modifiers.
   * @param {string} [options.scenario] - Crisis phase ID (`'acute_collapse'`, `'economic_reconstruction'`, `'baseline'`).
   * @param {number} [options.offerRemainingDays] - Remaining shelf-life in days for the offered item.
   * @param {number} [options.requestRemainingDays] - Remaining shelf-life in days for the requested item.
   * @param {number} [options.offer_lifecycle_remaining] - Alias for `offerRemainingDays`.
   * @param {number} [options.request_lifecycle_remaining] - Alias for `requestRemainingDays`.
   * @param {Object<string, number>} [options.contextModifiers] - Custom tag/category multipliers (e.g., `{ hydration: 2.5, antibiotic_systemic: 2.2 }`).
   * @returns {{
   *   is_executable: boolean,
   *   scenario_id: string,
   *   exchangeRate: number,
   *   exactUnitsPossible: number,
   *   recommendedUnits: number,
   *   tradeImbalanceWarning: string|null,
   *   exchange_rate_1_to_x: number,
   *   offer: Object,
   *   request: Object,
   *   trade_imbalance: Object
   * }} Complete bilateral trade execution and imbalance report.
   * @example
   * const trade = BarterEngine.calculateTrade(
   *   'rice_white_polished_raw_1000g',
   *   2,
   *   'amoxicillin_500mg_capsule',
   *   {
   *     scenario: 'acute_collapse',
   *     offerRemainingDays: 730,
   *     contextModifiers: { antibiotic_systemic: 2.0, hydration: 1.5 }
   *   }
   * );
   * console.log(trade.exchangeRate, trade.exactUnitsPossible, trade.tradeImbalanceWarning);
   */
  function calculateTrade(offerItemOrId, offerQuantity, requestItemOrId, options) {
    var resolvedOfferRef = offerItemOrId;
    var resolvedOfferQty = offerQuantity;
    var resolvedRequestRef = requestItemOrId;
    var opts = options && typeof options === 'object' ? options : {};

    // Support single parameter object signature: calculateTrade({ offerItemId, offerQuantity, requestItemId, ... })
    if (
      offerItemOrId &&
      typeof offerItemOrId === 'object' &&
      (offerItemOrId.offerItemId !== undefined ||
        offerItemOrId.offer_item_id !== undefined ||
        offerItemOrId.offerItem !== undefined) &&
      requestItemOrId === undefined
    ) {
      var cfg = offerItemOrId;
      resolvedOfferRef = cfg.offerItem || cfg.offerItemId || cfg.offer_item_id;
      resolvedOfferQty = cfg.offerQuantity !== undefined ? cfg.offerQuantity : cfg.offer_quantity;
      resolvedRequestRef = cfg.requestItem || cfg.requestItemId || cfg.request_item_id;
      opts = cfg;
    }

    var offerItem = resolveItemReference(resolvedOfferRef);
    var requestItem = resolveItemReference(resolvedRequestRef);

    var qtyOfferInput = Number(resolvedOfferQty);
    if (!Number.isFinite(qtyOfferInput) || qtyOfferInput <= 0) {
      throw new Error('calculateTrade requires a positive numeric offerQuantity (> 0).');
    }

    // Enforce integer offer quantity if the offered item itself is indivisible
    var effectiveOfferQty =
      offerItem.is_divisible === false ? Math.max(1, Math.round(qtyOfferInput)) : qtyOfferInput;

    var offerLifecycleOverride =
      opts.offerRemainingDays !== undefined
        ? opts.offerRemainingDays
        : opts.offer_lifecycle_remaining !== undefined
        ? opts.offer_lifecycle_remaining
        : opts.current_lifecycle_remaining;

    var requestLifecycleOverride =
      opts.requestRemainingDays !== undefined
        ? opts.requestRemainingDays
        : opts.request_lifecycle_remaining !== undefined
        ? opts.request_lifecycle_remaining
        : undefined;

    var scenarioToUse = opts.scenario || opts.crisisPhase || undefined;

    var offerEval = evaluateItem(offerItem, {
      scenario: scenarioToUse,
      contextModifiers: opts.contextModifiers,
      current_lifecycle_remaining: offerLifecycleOverride
    });

    var requestEval = evaluateItem(requestItem, {
      scenario: scenarioToUse,
      contextModifiers: opts.contextModifiers,
      current_lifecycle_remaining: requestLifecycleOverride
    });

    var totalOfferScore = roundTo(offerEval.final_score * effectiveOfferQty, 4);

    if (offerEval.final_score <= 0) {
      var expiredOfferMsg =
        'Offered item "' + offerItem.id + '" has 0 barter value (expired or zero utility).';
      return {
        is_executable: false,
        reason: 'offered_item_expired_or_zero_value',
        scenario_id: offerEval.scenario_id,
        exchangeRate: 0,
        exactUnitsPossible: 0,
        recommendedUnits: 0,
        tradeImbalanceWarning: expiredOfferMsg,
        exchange_rate_1_to_x: 0,
        offer: {
          item_id: offerItem.id,
          quantity: effectiveOfferQty,
          unit_score: 0,
          total_score: 0
        },
        request: {
          item_id: requestItem.id,
          unit_score: requestEval.final_score,
          exact_quantity: 0,
          recommended_quantity: 0
        },
        trade_imbalance: {
          has_imbalance: true,
          imbalance_percentage: -100,
          imbalance_direction: 'deficit',
          value_delta_points: 0,
          severity: 'high',
          message: expiredOfferMsg
        }
      };
    }

    if (requestEval.final_score <= 0) {
      var expiredReqMsg =
        'Requested item "' + requestItem.id + '" has 0 barter value (expired or zero utility).';
      return {
        is_executable: false,
        reason: 'requested_item_expired_or_zero_value',
        scenario_id: requestEval.scenario_id,
        exchangeRate: Infinity,
        exactUnitsPossible: Infinity,
        recommendedUnits: 0,
        tradeImbalanceWarning: expiredReqMsg,
        exchange_rate_1_to_x: Infinity,
        offer: {
          item_id: offerItem.id,
          quantity: effectiveOfferQty,
          unit_score: offerEval.final_score,
          total_score: totalOfferScore
        },
        request: {
          item_id: requestItem.id,
          unit_score: 0,
          exact_quantity: Infinity,
          recommended_quantity: 0
        },
        trade_imbalance: {
          has_imbalance: true,
          imbalance_percentage: 100,
          imbalance_direction: 'surplus',
          value_delta_points: totalOfferScore,
          severity: 'high',
          message: expiredReqMsg
        }
      };
    }

    // Exact mathematical parity: how many units of requestItem equal totalOfferScore
    var exactRequestQty = totalOfferScore / requestEval.final_score;
    var exchangeRateOneToOne = roundTo(offerEval.final_score / requestEval.final_score, 4);

    var recommendedRequestQty;
    var recommendedSubUnits;
    var executedRequestScore;
    var valueDeltaPoints;
    var imbalancePercentage;
    var hasImbalance = false;
    var imbalanceDirection = 'balanced';
    var severity = 'none';
    var imbalanceMessage = 'Trade is mathematically balanced with no indivisibility loss.';

    if (requestItem.is_divisible === false) {
      // Confirmed Rule: Round to nearest integer unit (minimum 1) and report percentage of loss/surplus
      recommendedRequestQty = Math.max(1, Math.round(exactRequestQty));
      recommendedSubUnits = recommendedRequestQty * Number(requestItem.sub_units || 1);
      executedRequestScore = roundTo(recommendedRequestQty * requestEval.final_score, 4);
      valueDeltaPoints = roundTo(executedRequestScore - totalOfferScore, 4);
      imbalancePercentage = roundTo(((executedRequestScore - totalOfferScore) / totalOfferScore) * 100, 2);

      if (Math.abs(imbalancePercentage) > MATH_CONSTANTS.IMBALANCE_TOLERANCE_PCT) {
        hasImbalance = true;
        imbalanceDirection = imbalancePercentage > 0 ? 'surplus' : 'deficit';
        var absPct = Math.abs(imbalancePercentage);
        severity = absPct >= 25 ? 'high' : absPct >= 10 ? 'moderate' : 'low';

        var targetLocale =
          typeof opts.locale === 'string' && opts.locale.trim() !== ''
            ? opts.locale.trim()
            : activeLocaleCode;

        function fmtLocaleNum(val, decs, locCode) {
          var num = Number(val);
          if (!Number.isFinite(num)) return String(val);
          var useComma = locCode === 'pt-BR' || locCode === 'es-ES' || locCode === 'fr-FR' || locCode === 'ru-RU';
          var tSep = useComma ? '.' : ',';
          var dSep = useComma ? ',' : '.';
          var d = typeof decs === 'number' && decs >= 0 ? decs : 2;
          var sgn = num < 0 ? '-' : '';
          var absFixed = Math.abs(num).toFixed(d);
          var pts = absFixed.split('.');
          var iPart = pts[0].replace(/\B(?=(\d{3})+(?!\d))/g, tSep);
          var fPart = pts.length > 1 ? pts[1] : '';
          return sgn + iPart + (fPart ? dSep + fPart : '');
        }

        var neededOfferUnits =
          offerEval.final_score > 0 ? requestEval.final_score / offerEval.final_score : 0;

        if (imbalancePercentage > 0) {
          imbalanceMessage =
            'Requested item "' +
            requestItem.id +
            '" is indivisible (' +
            fmtLocaleNum(requestEval.final_score, 2, 'en-US') +
            ' pts/un) and is worth more than your offer (' +
            fmtLocaleNum(totalOfferScore, 2, 'en-US') +
            ' pts; it would take ' +
            fmtLocaleNum(neededOfferUnits, 2, 'en-US') +
            ' un of your offered item to cover 1 whole unit). Rounding from ' +
            fmtLocaleNum(exactRequestQty, 3, 'en-US') +
            ' to ' +
            fmtLocaleNum(recommendedRequestQty, 0, 'en-US') +
            ' whole unit(s) creates a +' +
            fmtLocaleNum(absPct, 2, 'en-US') +
            '% value surplus (' +
            fmtLocaleNum(Math.abs(valueDeltaPoints), 2, 'en-US') +
            ' pts above your offer). To receive ' +
            fmtLocaleNum(recommendedRequestQty, 0, 'en-US') +
            ' un now, YOU owe ' +
            fmtLocaleNum(Math.abs(valueDeltaPoints), 2, 'en-US') +
            ' pts of change to the counterparty.';

          if (opts.localizeWarnings !== false) {
            var tplSurplus = translate('sim_msg_surplus_indivisible', 'name', targetLocale);
            if (tplSurplus && tplSurplus !== 'sim_msg_surplus_indivisible') {
              imbalanceMessage = tplSurplus
                .replace(/\{item\}/g, translate(requestItem.id, 'name', targetLocale))
                .replace(/\{req_unit_pts\}/g, fmtLocaleNum(requestEval.final_score, 2, targetLocale))
                .replace(/\{req_total_pts\}/g, fmtLocaleNum(executedRequestScore, 2, targetLocale))
                .replace(/\{offer_pts\}/g, fmtLocaleNum(totalOfferScore, 2, targetLocale))
                .replace(/\{needed_offer\}/g, fmtLocaleNum(neededOfferUnits, 2, targetLocale))
                .replace(/\{exact\}/g, fmtLocaleNum(exactRequestQty, 3, targetLocale))
                .replace(/\{rec\}/g, fmtLocaleNum(recommendedRequestQty, 0, targetLocale))
                .replace(/\{pct\}/g, fmtLocaleNum(absPct, 2, targetLocale))
                .replace(/\{delta\}/g, fmtLocaleNum(Math.abs(valueDeltaPoints), 2, targetLocale));
            }
          }
        } else {
          imbalanceMessage =
            'Requested item "' +
            requestItem.id +
            '" is indivisible (' +
            fmtLocaleNum(requestEval.final_score, 2, 'en-US') +
            ' pts/un). Your offer (' +
            fmtLocaleNum(totalOfferScore, 2, 'en-US') +
            ' pts) is worth more than ' +
            fmtLocaleNum(recommendedRequestQty, 0, 'en-US') +
            ' whole unit(s) received (' +
            fmtLocaleNum(executedRequestScore, 2, 'en-US') +
            ' pts). Rounding from ' +
            fmtLocaleNum(exactRequestQty, 3, 'en-US') +
            ' to ' +
            fmtLocaleNum(recommendedRequestQty, 0, 'en-US') +
            ' whole unit(s) results in a -' +
            fmtLocaleNum(absPct, 2, 'en-US') +
            '% value deficit (' +
            fmtLocaleNum(Math.abs(valueDeltaPoints), 2, 'en-US') +
            ' pts of uncompensated change owed to you). THE COUNTERPARTY owes ' +
            fmtLocaleNum(Math.abs(valueDeltaPoints), 2, 'en-US') +
            ' pts of change to you.';

          if (opts.localizeWarnings !== false) {
            var tplDeficit = translate('sim_msg_deficit_indivisible', 'name', targetLocale);
            if (tplDeficit && tplDeficit !== 'sim_msg_deficit_indivisible') {
              imbalanceMessage = tplDeficit
                .replace(/\{item\}/g, translate(requestItem.id, 'name', targetLocale))
                .replace(/\{req_unit_pts\}/g, fmtLocaleNum(requestEval.final_score, 2, targetLocale))
                .replace(/\{req_total_pts\}/g, fmtLocaleNum(executedRequestScore, 2, targetLocale))
                .replace(/\{offer_pts\}/g, fmtLocaleNum(totalOfferScore, 2, targetLocale))
                .replace(/\{needed_offer\}/g, fmtLocaleNum(neededOfferUnits, 2, targetLocale))
                .replace(/\{exact\}/g, fmtLocaleNum(exactRequestQty, 3, targetLocale))
                .replace(/\{rec\}/g, fmtLocaleNum(recommendedRequestQty, 0, targetLocale))
                .replace(/\{pct\}/g, fmtLocaleNum(absPct, 2, targetLocale))
                .replace(/\{delta\}/g, fmtLocaleNum(Math.abs(valueDeltaPoints), 2, targetLocale));
            }
          }
        }
      }
    } else {
      // Divisible item: can be portioned down to its atomic sub_units (e.g. grams, ml, tablets)
      var totalSubUnitsExact = exactRequestQty * Number(requestItem.sub_units || 1);
      recommendedSubUnits = Math.max(1, Math.round(totalSubUnitsExact));
      recommendedRequestQty = roundTo(recommendedSubUnits / Number(requestItem.sub_units || 1), 4);
      executedRequestScore = roundTo(recommendedRequestQty * requestEval.final_score, 4);
      valueDeltaPoints = roundTo(executedRequestScore - totalOfferScore, 4);
      imbalancePercentage = roundTo(((executedRequestScore - totalOfferScore) / totalOfferScore) * 100, 2);

      if (Math.abs(imbalancePercentage) > 1.0) {
        hasImbalance = true;
        imbalanceDirection = imbalancePercentage > 0 ? 'surplus' : 'deficit';
        severity = Math.abs(imbalancePercentage) >= 15 ? 'moderate' : 'low';
        imbalanceMessage =
          'Sub-unit rounding to ' +
          recommendedSubUnits +
          ' ' +
          requestItem.unit_measure +
          ' introduces a ' +
          (imbalancePercentage > 0 ? '+' : '') +
          imbalancePercentage.toFixed(2) +
          '% rounding delta.';
      }
    }

    var exactRounded = roundTo(exactRequestQty, 4);

    return {
      is_executable: true,
      scenario_id: offerEval.scenario_id,
      exchangeRate: exchangeRateOneToOne,
      exactUnitsPossible: exactRounded,
      recommendedUnits: recommendedRequestQty,
      tradeImbalanceWarning: hasImbalance ? imbalanceMessage : null,
      exchange_rate_1_to_x: exchangeRateOneToOne,
      offer: {
        item_id: offerItem.id,
        is_divisible: offerItem.is_divisible,
        requested_input_quantity: qtyOfferInput,
        quantity: effectiveOfferQty,
        sub_units_total: roundTo(effectiveOfferQty * Number(offerItem.sub_units || 1), 2),
        unit_measure: offerItem.unit_measure,
        unit_score: offerEval.final_score,
        total_score: totalOfferScore,
        lifecycle_effective: offerEval.lifecycle_effective,
        depreciation_pct: offerEval.depreciation_pct
      },
      request: {
        item_id: requestItem.id,
        is_divisible: requestItem.is_divisible,
        exact_quantity: exactRounded,
        recommended_quantity: recommendedRequestQty,
        recommended_sub_units: recommendedSubUnits,
        unit_measure: requestItem.unit_measure,
        unit_score: requestEval.final_score,
        executed_total_score: executedRequestScore,
        lifecycle_effective: requestEval.lifecycle_effective,
        depreciation_pct: requestEval.depreciation_pct
      },
      trade_imbalance: {
        has_imbalance: hasImbalance,
        is_target_indivisible: requestItem.is_divisible === false,
        exact_quantity: exactRounded,
        rounded_quantity: recommendedRequestQty,
        value_delta_points: valueDeltaPoints,
        imbalance_percentage: imbalancePercentage,
        imbalance_direction: imbalanceDirection,
        severity: severity,
        message: imbalanceMessage
      }
    };
  }

  /**
   * Canonical high-liquidity fractional reference items for immediate change settlement.
   * @type {ReadonlyArray<string>}
   */
  var PRIMARY_CHANGE_ITEM_IDS = Object.freeze([
    'salt_sodium_chloride_iodized_1000g',
    'sugar_sucrose_crystal_1000g',
    'rice_white_polished_raw_1000g',
    'water_potable_sealed_1000ml',
    'paracetamol_500mg_tablet',
    'water_purification_nadcc_tablet_unit'
  ]);

  /**
   * Calculates deterministic physical change options across the catalog to settle an uncompensated
   * points delta (`value_delta_points`), returning both the top high-liquidity fractional currencies
   * (`primary_options`) and all physically viable catalog items (`all_viable_options`):
   * - Divisible items (`is_divisible: true`): portioned down to exact `sub_units` (`g`, `ml`, `un`).
   * - Indivisible small-unit items (`is_divisible: false`): included only when at least 1 whole unit
   *   fits within the points delta (`unit_score <= absDelta * 1.15`).
   *
   * @param {number} deltaPoints - Points difference to settle (`value_delta_points`).
   * @param {Object} [options] - Optional crisis scenario and context modifiers.
   * @param {string} [options.scenario] - Crisis phase ID (`'acute_collapse'`, `'economic_reconstruction'`, `'baseline'`).
   * @param {Object} [options.contextModifiers] - Custom tag/category multiplier overrides.
   * @returns {{
   *   delta_points: number,
   *   primary_options: Array<Object>,
   *   all_viable_options: Array<Object>,
   *   divisible_count: number,
   *   indivisible_unit_count: number
   * }} Calculated change settlement options.
   */
  function calculateChangeOptions(deltaPoints, options) {
    syncGlobalNamespaces();
    var absDelta = Math.abs(Number(deltaPoints) || 0);
    var opts = options && typeof options === 'object' ? options : {};
    var scenarioToUse = opts.scenario || opts.crisisPhase || activeCrisisPhaseId;

    if (absDelta <= 0) {
      return {
        delta_points: 0,
        primary_options: [],
        all_viable_options: [],
        divisible_count: 0,
        indivisible_unit_count: 0
      };
    }

    var allViable = [];
    var primaryMap = Object.create(null);
    var divisibleCount = 0;
    var indivisibleUnitCount = 0;

    for (var i = 0; i < internalItemsList.length; i++) {
      var item = internalItemsList[i];
      if (!item || typeof item.id !== 'string') continue;

      // Exclude intangible human labor/services from physical counter-change recommendations unless explicitly requested
      if (item.category === 'cat_essential_services' && opts.includeServicesInChange !== true) {
        continue;
      }

      var evalReport = evaluateItem(item, {
        scenario: scenarioToUse,
        contextModifiers: opts.contextModifiers
      });
      if (!evalReport || evalReport.final_score <= 0) continue;

      var unitScore = evalReport.final_score;
      var subUnitsPerPack = Number(item.sub_units || 1);
      var exactUnits = absDelta / unitScore;
      var isDivisible = Boolean(item.is_divisible);
      var recommendedUnits = 0;
      var recommendedSubUnits = 0;

      if (isDivisible) {
        var exactSubUnits = exactUnits * subUnitsPerPack;
        if (exactSubUnits < 0.5) {
          continue;
        }
        recommendedSubUnits = Math.max(1, Math.round(exactSubUnits));
        recommendedUnits = roundTo(recommendedSubUnits / subUnitsPerPack, 4);
        divisibleCount++;
      } else {
        // Indivisible item is only physically viable as change if at least 1 whole unit fits within the delta
        if (unitScore > absDelta * 1.15) {
          continue;
        }
        recommendedUnits = Math.max(1, Math.round(exactUnits));
        recommendedSubUnits = recommendedUnits * subUnitsPerPack;
        indivisibleUnitCount++;
      }

      var settledScore = isDivisible
        ? roundTo((recommendedSubUnits / subUnitsPerPack) * unitScore, 2)
        : roundTo(recommendedUnits * unitScore, 2);
      var residualPct = roundTo(((settledScore - absDelta) / absDelta) * 100, 2);
      var isPrimary = PRIMARY_CHANGE_ITEM_IDS.indexOf(item.id) !== -1;

      var entry = {
        item_id: item.id,
        category: item.category,
        is_divisible: isDivisible,
        unit_measure: item.unit_measure || 'un',
        sub_units_per_pack: subUnitsPerPack,
        unit_score: unitScore,
        exact_units: roundTo(exactUnits, 4),
        recommended_units: recommendedUnits,
        recommended_sub_units: recommendedSubUnits,
        settled_score: settledScore,
        residual_pct: residualPct,
        is_primary: isPrimary
      };

      allViable.push(entry);
      if (isPrimary) {
        primaryMap[item.id] = entry;
      }
    }

    var primaryList = [];
    for (var p = 0; p < PRIMARY_CHANGE_ITEM_IDS.length; p++) {
      var pid = PRIMARY_CHANGE_ITEM_IDS[p];
      if (primaryMap[pid]) {
        primaryList.push(primaryMap[pid]);
      }
    }

    return {
      delta_points: roundTo(absDelta, 2),
      primary_options: primaryList,
      all_viable_options: allViable,
      divisible_count: divisibleCount,
      indivisible_unit_count: indivisibleUnitCount
    };
  }

  /**
   * Registers or hot-swaps custom items in the engine's in-memory dataset (Data Swapping).
   *
   * @param {Array<Object>} customItems - Array of standardized item objects to register.
   * @param {Object} [options] - Registration configuration options.
   * @param {'merge'|'replace'} [options.mode='merge'] - Use `'merge'` to add/update items or `'replace'` to overwrite the entire dataset.
   * @param {boolean} [options.strict=true] - If `true`, validates every item via `Validator.validateDataset` before registration.
   * @returns {{
   *   success: boolean,
   *   mode: string,
   *   registered_count: number,
   *   total_registry_size: number,
   *   validation_report: Object|null
   * }} Registration summary and schema validation report.
   * @example
   * const result = BarterEngine.registerCustomItems([customItem], { mode: 'merge', strict: true });
   * console.log(result.success, result.registered_count);
   */
  function registerCustomItems(customItems, options) {
    if (!Array.isArray(customItems)) {
      throw new Error('registerCustomItems requires an Array of item objects.');
    }

    var opts = options && typeof options === 'object' ? options : {};
    var mode = opts.mode === 'replace' ? 'replace' : 'merge';
    var strict = opts.strict !== false;

    var validationReport = null;
    if (Validator && typeof Validator.validateDataset === 'function') {
      validationReport = Validator.validateDataset(customItems);
      if (strict && !validationReport.is_valid) {
        return {
          success: false,
          mode: mode,
          registered_count: 0,
          total_registry_size: internalItemsList.length,
          validation_report: validationReport
        };
      }
    }

    if (mode === 'replace') {
      internalItemsList = [];
      internalItemsMap = Object.create(null);
    }

    var registeredCount = 0;
    for (var i = 0; i < customItems.length; i++) {
      var candidate = customItems[i];
      if (!candidate || typeof candidate.id !== 'string' || !candidate.id.trim()) {
        continue;
      }

      if (Validator && typeof Validator.validateItem === 'function') {
        var singleReport = Validator.validateItem(candidate);
        if (strict && !singleReport.is_valid) {
          continue;
        }
      }

      var id = candidate.id.trim();
      var clonedItem = Object.assign({}, candidate, {
        id: id,
        tags: Array.isArray(candidate.tags) ? candidate.tags.slice() : []
      });

      if (internalItemsMap[id]) {
        for (var j = 0; j < internalItemsList.length; j++) {
          if (internalItemsList[j].id === id) {
            internalItemsList[j] = clonedItem;
            break;
          }
        }
      } else {
        internalItemsList.push(clonedItem);
      }

      internalItemsMap[id] = clonedItem;
      registeredCount++;
    }

    return {
      success: true,
      mode: mode,
      registered_count: registeredCount,
      total_registry_size: internalItemsList.length,
      validation_report: validationReport
    };
  }

  /**
   * Registers a localization dictionary under its IETF BCP 47 locale code.
   *
   * @param {string} localeCode - IETF BCP 47 code (e.g., `'en-US'`, `'pt-BR'`, `'es-ES'`, `'fr-FR'`, `'ru-RU'`, `'sw-KE'`, `'ar-SA'`, `'zh-Hans'`).
   * @param {Object} dictionary - Structured translation dictionary (`{ categories, scenarios, ui, items }`).
   * @returns {boolean} `true` if successfully registered.
   * @example
   * BarterEngine.registerLocale('en-US', enUsLocale);
   */
  function registerLocale(localeCode, dictionary) {
    if (typeof localeCode !== 'string' || !localeCode.trim() || !dictionary || typeof dictionary !== 'object') {
      return false;
    }
    var cleanCode = localeCode.trim();
    internalLocalesMap[cleanCode] = dictionary;

    if (typeof root !== 'undefined') {
      root.BarterCore = root.BarterCore || {};
      root.BarterCore.Locales = root.BarterCore.Locales || {};
      root.BarterCore.Locales[cleanCode] = dictionary;
    }
    return true;
  }

  /**
   * Sets the default active locale code for translation lookups.
   *
   * @param {string} localeCode - IETF BCP 47 locale identifier (`'en-US'`, `'pt-BR'`, `'es-ES'`, `'fr-FR'`, `'ru-RU'`, `'sw-KE'`, `'ar-SA'`, `'zh-Hans'`).
   * @returns {string} Active locale code after update.
   * @example
   * BarterEngine.setLocale('pt-BR');
   */
  function setLocale(localeCode) {
    if (typeof localeCode === 'string' && localeCode.trim() !== '') {
      activeLocaleCode = localeCode.trim();
    }
    return activeLocaleCode;
  }

  /**
   * Gets the currently active IETF BCP 47 locale code.
   *
   * @returns {string} Active locale code (defaults to `'en-US'`).
   * @example
   * const currentLocale = BarterEngine.getLocale(); // 'en-US'
   */
  function getLocale() {
    return activeLocaleCode;
  }

  /**
   * Helper to extract a translated string from a single locale dictionary object.
   *
   * @param {Object} dict - Locale dictionary object.
   * @param {string} slug - Semantic ID or UI key.
   * @param {string} field - Target field (`'name'`, `'description'`).
   * @returns {string|null} Translated string or `null` if not found.
   */
  function lookupInDictionary(dict, slug, field) {
    if (!dict || typeof dict !== 'object') {
      return null;
    }

    // 1. Check nested `dict.items[slug]` or `dict.categories[slug]` or `dict.ui[slug]`
    var sections = ['items', 'categories', 'tags', 'scenarios', 'ui'];
    for (var s = 0; s < sections.length; s++) {
      var sectionObj = dict[sections[s]];
      if (sectionObj && typeof sectionObj === 'object' && sectionObj[slug] !== undefined) {
        var target = sectionObj[slug];
        if (typeof target === 'string' && target.trim() !== '') {
          return target;
        }
        if (target && typeof target === 'object' && typeof target[field] === 'string' && target[field].trim() !== '') {
          return target[field];
        }
      }
    }

    // 2. Check direct top-level `dict[slug]`
    if (dict[slug] !== undefined) {
      var directEntry = dict[slug];
      if (typeof directEntry === 'string' && directEntry.trim() !== '') {
        return directEntry;
      }
      if (
        directEntry &&
        typeof directEntry === 'object' &&
        typeof directEntry[field] === 'string' &&
        directEntry[field].trim() !== ''
      ) {
        return directEntry[field];
      }
    }

    return null;
  }

  /**
   * Resolves a human-readable string for any semantic slug using the mandatory fallback chain:
   * `Selected Locale -> en-US -> Technical ID`
   *
   * @param {string} slug - Semantic item ID, category ID, scenario ID, or UI key.
   * @param {string} [field='name'] - Property within the translation entry (`'name'`, `'description'`).
   * @param {string} [localeCode] - Optional locale override; defaults to `activeLocaleCode`.
   * @returns {string} Resolved localized text or the raw technical `slug` as final fallback.
   * @example
   * const title = BarterEngine.translate('rice_white_polished_raw_1000g', 'name', 'pt-BR');
   */
  function translate(slug, field, localeCode) {
    syncGlobalNamespaces();

    if (typeof slug !== 'string' || slug.trim() === '') {
      return '';
    }

    var targetSlug = slug.trim();
    var targetField = typeof field === 'string' && field.trim() !== '' ? field.trim() : 'name';
    var requestedLocale =
      typeof localeCode === 'string' && localeCode.trim() !== '' ? localeCode.trim() : activeLocaleCode;

    // Step 1: Selected Locale
    if (internalLocalesMap[requestedLocale]) {
      var primaryMatch = lookupInDictionary(internalLocalesMap[requestedLocale], targetSlug, targetField);
      if (primaryMatch !== null) {
        return primaryMatch;
      }
    }

    // Step 2: Fallback to 'en-US'
    if (requestedLocale !== MATH_CONSTANTS.DEFAULT_LOCALE && internalLocalesMap[MATH_CONSTANTS.DEFAULT_LOCALE]) {
      var fallbackEnMatch = lookupInDictionary(
        internalLocalesMap[MATH_CONSTANTS.DEFAULT_LOCALE],
        targetSlug,
        targetField
      );
      if (fallbackEnMatch !== null) {
        return fallbackEnMatch;
      }
    }

    // Step 3: Final Fallback to Technical ID
    return targetSlug;
  }

  /**
   * Retrieves a registered item object by its semantic ID.
   *
   * @param {string} itemId - Semantic `snake_case` item identifier.
   * @returns {Object|null} Item object or `null` if not registered.
   * @example
   * const item = BarterEngine.getItemById('water_potable_sealed_1000ml');
   */
  function getItemById(itemId) {
    syncGlobalNamespaces();
    if (typeof itemId !== 'string') {
      return null;
    }
    return internalItemsMap[itemId.trim()] || null;
  }

  /**
   * Returns a shallow copy of all registered items, optionally filtered by category slug.
   *
   * @param {string} [category] - Optional category slug (e.g., `'cat_staple_foods'`).
   * @returns {Array<Object>} List of matching standardized item objects.
   * @example
   * const pharmaItems = BarterEngine.getItems('cat_pharma_essential');
   */
  function getItems(category) {
    syncGlobalNamespaces();
    if (typeof category === 'string' && category.trim() !== '') {
      var cat = category.trim();
      return internalItemsList.filter(function (item) {
        return item.category === cat;
      });
    }
    return internalItemsList.slice();
  }

  /**
   * Returns available crisis scenario IDs (built-in presets + custom registered scenarios).
   *
   * @returns {Array<string>} Array of scenario identifiers.
   * @example
   * const scenarios = BarterEngine.getAvailableScenarios(); // ['acute_collapse', 'economic_reconstruction']
   */
  function getAvailableScenarios() {
    var defaultKeys = Object.keys(DEFAULT_CONTEXT_SCENARIOS);
    var customKeys = Object.keys(customScenariosMap);
    var combined = defaultKeys.slice();
    for (var i = 0; i < customKeys.length; i++) {
      if (combined.indexOf(customKeys[i]) === -1) {
        combined.push(customKeys[i]);
      }
    }
    return combined;
  }

  /**
   * Evaluates the entire registered catalog (or a specific category) across all three official
   * crisis scenarios (`baseline`, `acute_collapse`, `economic_reconstruction`) as well as the
   * active scenario, returning localized names, descriptions, and divisible sub-unit rates (`1 g / 1 ml`).
   *
   * @param {Object} [options] - Optional filter and evaluation parameters.
   * @param {string} [options.category] - Optional category slug to filter items.
   * @param {string} [options.locale] - Locale code override (defaults to active locale).
   * @param {string} [options.scenario] - Active scenario ID override (defaults to active crisis phase).
   * @param {Object} [options.contextModifiers] - Optional custom tag/category multipliers.
   * @returns {Array<Object>} Complete multi-scenario catalog evaluation array for external apps/APIs.
   * @example
   * const catalogSnapshot = BarterEngine.evaluateCatalog({ locale: 'pt-BR', scenario: 'acute_collapse' });
   */
  function evaluateCatalog(options) {
    syncGlobalNamespaces();
    var opts = options && typeof options === 'object' ? options : {};
    var loc =
      typeof opts.locale === 'string' && opts.locale.trim() !== ''
        ? opts.locale.trim()
        : activeLocaleCode;
    var activeScen =
      typeof opts.scenario === 'string' && opts.scenario.trim() !== ''
        ? opts.scenario.trim()
        : typeof opts.crisisPhase === 'string' && opts.crisisPhase.trim() !== ''
        ? opts.crisisPhase.trim()
        : activeCrisisPhaseId;

    var sourceItems = getItems(opts.category);
    var results = [];

    for (var i = 0; i < sourceItems.length; i++) {
      var item = sourceItems[i];
      var evBase = evaluateItem(item, {
        scenario: 'baseline',
        contextModifiers: opts.contextModifiers
      });
      var evAcute = evaluateItem(item, {
        scenario: 'acute_collapse',
        contextModifiers: opts.contextModifiers
      });
      var evRecon = evaluateItem(item, {
        scenario: 'economic_reconstruction',
        contextModifiers: opts.contextModifiers
      });
      var evActive =
        activeScen === 'baseline'
          ? evBase
          : activeScen === 'acute_collapse'
          ? evAcute
          : activeScen === 'economic_reconstruction'
          ? evRecon
          : evaluateItem(item, {
              scenario: activeScen,
              contextModifiers: opts.contextModifiers
            });

      var hasSubRate = Boolean(item.is_divisible && Number(item.sub_units) > 1);
      var subCount = Number(item.sub_units || 1);

      results.push({
        id: item.id,
        category: item.category,
        category_name: translate(item.category, 'name', loc),
        name: translate(item.id, 'name', loc),
        description: translate(item.id, 'description', loc),
        is_food: item.is_food,
        is_divisible: item.is_divisible,
        sub_units: item.sub_units,
        unit_measure: item.unit_measure,
        energy_or_utility_base: item.energy_or_utility_base,
        weight_kg: item.weight_kg,
        volume_liters: item.volume_liters,
        lifecycle_units: item.lifecycle_units,
        cost_of_prep: item.cost_of_prep,
        psychological_factor: item.psychological_factor,
        fragility_index: item.fragility_index,
        nutritional_index: evBase.nutritional_index,
        base_score: evBase.base_score,
        active_scenario: activeScen,
        final_score: evActive.final_score,
        context_modifier: evActive.context_modifier,
        sub_unit_score: hasSubRate ? roundTo(evActive.final_score / subCount, 4) : null,
        scenarios: {
          baseline: {
            final_score: evBase.final_score,
            context_modifier: evBase.context_modifier,
            sub_unit_score: hasSubRate ? roundTo(evBase.final_score / subCount, 4) : null
          },
          acute_collapse: {
            final_score: evAcute.final_score,
            context_modifier: evAcute.context_modifier,
            sub_unit_score: hasSubRate ? roundTo(evAcute.final_score / subCount, 4) : null
          },
          economic_reconstruction: {
            final_score: evRecon.final_score,
            context_modifier: evRecon.context_modifier,
            sub_unit_score: hasSubRate ? roundTo(evRecon.final_score / subCount, 4) : null
          }
        }
      });
    }

    return results;
  }

  /**
   * @class BarterEngine
   * @classdesc
   * Hybrid SDK class and static namespace for the BarterScore Engine.
   * Developers can instantiate isolated engine instances via `new BarterEngine(options)`
   * OR invoke methods directly on `BarterEngine` (e.g., `BarterEngine.calculateTrade(...)`).
   *
   * @param {Object} [options] - Optional initialization configuration.
   * @param {Array<Object>} [options.items] - Initial dataset of standardized items to register.
   * @param {Object<string, Object>} [options.locales] - Map of IETF BCP 47 locale dictionaries (`{ 'en-US': dict }`).
   * @param {string} [options.locale='en-US'] - Initial active locale code (alias: `activeLocale`).
   * @param {string} [options.crisisPhase='acute_collapse'] - Initial crisis scenario phase (`'acute_collapse'`, `'economic_reconstruction'`, `'baseline'`).
   * @example
   * // Instance usage (Node.js / CommonJS / Bundlers):
   * const { BarterEngine } = require('@barterscoreengine/library');
   * const engine = new BarterEngine({
   *   locale: 'en-US',
   *   crisisPhase: 'acute_collapse'
   * });
   */
  function BarterEngine(options) {
    if (!(this instanceof BarterEngine)) {
      return new BarterEngine(options);
    }

    syncGlobalNamespaces();
    var opts = options && typeof options === 'object' ? options : {};

    if (Array.isArray(opts.items) && opts.items.length > 0) {
      registerCustomItems(opts.items, { mode: 'merge', strict: false });
    }

    if (opts.locales && typeof opts.locales === 'object') {
      var localeKeys = Object.keys(opts.locales);
      for (var i = 0; i < localeKeys.length; i++) {
        var code = localeKeys[i];
        registerLocale(code, opts.locales[code]);
      }
    }

    var initialLocale = opts.locale || opts.activeLocale || MATH_CONSTANTS.DEFAULT_LOCALE;
    var initialPhase = opts.crisisPhase || opts.scenario || MATH_CONSTANTS.DEFAULT_CRISIS_PHASE;

    this._locale = typeof initialLocale === 'string' && initialLocale.trim() !== '' ? initialLocale.trim() : MATH_CONSTANTS.DEFAULT_LOCALE;
    this._crisisPhase = typeof initialPhase === 'string' && initialPhase.trim() !== '' ? initialPhase.trim() : MATH_CONSTANTS.DEFAULT_CRISIS_PHASE;
  }

  /**
   * Evaluates a standardized item using the instance's active crisis phase (unless overridden in `options`).
   *
   * @param {Object|string} itemOrId - Standardized item object or semantic ID string.
   * @param {Object} [options] - Optional overrides (`current_lifecycle_remaining`, `scenario`, `contextModifiers`).
   * @returns {Object} Complete valuation breakdown (`nutritional_index`, `base_score`, `context_modifier`, `final_score`).
   * @example
   * const report = engine.evaluateItem('rice_white_polished_raw_1000g', {
   *   current_lifecycle_remaining: 1200
   * });
   */
  BarterEngine.prototype.evaluateItem = function (itemOrId, options) {
    var opts = Object.assign({ scenario: this._crisisPhase }, options || {});
    return evaluateItem(itemOrId, opts);
  };

  /**
   * Simulates a bilateral barter exchange between two items using the instance's active crisis phase and locale.
   *
   * @param {Object|string} offerItemOrId - Offered item object, semantic ID, or trade config object.
   * @param {number} [offerQuantity=1] - Quantity of offered atomic units (`> 0`).
   * @param {Object|string} [requestItemOrId] - Requested item object or semantic ID.
   * @param {Object} [options] - Optional overrides (`offerRemainingDays`, `requestRemainingDays`, `contextModifiers`, `scenario`, `locale`).
   * @returns {Object} Complete trade parity and indivisibility report (`exchangeRate`, `exactUnitsPossible`, `tradeImbalanceWarning`).
   * @example
   * const trade = engine.calculateTrade('rice_white_polished_raw_1000g', 2, 'amoxicillin_500mg_capsule', {
   *   offerRemainingDays: 900,
   *   contextModifiers: { antibiotic_systemic: 2.0 }
   * });
   */
  BarterEngine.prototype.calculateTrade = function (offerItemOrId, offerQuantity, requestItemOrId, options) {
    if (
      offerItemOrId &&
      typeof offerItemOrId === 'object' &&
      (offerItemOrId.offerItemId !== undefined ||
        offerItemOrId.offer_item_id !== undefined ||
        offerItemOrId.offerItem !== undefined) &&
      requestItemOrId === undefined
    ) {
      var mergedObj = Object.assign({ scenario: this._crisisPhase, locale: this._locale }, offerItemOrId);
      return calculateTrade(mergedObj);
    }
    var opts = Object.assign({ scenario: this._crisisPhase, locale: this._locale }, options || {});
    return calculateTrade(offerItemOrId, offerQuantity, requestItemOrId, opts);
  };

  /**
   * Evaluates the entire registered catalog across all three scenarios using the instance's active locale and crisis phase.
   *
   * @param {Object} [options] - Optional filter (`category`, `locale`, `scenario`, `contextModifiers`).
   * @returns {Array<Object>} Multi-scenario catalog evaluation array.
   */
  BarterEngine.prototype.evaluateCatalog = function (options) {
    var opts = Object.assign({ locale: this._locale, scenario: this._crisisPhase }, options || {});
    return evaluateCatalog(opts);
  };

  /**
   * Registers or replaces custom regional items in the runtime catalog (Data Swapping).
   *
   * @param {Array<Object>} customItems - Array of item objects conforming to the BarterScore Schema Contract.
   * @param {Object} [options] - `{ mode: 'merge' | 'replace', strict: boolean }`.
   * @returns {Object} Registration status and validation report.
   * @example
   * engine.registerCustomItems(customRegionalDataset, { mode: 'merge', strict: true });
   */
  BarterEngine.prototype.registerCustomItems = function (customItems, options) {
    return registerCustomItems(customItems, options);
  };

  /**
   * Sets the active IETF BCP 47 locale code on this instance without mutating other instances.
   *
   * @param {string} localeCode - Locale identifier (`'en-US'`, `'pt-BR'`, `'es-ES'`, `'fr-FR'`, `'ru-RU'`, `'sw-KE'`, `'zh-Hans'`).
   * @returns {string} Active locale code for this instance.
   * @example
   * engine.setLocale('en-US');
   */
  BarterEngine.prototype.setLocale = function (localeCode) {
    if (typeof localeCode !== 'string' || localeCode.trim() === '') {
      throw new Error('setLocale requires a non-empty IETF BCP 47 locale identifier string.');
    }
    this._locale = localeCode.trim();
    return this._locale;
  };

  /**
   * Returns the active IETF BCP 47 locale code for the instance.
   *
   * @returns {string} Active locale code.
   */
  BarterEngine.prototype.getLocale = function () {
    return this._locale || getLocale();
  };

  /**
   * Sets the active crisis phase on this instance without mutating other instances.
   *
   * @param {string} phaseId - Crisis scenario identifier (`'acute_collapse'`, `'economic_reconstruction'`, `'baseline'`).
   * @returns {string} Active crisis phase identifier for this instance.
   * @example
   * engine.setCrisisPhase('economic_reconstruction');
   */
  BarterEngine.prototype.setCrisisPhase = function (phaseId) {
    if (typeof phaseId !== 'string' || phaseId.trim() === '') {
      throw new Error('setCrisisPhase requires a non-empty scenario identifier string.');
    }
    this._crisisPhase = phaseId.trim();
    return this._crisisPhase;
  };

  /**
   * Returns the active crisis phase identifier for the instance.
   *
   * @returns {string} Active crisis phase ID.
   */
  BarterEngine.prototype.getCrisisPhase = function () {
    return this._crisisPhase || getCrisisPhase();
  };

  /**
   * Translates a semantic slug using the instance's active locale and mandatory fallback chain
   * (`Selected Locale -> en-US -> Technical ID`).
   *
   * @param {string} slug - Semantic item ID, category ID, or UI key.
   * @param {string} [field='name'] - Field to retrieve (`'name'` or `'description'`).
   * @param {string} [localeCode] - Optional locale override.
   * @returns {string} Localized string.
   */
  BarterEngine.prototype.translate = function (slug, field, localeCode) {
    return translate(slug, field, localeCode || this._locale);
  };

  BarterEngine.prototype.registerLocale = registerLocale;
  BarterEngine.prototype.registerContextScenario = registerContextScenario;
  BarterEngine.prototype.getItemById = getItemById;
  BarterEngine.prototype.getItems = getItems;
  BarterEngine.prototype.getAvailableScenarios = getAvailableScenarios;
  BarterEngine.prototype.calculateNutritionalIndex = calculateNutritionalIndex;
  BarterEngine.prototype.calculateNutritionalIndexDetailed = calculateNutritionalIndexDetailed;
  BarterEngine.prototype.calculateBaseScore = calculateBaseScore;
  BarterEngine.prototype.calculateContextModifier = calculateContextModifier;
  BarterEngine.prototype.calculateContextModifierDetailed = calculateContextModifierDetailed;
  BarterEngine.prototype.calculateChangeOptions = function (deltaPoints, options) {
    var opts = Object.assign({ scenario: this._crisisPhase }, options || {});
    return calculateChangeOptions(deltaPoints, opts);
  };

  // Attach all static properties and methods for direct namespace usage
  BarterEngine.VERSION = '1.1.0';
  BarterEngine.MATH_CONSTANTS = MATH_CONSTANTS;
  BarterEngine.DEFAULT_CONTEXT_SCENARIOS = DEFAULT_CONTEXT_SCENARIOS;
  BarterEngine.clamp = clamp;
  BarterEngine.calculateNutritionalIndex = calculateNutritionalIndex;
  BarterEngine.calculateNutritionalIndexDetailed = calculateNutritionalIndexDetailed;
  BarterEngine.calculateBaseScore = calculateBaseScore;
  BarterEngine.calculateContextModifier = calculateContextModifier;
  BarterEngine.calculateContextModifierDetailed = calculateContextModifierDetailed;
  BarterEngine.evaluateItem = evaluateItem;
  BarterEngine.evaluateCatalog = evaluateCatalog;
  BarterEngine.calculateTrade = calculateTrade;
  BarterEngine.calculateChangeOptions = calculateChangeOptions;
  BarterEngine.registerCustomItems = registerCustomItems;
  BarterEngine.registerContextScenario = registerContextScenario;
  BarterEngine.registerLocale = registerLocale;
  BarterEngine.setLocale = setLocale;
  BarterEngine.getLocale = getLocale;
  BarterEngine.setCrisisPhase = setCrisisPhase;
  BarterEngine.getCrisisPhase = getCrisisPhase;
  BarterEngine.translate = translate;
  BarterEngine.getItemById = getItemById;
  BarterEngine.getItems = getItems;
  BarterEngine.getAvailableScenarios = getAvailableScenarios;
  BarterEngine.BarterEngine = BarterEngine;

  return BarterEngine;
});
