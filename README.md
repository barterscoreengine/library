# BarterScore Engine (v1.1.0)

**A Local-First library for Collapse Informatics and Off-Grid Economics.**

> **Language:**
> [**English (en-US)**](./README.md) · [**Português (pt-BR)**](./docs/README.pt-BR.md) · [**Español (es-ES)**](./docs/README.es-ES.md) · [**Français (fr-FR)**](./docs/README.fr-FR.md) · [**Русский (ru-RU)**](./docs/README.ru-RU.md) · [**Kiswahili (sw-KE)**](./docs/README.sw-KE.md) · [**العربية (ar-SA)**](./docs/README.ar-SA.md) · [**简体中文 (zh-Hans)**](./docs/README.zh-Hans.md) · [**Analog Field Manual (`OFFLINE_MANUAL.md`)**](./docs/OFFLINE_MANUAL.md)

---

**BarterScore Engine** is a deterministic, cross-platform, zero-dependency, offline-first mathematical engine and reference catalog designed to evaluate the physical, nutritional, and functional barter value of essential commodities and specialized human services in supply-chain disruptions, humanitarian crises, and civil collapse scenarios.

Licensed under the [**Apache License 2.0**](https://www.apache.org/licenses/LICENSE-2.0), the entire architecture is written in pure **Vanilla JavaScript (ES6+ UMD)** and native **HTML5/CSS3**, executing identically over the local `file://` protocol (via double-click without Node.js, web servers, or internet connectivity), CommonJS (`module.exports`), and ES Module environments.

---

## Table of Contents

1. [Core Architectural Principles](#1-core-architectural-principles)
2. [The Official Mathematical Formula](#2-the-official-mathematical-formula)
3. [Scientific Methodology, Calibration Rubric & 1-Click / Offline Audit Sources](#3-scientific-methodology-calibration-rubric--1-click--offline-audit-sources)
4. [Schema Contract & Scientific Standardization](#4-schema-contract--scientific-standardization)
5. [1-Click Offline Launch, Physical Manual Printing & Repository Structure](#5-1-click-offline-launch-physical-manual-printing--repository-structure)
6. [Developer Integration Guide & API Reference](#6-developer-integration-guide--api-reference)
7. [Adding Item 129+ or a New Localization Pack](#7-adding-item-129-or-a-new-localization-pack)
8. [License & Governance](#8-license--governance)

---

## 1. Core Architectural Principles

- **Zero Runtime Dependencies (`file://` First):** Every module in `src/`, `data/`, and `locales/` uses a hybrid Universal Module Definition (UMD) pattern that populates `window.BarterCore` for local browser execution without CORS blocks while also supporting `module.exports`.
- **Total Decoupling of Physics vs. Localization:** Physical and nutritional parameters reside exclusively in `data/items_core.js` indexed by semantic `snake_case` slugs. Human translations reside in `locales/[lang].js` following [**IETF BCP 47 / RFC 5646**](https://www.rfc-editor.org/info/bcp47) (`en-US`, `pt-BR`, `es-ES`, `fr-FR`, `ru-RU`, `sw-KE`, `ar-SA`, `zh-Hans`) with automatic three-tier fallback:
  ```text
  Selected Locale  ───►  en-US (Canonical Baseline)  ───►  Technical Semantic ID
  ```
- **Zero Commercial Brands:** Trademarks are strictly prohibited. All items are standardized to an **Atomic Unit of Consumption** (`1 tablet`, `1 battery cell`, `1 roll`, `1 bottle 100ml`, `1 pack 1000g`) using [**WHO International Nonproprietary Names (INN)**](https://www.who.int/teams/health-product-and-policy-standards/inn) for pharmaceuticals, [**IEC 60086 / IEC 61960**](https://webstore.iec.ch/en/publication/603) for batteries, and [**Codex Alimentarius (FAO/WHO)**](https://www.fao.org/fao-who-codexalimentarius/) for foods.

---

## 2. The Official Mathematical Formula

### 2.1. Nutritional Index (`IN`)
For non-food items (`is_food: false`), `IN = 1.0`. For caloric food items (`is_food: true`), `IN` evaluates macronutrient caloric distribution and critical micronutrient density, clamped strictly to the interval `[0.5, 2.5]`:

```text
MacroFactor = (pct_kcal_protein × 1.5) + (pct_kcal_fat × 1.0) - (pct_kcal_added_sugar × 1.2)
MicroFactor = (+0.3 if high_vit_c) + (+0.2 if high_sodium_potassium) + (+0.2 if high_calcium_iron)
IN          = Clamp(1.0 + MacroFactor + MicroFactor, 0.5, 2.5)
```

### 2.2. Base Score (`ScoreBase`) & Real-Time Shelf-Life Depreciation
Balances caloric energy or Equivalent Energy Base (`E`) against gravimetric and volumetric transport burden (`P + Vol + 0.1`), base-10 logarithmic shelf-life scaling (`log₁₀(V + 1)`), preparation cost (`CP`), morale impact (`FP`), and packaging resilience (`Frag`):

```text
ScoreBase = ( (E × IN) / (P + Vol + 0.1) ) × log₁₀(V + 1) × CP × FP × Frag
```

- **Real-Time Depreciation:** When `current_lifecycle_remaining` (or `offerRemainingDays`) is supplied in real time, it replaces nominal `lifecycle_units` (`V`). If `V ≤ 0`, the item is expired and `ScoreBase = 0`.

### 2.3. External Context Modifier (`MEC`) & Final Score

```text
ScoreFinal = ScoreBase × MEC
```

- **`acute_collapse`:** `cat_store_of_value` is penalized at **`0.01x`**, while potable water, hemostatics, systemic antibiotics, and ready-to-eat rations receive survival scarcity multipliers.
- **`economic_reconstruction`:** `cat_store_of_value` appreciates to **`5.0x`**, alongside durable hand tools, open-pollinated seeds, solar panels, and VHF/UHF radios.

### 2.4. Bilateral Exchange Parity & Indivisibility Alert (`calculateTrade`)
Given an offered item `A` (quantity `Q_A`) and a requested item `B`:

```text
Q_B_exact = ( ScoreFinal(A) × Q_A ) / ScoreFinal(B)
```

If item `B` is indivisible (`is_divisible: false`), the engine rounds to the nearest whole unit (`Q_B_rec = max(1, round(Q_B_exact))`) and emits a structured `trade_imbalance` / `tradeImbalanceWarning` report calculating the exact percentage of surplus or deficit so traders can settle the difference with divisible items (such as iodized salt in grams or single tablets).

---

## 3. Scientific Methodology, Calibration Rubric & 1-Click / Offline Audit Sources

Why does a specific item receive its exact score, what does **`1 BarterScore Point (1 pt)`** physically mean, and why does Item B score twice (`2x`) as much as Item A? Because no single government agency publishes a unified barter equation comparing *1 kg of rice* against *1 capsule of amoxicillin* or *1 lithium-ion 18650 battery*, the **BarterScore Engine** synthesizes **verified empirical records** (archived offline in [`audit_sources/`](./audit_sources/OFFLINE_AUDIT_DOSSIER.md) and linked below) with **explicitly justified decimal-step engineering rubrics**.

### 3.0. Physical Meaning of `1 BarterScore Point (1 pt)` & Why Item B Scores `2x` Item A
By dimensional analysis of `ScoreBase = ((E × IN) / (P + Vol + 0.1)) × log₁₀(V + 1) × CP × FP × Frag`:
- **Definition of `1.0000 pt`:** **`1 BarterScore Point`** equals **1 Effective Kilocalorie of Survival Utility (`E × IN = 1`) per unit of Gravimetric-Volumetric Burden (`P + Vol + 0.1 = 1.0`) sustained across 1 Logarithmic Decade of Shelf Life (`V = 9 days` → `log₁₀(10) = 1.0`) at neutral operational readiness (`CP = 1.0`, `FP = 1.0`, `Frag = 1.0`)**.
- **Why Item B Scores `2.0x` Item A:** Holding other variables constant, an item's score doubles when: **(1)** it provides `2×` the metabolizable `kcal` or metabolic-saving `EEB` (`E`); **(2)** it packs the same utility into half the combined mass and volume burden (`P + Vol + 0.1`); **(3)** its shelf life squares on the base-10 logarithmic scale (for example, `1,000 days` [`log₁₀ ≈ 3.0`] vs. `31 days` [`log₁₀ ≈ 1.5`]); or **(4)** its operational readiness product (`CP × FP × Frag`) is twice as high.

### 3.1. Official Scientific, Regulatory & Humanitarian Sources (Offline Snapshot in `audit_sources/` + 1-Click Direct Links)
> **100% Offline Auditability (`audit_sources/`):** All empirical queries, USDA FoodData Central FDC IDs, WHO ATC codes, and official formulations are permanently saved inside [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](./audit_sources/OFFLINE_AUDIT_DOSSIER.md) and [`audit_sources/offline_sources_registry.js`](./audit_sources/offline_sources_registry.js) (`window.BarterCore.AuditSources`) so auditors can verify every baseline record offline without internet access.
>
> **Note on Scope (Representative Examples vs. Full 128-Item Ledger):** To keep this `README` concise and readable, the items cited below are **representative examples** of each scientific domain. The complete, item-by-item traceability matrix covering all **128 catalog items (`001` to `128`: 100 physical commodities + 28 essential human services)** is maintained in [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](./audit_sources/OFFLINE_AUDIT_DOSSIER.md).

1. **Food Caloric Density & Macronutrient Ratios (`E_food`, `IN`) — Specific USDA FDC Records:**
   - Extracted from [**USDA FoodData Central (SR Legacy)**](https://fdc.nal.usda.gov/), [**TBCA — USP/FoRC**](https://www.tbca.net.br/), [**TACO 4th Ed. — UNICAMP PDF**](https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf), and [**FAO/WHO Codex Alimentarius**](https://www.fao.org/fao-who-codexalimentarius/). Verified records include:
     - **White Rice, raw (`rice_white_polished_raw_1000g`):** [**USDA FDC ID 169756 / NDB 20444**](https://fdc.nal.usda.gov/food-details/169756/nutrients) (`365 kcal/100g` → `3,650 kcal/1000g`, protein `7.13 g/100g`, lipid `0.66 g/100g`).
     - **Dry Common/Black Beans, raw (`beans_common_dry_1000g`):** [**USDA FDC ID 173734 / NDB 16014**](https://fdc.nal.usda.gov/food-details/173734/nutrients) & [**TBCA C0113A**](https://www.tbca.net.br/) (`329 kcal/100g` composite baseline → `3,290 kcal/1000g`, protein `24.5% kcal`, high Fe/K).
     - **Pure Honey, Granulated Sugar & Vegetable Oil:** [**FDC ID 169640**](https://fdc.nal.usda.gov/food-details/169640/nutrients) (`304 kcal/100g`), [**FDC ID 169655**](https://fdc.nal.usda.gov/food-details/169655/nutrients) (`387 kcal/100g`), and [**FDC ID 171411**](https://fdc.nal.usda.gov/food-details/171411/nutrients) (`884 kcal/100g`).
2. **Pharmaceutical Selection, ATC Codes, ORS & Trauma (`cat_pharma_essential`, `cat_trauma_hygiene`):**
   - Grounded in [**WHO Model List of Essential Medicines — 23rd List (`WHO/MHP/HPS/EML/2023.02`)**](https://iris.who.int/handle/10665/371090) (Amoxicillin 500mg `ATC: J01CA04` Access Group; Ciprofloxacin 500mg `ATC: J01MA02` Watch Group; Azithromycin 500mg `ATC: J01FA10` Watch Group; Paracetamol 500mg `ATC: N02BE01`), [**WHO/UNICEF Low-Osmolarity ORS Specification (`Document WHO/FCH/CAH/06.1`: `20.5 g/L`, `245 mOsm/L`)**](https://iris.who.int/handle/10665/69227), [**WHO IEHK 2017**](https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017), [**DoD CoTCCC Trauma Guidelines**](https://deployedmedicine.com/market/31), and [**US FDA December 2001 Guidance on Potassium Iodide (`130 mg` Adult Thyroid Blocking Dose)**](https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki).
3. **Water Disinfection, WASH Standards & Cooking Fuel Burden (`CP`, `cat_water_fire_shelter`):**
   - Grounded in [**The Sphere Handbook (2018 Ed., WASH Standard 2.1: `15 L/person/day` total basic need; `2.5–3.0 L/day` survival drinking; `3–6 L/day` cooking)**](https://spherestandards.org/handbook/editions/) and [**WHO Guidelines for Drinking-water Quality (`ISBN 978-92-4-154995-0`: `67 mg` NaDCC tablet treats `20 L` clear water jerrycan in `30 min`)**](https://www.who.int/publications/i/item/9789241549950).
4. **Sealed Shelf Life (`V`) & Packaging Durability (`Frag`):**
   - Grounded in [**US Army DEVCOM Soldier Center (Natick Operational Rations)**](https://www.army.mil/devcom-sc), [**USDA FSIS Shelf-Stable Food Safety Guidelines**](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food), [**FEMA / Ready.gov**](https://www.ready.gov/food), and the [**FDA / DoD Shelf-Life Extension Program (SLEP)**](https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/expiration-dating-extension).
5. **Essential Human Services, Clinical Procedures, Off-Grid IT, Technical Instruction & Specialized Labor (`cat_essential_services`, Items `101–128`):**
   - Grounded in [**WHO Integrated Management for Emergency and Essential Surgical Care (IMEESC)**](https://www.who.int/Specify/emergencies/surgical-care), [**WHO/UNFPA/UNICEF IMPAC (*Managing Complications in Pregnancy and Childbirth*, ISBN 978-92-4-156549-3)**](https://www.who.int/publications/i/item/9789241565493), [**ILO ISCO-08 (*International Standard Classification of Occupations*) & ISO 8996 (Occupational Metabolic Rates)**](https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/), [**FAO Animal Production & Health / Seed Security Guidelines**](https://www.fao.org/agriculture/crops/thematic-sitemap/theme/seeds-pgr/seed-sys/security/en/), [**IEEE / IEC / ETSI Field Maintenance Standards**](https://www.itu.int/en/ITU-D/Emergency-Telecommunications/), [**IEEE 802.11s / ISO/IEC 27037 / IPC-7711/7721 / IEC 61131-3 (Off-Grid IT & Microelectronics)**](https://standards.ieee.org/ieee/802.11s/4570/), and [**UNESCO ISCED / WHO-ICRC BEC / ISO 17100 (Technical Instruction & Translation)**](https://uis.unesco.org/en/topic/international-standard-classification-education-isced).
   - *Physical Proxy Mapping for Services:* All 28 intangible services (`is_food: false`, `is_divisible: false`, `sub_units: 1`, `unit_measure: 'un'`) map `weight_kg (P)` (`0.08–0.30 kg`) and `volume_liters (Vol)` (`0.10–0.35 L`) to the **Marginal Per-Procedure Consumable & Instrument Wear Burden** (representing only the disposable materials and proportional tool wear expended per single intervention while the technician retains their permanent equipment chest, avoiding both full-kit denominator over-penalization and artificial `0.001 kg` portability inflation), `lifecycle_units (V)` (`7–3,650 days`) to the **Effective Outcome Durability / Recurrence Interval**, and `energy_or_utility_base (E)` (`5,200–38,000 EEB`) to **Biological Caloric Loss Prevented + Skilled Labor Expenditure Saved**. By default, `calculateChangeOptions()` excludes `cat_essential_services` so physical commodities (`g`, `ml`, `un`) are used for fractional change settlement.

#### Complete 1-Click Verification Directory (With Exact Document & Record Identifiers)

| Domain / Scope | Institution & Specific Document / Record Code | Official 1-Click Verification URL |
| :--- | :--- | :--- |
| **Offline Local Audit Ledger** | Repository Offline Dossier (`audit_sources/`) | [`./audit_sources/OFFLINE_AUDIT_DOSSIER.md`](./audit_sources/OFFLINE_AUDIT_DOSSIER.md) |
| **Nutrition: White Rice (`365 kcal/100g`)** | USDA FoodData Central — `FDC ID: 169756` (`NDB 20444`) | [https://fdc.nal.usda.gov/food-details/169756/nutrients](https://fdc.nal.usda.gov/food-details/169756/nutrients) |
| **Nutrition: Dry Beans (`329–341 kcal/100g`)** | USDA FoodData Central — `FDC ID: 173734` (`NDB 16014`) & TBCA `C0113A` | [https://fdc.nal.usda.gov/food-details/173734/nutrients](https://fdc.nal.usda.gov/food-details/173734/nutrients) |
| **Nutrition: Honey, Sugar & Oil** | USDA FDC IDs `169640`, `169655` & `171411` | [https://fdc.nal.usda.gov/food-details/169640/nutrients](https://fdc.nal.usda.gov/food-details/169640/nutrients) |
| **Nutrition: Brazilian Tables** | TBCA (USP/FoRC) & TACO 4th Ed. PDF (UNICAMP) | [https://www.tbca.net.br/](https://www.tbca.net.br/) · [https://www.cfn.org.br/.../taco_4_edicao_ampliada_e_revisada.pdf](https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf) |
| **International Food Standards** | FAO/WHO Codex Alimentarius Commission | [https://www.fao.org/fao-who-codexalimentarius/](https://www.fao.org/fao-who-codexalimentarius/) |
| **Essential Medicines (`J01CA04`, etc.)** | WHO EML 23rd List (`WHO/MHP/HPS/EML/2023.02`) | [https://iris.who.int/handle/10665/371090](https://iris.who.int/handle/10665/371090) |
| **Oral Rehydration Salts (`20.5 g/L`)** | WHO / UNICEF Low-Osmolarity ORS (`WHO/FCH/CAH/06.1`) | [https://iris.who.int/handle/10665/69227](https://iris.who.int/handle/10665/69227) |
| **Active Pharmaceutical Ingredients** | WHO International Nonproprietary Names (INN) | [https://www.who.int/teams/health-product-and-policy-standards/inn](https://www.who.int/teams/health-product-and-policy-standards/inn) |
| **Emergency Humanitarian Kits** | WHO / UNHCR / UNICEF IEHK 2017 | [https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017](https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017) |
| **Pre-Hospital Arterial Trauma** | CoTCCC / US DoD TCCC Guidelines | [https://deployedmedicine.com/market/31](https://deployedmedicine.com/market/31) |
| **Radiological Thyroid Protection** | US FDA Dec 2001 KI Guidance (`130 mg` Adult Dose) | [https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki](https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki) |
| **Locale `en-US` Nomenclature** | United States Pharmacopeia (USP) & FDA Orange Book | [https://www.usp.org/](https://www.usp.org/) · [https://www.accessdata.fda.gov/scripts/cder/ob/](https://www.accessdata.fda.gov/scripts/cder/ob/) |
| **Locale `pt-BR` Nomenclature** | DCB / ANVISA (Brazilian Common Denomination) | [https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/dcb](https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/dcb) |
| **Locale `es-ES` Nomenclature** | DOE / CIMA AEMPS & BOE `BOE-A-1967-16485` (CAE) | [https://cima.aemps.es/](https://cima.aemps.es/) · [https://www.boe.es/buscar/act.php?id=BOE-A-1967-16485](https://www.boe.es/buscar/act.php?id=BOE-A-1967-16485) |
| **Locale `fr-FR` Nomenclature** | DCI / ANSM (Pharmacopée Française) & ANSES Table Ciqual | [https://ansm.sante.fr/documents/reference/pharmacopee](https://ansm.sante.fr/documents/reference/pharmacopee) · [https://ciqual.anses.fr/](https://ciqual.anses.fr/) |
| **Locale `ru-RU` Nomenclature** | МНН / ГРЛС Минздрава РФ (ГФ РФ XV) & Росстандарт (ГОСТ) | [https://grls.rosminzdrav.ru/](https://grls.rosminzdrav.ru/) · [https://protect.gost.ru/](https://protect.gost.ru/) |
| **Locale `sw-KE` Nomenclature** | KEML / PPB Kenya (Pharmacy and Poisons Board) & KEBS / KFCT | [https://web.pharmacyboardkenya.org/](https://web.pharmacyboardkenya.org/) · [https://www.kebs.org/](https://www.kebs.org/) |
| **Locale `ar-SA` Nomenclature** | SFDA (Saudi Food & Drug Authority) & SASO / GSO Standards | [https://www.sfda.gov.sa/](https://www.sfda.gov.sa/) · [https://www.saso.gov.sa/](https://www.saso.gov.sa/) |
| **Locale `zh-Hans` Nomenclature** | Chinese Pharmacopoeia (ChP) & SAMR GB Standards | [https://www.chp.org.cn/](https://www.chp.org.cn/) · [https://openstd.samr.gov.cn/](https://openstd.samr.gov.cn/) |
| **WASH & NaDCC Disinfection (`67mg/20L`)** | Sphere WASH Std 2.1 (`15L/day`) & WHO GDWQ `978-92-4-154995-0` | [https://spherestandards.org/handbook/editions/](https://spherestandards.org/handbook/editions/) · [https://www.who.int/publications/i/item/9789241549950](https://www.who.int/publications/i/item/9789241549950) |
| **Shelf Life (`V`) & Packaging (`Frag`)** | USDA FSIS Shelf-Stable, FEMA Ready.gov & FDA SLEP | [https://www.fsis.usda.gov/.../shelf-stable-food](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food) · [https://www.fda.gov/.../expiration-dating-extension](https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/expiration-dating-extension) |
| **Battery Cells (`LR6`, `LR03`, `INR18650`)** | IEC 60086-2 Primary Cells & IEC 61960-3 Secondary Lithium | [https://webstore.iec.ch/en/publication/603](https://webstore.iec.ch/en/publication/603) |
| **Particulate Respirators (`N95`)** | CDC / NIOSH `42 CFR Part 84` Approved Respirators | [https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html](https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html) |
| **Precious Metals (`999.0 Fine`)** | LBMA Good Delivery Assay Specifications | [https://www.lbma.org.uk/good-delivery/about-good-delivery](https://www.lbma.org.uk/good-delivery/about-good-delivery) |
| **Essential Surgical & Obstetric Care** | WHO IMEESC & WHO/UNFPA/UNICEF IMPAC (`978-92-4-156549-3`) | [https://www.who.int/publications/i/item/9789241565493](https://www.who.int/publications/i/item/9789241565493) |
| **Occupational Labor & Metabolic Ergonomics** | ILO ISCO-08 & ISO 8996 (Ergonomics Metabolic Rate) | [https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/](https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/) · [https://www.iso.org/standard/74443.html](https://www.iso.org/standard/74443.html) |
| **Off-Grid IT, Data Recovery & PCB Rework** | IEEE 802.11s, ISO/IEC 27037, IPC-7711/7721 & IEC 61131-3 | [https://standards.ieee.org/ieee/802.11s/4570/](https://standards.ieee.org/ieee/802.11s/4570/) · [https://www.iso.org/standard/44381.html](https://www.iso.org/standard/44381.html) |
| **Technical Literacy, Pedagogy & Translation** | UNESCO ISCED, WHO/ICRC BEC & ISO 17100:2015 | [https://uis.unesco.org/en/topic/international-standard-classification-education-isced](https://uis.unesco.org/en/topic/international-standard-classification-education-isced) · [https://www.iso.org/standard/59149.html](https://www.iso.org/standard/59149.html) |
| **Urban Siege & Conflict Reports** | ICRC Publication `4249` & WHO Ukraine Emergency | [https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict](https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict) · [https://www.who.int/emergencies/situations/ukraine-emergency](https://www.who.int/emergencies/situations/ukraine-emergency) |

### 3.2. Engineering Heuristics & Granular Decimal-Step Rubric (No External Source — Justified by Design)
Where official literature separates nutrition (`kcal`), medicine (clinical outcomes), and logistics (`kg/L`) into incompatible silos, this engine introduces four original bridging heuristics that do not come from an external government table and are justified as follows:

1. **Equivalent Energy Base (`EEB` in `[500, 50000]`) for Non-Food Items:**
   - *Engineering Justification:* To trade food against non-food items on a single mathematical scale, non-foods are assigned an **Equivalent Energy Base (`EEB`)** representing **Metabolic Expenditure Saved / Biological Loss Prevented** (in `kcal` equivalents). For example: an untreated systemic bacterial infection (a **39.5 °C** fever for 7 days) or acute dehydrating diarrhea drains **3,500 to 15,000+ kcal** of basal reserves and threatens survival; sawing wood, filtering water, or starting fire manually without tools consumes **500 to 3,000+ kcal** of extra physical labor and thermal exposure.
2. **Non-Caloric Metabolic & Functional Consumables Rule (`is_food: false` for Water, Salt, Coffee, Tea, Vinegar, Sodium Bicarbonate, Tobacco & Potable Ethanol):**
   - *Engineering Justification:* Nine human-consumable items in `cat_staple_foods` and `cat_spices_morale` (`water_potable_sealed_1000ml`, `salt_sodium_chloride_iodized_1000g`, `coffee_roasted_ground_vacuum_500g`, `coffee_instant_soluble_granules_50g`, `vinegar_acetic_acid_4pct_750ml`, `sodium_bicarbonate_pure_100g`, `tea_camellia_sinensis_dry_50g`, `tobacco_cigarette_filtered_unit`, and `alcohol_ethanol_potable_40pct_500ml`) are intentionally configured with **`is_food: false`** (`IN = 1.0`) and evaluated via **`EEB`** instead of dietary `kcal`. In USDA/TACO tables, pure water, salt, and sodium bicarbonate contain **`0 kcal`**, and coffee, tea, and vinegar contain `< 20 kcal/100g`; evaluating them as caloric foods would yield `ScoreBase = 0 pts` for drinking water and essential electrolytes. Conversely, 40% distilled ethanol contains hepatotoxic non-nutritive alcohol calories whose real crisis value lies in antisepsis, solvent extraction, and siege barter liquidity.
3. **Gravimetric-Volumetric Damping Constant (`ε = 0.1` in `P + Vol + 0.1`), `IN` Weights & Logarithmic Shelf-Life (`log₁₀(V + 1)`):**
   - *Engineering Justification:* Adding `ε = 0.1` prevents division-by-zero or asymptotic blow-up when evaluating ultra-lightweight micro-items (`P = 0.001 kg`, such as 1 antibiotic capsule or 1 NaDCC tablet), bounding maximum micro-item portability amplification to `~9.8×`. The `IN` weights (`+1.5` protein, `+1.0` fat, `-1.2` added sugar, clamped to `[0.5, 2.5]`) distinguish structural tissue-repairing nutrition from empty glycemic calories, while `log₁₀(V + 1)` compresses 100-year bullion vs. 1-year food into a bounded `1.78×` durability factor instead of a `100×` linear distortion.
4. **Granular Decimal-Step Calibration Rubric (`CP`, `FP`, `Frag`, and `MEC`):**
   - *Engineering Justification:* Every decimal step within a parameter's range is governed by an explicit operational threshold (see full step table in [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](./audit_sources/OFFLINE_AUDIT_DOSSIER.md)):

| Parameter | Range | Granular Decimal-Step Rubric (Why Each Specific Value Is Assigned) |
| :--- | :---: | :--- |
| **`energy_or_utility_base` (`E`)** | `> 0` | **Foods:** Exact total `kcal` of the atomic package (`FDC-169756` rice `3,650 kcal`, `FDC-173734`/`TBCA` beans `3,290 kcal`).<br>**Non-Foods (`EEB`):**<br>• `500 – 3,000`: Single-use consumables (`tobacco_cigarette_filtered_unit` `650`, `paracetamol_500mg_tablet` `1,600`, `gauze_sterile_compress_7_5cm_unit` `2,200`, `water_purification_nadcc_tablet_unit` `2,600`).<br>• `3,000 – 10,000`: Systemic antibiotics per capsule (`amoxicillin_500mg_capsule` `4,200`, `ciprofloxacin_500mg_tablet` `5,000`), sutures (`8,200`), butane lighters (`7,500`).<br>• `10,000 – 25,000`: Arterial tourniquets (`tourniquet_tactical_arterial_unit` `18,500`), `INR18650` cells (`12,500`), ferrocerium rods (`16,000`), 1 L sodium hypochlorite (`14,500`).<br>• `25,000 – 50,000`: Multi-year capital goods (`filter_water_hollow_fiber_0_1micron_unit` `32,000`, `knife_fixed_blade_carbon_steel_fulltang` `28,000`, `panel_solar_monocrystalline_usb_5v_10w_unit` `38,000`, `radio_transceiver_vhf_uhf_dualband_unit` `42,000`, `gold_bullion_999_fine_fractional_1g` `50,000`). |
| **`cost_of_prep` (`CP`)** | `0.50 – 1.00` | • **`1.00`**: Zero preparation (ready-to-eat canned food, oral tablet, potable water, ready tool).<br>• **`0.90 – 0.96`**: Cold dissolution in **less than 2 min**, zero fuel (`oral_rehydration_salts_who_sachet_27_9g`, `milk_powder_whole_400g`).<br>• **`0.80 – 0.88`**: Rapid hydration or brief **2 to 5 min** heating (`oats_rolled_whole_500g`, `coffee_roasted_ground_vacuum_500g`).<br>• **`0.72 – 0.78`**: Short simmer / pan heating **8 to 12 min** (`lentils_dry_raw_500g`, `pasta_wheat_dry_500g`).<br>• **`0.65 – 0.68`**: Standard boiling **15 to 20 min** + **2:1** water ratio (`rice_white_polished_raw_1000g`, `meat_bovine_cured_salted_500g`).<br>• **`0.50 – 0.58`**: Heavy boiling **45 to 60 min** + **3:1** water ratio (`beans_common_dry_1000g`, `chickpeas_dry_raw_500g`). |
| **`psychological_factor` (`FP`)** | `1.00 – 2.50` | • **`1.20 – 1.30`**: Raw utilitarian inputs (`gelatin_unflavored_powder_50g`, `flour_wheat_enriched_1000g`).<br>• **`1.35 – 1.45`**: Primary household satiety staples (`rice_white_polished_raw_1000g`, `beans_common_dry_1000g`).<br>• **`1.50 – 1.85`**: Hygiene dignity, analgesia & morale comfort (`fish_sardine_canned_oil_125g`, `honey_bee_pure_500g`).<br>• **`1.90 – 2.25`**: Neurochemical withdrawal mitigation with high siege liquidity (`coffee_roasted_ground_vacuum_500g`, `chocolate_dark_cocoa_60pct_100g`).<br>• **`2.30 – 2.40`**: Acute life-saving anti-infectives & water disinfection (`amoxicillin_500mg_capsule`, `water_purification_nadcc_tablet_unit`).<br>• **`2.45 – 2.50`**: Absolute survival ceiling (`tourniquet_tactical_arterial_unit`, `infant_formula_powder_stage1_400g`, `filter_water_hollow_fiber_0_1micron_unit`). |
| **`fragility_index` (`Frag`)** | `0.70 – 1.20` | • **`0.75 – 0.80`**: Exposed hydrophilic paper/cardboard or brittle optics (`paper_toilet_cellulose_roll_30m`, `biscuit_wheat_salted_dry_400g`).<br>• **`0.85 – 0.90`**: Flexible poly bag or liquid bottle (`pasta_wheat_dry_500g`, `oil_vegetable_refined_900ml`).<br>• **`0.95 – 1.05`**: Sealed thick pouch, HDPE bottle, or pharmaceutical blister (`rice_white_polished_raw_1000g`, `amoxicillin_500mg_capsule` `1.05`).<br>• **`1.10 – 1.18`**: Hermetic metal can, laminated foil blister, or steel multi-tool (`fish_sardine_canned_oil_125g` `1.15`).<br>• **`1.20`**: Indestructible solid alloy or noble metal bullion (`tourniquet_tactical_arterial_unit`, `gold_bullion_999_fine_fractional_1g`, `silver_bullion_999_fine_1_troy_oz_31_1g`). |

### 3.3. Empirical Lessons from Recent Wars & Modern Urban Sieges
The 128-item catalog and the External Context Modifiers (`MEC`) incorporate documented field lessons from modern conflicts:
- **Siege of Sarajevo (1992–1996, Bosnian War):** Demonstrated the acute demonetization of gold and jewelry during closed urban sieges (`cat_store_of_value` drops to **`0.01x`** in `acute_collapse`, recovering to **`5.0x`** only in `economic_reconstruction`), while **butane lighters**, **individual cigarettes**, **coffee**, **salt**, and **antiseptic alcohol** functioned as high-liquidity fractional barter currencies.
- **War in Ukraine (2022–Present — Mariupol, Bakhmut & Winter Grid Blackouts — [WHO Emergency Reports](https://www.who.int/emergencies/situations/ukraine-emergency)):** Proved that modern civilian survival under artillery and grid destruction depends heavily on **DC micro-energetics and decentralized comms** (**Li-Ion 18650 cells**, **5V 10W solar panels**, **VHF/UHF dual-band transceivers**), **civilian TCCC trauma gear** (**tactical arterial tourniquets**, **nylon 3-0 sutures**), and **radiological thyroid blocking** (**potassium iodide 130mg**).
- **Modern Water & Cholera Crises (Syria, Yemen, Gaza, Sudan — [ICRC Urban Siege Reports](https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict) & [WHO WASH Guidelines](https://www.who.int/publications/i/item/9789241549950)):** Showed that when municipal pumping fails and boiling fuel is unavailable, **cold chemical water disinfection** (**NaDCC tablets**, **2.5% sodium hypochlorite**), **0.1-micron hollow-fiber filters**, **Oral Rehydration Salts (ORS)**, and **enteropathogen antibiotics** (**ciprofloxacin**, **metronidazole**, **azithromycin**) carry the highest survival utility per gram in the first 30 days.

### 3.4. Step-by-Step Worked Examples (Audited Against `data/items_core.js`)

#### Worked Example A: Caloric Staple Food (`rice_white_polished_raw_1000g`)
- **Input Parameters (`data/items_core.js`):**
  - `is_food`: `true`, `energy_or_utility_base (E)`: `3650` kcal, `weight_kg (P)`: `1.0` kg, `volume_liters (Vol)`: `1.18` L, `lifecycle_units (V)`: `1825` days.
  - `cost_of_prep (CP)`: `0.65`, `psychological_factor (FP)`: `1.35`, `fragility_index (Frag)`: `1.05`.
  - Macros: `pct_kcal_protein = 0.078`, `pct_kcal_fat = 0.015`, `pct_kcal_added_sugar = 0.0`, Micros: all `false`.
- **Step 1 — Nutritional Index (`IN`):**
  ```text
  MacroFactor = (0.078 × 1.5) + (0.015 × 1.0) - (0 × 1.2) = 0.117 + 0.015 = 0.132
  IN          = Clamp(1.0 + 0.132 + 0, 0.5, 2.5) = 1.132
  ```
- **Step 2 — Base Score (`ScoreBase`):**
  ```text
  DensityTerm   = (3650 × 1.132) / (1.0 + 1.18 + 0.1) = 4131.8 / 2.28 = 1812.192982
  LongevityTerm = log₁₀(1825 + 1) = log₁₀(1826) = 3.26150077
  ScoreBase     = 1812.192982 × 3.26150077 × 0.65 × 1.35 × 1.05 = 5445.7582 pts
  ```
- **Step 3 — Final Score in `acute_collapse` (`MEC`):**
  - Category `cat_staple_foods` (`1.25×`) × tag `high_calorie_density` (`1.30×`) → **`MEC = 1.625`**.
  ```text
  ScoreFinal    = 5445.7582 × 1.625 = 8849.3571 pts
  ```

#### Worked Example B: Essential Non-Food Pharmaceutical (`amoxicillin_500mg_capsule`)
- **Input Parameters (`data/items_core.js`):**
  - `is_food`: `false` (→ **`IN = 1.0`**), `energy_or_utility_base (E)`: `4200` EEB, `weight_kg (P)`: `0.001` kg, `volume_liters (Vol)`: `0.002` L, `lifecycle_units (V)`: `1095` days.
  - `cost_of_prep (CP)`: `1.0`, `psychological_factor (FP)`: `2.35`, `fragility_index (Frag)`: `1.05`.
- **Step 1 — Base Score (`ScoreBase`):**
  ```text
  DensityTerm   = (4200 × 1.0) / (0.001 + 0.002 + 0.1) = 4200 / 0.103 = 40776.699029
  LongevityTerm = log₁₀(1095 + 1) = log₁₀(1096) = 3.03981055
  ScoreBase     = 40776.699029 × 3.03981055 × 1.0 × 2.35 × 1.05 = 305855.1134 pts
  ```
- **Step 2 — Final Score in `acute_collapse` (`MEC`):**
  - Category `cat_pharma_essential` (`1.40×`) × tag `antibiotic_systemic` (`1.70×`) → **`MEC = 2.38`**.
  ```text
  ScoreFinal    = 305855.1134 × 2.38 = 727935.1699 pts
  ```

---

## 4. Schema Contract & Scientific Standardization

Every item object in `data/items_core.js` or registered via `BarterEngine.registerCustomItems([item])` is audited by `window.BarterCore.Validator.validateItem(item)`:

| Property | Type | Constraint / Allowed Values |
| :--- | :--- | :--- |
| `id` | `string` | Lowercase `snake_case` (`/^[a-z][a-z0-9_]{2,120}$/`), non-numeric, zero commercial brands |
| `category` | `string` | `cat_staple_foods`, `cat_critical_nutrition`, `cat_spices_morale`, `cat_pharma_essential`, `cat_trauma_hygiene`, `cat_water_fire_shelter`, `cat_tools_energy_comms`, `cat_store_of_value`, `cat_essential_services` |
| `is_food` | `boolean` | `true` for caloric foods; `false` for non-foods, pharmaceuticals, tools, and services |
| `is_divisible` | `boolean` | `true` if portionable into `sub_units`; `false` if traded only as whole units |
| `sub_units` | `number` | Integer `≥ 1` (`1` for indivisible items; total `g`, `ml`, or unit count for divisible items) |
| `unit_measure` | `string` | `"g"` \| `"ml"` \| `"un"` |
| `energy_or_utility_base` | `number` | `> 0` (Real total `kcal` for foods; `EEB` within `[500, 50000]` for non-foods) |
| `weight_kg` | `number` | Physical mass in kilograms (`> 0`) |
| `volume_liters` | `number` | Physical displacement volume in liters (`≥ 0`) |
| `lifecycle_units` | `number` | Nominal shelf life of the sealed item, in days (`> 0`) |
| `cost_of_prep` | `number` | Preparation ease coefficient within `[0.5, 1.0]` |
| `psychological_factor` | `number` | Psychological / morale demand coefficient within `[1.0, 2.5]` |
| `fragility_index` | `number` | Packaging durability coefficient within `[0.7, 1.2]` |
| `tags` | `string[]` | Non-empty array of functional `snake_case` tags |

---

## 5. 1-Click Offline Launch, Physical Manual Printing & Repository Structure

No build tools, local web servers, or internet connections are required for offline operation:

- **Windows (7 / 10 / 11):** Double-click `start_windows.bat` in File Explorer.
- **Linux / macOS / FreeBSD / OpenBSD:** Run `./start_unix.sh` (or `sh ./start_unix.sh`).
- **Direct Browser Open:** Double-click `manual_generator.html` directly on any desktop or mobile file manager.
- **Bilateral Barter Simulator & Direct Trade Settlement Summary:** Inside `manual_generator.html`, select an **Offered Item (You Deliver)** and a **Requested Item (To Receive)** (or click `⇄` to swap items instantly) with their real-time remaining shelf-life days (`V`). The simulator renders a **Direct Trade Settlement Summary** (`You Deliver ➔ You Receive`), explicit item-scoped KPIs (unit exchange rate, total offered value, single unit value of the requested item, exact mathematical equivalence, recommended settlement quantity of the requested item, and physical sub-units), plus localized indivisibility/change alerts.
- **Physical Paper Manual Printing & Total Blackout Guide (Page 1 Manual + All 3 Scenarios Side-by-Side):** Inside `manual_generator.html`, select your desired language and click **"Print Field Manual"** (or press `Ctrl+P` / `Cmd+P`). The built-in `@media print` stylesheet (`A4 landscape`) strips interactive controls and prints a book-grade black-and-white field manual: **Page 1** automatically prints the complete **Analog Field Manual (`OFFLINE_MANUAL`)** (4-step protocol, 3-scenario column guide, worked field example, Shelf-Life Protocols A & B, sanitary trade-post checklist, and the multi-scenario **Pre-Calculated Fractional Change Lookup Table**), and **Pages 2+** print the 128-item catalog with **all 3 crisis scenarios side-by-side** in **Columns 8 (`1. Pure Baseline 1.0x`), 9 (`2. Acute Collapse`), and 10 (`3. Economic Reconstruction`)** along with each item's `1 g / 1 ml` sub-unit rate. See [**`docs/OFFLINE_MANUAL.md`**](./docs/OFFLINE_MANUAL.md) for the standalone analog operation manual.

### 5.1. Repository Architecture

```text
library/
├── .gitattributes                      # Enforces LF for .sh, CRLF for .bat, and GitHub Linguist rules
├── .gitignore                          # Shields repository from OS caches, editor state, and lockfiles
├── LICENSE                             # Official Apache License 2.0
├── NOTICE                              # Mandatory Attribution Notice (Section 4d — Erisson Marques)
├── README.md                           # Canonical English documentation & SDK Reference
├── CHANGELOG.md                        # Keep a Changelog v1.1.0 release history
├── CONTRIBUTING.md                     # Inbound=Outbound & 100% Maintainer Sponsorship ownership
├── package.json                        # Zero-dependency npm package manifest & metadata
├── server.js                           # Native Node.js HTTP server (zero dependencies) for local review
├── index.js                            # Unified root UMD package entry point (@barterscoreengine/library)
├── index.d.ts                          # Official TypeScript declarations for IDE & external TS projects
├── start_windows.bat                   # 1-Click Windows launcher (file:// protocol)
├── start_unix.sh                       # 1-Click POSIX launcher (Linux, macOS, BSD)
├── manual_generator.html               # Zero-dependency offline GUI, trade simulator & printable field manual
├── data/
│   └── items_core.js                   # 128 standardized items (9 categories: 100 commodities + 28 services) + Item 129+ template
├── audit_sources/
│   ├── OFFLINE_AUDIT_DOSSIER.md        # Offline scientific & decimal-step calibration ledger
│   └── offline_sources_registry.js     # UMD offline empirical snapshot (window.BarterCore.AuditSources)
├── locales/
│   ├── en-US.js                        # English (WHO INN / USP / Codex Alimentarius)
│   ├── pt-BR.js                        # Portuguese (DCB-ANVISA / TBCA-TACO)
│   ├── es-ES.js                        # Spanish (DOE-AEMPS / Código Alimentario Español)
│   ├── fr-FR.js                        # French (DCI-ANSM / Pharmacopée Française / ANSES-Ciqual)
│   ├── ru-RU.js                        # Russian (MNN-GRLS Minzdrav RF / State Pharmacopoeia XV / GOST)
│   ├── sw-KE.js                        # Swahili (WHO INN / KEML-PPB Kenya / KEBS-KFCT)
│   ├── ar-SA.js                        # Arabic (WHO INN / SFDA / SASO-GSO / Codex Alimentarius)
│   └── zh-Hans.js                      # Simplified Chinese (Chinese Pharmacopoeia ChP / GB)
├── docs/
│   ├── OFFLINE_MANUAL.md               # Standalone Analog Field Manual in English (en-US)
│   ├── OFFLINE_MANUAL.pt-BR.md         # Standalone Analog Field Manual in Brazilian Portuguese
│   ├── OFFLINE_MANUAL.es-ES.md         # Standalone Analog Field Manual in Spanish
│   ├── OFFLINE_MANUAL.fr-FR.md         # Standalone Analog Field Manual in French
│   ├── OFFLINE_MANUAL.ru-RU.md         # Standalone Analog Field Manual in Russian
│   ├── OFFLINE_MANUAL.sw-KE.md         # Standalone Analog Field Manual in Swahili
│   ├── OFFLINE_MANUAL.ar-SA.md         # Standalone Analog Field Manual in Arabic
│   ├── OFFLINE_MANUAL.zh-Hans.md       # Standalone Analog Field Manual in Simplified Chinese
│   ├── README.pt-BR.md                 # Mirrored documentation in Brazilian Portuguese
│   ├── README.es-ES.md                 # Mirrored documentation in Spanish
│   ├── README.fr-FR.md                 # Mirrored documentation in French
│   ├── README.ru-RU.md                 # Mirrored documentation in Russian
│   ├── README.sw-KE.md                 # Mirrored documentation in Swahili
│   ├── README.ar-SA.md                 # Mirrored documentation in Arabic
│   └── README.zh-Hans.md               # Mirrored documentation in Simplified Chinese
└── src/
    ├── barter_engine.js                # Zero-dependency UMD Core Mathematical & Trade Engine
    └── validator.js                    # Zero-dependency UMD Schema, Dataset & Locale Auditor
```

---

## 6. Developer Integration Guide & API Reference

`BarterEngine` features a hybrid SDK architecture with full JSDoc IntelliSense annotations (`@param`, `@returns`, `@example`). You can either instantiate isolated engine instances with `new BarterEngine(options)` or invoke static methods directly on `BarterEngine`.

### 6.1. Scenario A: Browser / Offline HTML / Mobile WebView via `<script>`
Load the UMD files in order. All modules attach automatically to `window.BarterCore` without CORS issues on the `file://` protocol:

```html
<!-- Load Validator, Core Dataset, Offline Audit Registry, Desired Locale Packs, Engine, and Unified Aggregator -->
<script src="src/validator.js"></script>
<script src="data/items_core.js"></script>
<script src="audit_sources/offline_sources_registry.js"></script>
<script src="locales/en-US.js"></script>
<script src="locales/pt-BR.js"></script>
<script src="src/barter_engine.js"></script>
<script src="index.js"></script>

<script>
  const { BarterEngine, Validator, ItemsCore, AuditSources } = window.BarterCore;

  const engine = new BarterEngine({
    items: ItemsCore,
    locale: 'en-US',
    crisisPhase: 'acute_collapse'
  });

  const itemScore = engine.evaluateItem('water_potable_sealed_1000ml');
  console.log('Item Name:', engine.translate('water_potable_sealed_1000ml', 'name'));
  console.log('Final Score:', itemScore.final_score); // 16458.3288
</script>
```

### 6.2. Scenario B: ES Modules (`import`) & Node.js / CommonJS (`require`)
Install directly from the official GitHub repository ([`https://github.com/barterscoreengine/library`](https://github.com/barterscoreengine/library)) or import the local UMD files without any transpilation step:

```bash
npm install github:barterscoreengine/library
# Or for offline/embedded clones: git clone https://github.com/barterscoreengine/library.git
```

```javascript
// 1. ES Modules via Package (@barterscoreengine/library) — React, Vue, Vite, Next.js, TypeScript, Node.js
import { BarterEngine, Validator, ItemsCore, Locales, AuditSources } from '@barterscoreengine/library';

// Alternative ES Modules via local cloned files:
// import { BarterEngine } from './src/barter_engine.js';

// Alternative CommonJS (Classic Node.js / CLI / Electron):
// const { BarterEngine, Validator, ItemsCore, Locales, AuditSources } = require('@barterscoreengine/library');

const engine = new BarterEngine({
  items: ItemsCore,
  locales: Locales,
  locale: 'en-US',
  crisisPhase: 'acute_collapse'
});

engine.setLocale('en-US');
engine.setCrisisPhase('acute_collapse');
```

### 6.3. Practical Example 1: Bilateral Trade Simulation (`calculateTrade`)
Simulate an exchange between **2 packs of Polished White Rice (1000g)** with real-time shelf-life depreciation (`offerRemainingDays: 730` instead of nominal `1825` days) for **Amoxicillin 500mg Capsules** during an infectious outbreak and severe drought (`contextModifiers`):

```javascript
const tradeResult = engine.calculateTrade(
  'rice_white_polished_raw_1000g', // Offered item semantic ID
  2,                               // offerQuantity (2 atomic packs of 1000g)
  'amoxicillin_500mg_capsule',     // Requested item semantic ID
  {
    scenario: 'acute_collapse',
    offerRemainingDays: 730,       // Real-time shelf-life depreciation (730 days remaining)
    requestRemainingDays: 1095,    // Nominal shelf-life on requested item
    contextModifiers: {
      antibiotic_systemic: 2.2,    // Infectious outbreak surge multiplier
      hydration: 2.5               // Extreme drought surge multiplier
    }
  }
);

console.log(JSON.stringify(tradeResult, null, 2));
```

**Exact Audited JSON Structure Returned by `calculateTrade`:**
```json
{
  "is_executable": true,
  "scenario_id": "acute_collapse",
  "exchangeRate": 0.0082,
  "exactUnitsPossible": 0.0165,
  "recommendedUnits": 1,
  "tradeImbalanceWarning": "Requested item \"amoxicillin_500mg_capsule\" is indivisible. Rounding from 0.016 to 1 whole unit(s) creates a +5961.52% value surplus (926492.54 pts above your offer). Consider adding divisible small-unit items to balance the trade.",
  "exchange_rate_1_to_x": 0.0082,
  "offer": {
    "item_id": "rice_white_polished_raw_1000g",
    "is_divisible": true,
    "requested_input_quantity": 2,
    "quantity": 2,
    "sub_units_total": 2000,
    "unit_measure": "g",
    "unit_score": 7770.6029,
    "total_score": 15541.2058,
    "lifecycle_effective": 730,
    "depreciation_pct": 12.19
  },
  "request": {
    "item_id": "amoxicillin_500mg_capsule",
    "is_divisible": false,
    "exact_quantity": 0.0165,
    "recommended_quantity": 1,
    "recommended_sub_units": 1,
    "unit_measure": "un",
    "unit_score": 942033.7493,
    "executed_total_score": 942033.7493,
    "lifecycle_effective": 1095,
    "depreciation_pct": 0
  },
  "trade_imbalance": {
    "has_imbalance": true,
    "is_target_indivisible": true,
    "exact_quantity": 0.0165,
    "rounded_quantity": 1,
    "value_delta_points": 926492.5435,
    "imbalance_percentage": 5961.52,
    "imbalance_direction": "surplus",
    "severity": "high",
    "message": "Requested item \"amoxicillin_500mg_capsule\" is indivisible. Rounding from 0.016 to 1 whole unit(s) creates a +5961.52% value surplus (926492.54 pts above your offer). Consider adding divisible small-unit items to balance the trade."
  }
}
```

### 6.4. Practical Example 2: Programmatic Extension of Item 129+ (`registerCustomItems` & `AuditSources`)
When integrating the SDK into an external application, you can extend the canonical 128-item catalog (`001–128`) with regional items (`Item 129+`) using `mode: 'merge'` and `strict: true`, while recording Tier 2 audit traceability via `AuditSources.registerCustomAuditSource`:

```javascript
const regionalDataset = [
  {
    id: 'doxycycline_hyclate_100mg_capsule',
    category: 'cat_pharma_essential',
    is_food: false,
    is_divisible: false,
    sub_units: 1,
    unit_measure: 'un',
    energy_or_utility_base: 4600,
    weight_kg: 0.001,
    volume_liters: 0.002,
    lifecycle_units: 1460,
    cost_of_prep: 1.0,
    psychological_factor: 2.35,
    fragility_index: 1.1,
    pct_kcal_protein: 0.0,
    pct_kcal_fat: 0.0,
    pct_kcal_added_sugar: 0.0,
    high_vit_c: false,
    high_sodium_potassium: false,
    high_calcium_iron: false,
    nutrition: {
      pct_kcal_protein: 0.0,
      pct_kcal_fat: 0.0,
      pct_kcal_added_sugar: 0.0,
      high_vit_c: false,
      high_sodium_potassium: false,
      high_calcium_iron: false
    },
    tags: ['antibiotic_systemic', 'who_essential_medicine', 'blister_sealed']
  }
];

// 1. Merge Item 129+ into the canonical 128-item catalog with strict schema validation
const mergeReport = engine.registerCustomItems(regionalDataset, {
  mode: 'merge',
  strict: true
});
console.log('Merged items:', mergeReport.registered_count, 'Total items:', mergeReport.total_registry_size);

// 2. Register Tier 2 audit traceability (preserving the immutable 001–128 core ledger)
AuditSources.registerCustomAuditSource({
  index: 129,
  id: 'doxycycline_hyclate_100mg_capsule',
  category: 'cat_pharma_essential',
  source_code: 'WHO_EML_23',
  baseline_note: 'WHO EML 23rd List ATC J01AA02 (Doxycycline 100mg capsule); EEB = 4,600'
});
```

### 6.5. Legal Attribution Notice (Apache License 2.0 — Section 4d)
> **Mandatory Notice for External Developers & Distributors:**
> In compliance with [**Section 4 of the Apache License, Version 2.0**](https://www.apache.org/licenses/LICENSE-2.0), any external application, mobile app, desktop software, firmware, or printed derivative work that distributes or embeds the **BarterScore Engine** (in whole or in part, whether in source or object/bundled form) **MUST** retain and include copies of both the root [`LICENSE`](./LICENSE) and [`NOTICE`](./NOTICE) files, preserving explicit credit to the **BarterScore Engine** project and its author/maintainer **Erisson Marques ([`https://github.com/erissontech`](https://github.com/erissontech))**.

---

## 7. Adding Item 129+ or a New Localization Pack

### Adding Item 129+
1. Open `data/items_core.js` and copy the commented template block at the bottom of `ITEMS_CORE`.
2. Assign a brand-free, lowercase `snake_case` semantic `id` and complete all physical and nutritional parameters following the Calibration Rubric in Section 3.
3. Verify zero errors and zero warnings using `window.BarterCore.Validator.validateDataset(window.BarterCore.ItemsCore)`.
4. **Register Custom Audit Traceability (Tier 2 Separation):** Keep the canonical `001–128` core ledger untouched and record the scientific or regional regulatory source of your new `Item 129+` in **Section 4 (`Custom & Regional User Audit Ledger`)** of [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](./audit_sources/OFFLINE_AUDIT_DOSSIER.md) and/or programmatically via `window.BarterCore.AuditSources.registerCustomAuditSource({ index: 129, id, category, source_code, baseline_note })`.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│                EXPANSION WORKFLOW: ADDING ITEM 129+                           │
└───────────────────────────────────────────────────────────────────────────────┘

  [ 1. PHYSICS & MATHEMATICS ]            [ 2. LOCALIZATION / DICTIONARIES ]
  📄 data/items_core.js                   📄 locales/[lang].js (or in-memory)
  ├─ Copy template at bottom of file      ├─ Add matching `id` under `items`
  ├─ Set brand-free snake_case `id`       │  with `name` and `description`
  └─ Fill E, P, Vol, V, CP, FP, Frag      └─ (If omitted, auto-fallbacks to id)
                 │                                       │
                 └───────────────────┬───────────────────┘
                                     ▼
                     [ 3. SCHEMA & INTEGRITY VALIDATION ]
                     ⚙️ src/validator.js
                     └─ Run `Validator.validateDataset(ItemsCore)`
                        ├─ ❌ Errors/Warnings ──► Fix bounds or tags
                        └─ ✅ 0 errors / 0 warnings (100% deterministic)
                                     │
                                     ▼
               [ 4. TWO-TIER AUDIT LEDGER (TIER 2: ITEMS 129+) ]
               📋 audit_sources/OFFLINE_AUDIT_DOSSIER.md (Section 4)
               ⚙️ audit_sources/offline_sources_registry.js
               ├─ Tier 1 (Items 001–128): Remains IMMUTABLE
               └─ Tier 2 (Items 129+): Record regional/empirical source
                  via Section 4 table or `registerCustomAuditSource(...)`
```

### Adding a New Localization Pack (`locales/[lang].js`)
1. Duplicate `locales/en-US.js` to `locales/<BCP47-code>.js` (for example, `locales/fr-FR.js` following [IETF BCP 47](https://www.rfc-editor.org/info/bcp47)).
2. Translate `categories`, `scenarios`, `ui`, and `items` using authentic regulatory and commercial nomenclature for that region.
3. Register the dictionary via `window.BarterCore.BarterEngine.registerLocale('fr-FR', dictionary)` and load `<script src="locales/fr-FR.js"></script>` in `manual_generator.html`. Any untranslated key automatically falls back to `en-US` and then to the technical `id`.

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│           LOCALIZATION WORKFLOW: NEW LANGUAGE & FALLBACK CHAIN                │
└───────────────────────────────────────────────────────────────────────────────┘

  [ 1. CLONE BASE PACK ]        [ 2. TECHNICAL TRANSLATION ]  [ 3. REGISTRATION ]
  📄 locales/en-US.js    ──►    📄 locales/fr-FR.js    ──►    ⚙️ BarterEngine
  (Duplicate base file)         (IETF BCP 47 standard:        ├─ `registerLocale('fr-FR', dict)`
                                 translate `categories`,      └─ Include `<script>` in
                                 `scenarios`, `ui`, `items`      `manual_generator.html`
                                 with regulated/INN terms)
                                             │
                                             ▼
  ┌─────────────────────────────────────────────────────────────────────────┐
  │       AUTOMATIC FALLBACK CHAIN (NEVER BREAKS THE UI OR MANUAL)          │
  │                                                                         │
  │   Active Locale (`fr-FR`) ──► Default English (`en-US`) ──► Technical ID│
  │     (If key is present)         (If translation missing)   (`snake_case`)│
  └─────────────────────────────────────────────────────────────────────────┘
```

---

## 8. License & Governance

- **License:** Distributed under the [Apache License, Version 2.0](./LICENSE) ([Official ASF Text](https://www.apache.org/licenses/LICENSE-2.0)).
- **Attribution Notice:** Governed by the root [NOTICE](./NOTICE) file (Apache 2.0 Section 4(d)), crediting **Erisson Marques ([`https://github.com/erissontech`](https://github.com/erissontech))**.
- **Changelog Format:** Maintained in [CHANGELOG.md](./CHANGELOG.md) following [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/).
- **Contributions:** Governed by [CONTRIBUTING.md](./CONTRIBUTING.md) under the explicit **Inbound = Outbound** clause and 100% maintainer ownership of sponsorships and donations.
