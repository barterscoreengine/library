# Changelog

All notable changes to the **BarterScore Engine** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-05

### Added
- **Core Mathematical Engine (`src/barter_engine.js`)**:
  - Hybrid Universal Module Definition (UMD) SDK exposing `window.BarterCore.BarterEngine` for offline `file://` execution, CommonJS (`module.exports`), and ES module bundlers, supporting both `new BarterEngine(options)` instance methods and static `BarterEngine.*` methods with complete English JSDoc (`@param`, `@returns`, `@example`) annotations.
  - Immutable **Nutritional Index (`IN`)** calculation with `Clamp(1.0 + MacroFactor + MicroFactor, 0.5, 2.5)` for foods (`is_food: true`) and fixed `1.0` baseline for non-food items.
  - Immutable **Base Score (`ScoreBase`)** equation incorporating caloric/functional energy (`energy_or_utility_base`), gravimetric and volumetric penalty (`weight_kg + volume_liters + 0.1`), logarithmic shelf-life scaling (`Math.log10(V + 1)`), preparation cost (`cost_of_prep`), morale impact (`psychological_factor`), and physical durability (`fragility_index`).
  - Real-time shelf-life depreciation via `current_lifecycle_remaining` / `offerRemainingDays` parameter overrides, returning `0` when an item reaches complete expiration (`current_lifecycle_remaining <= 0`).
  - Dynamic **External Context Modifier (`MEC`)** system with built-in crisis scenarios `acute_collapse` (`0.01x` multiplier on `cat_store_of_value` and survival tag boosts) and `economic_reconstruction` (`5.0x` multiplier on `cat_store_of_value` and infrastructure/tooling tag boosts), plus runtime custom scenario injection and `setCrisisPhase` / `getCrisisPhase`.
  - Deterministic **Barter Exchange Calculator (`calculateTrade`)** computing exact parity ratios (`exchangeRate`, `exactUnitsPossible`), atomic integer rounding for indivisible items (`is_divisible: false`), and structured `trade_imbalance` / `tradeImbalanceWarning` alerts detailing value surplus/deficit percentages and sub-unit change recommendations.
  - Hot-swappable dataset registry via `registerCustomItems` supporting both dataset replacement (`replace`) and merge (`merge`) strategies with automatic schema validation.
  - Resilient IETF BCP 47 localization resolver (`setLocale`, `translate`) implementing the strict fallback chain: `Selected Locale -> en-US -> Technical ID`.
- **Schema & Dataset Validator (`src/validator.js`)**:
  - Universal Module Definition (UMD) module exposing `window.BarterCore.Validator`.
  - Strict validation of semantic `snake_case` slugs, official 8-category taxonomy (`cat_staple_foods`, `cat_critical_nutrition`, `cat_spices_morale`, `cat_pharma_essential`, `cat_trauma_hygiene`, `cat_water_fire_shelter`, `cat_tools_energy_comms`, `cat_store_of_value`), atomic unit measurements (`g`, `ml`, `un`), physical bounds (`cost_of_prep`, `psychological_factor`, `fragility_index`), and nutritional macro ratios.
  - Batch dataset auditor (`validateDataset`) detecting duplicate semantic IDs and prohibited commercial brand tokens, plus localization dictionary auditor (`validateLocale`).
- **Standardized Centennial Catalog (`data/items_core.js`)**:
  - Added 100 brand-free, scientifically standardized survival and barter items across 8 categories (Items 1–100) using WHO INN, IEC 60086/61960, NIOSH 42 CFR Part 84, LBMA 999, and FAO/WHO Codex Alimentarius standards, plus a commented template for Item 101+.
- **Authentic Regulatory Localization Packs (`locales/`)**:
  - Added complete 100-item, 8-category, scenario, and UI dictionaries in `locales/en-US.js` (USP/WHO-INN), `locales/pt-BR.js` (DCB-ANVISA/TBCA-TACO), `locales/es-ES.js` (DOE-AEMPS/CAE), and `locales/zh-Hans.js` (Chinese Pharmacopoeia ChP/GB).
- **Standalone Offline Manual Generator (`manual_generator.html`) & Multi-Scenario Print Architecture**:
  - Added `manual_generator.html` with English (`en-US`) default initialization, live schema audit banner, crisis phase selector, bilateral trade simulator with instant item swap (`⇄`), 1-click official reference footer, and `@media print` (`A4 landscape`) high-contrast physical field manual formatting.
  - Configured **Page 1** of the printed manual (`#printFieldGuide`) to automatically render the complete **Analog Field Manual (`OFFLINE_MANUAL`)** (4-step settlement protocol, 3-scenario column guide, dynamically calculated worked field example, Shelf-Life Protocols A & B, sanitary trade-post checklist, and the multi-scenario Pre-Calculated Fractional Change Lookup Table).
  - Configured **Columns 8, 9, and 10** of the General Quotation Schedule to display **all 3 crisis scenarios side-by-side** (`1. Pure Baseline 1.0x`, `2. Acute Collapse`, and `3. Economic Reconstruction`) along with each divisible item's `1 g / 1 ml` sub-unit rate.
- **Unified Root Package Entry Point & TypeScript Definitions (`index.js`, `index.d.ts` & `package.json`)**:
  - Added root UMD barrel module (`index.js`), official TypeScript declarations (`index.d.ts`), and `exports` / `types` mappings in `package.json` for `@barterscoreengine/library`, enabling single-line ES Module (`import { BarterEngine, Validator, ItemsCore, AuditSources, Locales } from '@barterscoreengine/library'`) and CommonJS (`require('@barterscoreengine/library')`) imports alongside `window.BarterCore`, plus `evaluateCatalog()` multi-scenario snapshot export and instance-isolated `locale` / `crisisPhase` state.
- **Offline Scientific Audit Dossier & Link-Rot Resilient Registry (`audit_sources/`)**:
  - Added `audit_sources/OFFLINE_AUDIT_DOSSIER.md` and `audit_sources/offline_sources_registry.js` (`window.BarterCore.AuditSources`) containing the **Link-Rot Resilience Protocol (Immutable Audit Triad)**, the **Complete 100-Item Traceability & Audit Matrix (`COMPLETE_100_ITEM_TRACEABILITY_MATRIX`, Items `001–100`)**, and the **Two-Tier Custom/Regional User Audit Ledger (`Items 101+`)** via `registerCustomAuditSource(entry)` and `getCustomAuditSources()`.
- **Cross-Platform Offline Launchers, Multilingual Analog Manuals & Governance**:
  - Added `.gitattributes` enforcing `LF` line endings for POSIX shell scripts (`.sh`) and `CRLF` line endings for Windows Batch scripts (`.bat`), alongside `start_windows.bat` and `start_unix.sh` (`#!/bin/sh`).
  - Added standalone total-blackout Analog Field Manuals in all 4 supported languages: `docs/OFFLINE_MANUAL.md` (`en-US`), `docs/OFFLINE_MANUAL.pt-BR.md` (`pt-BR`), `docs/OFFLINE_MANUAL.es-ES.md` (`es-ES`), and `docs/OFFLINE_MANUAL.zh-Hans.md` (`zh-Hans`).
  - Added `LICENSE` (Apache License 2.0), `NOTICE` (Apache 2.0 Section 4(d) mandatory attribution to Erisson Marques — `https://github.com/erissontech` and official repository `https://github.com/barterscoreengine/library`), and `CONTRIBUTING.md`.
  - Added comprehensive documentation in `README.md` (`en-US`) and mirrored translations in `docs/README.pt-BR.md`, `docs/README.es-ES.md`, and `docs/README.zh-Hans.md`, including the Scientific Methodology, Calibration Rubric, 20-link 1-Click Official Verification Directory, Worked Examples, Developer Integration Guide & API Reference, and visual ASCII/Unicode expansion workflow diagrams.
