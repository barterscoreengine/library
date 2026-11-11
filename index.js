/**
 * @fileoverview BarterScore Engine - Unified Root Package Entry Point (@barterscoreengine/library)
 * @author Erisson Marques (https://github.com/erissontech)
 * @license Apache-2.0
 * @version 1.1.0
 *
 * UMD root barrel module exporting BarterEngine, Validator, ItemsCore, AuditSources, and Locales
 * for seamless ES Module (`import { BarterEngine, Validator, ItemsCore, Locales } from '@barterscoreengine/library'`),
 * CommonJS (`const { BarterEngine, Validator, ItemsCore, Locales } = require('@barterscoreengine/library')`),
 * and browser `<script>` (`window.BarterCore`) consumption.
 */

(function (root, factory) {
  'use strict';

  if (typeof module === 'object' && module.exports) {
    var Validator = require('./src/validator.js');
    var ItemsCore = require('./data/items_core.js');
    var AuditSources = require('./audit_sources/offline_sources_registry.js');
    var enUS = require('./locales/en-US.js');
    var ptBR = require('./locales/pt-BR.js');
    var esES = require('./locales/es-ES.js');
    var frFR = require('./locales/fr-FR.js');
    var ruRU = require('./locales/ru-RU.js');
    var swKE = require('./locales/sw-KE.js');
    var arSA = require('./locales/ar-SA.js');
    var zhHans = require('./locales/zh-Hans.js');
    var BarterEngine = require('./src/barter_engine.js');

    module.exports = factory(root, {
      BarterEngine: BarterEngine,
      Validator: Validator,
      ItemsCore: ItemsCore,
      AuditSources: AuditSources,
      Locales: {
        'en-US': enUS,
        'pt-BR': ptBR,
        'es-ES': esES,
        'fr-FR': frFR,
        'ru-RU': ruRU,
        'sw-KE': swKE,
        'ar-SA': arSA,
        'zh-Hans': zhHans
      }
    });
  } else {
    var coreNamespace = (root && root.BarterCore) || {};
    var exported = factory(root, {
      BarterEngine: coreNamespace.BarterEngine,
      Validator: coreNamespace.Validator,
      ItemsCore: coreNamespace.ItemsCore,
      AuditSources: coreNamespace.AuditSources,
      Locales: coreNamespace.Locales || {}
    });
    if (root) {
      root.BarterCore = Object.assign(coreNamespace, exported);
    }
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function (
  _root,
  modules
) {
  'use strict';

  var BarterEngine = modules.BarterEngine;
  var Validator = modules.Validator;
  var ItemsCore = modules.ItemsCore;
  var AuditSources = modules.AuditSources;
  var Locales = Object.freeze(Object.assign({}, modules.Locales));

  if (BarterEngine && typeof BarterEngine.registerCustomItems === 'function' && Array.isArray(ItemsCore)) {
    if (typeof BarterEngine.getItems === 'function' && BarterEngine.getItems().length === 0) {
      BarterEngine.registerCustomItems(ItemsCore, { mode: 'merge', strict: false });
    }
  }

  if (BarterEngine && typeof BarterEngine.registerLocale === 'function' && Locales) {
    var localeCodes = Object.keys(Locales);
    for (var i = 0; i < localeCodes.length; i++) {
      var code = localeCodes[i];
      if (Locales[code]) {
        BarterEngine.registerLocale(code, Locales[code]);
      }
    }
  }

  return Object.freeze({
    VERSION: '1.1.0',
    SUPPORTED_LOCALES: Validator && Validator.SUPPORTED_LOCALES ? Validator.SUPPORTED_LOCALES : Object.keys(Locales),
    BarterEngine: BarterEngine,
    Validator: Validator,
    ItemsCore: ItemsCore,
    AuditSources: AuditSources,
    Locales: Locales
  });
});
