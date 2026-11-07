# Contributing to BarterScore Engine

Thank you for your interest in contributing to the **BarterScore Engine**, an open-source, deterministic, cross-platform mathematical engine for physical barter valuation in crisis and civil collapse scenarios.

Before submitting an issue, pull request, dataset expansion, or localization pack, please read and comply with all engineering, scientific, and legal governance rules set forth in this document.

---

## 1. Legal Governance & Licensing Terms

### 1.1. Inbound = Outbound Licensing Policy
In accordance with Section 5 of the **Apache License, Version 2.0**, any contribution, code patch, mathematical refinement, item dataset entry, or language translation dictionary that you intentionally submit to this repository (**"Inbound"**) is licensed under the exact same terms as the project itself (**Apache License 2.0**, **"Outbound"**).

By submitting a Pull Request, patch, or dataset contribution, you represent and warrant that:
1. You are the original author of the contribution or hold all necessary legal rights to submit it under the Apache License 2.0.
2. Your contribution does not violate any third-party intellectual property, trademark, or proprietary pharmacopoeia copyright.
3. You grant the Lead Maintainer and all downstream recipients a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright and patent license as defined in the `LICENSE` file.

### 1.2. Explicit Waiver of Donations, Sponsorships & Financial Proceeds
**IMPORTANT FINANCIAL WAIVER:**
Voluntary contributions of source code, scientific item parameters, documentation, or translations **do NOT** grant any contributor ownership equity, co-ownership of the project brand, or any right to financial revenue sharing.

1. **100% Maintainer Ownership of Sponsorships & Donations:** All financial donations, crowdfunding proceeds, grants, GitHub Sponsors funds, Patreon contributions, bounties, commercial support contracts, or donations received by the project belong **100% and exclusively to the Lead Maintainer** of the BarterScore Engine.
2. **Zero Royalty or Compensation Claims:** Contributors expressly waive any claim, demand, or expectation of monetary division, remuneration, royalties, or accounting of funds raised through project sponsorships or donations, regardless of the size, criticality, or longevity of their code or data contributions.

---

## 2. Repository Language Standard

- **Codebase & Governance Language:** All variable names, function identifiers, JSDoc annotations, semantic item slugs (`id`), category keys, folder/file names, commit messages, pull request descriptions, and root documentation must be written strictly in **English (`en-US`)**.
- **File Naming Convention:** All source code and data files must use strictly lowercase `snake_case` (e.g., `barter_engine.js`, `items_core.js`) to prevent case-sensitivity failures across Windows (NTFS), macOS (APFS), and Linux/BSD (ext4/ZFS).

---

## 3. Architectural & Engineering Constraints

### 3.1. Zero Dependencies & Offline-First (`file://` Protocol)
- The core engine, validator, datasets, and locales must be written in pure **Vanilla JavaScript (ES6+)** with comprehensive JSDoc type definitions.
- **No Runtime Build Requirement:** Do not introduce code into `src/*.js`, `data/*.js`, or `locales/*.js` that requires Node.js, npm packages, bundlers, or local HTTP servers to run.
- **UMD Pattern Mandatory:** Every `.js` module must attach its exports safely to `window.BarterCore = window.BarterCore || {}` for direct local `<script src="...">` loading over `file://` AND conditionally export via CommonJS (`module.exports`) and ES Modules.

### 3.2. Scientific Standardization of Items (Zero Commercial Brands)
- **Strict Prohibition of Trademarks:** Never use commercial brand names in item IDs, tags, or localization files (e.g., never use *"Tylenol"*, *"Advil"*, *"BIC"*, *"Duracell"*, or *"Duct Tape"*).
- **International Standards:**
  - **Pharmaceuticals:** Use World Health Organization (WHO) International Nonproprietary Names (**INN**) specifying active ingredient, dosage concentration, and physical form (e.g., `paracetamol_500mg_tablet`, `amoxicillin_500mg_capsule`).
  - **Batteries & Power:** Use **IEC / ANSI** nomenclature (e.g., `battery_alkaline_lr6_aa_1_5v_unit`, `battery_lithium_ion_18650_3_7v_3000mah_unit`).
  - **Foods:** Use **Codex Alimentarius (FAO/WHO)** commodity descriptors (e.g., `rice_white_polished_raw_1000g`).
- **Atomic Unit of Consumption:** Every item must be normalized to a single atomic physical unit (`1 tablet`, `1 battery cell`, `1 roll`, `1 bottle 100ml`, `1 package 1000g`) and explicitly declare `is_divisible` (`boolean`), `sub_units` (`number`), and `unit_measure` (`"g"`, `"ml"`, or `"un"`).

### 3.3. Localization & Non-Literal Translation Standard
- Language files live inside `locales/[lang].js` using IETF BCP 47 identifiers (`en-US`, `pt-BR`, `es-ES`, `zh-Hans`).
- **No Literal Machine Translations:** Translators must use authentic regulatory, medical, and commercial nomenclature recognized by native speakers in each jurisdiction (e.g., Chinese Pharmacopoeia standards for `zh-Hans`, ANVISA/DCB for `pt-BR`, AEMPS/DOE for `es-ES`, USP/INN for `en-US`).

### 3.4. Immutability of the Core Mathematical Formula
Pull requests that alter the core mathematical constants or equations in `src/barter_engine.js` without peer-reviewed justification will be rejected. All item additions must pass `window.BarterCore.Validator.validateDataset()` with zero errors and zero warnings before submission.
