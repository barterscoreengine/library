# Offline Scientific & Calibration Audit Dossier (`audit_sources/`)

> **Offline Verification Guarantee (`file://` Compatible):**
> This dossier and its companion UMD data module (`audit_sources/offline_sources_registry.js` -> `window.BarterCore.AuditSources`) store the exact empirical queries, official document identifiers, nutrient compositions, pharmaceutical posologies, occupational/clinical labor metrics, decimal-step calibration rules, and the **complete 128-item traceability matrix (`001` to `128`)** locally inside the repository. Auditors, developers, and field operators can verify the mathematical basis of every item **100% offline without internet access**.

---

## 0. Perennial Offline Audit & Link-Rot Resilience Protocol (The Immutable Triad)

Government portals, regulatory databases, and international agency URLs inevitably suffer from **Link Rot** (URL restructuring, server migration, or total internet blackout during civil collapse). Therefore, **the BarterScore Engine never relies on a live URL as its sole proof of validity**.

Every item and scientific reference in this repository is anchored by the **Immutable Audit Triad**:

1. **Pillar 1 — Permanent Bibliographic / Regulatory Identifier (`source_code`):**
   - Every item is indexed by an immutable, non-URL catalog code that exists in physical university libraries, printed pharmacopeias, and international standards registries:
     - **Foods:** `USDA FoodData Central FDC ID / NDB Number`, `TBCA / TACO Code`, and `FAO/WHO Codex Alimentarius Standard (CXS)`.
     - **Pharmaceuticals & Trauma:** `WHO Model List of Essential Medicines Document Code (WHO/MHP/HPS/EML/2023.02)`, `WHO Anatomical Therapeutic Chemical (ATC) Code`, `WHO/FCH/CAH/06.1`, `WHO IEHK 2017`, and `US DoD CoTCCC Guidelines`.
     - **Water, Energy, Tools & Bullion:** `WHO GDWQ ISBN 978-92-4-154995-0`, `Sphere WASH Standard 2.1`, `IEC 60086 / IEC 61960`, `CDC/NIOSH 42 CFR Part 84`, `ISO / ASTM / MIL-STD`, and `LBMA Good Delivery / ISO 4217`.
2. **Pillar 2 — Self-Contained Local Data Snapshot (`baseline_note` & `items_core.js`):**
   - The exact quantitative values extracted from those standards (`kcal/100g`, macronutrient percentages, active mg posology, molarity, and shelf-life days) are permanently frozen in plain text inside this dossier and in `audit_sources/offline_sources_registry.js`. Even if the internet ceases to exist permanently, an auditor can recompute every `IN`, `ScoreBase`, and `ScoreFinal` locally.
3. **Pillar 3 — Archival Recovery Protocol (If an Official URL Breaks in the Future):**
   - If any 1-click verification URL returns `404 Not Found` or changes domain in future decades:
     - **Step A (Wayback Machine / Internet Archive):** Prepend `https://web.archive.org/web/*/` to the original URL (for example: `https://web.archive.org/web/*/https://fdc.nal.usda.gov/food-details/169756/nutrients`).
     - **Step B (Canonical Code Search):** Query any scientific library, national pharmacopeia, or offline archive using the **Pillar 1 Permanent Identifier** (e.g., `"FDC ID 169756"`, `"ATC J01CA04"`, `"WHO/FCH/CAH/06.1"`, `"Codex CXS 198-1995"`).

---

## 1. Physical Meaning of `1 BarterScore Point (1 pt)` & Why Item B Has 2x the Points of Item A

### 1.1. What is `1 pt`? (The Atomic Unit of the Equation)
In the **BarterScore Engine**, **`1.0000 pt`** is not an arbitrary number. By dimensional analysis of the official formula:

```text
ScoreBase = ( (E × IN) / (P + Vol + 0.1) ) × log₁₀(V + 1) × CP × FP × Frag
```

**`1 BarterScore Point (1 pt)`** physically represents:
> **1 Effective Kilocalorie of Survival Utility (`E × IN = 1`) per unit of Gravimetric-Volumetric Transport Burden (`P + Vol + 0.1 = 1.0`) sustained across 1 Logarithmic Decade of Shelf Life (`V = 9 days` → `log₁₀(10) = 1.0`) at neutral operational readiness (`CP = 1.0`, `FP = 1.0`, `Frag = 1.0`).**

### 1.2. Exact Mathematical Conditions That Make One Item Score `2x` Another
Because the formula is a deterministic product of 6 independent physical and operational factors, Item B receives **twice (`2.0x`)** the points of Item A when any of the following objective physical ratios holds (all other variables being equal):
1. **Double Caloric or Metabolic-Saving Utility (`E_B = 2 × E_A`):** Item B delivers twice the metabolizable energy (`kcal`) or prevents twice the biological caloric loss (`EEB`).
2. **Half the Transport Burden (`(P_B + Vol_B + 0.1) = 0.5 × (P_A + Vol_A + 0.1)`):** Item B packs the same survival energy into half the combined weight + volume + damping constant.
3. **Squared Shelf-Life Horizon (`log₁₀(V_B + 1) = 2 × log₁₀(V_A + 1)`):** Because shelf life is evaluated on a base-10 logarithmic scale, an item lasting **1,000 days** (`log₁₀(1001) ≈ 3.00`) scores **2.0×** the longevity factor of an item lasting **31 days** (`log₁₀(32) ≈ 1.50`).
4. **Operational Readiness Product (`(CP_B × FP_B × Frag_B) = 2 × (CP_A × FP_A × Frag_A)`):** For example, a ready-to-eat item in a sealed metal can (`CP = 1.0`, `Frag = 1.15`) with high crisis demand (`FP = 1.80`) yields a combined operational multiplier of **2.07×**, whereas a raw grain in a thin bag requiring 60 minutes of boiling fuel (`CP = 0.55`, `FP = 1.35`, `Frag = 0.85`) yields **0.63×**.

---

## 2. Granular Decimal-Step Calibration Rubric (Why Exact Decimal Values Are Assigned)

To eliminate subjectivity within parameter ranges, every decimal step in `data/items_core.js` follows strict engineering tiers:

### 2.1. `cost_of_prep` (`CP` in `[0.50, 1.00]`) — Fuel & Water Preparation Penalty
| Assigned Value | Engineering Criterion (Boiling Time, Fuel & Water Burden) | Representative Catalog Examples |
| :---: | :--- | :--- |
| **`1.00`** | **Zero Preparation:** Ready for immediate ingestion or use straight from the package. | `amoxicillin_500mg_capsule`, `water_potable_sealed_1000ml`, `fish_sardine_canned_oil_125g` |
| **`0.90 – 0.96`** | **Cold Dissolution / Instant Mix (< 2 min):** Requires mixing with potable water at ambient temperature or direct culinary addition; zero thermal fuel. | `oral_rehydration_salts_who_sachet_27_9g`, `milk_powder_whole_400g`, `flour_cassava_dry_1000g` |
| **`0.80 – 0.88`** | **Rapid Hydration / Light Heating (2–5 min):** Can be soaked or heated briefly with minimal fuel. | `oats_rolled_whole_500g`, `infant_formula_powder_stage1_400g`, `coffee_roasted_ground_vacuum_500g` |
| **`0.72 – 0.78`** | **Short Simmer / Pan Preparation (8–12 min):** Quick-cooking legumes, pasta, or flaked cornmeal requiring moderate heat. | `lentils_dry_raw_500g`, `pasta_wheat_dry_500g`, `cornmeal_flaked_dry_500g` |
| **`0.65 – 0.68`** | **Standard Boiling / Desalting (15–20 min + 2:1 Water):** Polished white rice or salted cured meat requiring sustained boiling. | `rice_white_polished_raw_1000g`, `meat_bovine_cured_salted_500g` |
| **`0.50 – 0.58`** | **Intensive Boiling / Multi-Stage Cultivation (45–60 min + 3:1 Water):** Hard dry legumes, raw wheat flour baking, or agricultural seed cycle. | `beans_common_dry_1000g`, `chickpeas_dry_raw_500g`, `flour_wheat_enriched_1000g`, `seeds_open_pollinated_vegetable_mix_50g` |

### 2.2. `psychological_factor` (`FP` in `[1.00, 2.50]`) — Demand Inelasticity & Morale
| Assigned Value | Engineering Criterion (Behavioral & Clinical Urgency) | Representative Catalog Examples |
| :---: | :--- | :--- |
| **`1.20 – 1.30`** | **Utilitarian Baseline:** Raw cooking inputs or supplementary culinary powders with low standalone morale impact. | `gelatin_unflavored_powder_50g`, `lentils_dry_raw_500g`, `flour_wheat_enriched_1000g` |
| **`1.35 – 1.45`** | **Core Satiety Staples:** Primary caloric staples providing household food security. | `rice_white_polished_raw_1000g`, `beans_common_dry_1000g`, `pasta_wheat_dry_500g` |
| **`1.50 – 1.85`** | **Hygiene Dignity, Analgesia & Comfort Foods:** Prevents morale collapse, pain, or sanitary degradation. | `fish_sardine_canned_oil_125g`, `honey_bee_pure_500g`, `loratadine_10mg_tablet` |
| **`1.90 – 2.25`** | **Neurochemical Withdrawal / High-Liquidity Comfort & Antisepsis:** Caffeine, cocoa, potable water, and topical antiseptics with high siege liquidity. | `coffee_roasted_ground_vacuum_500g`, `chocolate_dark_cocoa_60pct_100g`, `povidone_iodine_10pct_topical_100ml` |
| **`2.30 – 2.40`** | **Life-Saving Anti-Infectives, Water Disinfection & High-Liquidity Barter Units:** Prevents septic/waterborne mortality or serves as primary siege fractional currency. | `amoxicillin_500mg_capsule`, `water_purification_nadcc_tablet_unit`, `tobacco_cigarette_filtered_unit` |
| **`2.45 – 2.50`** | **Absolute Survival Ceiling:** Immediate arterial hemorrhage control, neonatal nutrition, 0.1-micron filtration, or invasive enteropathogen control. | `tourniquet_tactical_arterial_unit`, `infant_formula_powder_stage1_400g`, `filter_water_hollow_fiber_0_1micron_unit` |

### 2.3. `fragility_index` (`Frag` in `[0.70, 1.20]`) — Packaging & Transport Resilience
| Assigned Value | Engineering Criterion (Mechanical, Moisture & Rodent Resistance) | Representative Catalog Examples |
| :---: | :--- | :--- |
| **`0.75 – 0.80`** | **Exposed / Hydrophilic / Brittle:** Paper rolls, unshielded cigarettes, fragile biscuits, or optical lenses. | `paper_toilet_cellulose_roll_30m`, `biscuit_wheat_salted_dry_400g`, `eyeglasses_reading_convex_diopter_plus_2_0` |
| **`0.85 – 0.90`** | **Standard Flexible Poly Bag / Glass Bottle / Liquid Dropper:** Susceptible to puncture, impact, or UV degradation. | `pasta_wheat_dry_500g`, `oil_vegetable_refined_900ml`, `sodium_hypochlorite_2_5pct_1000ml` |
| **`0.95 – 1.05`** | **Thick Sealed Pouch / HDPE Bottle / Blister Pack:** Resistant to humidity and normal rucksack handling. | `rice_white_polished_raw_1000g`, `amoxicillin_500mg_capsule`, `povidone_iodine_10pct_topical_100ml` |
| **`1.10 – 1.18`** | **Hermetic Metal Can / Laminated Foil Blister / Steel Multi-Tool:** Impervious to water, rodents, and moderate crushing. | `fish_sardine_canned_oil_125g`, `ciprofloxacin_500mg_tablet`, `multitool_pliers_stainless_folding_unit` |
| **`1.20`** | **Indestructible Solid Alloy / Full-Tang Steel / Noble Metal Bullion:** Zero environmental degradation over decades. | `tourniquet_tactical_arterial_unit`, `knife_fixed_blade_carbon_steel_fulltang`, `gold_bullion_999_fine_fractional_1g` |

### 2.4. `energy_or_utility_base` (`EEB` in `[500, 50000]`) & Non-Caloric Metabolic Consumables Rule (`is_food: false`)
No government agency publishes a digestive kilocalorie (`kcal`) value for a tourniquet, an antibiotic capsule, a solar panel, or a liter of pure drinking water. To allow objective barter ratios between food and non-food survival goods on a single deterministic scale, the engine defines **`EEB` (*Equivalent Energy Base*)** as the **Metabolic Expenditure Saved / Biological Caloric Deficit Prevented** (in `kcal` equivalents):

| `EEB` Tier Range | Thermodynamic & Clinical Criterion (Metabolic Loss Prevented / Labor Saved) | Representative Catalog Examples (`data/items_core.js`) |
| :---: | :--- | :--- |
| **`500 – 3,000 EEB`** | **Single-Use Consumables & Fractional Units:** Mitigates acute symptoms, provides single-dose water disinfection (`20 L`), or prevents minor physical/thermal exertion. | `tobacco_cigarette_filtered_unit` (`650`), `paracetamol_500mg_tablet` (`1600`), `gauze_sterile_compress_7_5cm_unit` (`2200`), `water_potable_sealed_1000ml` (`2400`), `water_purification_nadcc_tablet_unit` (`2600`), `battery_alkaline_lr6_aa_1_5v_unit` (`2800`) |
| **`3,000 – 10,000 EEB`** | **Systemic Anti-Infectives, Rehydration, Antiseptics & Ignition Tools:** Prevents septic fever (`39.5 °C` for 7 days drains `3,500–10,000+ kcal`), hypovolemic shock, or manual fire-making exhaustion. | `amoxicillin_500mg_capsule` (`4200`), `ciprofloxacin_500mg_tablet` (`5000`), `oral_rehydration_salts_who_sachet_27_9g` (`5200`), `povidone_iodine_10pct_topical_100ml` (`6800`), `lighter_butane_piezo_standard_unit` (`7500`), `salt_sodium_chloride_iodized_1000g` (`9500`) |
| **`10,000 – 25,000 EEB`** | **Life-Saving Trauma Devices, Rechargeable Energy & Bulk Chemical WASH:** Halts fatal arterial exsanguination, stores cumulative multi-cycle DC energy (`> 5.5 kWh`), or disinfects `10,000 L` of water. | `battery_lithium_ion_18650_3_7v_3000mah_unit` (`12500`), `tarp_polyethylene_waterproof_3x3m_unit` (`14000`), `sodium_hypochlorite_2_5pct_1000ml` (`14500`), `ferrocerium_ignition_rod_8mm_unit` (`16000`), `tourniquet_tactical_arterial_unit` (`18500`), `silver_bullion_999_fine_1_troy_oz_31_1g` (`22000`) |
| **`25,000 – 50,000 EEB`** | **Multi-Year Survival Capital Goods & High-Density Store of Value:** Replaces thousands of hours of manual labor, filters `> 100,000 L` of water, generates renewable off-grid power, or preserves cross-border capital. | `microsd_flash_storage_64gb_offline_wiki_unit` (`25000`), `multitool_pliers_stainless_folding_unit` (`26000`), `knife_fixed_blade_carbon_steel_fulltang` (`28000`), `seeds_open_pollinated_vegetable_mix_50g` (`30000`), `filter_water_hollow_fiber_0_1micron_unit` (`32000`), `panel_solar_monocrystalline_usb_5v_10w_unit` (`38000`), `radio_transceiver_vhf_uhf_dualband_unit` (`42000`), `gold_bullion_999_fine_fractional_1g` (`50000`) |

> **Audit Rule for Non-Caloric Metabolic & Functional Consumables (`is_food: false` in Categories 1 & 3):**
> Nine human-consumable items in `cat_staple_foods` and `cat_spices_morale` — **`water_potable_sealed_1000ml`** (`#020`), **`salt_sodium_chloride_iodized_1000g`** (`#026`), **`coffee_roasted_ground_vacuum_500g`** (`#028`), **`coffee_instant_soluble_granules_50g`** (`#029`), **`vinegar_acetic_acid_4pct_750ml`** (`#032`), **`sodium_bicarbonate_pure_100g`** (`#035`), **`tea_camellia_sinensis_dry_50g`** (`#038`), **`tobacco_cigarette_filtered_unit`** (`#039`), and **`alcohol_ethanol_potable_40pct_500ml`** (`#040`) — are intentionally configured with **`is_food: false`** (`IN = 1.0`) and evaluated via **`EEB`** instead of dietary `kcal`.
> - *Mathematical Justification:* In USDA/TACO tables, pure water, sodium chloride, and sodium bicarbonate contain **`0 kcal`**, and brewed coffee, tea, and 4% vinegar contain negligible calories (`< 20 kcal/100g`). Evaluating them with `is_food: true` (`E = 0 kcal`) would yield **`ScoreBase = 0 pts`**, falsely assigning zero survival value to drinking water and essential electrolytes. Conversely, 40% distilled ethanol contains `~7 kcal/g` of hepatotoxic non-nutritive alcohol calories whose real crisis value lies in antisepsis, solvent extraction, and siege barter liquidity rather than caloric nutrition.

### 2.5. Mathematical Structural Constants Without External Tables (`IN`, `ε = 0.1`, `log₁₀(V + 1)`, `MEC`)
1. **Nutritional Index (`IN`) Macro/Micro Weights (`+1.5` Protein, `+1.0` Fat, `-1.2` Added Sugar, `+0.3 / +0.2 / +0.2` Micros, Clamped to `[0.5, 2.5]`):**
   - *Engineering Justification:* Raw kilocalories alone cannot distinguish between tissue-repairing protein/essential lipids and empty refined sucrose. Protein (`+1.5`) and lipids (`+1.0`) receive positive weighting for structural amino acid preservation and caloric density, whereas added refined sugar receives a `-1.2` penalty for glycemic insulin spikes without structural nutrition (bounded at a `0.5` floor because pure glucose/sucrose still rescues acute hypoglycemia and preserves food).
2. **Gravimetric-Volumetric Damping Constant (`ε = 0.1` in `P + Vol + 0.1`):**
   - *Engineering Justification:* Without `+ 0.1` in the denominator, a `1 g` antibiotic capsule (`P = 0.001 kg`, `Vol = 0.002 L`) would divide `E` by `0.003` (`×333.3` asymptotic blow-up). Adding `ε = 0.1` stabilizes the portability boundary so a `1 g` micro-item achieves at most a realistic `~9.8×` portability advantage over a `0.5 kg` bulk item.
3. **Logarithmic Shelf-Life Scaling (`log₁₀(V + 1)`):**
   - *Engineering Justification:* Under linear scaling, a `36,500-day` (100-year) gold bar would outscore a `365-day` food ration by `100×` purely on longevity. Base-10 logarithmic scaling compresses `365 days` (`2.56`) vs. `36,500 days` (`4.56`) into a bounded `1.78×` durability premium.
4. **External Context Modifiers (`MEC`: `0.01x` in `acute_collapse` vs. `5.00x` in `economic_reconstruction` for `cat_store_of_value`):**
   - *Engineering Justification:* Formalizes the classical economic *Water-Diamond Paradox* observed empirically during the **Siege of Sarajevo (1992–1996)** and modern urban sieges (ICRC `4249`), where precious metals suffer acute demonetization (`0.01×`) when food and antibiotics are scarce, but recover dominant purchasing power (`5.00×`) once trade corridors reopen.

---

## 3. Complete 100-Item Scientific & Regulatory Traceability Matrix (`001` to `100`)

Every item in `data/items_core.js` is audited below with its permanent regulatory/scientific identifier (USDA FoodData Central `FDC ID`, TBCA/TACO code, Codex Alimentarius standard, WHO `ATC` / `EML 23rd List` code, `WHO/FCH/CAH`, `Sphere WASH 2.1`, `IEC`, `NIOSH`, or `LBMA`) and its exact offline snapshot metrics.

### 3.1. Category 1: `cat_staple_foods` (Items `001` to `020`)

| # | Semantic Item ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Macros) |
| :---: | :--- | :--- | :--- |
| **001** | `rice_white_polished_raw_1000g` | `USDA FDC ID: 169756` (`NDB 20444`) · `Codex CXS 198-1995` | `E: 3650 kcal` (`365 kcal/100g`), `P: 1.0 kg`, `Vol: 1.18 L`, `V: 1825 d`, `CP: 0.65`, `FP: 1.35`, `Frag: 1.05` · Prot `7.8%`, Fat `1.5%` |
| **002** | `beans_common_dry_1000g` | `USDA FDC ID: 173734` (`NDB 16014`) · `TBCA C0113A` · `Codex CXS 171-1989` | `E: 3290 kcal` (`329 kcal/100g` TBCA/USDA avg), `P: 1.0 kg`, `Vol: 1.25 L`, `V: 1095 d`, `CP: 0.55`, `FP: 1.35`, `Frag: 1.05` · Prot `24.5%`, Fat `3.5%`, High K/Na & Ca/Fe |
| **003** | `lentils_dry_raw_500g` | `USDA FDC ID: 172420` (`NDB 16069`) · `Codex CXS 171-1989` | `E: 1760 kcal` (`352 kcal/100g`), `P: 0.5 kg`, `Vol: 0.60 L`, `V: 1460 d`, `CP: 0.72`, `FP: 1.25`, `Frag: 1.05` · Prot `28.0%`, Fat `2.8%`, High K & Fe |
| **004** | `chickpeas_dry_raw_500g` | `USDA FDC ID: 173756` (`NDB 16056`) · `Codex CXS 171-1989` | `E: 1890 kcal` (`378 kcal/100g`), `P: 0.5 kg`, `Vol: 0.65 L`, `V: 1460 d`, `CP: 0.58`, `FP: 1.25`, `Frag: 1.05` · Prot `21.2%`, Fat `14.3%`, High K & Ca/Fe |
| **005** | `pasta_wheat_dry_500g` | `USDA FDC ID: 169736` (`NDB 20120`) · `Codex CXS 178-1991` | `E: 1855 kcal` (`371 kcal/100g`), `P: 0.5 kg`, `Vol: 0.85 L`, `V: 1095 d`, `CP: 0.75`, `FP: 1.40`, `Frag: 0.90` · Prot `13.5%`, Fat `3.6%` |
| **006** | `flour_cassava_dry_1000g` | `TACO 4th Ed. #016` / `TBCA C0064A` · `Codex CXS 176-1989` | `E: 3610 kcal` (`361 kcal/100g`), `P: 1.0 kg`, `Vol: 1.45 L`, `V: 730 d`, `CP: 0.95` (ready toasted), `FP: 1.25`, `Frag: 0.95` · Prot `1.8%`, Fat `0.8%` |
| **007** | `flour_wheat_enriched_1000g` | `USDA FDC ID: 169761` (`NDB 20081`) · `Codex CXS 152-1985` | `E: 3640 kcal` (`364 kcal/100g`), `P: 1.0 kg`, `Vol: 1.55 L`, `V: 365 d`, `CP: 0.55`, `FP: 1.30`, `Frag: 0.90` · Prot `11.3%`, Fat `2.5%`, High Fe (enriched) |
| **008** | `cornmeal_flaked_dry_500g` | `USDA FDC ID: 169698` (`NDB 20016`) · `Codex CXS 155-1985` | `E: 1805 kcal` (`361 kcal/100g`), `P: 0.5 kg`, `Vol: 0.85 L`, `V: 540 d`, `CP: 0.78`, `FP: 1.30`, `Frag: 0.95` · Prot `8.8%`, Fat `4.2%` |
| **009** | `oats_rolled_whole_500g` | `USDA FDC ID: 173904` (`NDB 08120`) · `Codex CXS 201-1995` | `E: 1945 kcal` (`389 kcal/100g`), `P: 0.5 kg`, `Vol: 1.10 L`, `V: 730 d`, `CP: 0.90`, `FP: 1.30`, `Frag: 0.95` · Prot `14.5%`, Fat `16.0%`, High Fe |
| **010** | `milk_powder_whole_400g` | `USDA FDC ID: 171279` (`NDB 01212`) · `Codex CXS 207-1999` | `E: 1984 kcal` (`496 kcal/100g`), `P: 0.45 kg`, `Vol: 0.85 L`, `V: 730 d`, `CP: 0.92`, `FP: 1.65`, `Frag: 1.05` · Prot `21.2%`, Fat `48.4%`, High K/Na & Ca |
| **011** | `oil_vegetable_refined_900ml` | `USDA FDC ID: 171411` (`NDB 04044`) · `Codex CXS 210-1999` | `E: 7452 kcal` (`884 kcal/100g` × `843g`), `P: 0.86 kg`, `Vol: 0.95 L`, `V: 540 d`, `CP: 0.95`, `FP: 1.40`, `Frag: 0.90` · Fat `100.0%` |
| **012** | `lard_pork_rendered_500g` | `USDA FDC ID: 171401` (`NDB 04002`) · `Codex CXS 211-1999` | `E: 4500 kcal` (`900 kcal/100g`), `P: 0.52 kg`, `Vol: 0.58 L`, `V: 540 d`, `CP: 0.95`, `FP: 1.45`, `Frag: 0.95` · Fat `100.0%` |
| **013** | `fish_sardine_canned_oil_125g` | `USDA FDC ID: 175139` (`NDB 15088`) · `Codex CXS 94-1981` | `E: 260 kcal` (`208 kcal/100g`), `P: 0.165 kg`, `Vol: 0.15 L`, `V: 1460 d`, `CP: 1.00`, `FP: 1.55`, `Frag: 1.15` · Prot `47.0%`, Fat `53.0%`, High Na & Ca/Fe |
| **014** | `fish_tuna_canned_solid_170g` | `USDA FDC ID: 175158` (`NDB 15119`) · `Codex CXS 70-1981` | `E: 336 kcal` (`198 kcal/100g`), `P: 0.21 kg`, `Vol: 0.19 L`, `V: 1460 d`, `CP: 1.00`, `FP: 1.60`, `Frag: 1.15` · Prot `58.0%`, Fat `42.0%`, High Na & Fe |
| **015** | `meat_bovine_cured_salted_500g` | `TACO 4th Ed. #396` (*Carne-seca / Charque*) · `USDA FDC ID: 168608` | `E: 1565 kcal` (`313 kcal/100g`), `P: 0.52 kg`, `Vol: 0.50 L`, `V: 180 d`, `CP: 0.68`, `FP: 1.75`, `Frag: 1.00` · Prot `42.0%`, Fat `58.0%`, High Na/K & Fe |
| **016** | `meat_bovine_canned_cooked_320g` | `USDA FDC ID: 174036` (`NDB 13346`) · `Codex CXS 88-1981` | `E: 800 kcal` (`250 kcal/100g`), `P: 0.39 kg`, `Vol: 0.35 L`, `V: 1825 d`, `CP: 1.00`, `FP: 1.75`, `Frag: 1.15` · Prot `40.0%`, Fat `60.0%`, High Na & Fe |
| **017** | `peanut_paste_roasted_500g` | `USDA FDC ID: 172470` (`NDB 16097`) | `E: 2940 kcal` (`588 kcal/100g`), `P: 0.54 kg`, `Vol: 0.52 L`, `V: 540 d`, `CP: 1.00`, `FP: 1.70`, `Frag: 0.95` · Prot `17.0%`, Fat `72.0%`, High K & Fe |
| **018** | `honey_bee_pure_500g` | `USDA FDC ID: 169640` (`NDB 19296`) · `Codex CXS 12-1981` | `E: 1520 kcal` (`304 kcal/100g`), `P: 0.55 kg`, `Vol: 0.38 L`, `V: 3650 d`, `CP: 1.00`, `FP: 1.85`, `Frag: 0.95` · Prot `0.4%`, Fat `0.0%`, Added Sugar `0.0%` |
| **019** | `biscuit_wheat_salted_dry_400g` | `USDA FDC ID: 172688` (`NDB 18228` Crackers) | `E: 1720 kcal` (`430 kcal/100g`), `P: 0.42 kg`, `Vol: 0.95 L`, `V: 365 d`, `CP: 1.00`, `FP: 1.35`, `Frag: 0.78` · Prot `9.2%`, Fat `24.0%`, High Na |
| **020** | `water_potable_sealed_1000ml` | `Sphere WASH Std 2.1` (`2.5–3.0 L/day` survival drinking) · `Codex CXS 227-2001` | `E: 2400 EEB` (prevents acute dehydration mortality), `P: 1.03 kg`, `Vol: 1.05 L`, `V: 730 d`, `CP: 1.00`, `FP: 2.00`, `Frag: 0.90` |

### 3.2. Category 2: `cat_critical_nutrition` (Items `021` to `025`)

| # | Semantic Item ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Macros) |
| :---: | :--- | :--- | :--- |
| **021** | `infant_formula_powder_stage1_400g` | `Codex CXS 72-1981` (Infant Formula) · `USDA FDC ID: 171284` | `E: 2040 kcal` (`510 kcal/100g`), `P: 0.48 kg`, `Vol: 0.90 L`, `V: 540 d`, `CP: 0.88`, `FP: 2.45`, `Frag: 1.05` · Prot `10.8%`, Fat `47.5%`, High Vit C, Na/K & Ca/Fe |
| **022** | `ration_emergency_compressed_500g` | `ISO 18813:2022` / `SOLAS` Marine & Humanitarian High-Energy Biscuit (`BP-5`) | `E: 2450 kcal` (`490 kcal/100g`), `P: 0.52 kg`, `Vol: 0.42 L`, `V: 1825 d`, `CP: 1.00`, `FP: 1.75`, `Frag: 1.15` · Prot `11.5%`, Fat `39.0%`, High Vit C, Na/K & Ca/Fe |
| **023** | `protein_whey_concentrate_powder_100g` | `USDA FDC ID: 173179` (`NDB 01230` Whey Protein Concentrate) · `Codex CXS 289-1995` | `E: 400 kcal` (`400 kcal/100g`), `P: 0.11 kg`, `Vol: 0.22 L`, `V: 540 d`, `CP: 0.95`, `FP: 1.50`, `Frag: 0.95` · Prot `78.0%`, Fat `12.0%`, High Ca |
| **024** | `coconut_milk_powder_200g` | `USDA FDC ID: 170172` (`NDB 12117` Dehydrated Coconut Milk/Cream) | `E: 1360 kcal` (`680 kcal/100g`), `P: 0.215 kg`, `Vol: 0.38 L`, `V: 730 d`, `CP: 0.95`, `FP: 1.50`, `Frag: 0.95` · Prot `4.5%`, Fat `84.0%`, High K & Fe |
| **025** | `gelatin_unflavored_powder_50g` | `USDA FDC ID: 169599` (`NDB 19177` Gelatin, dry powder, unsweetened) | `E: 170 kcal` (`340 kcal/100g`), `P: 0.055 kg`, `Vol: 0.08 L`, `V: 1095 d`, `CP: 0.85`, `FP: 1.20`, `Frag: 1.00` · Prot `98.0%`, Fat `0.0%` |

### 3.3. Category 3: `cat_spices_morale` (Items `026` to `040`)

| # | Semantic Item ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Macros) |
| :---: | :--- | :--- | :--- |
| **026** | `salt_sodium_chloride_iodized_1000g` | `Codex CXS 150-1985` (Food Grade Iodized Salt, `15–40 ppm` Iodine) | `E: 9500 EEB` (electrolyte homeostasis & meat preservation), `P: 1.01 kg`, `Vol: 0.85 L`, `V: 3650 d`, `CP: 1.00`, `FP: 2.10`, `Frag: 1.10` |
| **027** | `sugar_sucrose_crystal_1000g` | `USDA FDC ID: 169655` (`NDB 19335`) · `Codex CXS 212-1999` | `E: 3870 kcal` (`387 kcal/100g`), `P: 1.01 kg`, `Vol: 1.15 L`, `V: 3650 d`, `CP: 1.00`, `FP: 1.85`, `Frag: 1.00` · Added Sugar `100.0%` |
| **028** | `coffee_roasted_ground_vacuum_500g` | `USDA FDC ID: 171891` (`NDB 14209`) · `ICO / ISO 3509` | `E: 5800 EEB` (caffeine alertness & high siege barter liquidity), `P: 0.515 kg`, `Vol: 0.72 L`, `V: 730 d`, `CP: 0.82`, `FP: 2.25`, `Frag: 1.05` |
| **029** | `coffee_instant_soluble_granules_50g` | `USDA FDC ID: 171893` (`NDB 14214` Coffee, instant, regular, powder) | `E: 2400 EEB` (zero-fuel cold/hot caffeine ration), `P: 0.06 kg`, `Vol: 0.14 L`, `V: 1825 d`, `CP: 0.96`, `FP: 2.20`, `Frag: 0.95` |
| **030** | `tomato_paste_concentrated_300g` | `USDA FDC ID: 170459` (`NDB 11546`) · `Codex CXS 57-1981` | `E: 246 kcal` (`82 kcal/100g`), `P: 0.35 kg`, `Vol: 0.32 L`, `V: 730 d`, `CP: 0.92`, `FP: 1.50`, `Frag: 1.10` · Prot `21.0%`, Fat `5.0%`, High Vit C & K |
| **031** | `broth_bouillon_dehydrated_cube_10g` | `USDA FDC ID: 171569` (`NDB 06075` Soup, bouillon cubes, dry) · `Codex CXS 117-1981` | `E: 24 kcal` (`240 kcal/100g`), `P: 0.011 kg`, `Vol: 0.01 L`, `V: 730 d`, `CP: 0.92`, `FP: 1.55`, `Frag: 1.00` · Prot `14.0%`, Fat `65.0%`, High Na |
| **032** | `vinegar_acetic_acid_4pct_750ml` | `Codex CXS 162-1987` / `USDA FDC ID: 173469` (`4%–5%` Acetic Acid) | `E: 3200 EEB` (food pickling, pH acidification & surface sanitization), `P: 0.79 kg`, `Vol: 0.80 L`, `V: 1825 d`, `CP: 1.00`, `FP: 1.45`, `Frag: 0.90` |
| **033** | `garlic_dehydrated_powder_100g` | `USDA FDC ID: 171325` (`NDB 02020` Spices, garlic powder) | `E: 331 kcal` (`331 kcal/100g`), `P: 0.11 kg`, `Vol: 0.15 L`, `V: 1095 d`, `CP: 1.00`, `FP: 1.60`, `Frag: 1.00` · Prot `20.0%`, Fat `2.0%`, High K & Fe |
| **034** | `pepper_black_ground_50g` | `USDA FDC ID: 170931` (`NDB 02030` Spices, pepper, black) · `ISO 959-1` | `E: 125 kcal` (`251 kcal/100g`), `P: 0.055 kg`, `Vol: 0.09 L`, `V: 1460 d`, `CP: 1.00`, `FP: 1.65`, `Frag: 1.00` · Prot `16.0%`, Fat `11.0%`, High K & Ca/Fe |
| **035** | `sodium_bicarbonate_pure_100g` | `USP / Food Chemicals Codex (FCC)` (`NaHCO3`, `INS 500ii`) | `E: 2600 EEB` (chemical leavening, oral antacid & hygiene buffer), `P: 0.11 kg`, `Vol: 0.10 L`, `V: 1825 d`, `CP: 1.00`, `FP: 1.50`, `Frag: 1.05` |
| **036** | `chocolate_dark_cocoa_60pct_100g` | `USDA FDC ID: 170272` (`NDB 19903` Chocolate, dark, `60–69%` cacao) · `Codex CXS 87-1981` | `E: 546 kcal` (`546 kcal/100g`), `P: 0.105 kg`, `Vol: 0.09 L`, `V: 540 d`, `CP: 1.00`, `FP: 2.25`, `Frag: 0.85` · Prot `5.5%`, Fat `56.0%`, Sug `24.0%`, High K & Fe |
| **037** | `candy_hard_glucose_unit_5g` | `USDA FDC ID: 168810` (`NDB 19107` Candies, hard) | `E: 20 kcal` (`394 kcal/100g`), `P: 0.005 kg`, `Vol: 0.005 L`, `V: 1095 d`, `CP: 1.00`, `FP: 1.65`, `Frag: 1.05` · Added Sugar `98.0%` |
| **038** | `tea_camellia_sinensis_dry_50g` | `ISO 3720` (Black Tea) / `ISO 11287` (Green Tea) · `USDA FDC ID: 171917` | `E: 1800 EEB` (boiling water palatability, L-theanine/caffeine & tannins), `P: 0.06 kg`, `Vol: 0.18 L`, `V: 1095 d`, `CP: 0.85`, `FP: 1.85`, `Frag: 0.95` |
| **039** | `tobacco_cigarette_filtered_unit` | `ICRC Sarajevo Siege Field Ledger` · `ISO 3308` Standard Cigarette Unit (`~1 g`) | `E: 650 EEB` (nicotine withdrawal mitigation & primary fractional siege currency), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 730 d`, `CP: 1.00`, `FP: 2.35`, `Frag: 0.80` |
| **040** | `alcohol_ethanol_potable_40pct_500ml` | `Codex / OIV Distilled Spirits Standard` (`40% ABV` Neutral/Grain Spirit) | `E: 8500 EEB` (dual-use morale currency, solvent & emergency wound/surface degreaser), `P: 0.85 kg`, `Vol: 0.65 L`, `V: 3650 d`, `CP: 1.00`, `FP: 2.40`, `Frag: 0.85` |

### 3.4. Category 4: `cat_pharma_essential` (Items `041` to `055`)

| # | Semantic Item ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Posology) |
| :---: | :--- | :--- | :--- |
| **041** | `amoxicillin_500mg_capsule` | `WHO EML 23rd List` (`WHO/MHP/HPS/EML/2023.02`) · `ATC: J01CA04` (`Access Group`) | `E: 4200 EEB` (first-line systemic beta-lactam anti-infective), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1095 d`, `CP: 1.00`, `FP: 2.35`, `Frag: 1.05` |
| **042** | `azithromycin_500mg_tablet` | `WHO EML 23rd List` · `ATC: J01FA10` (`Watch Group` Macrolide) | `E: 4800 EEB` (single-daily-dose respiratory, enteric & typhus macrolide), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1095 d`, `CP: 1.00`, `FP: 2.40`, `Frag: 1.10` |
| **043** | `ciprofloxacin_500mg_tablet` | `WHO EML 23rd List` · `ATC: J01MA02` (`Watch Group` Fluoroquinolone) | `E: 5000 EEB` (invasive dysentery, cholera, waterborne Gram-negative sepsis), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1460 d`, `CP: 1.00`, `FP: 2.45`, `Frag: 1.10` |
| **044** | `metronidazole_400mg_tablet` | `WHO EML 23rd List` · `ATC: J01XD01` / `P01AB01` (`Access Group`) | `E: 4300 EEB` (waterborne *Giardia*/*Entamoeba* protozoans & anaerobic trauma infections), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1460 d`, `CP: 1.00`, `FP: 2.35`, `Frag: 1.10` |
| **045** | `paracetamol_500mg_tablet` | `WHO EML 23rd List` · `ATC: N02BE01` (INN: Paracetamol / USP: Acetaminophen) | `E: 1600 EEB` (baseline antipyretic & non-opioid analgesic), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1460 d`, `CP: 1.00`, `FP: 2.00`, `Frag: 1.10` |
| **046** | `metamizole_sodium_500mg_tablet` | `WHO INN: Metamizole Sodium` · `ATC: N02BB02` (`DCB 03069` Dipirona Sódica) | `E: 1850 EEB` (potent antipyretic, visceral spasmolytic & post-trauma analgesic), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1460 d`, `CP: 1.00`, `FP: 2.10`, `Frag: 1.10` |
| **047** | `ibuprofen_400mg_tablet` | `WHO EML 23rd List` · `ATC: M01AE01` (NSAID Anti-Inflammatory) | `E: 1950 EEB` (musculoskeletal inflammation, dental pain & fever reduction), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1460 d`, `CP: 1.00`, `FP: 2.10`, `Frag: 1.10` |
| **048** | `ibuprofen_oral_suspension_50mg_ml_20ml` | `WHO EMLc (Pediatric Essential List)` · `ATC: M01AE01` (`50 mg/mL` Drops) | `E: 4600 EEB` (divisible `20 mL` pediatric fever & febrile seizure prevention), `P: 0.038 kg`, `Vol: 0.045 L`, `V: 730 d`, `CP: 1.00`, `FP: 2.35`, `Frag: 0.90` |
| **049** | `loperamide_hydrochloride_2mg_tablet` | `WHO EML 23rd List` · `ATC: A07DA03` (Antipropulsive Antidiarrheal) | `E: 2800 EEB` (halts acute non-invasive fluid loss during forced displacement), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1460 d`, `CP: 1.00`, `FP: 2.25`, `Frag: 1.10` |
| **050** | `oral_rehydration_salts_who_sachet_27_9g` | `WHO/FCH/CAH/06.1` & `WHO EML 23rd List` · `ATC: A07CA` (`1 L` Sachet) | `E: 5200 EEB` (prevents hypovolemic shock in cholera/acute diarrhea), `P: 0.030 kg`, `Vol: 0.040 L`, `V: 1095 d`, `CP: 0.90`, `FP: 2.40`, `Frag: 1.10` |
| **051** | `loratadine_10mg_tablet` | `WHO EML 23rd List` · `ATC: R06AX13` (Non-Sedating Antihistamine) | `E: 1750 EEB` (allergic reactions, insect bites & environmental dust relief without sedation), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1460 d`, `CP: 1.00`, `FP: 1.85`, `Frag: 1.10` |
| **052** | `omeprazole_20mg_capsule` | `WHO EML 23rd List` · `ATC: A02BC01` (Proton Pump Inhibitor) | `E: 1900 EEB` (peptic ulcer, stress gastritis & NSAID gastric protection), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1095 d`, `CP: 1.00`, `FP: 1.90`, `Frag: 1.05` |
| **053** | `potassium_iodide_130mg_tablet` | `US FDA CDER Guidance (Dec 2001)` & `WHO Radiological Guidelines` · `ATC: V03AB21` | `E: 4500 EEB` (`130 mg` adult thyroid blocking dose against radioiodine `I-131`), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 2555 d`, `CP: 1.00`, `FP: 2.35`, `Frag: 1.15` |
| **054** | `ascorbic_acid_500mg_tablet` | `WHO EML 23rd List` · `ATC: A11GA01` (Vitamin C / Anti-Scorbutic) | `E: 1650 EEB` (scurvy prevention, collagen synthesis & non-heme iron absorption), `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1095 d`, `CP: 1.00`, `FP: 1.80`, `Frag: 1.05` |
| **055** | `multivitamin_mineral_complex_tablet` | `WHO / WFP / UNICEF Multiple Micronutrient Supplement (MMS)` · `ATC: A11AA03` | `E: 2100 EEB` (prevents beriberi, pellagra, xerophthalmia & trace mineral deficiency), `P: 0.002 kg`, `Vol: 0.002 L`, `V: 1095 d`, `CP: 1.00`, `FP: 1.95`, `Frag: 1.10` |

### 3.5. Category 5: `cat_trauma_hygiene` (Items `056` to `070`)

| # | Semantic Item ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Clinical Role) |
| :---: | :--- | :--- | :--- |
| **056** | `ethanol_antiseptic_70pct_100ml` | `WHO EML 23rd List` · `ATC: D08AX08` (`70% v/v` Denatured/Antiseptic Ethanol) | `E: 4800 EEB` (skin/instrument disinfection & bactericidal prepping), `P: 0.095 kg`, `Vol: 0.115 L`, `V: 1825 d`, `CP: 1.00`, `FP: 2.05`, `Frag: 0.95` |
| **057** | `hydrogen_peroxide_3pct_10vol_100ml` | `USP / BP / Ph.Eur.` · `ATC: D08AX01` (`3% w/v` = `10 Volumes` H₂O₂) | `E: 3200 EEB` (mechanical effervescent debridement of contaminated wounds), `P: 0.110 kg`, `Vol: 0.120 L`, `V: 730 d`, `CP: 1.00`, `FP: 1.85`, `Frag: 0.90` |
| **058** | `povidone_iodine_10pct_topical_100ml` | `WHO EML 23rd List` · `ATC: D08AG02` (`10%` Povidone-Iodine = `1%` Available Iodine) | `E: 6800 EEB` (broad-spectrum surgical scrub & trauma wound antisepsis), `P: 0.115 kg`, `Vol: 0.120 L`, `V: 1095 d`, `CP: 1.00`, `FP: 2.25`, `Frag: 0.95` |
| **059** | `chlorhexidine_digluconate_2pct_100ml` | `WHO EML 23rd List` · `ATC: D08AC02` (`2%` Topical Antiseptic Solution) | `E: 6500 EEB` (residual-action surgical & umbilical/wound antisepsis), `P: 0.110 kg`, `Vol: 0.120 L`, `V: 1095 d`, `CP: 1.00`, `FP: 2.20`, `Frag: 0.95` |
| **060** | `gauze_sterile_compress_7_5cm_unit` | `WHO IEHK 2017` · `EN 14079` (`7.5 cm × 7.5 cm` Sterile Hydrophilic Cotton Compress) | `E: 2200 EEB` (sterile wound packing, exudate absorption & hemorrhage dressing), `P: 0.012 kg`, `Vol: 0.025 L`, `V: 1825 d`, `CP: 1.00`, `FP: 2.00`, `Frag: 1.05` |
| **061** | `tape_medical_waterproof_spool_5m` | `WHO IEHK 2017` · `ISO 10993` (`2.5 cm × 5 m` Zinc Oxide / Waterproof Adhesive Spool) | `E: 3100 EEB` (securing dressings, splints, IV lines & blister prevention), `P: 0.045 kg`, `Vol: 0.060 L`, `V: 1460 d`, `CP: 1.00`, `FP: 1.85`, `Frag: 1.05` |
| **062** | `bandage_elastic_compression_roll_2m` | `WHO IEHK 2017` · `DIN 61632` (`2 m` Stretched Woven Elastic Compression Bandage) | `E: 3800 EEB` (pressure hemostasis, joint immobilization & sprain stabilization), `P: 0.055 kg`, `Vol: 0.090 L`, `V: 2555 d`, `CP: 1.00`, `FP: 2.00`, `Frag: 1.15` |
| **063** | `tourniquet_tactical_arterial_unit` | `US DoD CoTCCC TCCC Guidelines` (Windlass Limb Arterial Tourniquet, `CAT Gen-7 / SOFTT-W` class) | `E: 18500 EEB` (prevents fatal extremity arterial exsanguination in `< 180 seconds`), `P: 0.080 kg`, `Vol: 0.140 L`, `V: 3650 d`, `CP: 1.00`, `FP: 2.50`, `Frag: 1.20` |
| **064** | `suture_surgical_nylon_3_0_needle_unit` | `USP 3-0 Monofilament Polyamide (Nylon)` with `3/8 Circle Reverse Cutting Needle` · `WHO IEHK 2017` | `E: 8200 EEB` (primary closure of deep lacerations to prevent septic dehiscence), `P: 0.008 kg`, `Vol: 0.015 L`, `V: 1825 d`, `CP: 0.75`, `FP: 2.35`, `Frag: 1.10` |
| **065** | `syringe_sterile_5ml_with_needle_unit` | `ISO 7886-1` (Sterile Single-Use `5 mL` Luer-Slip/Lock Syringe) & `ISO 7864` (`21G/22G` Needle) | `E: 3600 EEB` (parenteral drug administration & high-pressure wound irrigation), `P: 0.010 kg`, `Vol: 0.025 L`, `V: 1825 d`, `CP: 1.00`, `FP: 2.05`, `Frag: 1.00` |
| **066** | `gloves_nitrile_exam_pair` | `ASTM D6319` / `EN 455` (Powder-Free Nitrile Medical Examination Gloves, 1 Pair) | `E: 1900 EEB` (bloodborne pathogen & biological cross-contamination barrier), `P: 0.010 kg`, `Vol: 0.015 L`, `V: 1460 d`, `CP: 1.00`, `FP: 1.85`, `Frag: 1.00` |
| **067** | `respirator_particulate_n95_pff2_unit` | `CDC / NIOSH 42 CFR Part 84` (`N95`) · `EN 149:2001+A1:2009` (`FFP2`) · `ABNT NBR 13698` (`PFF2`) | `E: 3400 EEB` (`≥ 94%–95%` filtration of airborne pathogens, rubble silica & smoke particulates), `P: 0.015 kg`, `Vol: 0.050 L`, `V: 1825 d`, `CP: 1.00`, `FP: 2.10`, `Frag: 0.95` |
| **068** | `soap_glycerin_neutral_bar_200g` | `Sphere WASH Hygiene Standard 1.2` (`250g–450g/person/month` bathing & laundry soap benchmark) | `E: 5400 EEB` (interrupts fecal-oral transmission of cholera, dysentery & wound sepsis), `P: 0.200 kg`, `Vol: 0.220 L`, `V: 1825 d`, `CP: 1.00`, `FP: 2.05`, `Frag: 1.10` |
| **069** | `paper_toilet_cellulose_roll_30m` | `Sphere WASH Excreta Disposal & Sanitary Hygiene Standard` (`30 m` Virgin Cellulose Roll) | `E: 2600 EEB` (sanitary hygiene, morale dignity & emergency dry tinder), `P: 0.100 kg`, `Vol: 0.850 L`, `V: 1825 d`, `CP: 1.00`, `FP: 1.95`, `Frag: 0.75` |
| **070** | `sanitary_pad_absorbent_external_unit` | `Sphere WASH Menstrual Hygiene Management (MHM) Standard` & `UNFPA Dignity Kit` | `E: 1800 EEB` (menstrual hygiene dignity & emergency sterile secondary trauma pad), `P: 0.008 kg`, `Vol: 0.030 L`, `V: 1825 d`, `CP: 1.00`, `FP: 2.00`, `Frag: 1.00` |

### 3.6. Category 6: `cat_water_fire_shelter` (Items `071` to `080`)

| # | Semantic Item ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Field Utility) |
| :---: | :--- | :--- | :--- |
| **071** | `sodium_hypochlorite_2_5pct_1000ml` | `WHO GDWQ 4th Ed. (ISBN 978-92-4-154995-0)` · `CDC Safe Water System` (`2.0%–2.5%` Active Chlorine) | `E: 14500 EEB` (chlorinates `~5,000–10,000 L` of water without boiling fuel), `P: 1.080 kg`, `Vol: 1.100 L`, `V: 365 d`, `CP: 0.95`, `FP: 2.25`, `Frag: 0.90` |
| **072** | `water_purification_nadcc_tablet_unit` | `WHO GDWQ 4th Ed. (ISBN 978-92-4-154995-0)` & `UNHCR WASH` (`67 mg` NaDCC Tablet) | `E: 2600 EEB` (disinfects `20 L` clear water jerrycan in `30 min` with zero fuel), `P: 0.001 kg`, `Vol: 0.001 L`, `V: 1825 d`, `CP: 0.95`, `FP: 2.30`, `Frag: 1.10` |
| **073** | `filter_water_hollow_fiber_0_1micron_unit` | `US EPA Microbiological Water Purifier Guide` & `NSF/ANSI P231` (`0.1 μm` Absolute Hollow-Fiber Membrane) | `E: 32000 EEB` (`99.9999%` bacteria & `99.99%` protozoa removal across `> 100,000 L`), `P: 0.090 kg`, `Vol: 0.180 L`, `V: 1825 d`, `CP: 0.98`, `FP: 2.50`, `Frag: 0.95` |
| **074** | `lighter_butane_piezo_standard_unit` | `ISO 9994:2018` (Lighters — Safety Specification, `~3,000` Ignitions) · `Sarajevo Siege Benchmark` | `E: 7500 EEB` (instant thermal ignition & premier siege barter currency), `P: 0.022 kg`, `Vol: 0.025 L`, `V: 1825 d`, `CP: 1.00`, `FP: 2.30`, `Frag: 1.05` |
| **075** | `ferrocerium_ignition_rod_8mm_unit` | `MIL-STD / Metallurgical Mischmetal Alloy` (`Ce-La-Nd-Fe-Mg`, `3,000 °C` Sparks, `~10,000` Strikes) | `E: 16000 EEB` (waterproof, altitude-proof multi-year fire-starting capital tool), `P: 0.045 kg`, `Vol: 0.020 L`, `V: 3650 d`, `CP: 0.85`, `FP: 2.35`, `Frag: 1.20` |
| **076** | `matches_waterproof_safety_box_40un` | `EN 1783:1997` (Matches — Performance & Safety, Paraffin-Coated Storm/Safety Box of `40`) | `E: 3200 EEB` (`40` independent thermal ignitions), `P: 0.018 kg`, `Vol: 0.035 L`, `V: 1460 d`, `CP: 1.00`, `FP: 1.95`, `Frag: 0.95` |
| **077** | `candle_paraffin_solid_white_30g_unit` | `ASTM F2417` / `EN 15493` (Solid Refined Paraffin Wax Candle, `30 g`, `~5–6 Hours` Burn) | `E: 2100 EEB` (grid-down illumination, morale & micro-heating), `P: 0.030 kg`, `Vol: 0.035 L`, `V: 3650 d`, `CP: 1.00`, `FP: 1.80`, `Frag: 0.95` |
| **078** | `fuel_solid_hexamine_tablet_14g_unit` | `NATO STANAG / MIL-F-44072` (`C6H12N4` Hexamethylenetetramine `14 g` Smokeless Ration Fuel Tablet, `~30 kJ/g`) | `E: 2900 EEB` (boils `500 mL` water in `~8 min` without smoke signature), `P: 0.014 kg`, `Vol: 0.015 L`, `V: 1825 d`, `CP: 1.00`, `FP: 1.90`, `Frag: 1.05` |
| **079** | `blanket_thermal_aluminized_mylar_unit` | `ASTM F1868` / `ISO 11092` (Metallized Polyethylene Terephthalate [BoPET] Space Blanket, `> 85%` IR Reflection) | `E: 5800 EEB` (prevents fatal hypothermia & post-trauma thermal shock), `P: 0.055 kg`, `Vol: 0.080 L`, `V: 2555 d`, `CP: 1.00`, `FP: 2.10`, `Frag: 0.85` |
| **080** | `tarp_polyethylene_waterproof_3x3m_unit` | `UNHCR / IFRC Plastic Sheeting Specification` (High-Density Woven Polyethylene Tarpaulin `3 m × 3 m` with Grommets) | `E: 14000 EEB` (rapid field shelter, roof repair & rainwater harvesting catchment), `P: 0.950 kg`, `Vol: 1.200 L`, `V: 1825 d`, `CP: 0.90`, `FP: 2.20`, `Frag: 1.10` |

### 3.7. Category 7: `cat_tools_energy_comms` (Items `081` to `094`)

| # | Semantic Item ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Engineering Spec) |
| :---: | :--- | :--- | :--- |
| **081** | `knife_fixed_blade_carbon_steel_fulltang` | `SAE / AISI 1095 High-Carbon Steel` (`56–58 HRC` Full-Tang Fixed-Blade Field Knife) | `E: 28000 EEB` (primary woodcraft, batoning, food prep & defense tool), `P: 0.240 kg`, `Vol: 0.150 L`, `V: 3650 d`, `CP: 1.00`, `FP: 2.40`, `Frag: 1.20` |
| **082** | `multitool_pliers_stainless_folding_unit` | `AISI 420HC / 440A Martensitic Stainless Steel` (Folding Pliers, Wire Cutter, Drivers & Blades) | `E: 26000 EEB` (mechanical, electrical & urban salvage repair workstation), `P: 0.220 kg`, `Vol: 0.100 L`, `V: 3650 d`, `CP: 1.00`, `FP: 2.35`, `Frag: 1.18` |
| **083** | `saw_wire_stainless_pocket_unit` | `MIL-W-83420` Braided Multi-Strand Stainless Steel Survival Wire Saw (`~60 cm` Blade) | `E: 7200 EEB` (cuts firewood, bone & PVC pipe with minimal pack weight), `P: 0.030 kg`, `Vol: 0.030 L`, `V: 1825 d`, `CP: 0.85`, `FP: 1.85`, `Frag: 0.95` |
| **084** | `tape_cloth_adhesive_waterproof_48mm_10m` | `ASTM D5486M Type IV` (Polyethylene-Coated Cloth Duct/Gaffer Tape `48 mm × 10 m`) | `E: 8400 EEB` (structural patching, waterproof sealing, gear repair & improvised splinting), `P: 0.160 kg`, `Vol: 0.220 L`, `V: 1460 d`, `CP: 1.00`, `FP: 2.10`, `Frag: 1.10` |
| **085** | `cord_nylon_kernmantle_550lb_10m` | `MIL-C-5040H Type III` (7-Strand Core Nylon Kernmantle Parachute Cord, `2.49 kN` / `550 lbf`, `10 m`) | `E: 9200 EEB` (shelter rigging, load lashing, snares & inner-strand fishing/sewing), `P: 0.075 kg`, `Vol: 0.120 L`, `V: 3650 d`, `CP: 1.00`, `FP: 2.15`, `Frag: 1.20` |
| **086** | `steel_wool_fine_grade_0000_pad_unit` | `Commercial Spec A-A-1043` (Low-Carbon Steel Filament Grade `#0000` Fine Pad) | `E: 1950 EEB` (pyrophoric battery/ferrocerium tinder & metal cookware scouring), `P: 0.015 kg`, `Vol: 0.060 L`, `V: 1460 d`, `CP: 1.00`, `FP: 1.70`, `Frag: 0.95` |
| **087** | `needle_sewing_heavy_steel_with_thread_10m` | `Heavy-Duty High-Carbon Upholstery/Canvas Needle` + `10 m` Bonded Polyester/Waxed Nylon Thread | `E: 4600 EEB` (repairs boots, rucksacks, winter coats & tarpaulins), `P: 0.012 kg`, `Vol: 0.020 L`, `V: 3650 d`, `CP: 0.90`, `FP: 1.95`, `Frag: 1.15` |
| **088** | `fishing_kit_line_20m_hooks_5un_weights_5un` | `SOLAS / NATO Survival Fishing Kit Spec` (`20 m` Monofilament Line, `5` High-Carbon Hooks, `5` Sinkers) | `E: 11500 EEB` (passive renewable protein & lipid harvesting from waterways), `P: 0.025 kg`, `Vol: 0.030 L`, `V: 3650 d`, `CP: 0.80`, `FP: 2.20`, `Frag: 1.10` |
| **089** | `battery_alkaline_lr6_aa_1_5v_unit` | `IEC 60086-2:2021` (`LR6` Cylindrical Alkaline-Manganese Dioxide `1.5 V`, `50.5 × 14.5 mm`) · `ANSI 15A` | `E: 2800 EEB` (`~3.5–4.0 Wh` primary DC power for flashlights & receivers), `P: 0.023 kg`, `Vol: 0.008 L`, `V: 2555 d`, `CP: 1.00`, `FP: 2.05`, `Frag: 1.10` |
| **090** | `battery_alkaline_lr03_aaa_1_5v_unit` | `IEC 60086-2:2021` (`LR03` Cylindrical Alkaline-Manganese Dioxide `1.5 V`, `44.5 × 10.5 mm`) · `ANSI 24A` | `E: 2200 EEB` (`~1.5–1.8 Wh` primary DC power for headlamps & medical meters), `P: 0.011 kg`, `Vol: 0.004 L`, `V: 2555 d`, `CP: 1.00`, `FP: 1.95`, `Frag: 1.10` |
| **091** | `battery_lithium_ion_18650_3_7v_3000mah_unit` | `IEC 61960-3:2017` (`INR18650` Rechargeable Lithium-Ion Cell `3.7 V`, `3000 mAh` = `11.1 Wh`, `500+` Cycles) | `E: 12500 EEB` (`> 5.5 kWh` cumulative lifecycle DC energy storage), `P: 0.048 kg`, `Vol: 0.017 L`, `V: 1825 d`, `CP: 0.95`, `FP: 2.30`, `Frag: 1.05` |
| **092** | `flashlight_led_aluminum_aa_compatible_unit` | `ANSI/PLATO FL 1-2019` (Anodized 6061-T6 Aluminum `IPX6+` Solid-State LED Flashlight, `LR6/AA` Compatible) | `E: 15000 EEB` (night navigation, medical triage & signaling), `P: 0.085 kg`, `Vol: 0.060 L`, `V: 3650 d`, `CP: 1.00`, `FP: 2.25`, `Frag: 1.15` |
| **093** | `panel_solar_monocrystalline_usb_5v_10w_unit` | `IEC 61215` (Foldable ETFE-Laminated Monocrystalline Silicon Photovoltaic Charger, Regulated `5 V USB 2.0 A / 10 W`) | `E: 38000 EEB` (off-grid renewable DC generation for `18650` cells, radios & offline devices), `P: 0.320 kg`, `Vol: 0.450 L`, `V: 3650 d`, `CP: 0.90`, `FP: 2.45`, `Frag: 0.95` |
| **094** | `radio_transceiver_vhf_uhf_dualband_unit` | `ETSI EN 300 086 / FCC Part 90` (Handheld Dual-Band VHF `136–174 MHz` / UHF `400–480 MHz` `5 W` FM Transceiver) | `E: 42000 EEB` (infrastructure-independent tactical & emergency coordination), `P: 0.250 kg`, `Vol: 0.220 L`, `V: 2555 d`, `CP: 0.85`, `FP: 2.45`, `Frag: 0.95` |

### 3.8. Category 8: `cat_store_of_value` (Items `095` to `100`)

| # | Semantic Item ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Strategic Role) |
| :---: | :--- | :--- | :--- |
| **095** | `faraday_bag_shielded_rf_emp_medium_unit` | `MIL-STD-188-125-1 / IEEE Std 299` (Multi-Layer Nickel-Copper Ripstop RF/EMP Shielding Enclosure, `> 60 dB` Attenuation) | `E: 14000 EEB` (protects radios, solar controllers & flash storage from EMP/CME/RF tracking), `P: 0.090 kg`, `Vol: 0.150 L`, `V: 3650 d`, `CP: 1.00`, `FP: 1.90`, `Frag: 1.10` |
| **096** | `microsd_flash_storage_64gb_offline_wiki_unit` | `SD Association microSDXC Spec` (`64 GB` NAND Flash preloaded with Offline Wikipedia/Kiwix, Medical & Engineering Manuals) | `E: 25000 EEB` (civilizational knowledge preservation in `1 gram`), `P: 0.001 kg`, `Vol: 0.001 L`, `V: 3650 d`, `CP: 0.75`, `FP: 2.20`, `Frag: 0.90` |
| **097** | `eyeglasses_reading_convex_diopter_plus_2_0` | `ISO 16034:2002` (Ready-to-Wear Near-Vision Spectacles, `+2.00 Diopter` Polycarbonate Convex Lenses) | `E: 12000 EEB` (restores fine-motor vision for suturing, electronics repair & map reading), `P: 0.028 kg`, `Vol: 0.060 L`, `V: 3650 d`, `CP: 1.00`, `FP: 2.15`, `Frag: 0.80` |
| **098** | `seeds_open_pollinated_vegetable_mix_50g` | `ISTA (International Seed Testing Association)` & `FAO Seed Security Assessment` (Hermetic Non-Hybrid Open-Pollinated Seeds `50 g`) | `E: 30000 EEB` (multi-generation caloric multiplication in `economic_reconstruction`), `P: 0.055 kg`, `Vol: 0.080 L`, `V: 1095 d`, `CP: 0.50`, `FP: 2.35`, `Frag: 0.90` |
| **099** | `silver_bullion_999_fine_1_troy_oz_31_1g` | `LBMA Good Delivery / ISO 4217: XAG` (`999.0 Fine` Silver `1 Troy Oz = 31.1035 g` Sovereign/Bullion Coin) | `E: 22000 EEB` (medium-denomination post-collapse hard currency & oligodynamic water silver), `P: 0.0311 kg`, `Vol: 0.003 L`, `V: 36500 d`, `CP: 1.00`, `FP: 2.30`, `Frag: 1.20` |
| **100** | `gold_bullion_999_fine_fractional_1g` | `LBMA Good Delivery / ISO 4217: XAU` (`999.9 Fine` Gold `1.0 g` Assayed Fractional Bullion Bar) | `E: 50000 EEB` (highest-density cross-border capital store in `economic_reconstruction`), `P: 0.001 kg`, `Vol: 0.001 L`, `V: 36500 d`, `CP: 1.00`, `FP: 2.50`, `Frag: 1.20` |

### 3.9. Category 9: `cat_essential_services` (Items `101` to `128`)

For intangible human services, clinical procedures, off-grid IT/microelectronics, technical instruction, and specialized technical labor (`is_food: false`, `IN = 1.0`, `is_divisible: false`, `sub_units: 1`, `unit_measure: 'un'`), physical parameters map deterministically to the **Marginal Per-Procedure Consumable & Instrument Wear Burden (`P`, `Vol`)** (since the specialist retains their permanent tool chest), **Biological Caloric Loss Prevented + Skill/Metabolic Expenditure Saved (`E` in `EEB`)**, and **Effective Outcome Durability / Recurrence Interval in Days (`V`)**:

| # | Semantic Service ID (`data/items_core.js`) | Permanent Official Record / Standard Code | Offline Verified Snapshot Metrics (`E`, `P`, `Vol`, `V`, `CP`, `FP`, `Frag` & Clinical/Technical Scope) |
| :---: | :--- | :--- | :--- |
| **101** | `service_trauma_wound_debridement_suturing_proc` | `WHO IMEESC` (*Surgical Care at the District Hospital*, `ISBN 92-4-154575-5`) · `ICRC War Surgery` | `E: 42000 EEB` (prevents septic gangrene & hemorrhage), `P: 0.15 kg`, `Vol: 0.18 L` (marginal consumable/wear burden), `V: 3650 d`, `CP: 0.82`, `FP: 2.45`, `Frag: 1.05` |
| **102** | `service_fracture_closed_reduction_splinting_proc` | `WHO IMEESC Orthopedic Trauma Protocol` · `AO Alliance Fracture Management` | `E: 38000 EEB` (restores limb mobility & prevents malunion disability), `P: 0.18 kg`, `Vol: 0.22 L`, `V: 3650 d`, `CP: 0.85`, `FP: 2.40`, `Frag: 1.05` |
| **103** | `service_dental_extraction_infection_drainage_proc` | `WHO Basic Package of Oral Care (BPOC)` — *Urgent Oral Treatment (UOT)* | `E: 34000 EEB` (exodontia & drainage of acute odontogenic abscess), `P: 0.12 kg`, `Vol: 0.15 L`, `V: 3650 d`, `CP: 0.85`, `FP: 2.35`, `Frag: 1.10` |
| **104** | `service_obstetric_delivery_midwifery_care_proc` | `WHO / UNFPA / UNICEF IMPAC` (*Managing Complications in Pregnancy and Childbirth*, `ISBN 978-92-4-156549-3`) | `E: 48000 EEB` (AMTSL postpartum hemorrhage control & neonatal resuscitation), `P: 0.16 kg`, `Vol: 0.20 L`, `V: 3650 d`, `CP: 0.80`, `FP: 2.50`, `Frag: 1.05` |
| **105** | `service_clinical_triage_nursing_care_shift_4hr` | `Sphere Handbook Health Systems Std 1.1` & `WHO ETAT` (*Emergency Triage Assessment and Treatment*) | `E: 14000 EEB` (4-hour clinical nursing shift, IV/ORS titration & sterile dressings), `P: 0.08 kg`, `Vol: 0.10 L`, `V: 14 d`, `CP: 0.90`, `FP: 2.15`, `Frag: 1.00` |
| **106** | `service_water_well_pump_filtration_repair_proc` | `Sphere WASH Water Supply Std 2.1` · `RWSN` (*Rural Water Supply Network* Afridev/India Mark II Spec) | `E: 36000 EEB` (borehole hand-pump seal/valve overhaul & slow-sand filter restoration), `P: 0.22 kg`, `Vol: 0.25 L`, `V: 365 d`, `CP: 0.75`, `FP: 2.35`, `Frag: 1.10` |
| **107** | `service_sanitation_latrine_vector_control_proc` | `Sphere WASH Excreta Management Std 3.1` & `Vector Control Std 4.1` | `E: 28000 EEB` (groundwater-safe trench/pit latrine engineering & vector sanitization), `P: 0.25 kg`, `Vol: 0.28 L`, `V: 180 d`, `CP: 0.72`, `FP: 2.10`, `Frag: 1.05` |
| **108** | `service_solar_pv_battery_dc_diagnostics_repair_proc` | `IEC 62446-1` (PV Systems Testing & Maintenance) · `IEEE Std 450 / 1188` (Battery Bank Maintenance) | `E: 35000 EEB` (off-grid PV array, MPPT/PWM controller & DC battery bank restoration), `P: 0.12 kg`, `Vol: 0.14 L`, `V: 365 d`, `CP: 0.82`, `FP: 2.25`, `Frag: 1.05` |
| **109** | `service_generator_internal_combustion_overhaul_proc` | `ILO ISCO-08 Code 7233` (Machinery Mechanics) · `ISO 8528` (Reciprocating IC Generators) | `E: 38000 EEB` (diesel/gasoline carburetor, magneto ignition & valve lash overhaul), `P: 0.24 kg`, `Vol: 0.28 L`, `V: 365 d`, `CP: 0.72`, `FP: 2.20`, `Frag: 1.10` |
| **110** | `service_radio_vhf_uhf_antenna_calibration_repair_proc` | `ITU-R Handbook on Emergency Telecommunications` · `ETSI EN 300 086` · `ILO ISCO-08 Code 7422` | `E: 32000 EEB` (RF transceiver repair, coaxial termination & dipole/Yagi VSWR < 1.5 tuning), `P: 0.10 kg`, `Vol: 0.12 L`, `V: 365 d`, `CP: 0.85`, `FP: 2.25`, `Frag: 1.05` |
| **111** | `service_metallurgy_blade_tool_forging_sharpening_proc` | `ILO ISCO-08 Code 7221` (Blacksmiths & Forging Workers) · `ASM Heat Treater's Guide` | `E: 26000 EEB` (high-carbon steel forging, quenching/tempering & edge reprofiling), `P: 0.22 kg`, `Vol: 0.24 L`, `V: 730 d`, `CP: 0.75`, `FP: 2.10`, `Frag: 1.15` |
| **112** | `service_mechanical_bicycle_cart_drivetrain_repair_proc` | `ILO ISCO-08 Code 7234` (Bicycle & Related Repairers) · `ISO 4210` (Cycles Safety Requirements) | `E: 24000 EEB` (non-motorized cargo bicycle/handcart bearing, spoke & drivetrain overhaul), `P: 0.16 kg`, `Vol: 0.18 L`, `V: 180 d`, `CP: 0.80`, `FP: 2.05`, `Frag: 1.10` |
| **113** | `service_shelter_roofing_structural_carpentry_proc` | `Sphere Shelter and Settlement Std 3 & 4` · `ILO ISCO-08 Code 7115` (Carpenters and Joiners) | `E: 34000 EEB` (load-bearing timber framing, truss stabilization & weatherproof roofing), `P: 0.25 kg`, `Vol: 0.28 L`, `V: 1095 d`, `CP: 0.72`, `FP: 2.20`, `Frag: 1.10` |
| **114** | `service_masonry_thermal_stove_chimney_build_proc` | `ISO 19867-1:2018` (Clean Cookstoves & Cooking Solutions) · `ILO ISCO-08 Code 7112` (Bricklayers/Masons) | `E: 36000 EEB` (high-efficiency rocket stove/oven & chimney saving 50–70% firewood), `P: 0.30 kg`, `Vol: 0.35 L`, `V: 1825 d`, `CP: 0.68`, `FP: 2.25`, `Frag: 1.15` |
| **115** | `service_footwear_cobbling_heavy_textile_repair_proc` | `ILO ISCO-08 Code 7536` (Shoemakers & Leather Goods) · `ISO 20345` (Protective Footwear Spec) | `E: 18000 EEB` (boot sole resoling, awl saddle-stitching & load-bearing pack/canvas repair), `P: 0.10 kg`, `Vol: 0.12 L`, `V: 365 d`, `CP: 0.85`, `FP: 1.95`, `Frag: 1.10` |
| **116** | `service_veterinary_livestock_obstetrics_wound_proc` | `FAO LEGS` (*Livestock Emergency Guidelines and Standards*, 2nd Ed.) · `ILO ISCO-08 Code 2250 / 3240` | `E: 30000 EEB` (livestock/draft animal trauma treatment, dystocia obstetrics & anthelmintics), `P: 0.15 kg`, `Vol: 0.18 L`, `V: 365 d`, `CP: 0.80`, `FP: 2.15`, `Frag: 1.05` |
| **117** | `service_agrarian_crop_grafting_seed_preservation_proc` | `FAO Seed Security Assessment` & `Quality Declared Seed (QDS)` · `ILO ISCO-08 Code 6112` | `E: 28000 EEB` (fruit tree grafting, soil remineralization & open-pollinated seed drying), `P: 0.12 kg`, `Vol: 0.15 L`, `V: 730 d`, `CP: 0.78`, `FP: 2.10`, `Frag: 1.05` |
| **118** | `service_food_preservation_smoking_fermentation_batch` | `FAO/WHO Codex Alimentarius CAC/RCP 52-2003` (Salting/Smoking) · `ILO ISCO-08 Code 7511` | `E: 25000 EEB` (batch osmotic salt-curing, wood-smoking or lacto-fermentation of 15 kg food), `P: 0.18 kg`, `Vol: 0.22 L`, `V: 180 d`, `CP: 0.75`, `FP: 2.05`, `Frag: 1.05` |
| **119** | `service_security_perimeter_watch_patrol_shift_4hr` | `ILO ISCO-08 Code 5414` (Security Guards) · `ISO 8996` (Vigilance & Patrol Metabolic Rate) | `E: 9500 EEB` (4-hour tactical night/day perimeter watch, access control & early warning), `P: 0.08 kg`, `Vol: 0.10 L`, `V: 7 d`, `CP: 0.95`, `FP: 2.10`, `Frag: 1.00` |
| **120** | `service_logistics_heavy_cargo_portage_5km_25kg` | `ISO 8996:2021` (Ergonomics — Metabolic Rate of Load Carriage) · `NIOSH Lifting Equation` | `E: 11000 EEB` (pack-frame human portage of 25 kg essential cargo across 5 km off-road), `P: 0.10 kg`, `Vol: 0.12 L`, `V: 7 d`, `CP: 0.92`, `FP: 1.95`, `Frag: 1.00` |
| **121** | `service_it_mesh_network_intranet_deployment_proc` | `IEEE 802.11s` (Mesh Networking) · `ITU-T Emergency Telecom` · `ILO ISCO-08 Code 2523 / 3513` | `E: 26000 EEB` (local WLAN/LoRa mesh intranet sharing 64 GB MicroSD offline library), `P: 0.12 kg`, `Vol: 0.15 L`, `V: 1095 d`, `CP: 0.78`, `FP: 1.75`, `Frag: 0.98` |
| **122** | `service_it_data_recovery_extraction_proc` | `ISO/IEC 27037` (Digital Media Extraction) · `NIST SP 800-86` · `ILO ISCO-08 Code 3512` | `E: 24000 EEB` (forensic extraction of engineering/WASH/medical PDFs from dead HDDs/SSDs/phones), `P: 0.10 kg`, `Vol: 0.12 L`, `V: 3650 d`, `CP: 0.76`, `FP: 1.85`, `Frag: 0.95` |
| **123** | `service_it_pcb_microsoldering_salvage_proc` | `IPC-7711/7721` (Rework & Repair of Electronic Assemblies) · `ILO ISCO-08 Code 7421` | `E: 25000 EEB` (PCB microsoldering & component cannibalization for VHF/UHF radios & solar controllers), `P: 0.08 kg`, `Vol: 0.10 L`, `V: 730 d`, `CP: 0.75`, `FP: 1.80`, `Frag: 0.96` |
| **124** | `service_it_microcontroller_low_power_automation_proc` | `IEC 61131-3` (Programmable Controllers) · `FAO Irrigation Automation` · `ILO ISCO-08 Code 2152` | `E: 27000 EEB` (low-power MCU programming for borehole water pump & seed irrigation automation), `P: 0.11 kg`, `Vol: 0.14 L`, `V: 1095 d`, `CP: 0.76`, `FP: 1.70`, `Frag: 0.98` |
| **125** | `service_instruction_technical_literacy_class` | `UNESCO ISCED` (Adult Functional Literacy) · `WHO Health Literacy` · `ILO ISCO-08 Code 2359` | `E: 22000 EEB` (functional technical literacy class for antibiotic dosage & WASH manual reading), `P: 0.08 kg`, `Vol: 0.10 L`, `V: 3650 d`, `CP: 0.88`, `FP: 1.85`, `Frag: 1.05` |
| **126** | `service_instruction_applied_mathematics_proc` | `UNESCO Adult Numeracy Framework` · `ILO ISCO-08 Code 2320` (Vocational Education Teachers) | `E: 21000 EEB` (applied carpentry/masonry geometry & BarterScore exchange parity arithmetic), `P: 0.08 kg`, `Vol: 0.10 L`, `V: 3650 d`, `CP: 0.88`, `FP: 1.80`, `Frag: 1.05` |
| **127** | `service_instruction_combat_medicine_triage_class` | `WHO / ICRC Basic Emergency Care (BEC)` · `CoTCCC First Responder` · `Sphere WASH Training` | `E: 28000 EEB` (practical workshop multiplying triage, arterial tourniquet & WASH responders), `P: 0.15 kg`, `Vol: 0.18 L`, `V: 3650 d`, `CP: 0.82`, `FP: 2.15`, `Frag: 1.02` |
| **128** | `service_instruction_technical_translation_proc` | `ISO 17100:2015` (Translation Services) · `ITU Technical Terminology` · `ILO ISCO-08 Code 2643` | `E: 20000 EEB` (multilingual technical translation & decoding of salvaged manuals/radios), `P: 0.08 kg`, `Vol: 0.10 L`, `V: 3650 d`, `CP: 0.86`, `FP: 1.75`, `Frag: 1.04` |

---

## 4. Custom & Regional User Audit Ledger (`Items 129+`) — Governance Separation & Template

To preserve the mathematical integrity of the canonical Reference Catalog (`Items 001 to 128`: `001–100` Physical Commodities + `101–128` Standardized Essential Services) while empowering external developers, humanitarian teams, and community forks to add regional items (`Items 129+`), the **BarterScore Engine** enforces a strict **Two-Tier Audit Separation**:

1. **Tier 1 — Canonical Core Ledger (`Items 001 to 128`):**
   - Locked in Section 3 above and in `window.BarterCore.AuditSources.COMPLETE_100_ITEM_TRACEABILITY_MATRIX` (`001–100`), `ESSENTIAL_SERVICES_TRACEABILITY_MATRIX` (`101–128`), and `COMPLETE_128_ITEM_TRACEABILITY_MATRIX` (`001–128`). Never overwrite or renumber items `001` to `128`.
2. **Tier 2 — Custom / Regional User Audit Ledger (`Items 129+`):**
   - When you add `Item 129+` to your fork or runtime instance (via `data/items_core.js` or `engine.registerCustomItems([...])`), document its empirical source in the table below **and/or** register it programmatically via `window.BarterCore.AuditSources.registerCustomAuditSource({...})` in `audit_sources/offline_sources_registry.js`.

### 4.1. Markdown Table Template for User-Added Items (`129+`)

| # | Custom Semantic Item ID | Regional / Empirical Source Code (Pillar 1) | Offline Verified Snapshot Metrics (Pillar 2) & Maintainer / Fork Author |
| :---: | :--- | :--- | :--- |
| **129** | `doxycycline_hyclate_100mg_capsule` *(Example)* | `WHO EML 23rd List` · `ATC: J01AA02` (`Access Group` Tetracycline) | `E: 4600 EEB`, `P: 0.001 kg`, `Vol: 0.002 L`, `V: 1460 d`, `CP: 1.00`, `FP: 2.35`, `Frag: 1.10` · *Maintainer: Custom Regional Pack* |

### 4.2. Programmatic Registration Example (`window.BarterCore.AuditSources.registerCustomAuditSource`)

```javascript
window.BarterCore.AuditSources.registerCustomAuditSource({
  index: 129,
  id: 'doxycycline_hyclate_100mg_capsule',
  category: 'cat_pharma_essential',
  source_code: 'WHO EML 23rd List (WHO/MHP/HPS/EML/2023.02) | ATC: J01AA02 (Access)',
  baseline_note: 'E=4600 EEB (broad-spectrum tetracycline for cholera/zoonoses); P=0.001kg, V=1460d, FP=2.35',
  direct_url: 'https://iris.who.int/handle/10665/371090',
  snapshot_date: '2026-11-09',
  contributor: 'Custom Regional Fork'
});
```


