/**
 * @fileoverview BarterScore Engine - Offline Scientific & Regulatory Audit Registry (UMD Module)
 * @author Erisson Marques (https://github.com/erissontech)
 * @license Apache-2.0
 * @version 1.1.0
 *
 * Self-contained offline snapshot of the empirical queries, official document identifiers
 * (USDA FoodData Central FDC IDs, TBCA/TACO codes, Codex Alimentarius standards, WHO EML 23rd
 * List ATC codes, WHO/FCH/CAH/06.1 ORS formula, WHO GDWQ NaDCC 67mg specification, Sphere WASH
 * Standard 2.1, FDA Dec 2001 KI 130mg guidance, IEC 60086/61960, NIOSH 42 CFR Part 84, LBMA 999,
 * WHO IMEESC/IMPAC surgical & obstetric standards, IEEE 802.11s/ISO-27037/IPC-7711/IEC-61131-3
 * off-grid IT & microelectronics, UNESCO ISCED/ISO-17100 technical pedagogy & translation,
 * ILO ISCO-08, ISO 8996, FAO veterinary/seed), the decimal-step calibration rules, and the
 * complete 128-item traceability ledger (001 to 128).
 */

(function (root, factory) {
  'use strict';

  var auditModule = factory();

  // 1. Attach to global namespace for offline file:// protocol compatibility
  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.AuditSources = auditModule;
  }

  // 2. Support CommonJS / Node.js environments
  if (typeof module === 'object' && module.exports) {
    module.exports = auditModule;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  /**
   * Perennial Offline Audit & Link-Rot Resilience Protocol (The Immutable Triad).
   * Ensures 100% auditability even if external government URLs change or internet access is lost.
   */
  var LINK_ROT_RESILIENCE_PROTOCOL = Object.freeze({
    protocol_name: 'Immutable Audit Triad (Link-Rot Resilience v1.0)',
    pillar_1_permanent_identifiers:
      'Every item is anchored by a permanent, non-URL bibliographic/regulatory identifier (USDA FDC ID/NDB, TBCA/TACO code, Codex CXS number, WHO EML/ATC code, ISBN, IEC/ISO/ASTM/MIL-STD, or LBMA ISO 4217 code).',
    pillar_2_local_empirical_snapshot:
      'All extracted physical, nutritional, and clinical metrics are permanently stored in plain text inside audit_sources/OFFLINE_AUDIT_DOSSIER.md and audit_sources/offline_sources_registry.js for 100% offline verification.',
    pillar_3_archival_recovery_steps: Object.freeze([
      '1. Internet Archive Recovery: Prepend https://web.archive.org/web/*/ to any historical verification URL.',
      '2. Canonical Code Lookup: Search any physical or digital library using the Pillar 1 `source_code` (e.g., "USDA FDC 169756", "ATC J01CA04", "WHO/FCH/CAH/06.1", "Codex CXS 198-1995").'
    ])
  });

  /**
   * Physical and mathematical definition of 1 BarterScore Point (1 pt).
   */
  var FUNDAMENTAL_UNIT_DEFINITION = Object.freeze({
    unit_symbol: '1 pt (BarterScore Point)',
    algebraic_definition:
      '1 pt = 1 Effective Survival Kilocalorie per unit of Gravimetric-Volumetric Burden (kg + L + 0.1) scaled by 1 Logarithmic Decade of Shelf Life (log10(V + 1) = 1.0 at V = 9 days) with neutral readiness, morale, and packaging multipliers (CP = 1.0, FP = 1.0, Frag = 1.0).',
    why_item_b_has_2x_points_of_item_a: [
      '1. Energy / Utility Numerator (E): If Item B provides twice the metabolizable calories (kcal) or prevents twice the metabolic loss (EEB) at the same weight, volume, and shelf life, its score is strictly 2.0x higher.',
      '2. Gravimetric-Volumetric Burden (P + Vol + 0.1): If Item B delivers the same utility in half the combined mass+volume denominator, its portability density doubles its score.',
      '3. Logarithmic Longevity (log10(V + 1)): Shelf life scales logarithmically rather than linearly so a 5-year item (log10(1826) = 3.26) is valued higher than a 30-day item (log10(31) = 1.49) without distorting immediate survival utility.',
      '4. Operational Multipliers (CP × FP × Frag): Differences in fuel/water preparation cost (CP), crisis demand inelasticity (FP), and packaging resilience (Frag) scale the physical density baseline deterministically.'
    ]
  });

  /**
   * Granular step-by-step decimal rules explaining why specific values within a range are assigned.
   */
  var GRANULAR_DECIMAL_RUBRIC = Object.freeze({
    cost_of_prep_steps: Object.freeze([
      {
        value: 1.0,
        criteria: 'Zero preparation: Ready-to-eat food, oral tablet/capsule, sealed potable water, or ready tool.',
        examples: ['amoxicillin_500mg_capsule', 'water_potable_sealed_1000ml', 'tourniquet_tactical_arterial_unit']
      },
      {
        value: 0.9,
        criteria: 'Minimal preparation (<2 min): Requires dissolving in cold/ambient water without fuel.',
        examples: ['oral_rehydration_salts_who_sachet_27_9g', 'milk_powder_whole_400g']
      },
      {
        value: 0.85,
        criteria: 'Light hydration or optional brief heating (2–5 min): Rolled oats or instant staples.',
        examples: ['oats_rolled_whole_500g', 'coffee_instant_soluble_granules_50g']
      },
      {
        value: 0.65,
        criteria: 'Moderate thermal boiling (15–20 min) + 2x potable water volume: Polished white rice or dry pasta.',
        examples: ['rice_white_polished_raw_1000g', 'pasta_wheat_dry_500g']
      },
      {
        value: 0.55,
        criteria: 'Heavy thermal boiling (45–60 min) + 3x potable water volume: Hard dry legumes (black/common beans).',
        examples: ['beans_common_dry_1000g', 'chickpeas_dry_raw_500g']
      }
    ]),
    psychological_factor_steps: Object.freeze([
      {
        value: 1.25,
        criteria: 'Pure raw utilitarian baseline with low sensory morale impact.',
        examples: ['lentils_dry_raw_500g', 'flour_cassava_dry_1000g']
      },
      {
        value: 1.35,
        criteria: 'Primary satiety staple food providing familiar caloric security.',
        examples: ['rice_white_polished_raw_1000g', 'beans_common_dry_1000g']
      },
      {
        value: 1.75,
        criteria: 'High morale comfort, hygiene dignity, or OTC symptomatic relief.',
        examples: ['meat_bovine_canned_cooked_320g', 'ration_emergency_compressed_500g']
      },
      {
        value: 2.25,
        criteria: 'Neurochemical habit/withdrawal mitigation (caffeine, cocoa, nicotine, ethanol) with high siege liquidity.',
        examples: ['coffee_roasted_ground_vacuum_500g', 'chocolate_dark_cocoa_60pct_100g']
      },
      {
        value: 2.35,
        criteria: 'Acute life-saving systemic anti-infective or emergency water disinfection.',
        examples: ['amoxicillin_500mg_capsule', 'metronidazole_400mg_tablet', 'potassium_iodide_130mg_tablet']
      },
      {
        value: 2.5,
        criteria: 'Maximum inelastic survival ceiling: Arterial hemorrhage control, 0.1-micron filtration, or infant formula.',
        examples: ['tourniquet_tactical_arterial_unit', 'filter_water_hollow_fiber_0_1micron_unit']
      }
    ]),
    fragility_index_steps: Object.freeze([
      {
        value: 0.75,
        criteria: 'High vulnerability to moisture, tearing, or crushing (exposed paper rolls or fragile biscuits).',
        examples: ['paper_toilet_cellulose_roll_30m', 'biscuit_wheat_salted_dry_400g']
      },
      {
        value: 0.9,
        criteria: 'Flexible polymer bag, glass bottle, or liquid container requiring impact protection.',
        examples: ['pasta_wheat_dry_500g', 'oil_vegetable_refined_900ml', 'sodium_hypochlorite_2_5pct_1000ml']
      },
      {
        value: 1.05,
        criteria: 'Hermetic pharmaceutical blister pack or heavy-duty sealed pouch resistant to splash and drop.',
        examples: ['rice_white_polished_raw_1000g', 'amoxicillin_500mg_capsule']
      },
      {
        value: 1.15,
        criteria: 'Ruggedized sealed metal can, laminated Mylar pouch, or solid steel tool.',
        examples: ['fish_sardine_canned_oil_125g', 'meat_bovine_canned_cooked_320g']
      },
      {
        value: 1.2,
        criteria: 'Virtually indestructible noble metal bullion, full-tang carbon steel, or solid hardware.',
        examples: ['knife_fixed_blade_carbon_steel_fulltang', 'gold_bullion_999_fine_fractional_1g', 'silver_bullion_999_fine_1_troy_oz_31_1g']
      }
    ]),
    eeb_tiers: Object.freeze([
      {
        range: '500 – 3,000 EEB',
        criteria: 'Single-use consumables, baseline analgesia, single-dose water disinfection (20 L), or minor thermal/labor savings.',
        examples: ['tobacco_cigarette_filtered_unit', 'paracetamol_500mg_tablet', 'gauze_sterile_compress_7_5cm_unit', 'water_potable_sealed_1000ml', 'water_purification_nadcc_tablet_unit', 'battery_alkaline_lr6_aa_1_5v_unit']
      },
      {
        range: '3,000 – 10,000 EEB',
        criteria: 'Systemic anti-infectives, oral rehydration salts, surgical antiseptics, and multi-ignition fire tools preventing 3,500–10,000+ kcal of septic/febrile or manual labor loss.',
        examples: ['amoxicillin_500mg_capsule', 'ciprofloxacin_500mg_tablet', 'oral_rehydration_salts_who_sachet_27_9g', 'povidone_iodine_10pct_topical_100ml', 'lighter_butane_piezo_standard_unit', 'salt_sodium_chloride_iodized_1000g']
      },
      {
        range: '10,000 – 25,000 EEB',
        criteria: 'Life-saving arterial trauma devices, multi-cycle rechargeable lithium-ion storage (>5.5 kWh cumulative), ferrocerium rods, and bulk WASH chlorine.',
        examples: ['battery_lithium_ion_18650_3_7v_3000mah_unit', 'tarp_polyethylene_waterproof_3x3m_unit', 'sodium_hypochlorite_2_5pct_1000ml', 'ferrocerium_ignition_rod_8mm_unit', 'tourniquet_tactical_arterial_unit', 'silver_bullion_999_fine_1_troy_oz_31_1g']
      },
      {
        range: '25,000 – 50,000 EEB',
        criteria: 'Multi-year survival capital goods (>100,000 L filtration, full-tang steel tools, solar DC generation, VHF/UHF comms, open-pollinated seeds, and fractional gold bullion).',
        examples: ['microsd_flash_storage_64gb_offline_wiki_unit', 'multitool_pliers_stainless_folding_unit', 'knife_fixed_blade_carbon_steel_fulltang', 'seeds_open_pollinated_vegetable_mix_50g', 'filter_water_hollow_fiber_0_1micron_unit', 'panel_solar_monocrystalline_usb_5v_10w_unit', 'radio_transceiver_vhf_uhf_dualband_unit', 'gold_bullion_999_fine_fractional_1g']
      }
    ]),
    non_caloric_functional_consumables_rule: Object.freeze({
      rule_name: 'Non-Caloric Metabolic & Functional Consumables Rule (is_food: false -> EEB)',
      rationale:
        'Pure drinking water, iodized salt, sodium bicarbonate, coffee, tea, and 4% vinegar contain 0 or negligible metabolizable dietary calories (<20 kcal/100g) in USDA/TACO tables, while 40% distilled ethanol contains hepatotoxic non-nutritive calories and tobacco is inhaled. Configuring these 9 items with is_food: false (IN = 1.0) and evaluating them via EEB prevents division/multiplication by 0 kcal (which would assign ScoreBase = 0 to drinking water and essential electrolytes).',
      affected_item_ids: Object.freeze([
        'water_potable_sealed_1000ml',
        'salt_sodium_chloride_iodized_1000g',
        'coffee_roasted_ground_vacuum_500g',
        'coffee_instant_soluble_granules_50g',
        'vinegar_acetic_acid_4pct_750ml',
        'sodium_bicarbonate_pure_100g',
        'tea_camellia_sinensis_dry_50g',
        'tobacco_cigarette_filtered_unit',
        'alcohol_ethanol_potable_40pct_500ml'
      ])
    }),
    structural_constants_justification: Object.freeze({
      nutritional_index_weights:
        'Protein (+1.5) and Fat (+1.0) reward structural tissue repair and essential lipid density; Added Sugar (-1.2) penalizes empty glycemic calories without structural micronutrients, clamped to [0.5, 2.5] because pure glucose/sucrose still rescues acute hypoglycemia.',
      gravimetric_damping_epsilon_0_1:
        'Adding epsilon = 0.1 in (P + Vol + 0.1) prevents asymptotic division blow-up when P = 0.001 kg (1 g capsule/tablet), bounding maximum micro-item portability amplification to ~9.8x relative to a 0.5 kg pack.',
      logarithmic_longevity_log10:
        'Base-10 logarithmic scaling log10(V + 1) compresses 365 days (2.56) vs. 36,500 days (4.56) into a realistic ~1.78x durability premium rather than a 100x linear distortion.',
      mec_store_of_value_paradox:
        'Reflects the classical Water-Diamond Paradox and empirical Siege of Sarajevo (1992–1996) field records: precious metals drop to 0.01x in acute_collapse when food/antibiotics dominate survival, and rebound to 5.00x in economic_reconstruction.'
    })
  });

  /**
   * Offline snapshot of verified external empirical queries (stored locally so no internet is needed).
   */
  var VERIFIED_EMPIRICAL_RECORDS = Object.freeze([
    {
      record_id: 'USDA-FDC-169756',
      agency: 'USDA FoodData Central (SR Legacy)',
      document_code: 'FDC ID: 169756 / NDB: 20444 (Unenriched) & FDC ID: 168877 (Enriched)',
      official_title: 'Rice, white, long-grain, regular, raw',
      verified_metrics: '365 kcal / 100g (3,650 kcal / 1000g); Protein: 7.13g/100g (~7.8% kcal); Lipid: 0.66g/100g (~1.5% kcal); Added Sugar: 0.0g',
      mapped_catalog_items: ['rice_white_polished_raw_1000g'],
      direct_url: 'https://fdc.nal.usda.gov/food-details/169756/nutrients',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'USDA-FDC-173734',
      agency: 'USDA FoodData Central (SR Legacy) & TBCA USP',
      document_code: 'FDC ID: 173734 / NDB: 16014 & TBCA C0113A',
      official_title: 'Beans, common/black, mature seeds, raw (Phaseolus vulgaris)',
      verified_metrics: '329–341 kcal / 100g (3,290 kcal / 1000g); Protein: ~24.5% kcal; Lipid: ~3.5% kcal; High Iron & Potassium',
      mapped_catalog_items: ['beans_common_dry_1000g'],
      direct_url: 'https://fdc.nal.usda.gov/food-details/173734/nutrients',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'USDA-FDC-169640-169655-171411',
      agency: 'USDA FoodData Central (SR Legacy)',
      document_code: 'FDC ID: 169640 (Honey) | FDC ID: 169655 (Sugar) | FDC ID: 171411 (Soybean Oil)',
      official_title: 'Caloric Lipids & Carbohydrates Reference Records',
      verified_metrics: 'Honey: 304 kcal/100g (1,520 kcal/500g) | Sugar (Sucrose): 387 kcal/100g (3,870 kcal/kg) | Vegetable Oil: 884 kcal/100g (7,452 kcal/900ml)',
      mapped_catalog_items: ['honey_bee_pure_500g', 'sugar_sucrose_crystal_1000g', 'oil_vegetable_refined_900ml'],
      direct_url: 'https://fdc.nal.usda.gov/food-details/169640/nutrients',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'WHO-EML-23RD-2023',
      agency: 'World Health Organization (WHO)',
      document_code: 'WHO/MHP/HPS/EML/2023.02 (23rd List) — ATC Codes J01CA04, J01FA10, J01MA02, J01XD01, N02BE01, M01AE01',
      official_title: 'WHO Model List of Essential Medicines (23rd List) & AWaRe Classification',
      verified_metrics: 'Amoxicillin 500mg (J01CA04, Access); Azithromycin 500mg (J01FA10, Watch); Ciprofloxacin 500mg (J01MA02, Watch); Metronidazole 400mg (J01XD01, Access); Paracetamol 500mg (N02BE01); Ibuprofen 400mg (M01AE01)',
      mapped_catalog_items: [
        'amoxicillin_500mg_capsule',
        'azithromycin_500mg_tablet',
        'ciprofloxacin_500mg_tablet',
        'metronidazole_400mg_tablet',
        'paracetamol_500mg_tablet',
        'ibuprofen_400mg_tablet'
      ],
      direct_url: 'https://iris.who.int/handle/10665/371090',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'WHO-ORS-FCH-CAH-06-1',
      agency: 'World Health Organization (WHO) & UNICEF',
      document_code: 'Document WHO/FCH/CAH/06.1 & ATC: A07CA',
      official_title: 'Oral Rehydration Salts: Production of the new low-osmolarity ORS (245 mOsm/L)',
      verified_metrics: 'Sachet reconstitutes 1.0 L potable water (Na+ 75 mmol/L, Glucose 75 mmol/L, K+ 20 mmol/L, Citrate 10 mmol/L)',
      mapped_catalog_items: ['oral_rehydration_salts_who_sachet_27_9g'],
      direct_url: 'https://iris.who.int/handle/10665/69227',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'WHO-GDWQ-NADCC-67MG',
      agency: 'WHO / FAO JECFA & UNHCR Point-of-Use WASH',
      document_code: 'ISBN 978-92-4-154995-0 (WHO GDWQ 4th Ed.) — Sodium Dichloroisocyanurate (NaDCC)',
      official_title: 'Guidelines for Drinking-water Quality: NaDCC Disinfection & Cyanuric Acid Fact Sheet',
      verified_metrics: '1 tablet of 67 mg NaDCC treats 20 Liters of clear water (standard humanitarian jerrycan) with 30-minute contact time; JECFA TDI: 0–2.0 mg/kg bw',
      mapped_catalog_items: ['water_purification_nadcc_tablet_unit', 'sodium_hypochlorite_2_5pct_1000ml'],
      direct_url: 'https://www.who.int/publications/i/item/9789241549950',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'SPHERE-WASH-STD-2-1',
      agency: 'Sphere Association (Humanitarian Charter and Minimum Standards)',
      document_code: 'Sphere Handbook 2018 — WASH Standard 2.1: Access and Water Quantity',
      official_title: 'Minimum Standards in Water Supply, Sanitation and Hygiene Promotion',
      verified_metrics: 'Total basic water requirement: 15 L/person/day (Survival drinking & food: 2.5–3.0 L/day; Basic hygiene: 2–6 L/day; Basic cooking: 3–6 L/day)',
      mapped_catalog_items: ['water_potable_sealed_1000ml', 'filter_water_hollow_fiber_0_1micron_unit'],
      direct_url: 'https://spherestandards.org/handbook/editions/',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'FDA-KI-130MG-2001',
      agency: 'U.S. Food and Drug Administration (FDA CDER)',
      document_code: 'FDA Guidance Document (December 2001) — Potassium Iodide (KI) Thyroid Blocking',
      official_title: 'Guidance on Potassium Iodide as a Thyroid Blocking Agent in Radiation Emergencies',
      verified_metrics: 'Adult (>70 kg) standard blocking dose: 130 mg oral tablet (saturates thyroid gland against radioiodine I-131 uptake)',
      mapped_catalog_items: ['potassium_iodide_130mg_tablet'],
      direct_url: 'https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'IEC-60086-61960-NIOSH-84',
      agency: 'IEC (International Electrotechnical Commission) & CDC / NIOSH',
      document_code: 'IEC 60086-2 (Primary Cells) | IEC 61960-3 (Li-Ion 18650) | 42 CFR Part 84 (NIOSH N95)',
      official_title: 'Electrochemical Cell Designations & Particulate Respirator Certification',
      verified_metrics: 'LR6 = Cylindrical Alkaline AA 1.5V; LR03 = Alkaline AAA 1.5V; INR18650 = Li-Ion 18×65mm 3.7V 3000mAh; N95/PFF2 = >=94–95% non-oil aerosol filtration at 0.3µm',
      mapped_catalog_items: [
        'battery_alkaline_lr6_aa_1_5v_unit',
        'battery_alkaline_lr03_aaa_1_5v_unit',
        'battery_lithium_ion_18650_3_7v_3000mah_unit',
        'respirator_particulate_n95_pff2_unit'
      ],
      direct_url: 'https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html',
      snapshot_date: '2026-11-06'
    },
    {
      record_id: 'IEEE-802-11S-ISO27037-IPC7711-IEC61131',
      agency: 'IEEE / ISO-IEC / IPC / IEC (Off-Grid Cybernetics & Microelectronics Standards)',
      document_code: 'IEEE 802.11s (Mesh WLAN) | ISO/IEC 27037 (Digital Media Recovery) | IPC-7711/7721 (PCB Rework) | IEC 61131-3 (Embedded Control)',
      official_title: 'Emergency Local Area Mesh Networking, Forensic Media Extraction, Electronic Assembly Rework & Low-Power Microcontroller Automation',
      verified_metrics: 'Local offline WLAN/LoRa mesh distribution of 64GB MicroSD knowledge archives; non-destructive extraction of engineering/medical PDFs from dead storage; SMD/THT component harvesting; embedded DC relay automation for water pumps and crop irrigation',
      mapped_catalog_items: [
        'service_it_mesh_network_intranet_deployment_proc',
        'service_it_data_recovery_extraction_proc',
        'service_it_pcb_microsoldering_salvage_proc',
        'service_it_microcontroller_low_power_automation_proc'
      ],
      direct_url: 'https://www.itu.int/en/ITU-D/Emergency-Telecommunications/',
      snapshot_date: '2026-11-09'
    },
    {
      record_id: 'UNESCO-ISCED-ISCO2320-WHOBEC-ISO17100',
      agency: 'UNESCO / ILO / WHO-ICRC / ISO (Technical Instruction, First-Responder Training & Translation)',
      document_code: 'UNESCO ISCED (Adult Functional Literacy) | ILO ISCO-08 2320 (Vocational Instruction) | WHO-ICRC BEC (Basic Emergency Care) | ISO 17100 (Technical Translation)',
      official_title: 'Adult Functional Technical Literacy, Applied Field Numeracy, Community First-Responder Multiplication & Technical Manual Translation',
      verified_metrics: 'Permanent human capital transfer (V = 3650d): posology & manual reading comprehension; structural geometry & BarterScore parity arithmetic; community trauma/tourniquet/WASH responder multiplication; multilingual reverse-engineering translation',
      mapped_catalog_items: [
        'service_instruction_technical_literacy_class',
        'service_instruction_applied_mathematics_proc',
        'service_instruction_combat_medicine_triage_class',
        'service_instruction_technical_translation_proc'
      ],
      direct_url: 'https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/',
      snapshot_date: '2026-11-09'
    }
  ]);

  /**
   * Complete 100-item traceability ledger (001 to 100) mapping every item in data/items_core.js
   * to its permanent scientific/regulatory code and offline baseline metrics.
   */
  var COMPLETE_100_ITEM_TRACEABILITY_MATRIX = Object.freeze([
    // Category 1: cat_staple_foods (001–020)
    { index: 1, id: 'rice_white_polished_raw_1000g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 169756 (NDB 20444) | Codex CXS 198-1995', baseline_note: '3650 kcal/kg; Prot 7.8%, Fat 1.5%; V=1825d, CP=0.65' },
    { index: 2, id: 'beans_common_dry_1000g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 173734 (NDB 16014) | TBCA C0113A | Codex CXS 171-1989', baseline_note: '3290 kcal/kg; Prot 24.5%, Fat 3.5%, High K/Fe; V=1095d, CP=0.55' },
    { index: 3, id: 'lentils_dry_raw_500g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 172420 (NDB 16069) | Codex CXS 171-1989', baseline_note: '1760 kcal/500g (352 kcal/100g); Prot 28.0%, High K/Fe; V=1460d, CP=0.72' },
    { index: 4, id: 'chickpeas_dry_raw_500g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 173756 (NDB 16056) | Codex CXS 171-1989', baseline_note: '1890 kcal/500g (378 kcal/100g); Prot 21.2%, Fat 14.3%; V=1460d, CP=0.58' },
    { index: 5, id: 'pasta_wheat_dry_500g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 169736 (NDB 20120) | Codex CXS 178-1991', baseline_note: '1855 kcal/500g (371 kcal/100g); Prot 13.5%, Fat 3.6%; V=1095d, CP=0.75' },
    { index: 6, id: 'flour_cassava_dry_1000g', category: 'cat_staple_foods', source_code: 'TACO 4th Ed. #016 | TBCA C0064A | Codex CXS 176-1989', baseline_note: '3610 kcal/kg; Ready toasted cassava meal; V=730d, CP=0.95' },
    { index: 7, id: 'flour_wheat_enriched_1000g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 169761 (NDB 20081) | Codex CXS 152-1985', baseline_note: '3640 kcal/kg; Prot 11.3%, Enriched Fe; V=365d, CP=0.55' },
    { index: 8, id: 'cornmeal_flaked_dry_500g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 169698 (NDB 20016) | Codex CXS 155-1985', baseline_note: '1805 kcal/500g (361 kcal/100g); Prot 8.8%, Fat 4.2%; V=540d, CP=0.78' },
    { index: 9, id: 'oats_rolled_whole_500g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 173904 (NDB 08120) | Codex CXS 201-1995', baseline_note: '1945 kcal/500g (389 kcal/100g); Prot 14.5%, Fat 16.0%; V=730d, CP=0.90' },
    { index: 10, id: 'milk_powder_whole_400g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 171279 (NDB 01212) | Codex CXS 207-1999', baseline_note: '1984 kcal/400g (496 kcal/100g); Prot 21.2%, Fat 48.4%, High Ca; V=730d, CP=0.92' },
    { index: 11, id: 'oil_vegetable_refined_900ml', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 171411 (NDB 04044) | Codex CXS 210-1999', baseline_note: '7452 kcal/900ml (884 kcal/100g); 100% Lipid; V=540d, CP=0.95' },
    { index: 12, id: 'lard_pork_rendered_500g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 171401 (NDB 04002) | Codex CXS 211-1999', baseline_note: '4500 kcal/500g (900 kcal/100g); 100% Lipid; V=540d, CP=0.95' },
    { index: 13, id: 'fish_sardine_canned_oil_125g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 175139 (NDB 15088) | Codex CXS 94-1981', baseline_note: '260 kcal/125g; Prot 47.0%, Fat 53.0%, High Ca/Fe; V=1460d, CP=1.00, Frag=1.15' },
    { index: 14, id: 'fish_tuna_canned_solid_170g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 175158 (NDB 15119) | Codex CXS 70-1981', baseline_note: '336 kcal/170g; Prot 58.0%, Fat 42.0%; V=1460d, CP=1.00, Frag=1.15' },
    { index: 15, id: 'meat_bovine_cured_salted_500g', category: 'cat_staple_foods', source_code: 'TACO 4th Ed. #396 (Charque) | USDA FDC ID: 168608', baseline_note: '1565 kcal/500g; Prot 42.0%, Fat 58.0%, High Na/Fe; V=180d, CP=0.68' },
    { index: 16, id: 'meat_bovine_canned_cooked_320g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 174036 (NDB 13346) | Codex CXS 88-1981', baseline_note: '800 kcal/320g; Prot 40.0%, Fat 60.0%; V=1825d, CP=1.00, Frag=1.15' },
    { index: 17, id: 'peanut_paste_roasted_500g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 172470 (NDB 16097)', baseline_note: '2940 kcal/500g (588 kcal/100g); Prot 17.0%, Fat 72.0%; V=540d, CP=1.00' },
    { index: 18, id: 'honey_bee_pure_500g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 169640 (NDB 19296) | Codex CXS 12-1981', baseline_note: '1520 kcal/500g (304 kcal/100g); V=3650d, CP=1.00, FP=1.85' },
    { index: 19, id: 'biscuit_wheat_salted_dry_400g', category: 'cat_staple_foods', source_code: 'USDA FDC ID: 172688 (NDB 18228 Crackers)', baseline_note: '1720 kcal/400g; Prot 9.2%, Fat 24.0%, High Na; V=365d, CP=1.00, Frag=0.78' },
    { index: 20, id: 'water_potable_sealed_1000ml', category: 'cat_staple_foods', source_code: 'Sphere WASH Std 2.1 (2.5–3.0 L/day survival) | Codex CXS 227-2001', baseline_note: 'E=2400 EEB (acute dehydration prevention); P=1.03kg, Vol=1.05L, V=730d, CP=1.00' },

    // Category 2: cat_critical_nutrition (021–025)
    { index: 21, id: 'infant_formula_powder_stage1_400g', category: 'cat_critical_nutrition', source_code: 'Codex CXS 72-1981 (Infant Formula) | USDA FDC ID: 171284', baseline_note: '2040 kcal/400g; Prot 10.8%, Fat 47.5%, High VitC/Ca/Fe; V=540d, FP=2.45' },
    { index: 22, id: 'ration_emergency_compressed_500g', category: 'cat_critical_nutrition', source_code: 'ISO 18813:2022 / SOLAS & Humanitarian High-Energy Ration (BP-5)', baseline_note: '2450 kcal/500g; Complete vitamin/mineral fortification; V=1825d, CP=1.00, Frag=1.15' },
    { index: 23, id: 'protein_whey_concentrate_powder_100g', category: 'cat_critical_nutrition', source_code: 'USDA FDC ID: 173179 (NDB 01230) | Codex CXS 289-1995', baseline_note: '400 kcal/100g; Prot 78.0%, Fat 12.0%, High Ca; V=540d, CP=0.95' },
    { index: 24, id: 'coconut_milk_powder_200g', category: 'cat_critical_nutrition', source_code: 'USDA FDC ID: 170172 (NDB 12117 Dehydrated Coconut Cream)', baseline_note: '1360 kcal/200g (680 kcal/100g); Fat 84.0%, High K/Fe; V=730d, CP=0.95' },
    { index: 25, id: 'gelatin_unflavored_powder_50g', category: 'cat_critical_nutrition', source_code: 'USDA FDC ID: 169599 (NDB 19177 Gelatin, dry powder)', baseline_note: '170 kcal/50g; Prot 98.0% collagen amino acids; V=1095d, CP=0.85' },

    // Category 3: cat_spices_morale (026–040)
    { index: 26, id: 'salt_sodium_chloride_iodized_1000g', category: 'cat_spices_morale', source_code: 'Codex CXS 150-1985 (Food Grade Iodized Salt, 15–40 ppm I)', baseline_note: 'E=9500 EEB (electrolyte survival & food curing); V=3650d, CP=1.00, FP=2.10' },
    { index: 27, id: 'sugar_sucrose_crystal_1000g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 169655 (NDB 19335) | Codex CXS 212-1999', baseline_note: '3870 kcal/kg; 100% Sucrose; V=3650d, CP=1.00, FP=1.85' },
    { index: 28, id: 'coffee_roasted_ground_vacuum_500g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 171891 (NDB 14209) | ISO 3509', baseline_note: 'E=5800 EEB (CNS alertness & high siege barter liquidity); V=730d, CP=0.82, FP=2.25' },
    { index: 29, id: 'coffee_instant_soluble_granules_50g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 171893 (NDB 14214 Instant Coffee)', baseline_note: 'E=2400 EEB (zero-fuel soluble caffeine ration); V=1825d, CP=0.96, FP=2.20' },
    { index: 30, id: 'tomato_paste_concentrated_300g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 170459 (NDB 11546) | Codex CXS 57-1981', baseline_note: '246 kcal/300g; High Vit C & Lycopene/K; V=730d, CP=0.92, Frag=1.10' },
    { index: 31, id: 'broth_bouillon_dehydrated_cube_10g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 171569 (NDB 06075) | Codex CXS 117-1981', baseline_note: '24 kcal/10g; Sodium & savory palatability enhancer; V=730d, CP=0.92' },
    { index: 32, id: 'vinegar_acetic_acid_4pct_750ml', category: 'cat_spices_morale', source_code: 'Codex CXS 162-1987 | USDA FDC ID: 173469 (4% Acetic Acid)', baseline_note: 'E=3200 EEB (food preservation, acidification & hygiene); V=1825d, CP=1.00' },
    { index: 33, id: 'garlic_dehydrated_powder_100g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 171325 (NDB 02020 Garlic Powder)', baseline_note: '331 kcal/100g; Prot 20.0%, High K/Fe; V=1095d, CP=1.00, FP=1.60' },
    { index: 34, id: 'pepper_black_ground_50g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 170931 (NDB 02030 Black Pepper) | ISO 959-1', baseline_note: '125 kcal/50g; Piperine palatability & micronutrient density; V=1460d, CP=1.00' },
    { index: 35, id: 'sodium_bicarbonate_pure_100g', category: 'cat_spices_morale', source_code: 'USP / Food Chemicals Codex (NaHCO3, INS 500ii)', baseline_note: 'E=2600 EEB (antacid, baking leavening & oral hygiene); V=1825d, CP=1.00' },
    { index: 36, id: 'chocolate_dark_cocoa_60pct_100g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 170272 (NDB 19903) | Codex CXS 87-1981', baseline_note: '546 kcal/100g; Fat 56.0%, High Fe/K & theobromine morale; V=540d, FP=2.25' },
    { index: 37, id: 'candy_hard_glucose_unit_5g', category: 'cat_spices_morale', source_code: 'USDA FDC ID: 168810 (NDB 19107 Hard Candies)', baseline_note: '20 kcal/5g; Rapid sublingual/oral glucose boost; V=1095d, CP=1.00' },
    { index: 38, id: 'tea_camellia_sinensis_dry_50g', category: 'cat_spices_morale', source_code: 'ISO 3720 / ISO 11287 | USDA FDC ID: 171917', baseline_note: 'E=1800 EEB (boiled water palatability & caffeine/tannins); V=1095d, CP=0.85' },
    { index: 39, id: 'tobacco_cigarette_filtered_unit', category: 'cat_spices_morale', source_code: 'ICRC Sarajevo Siege Field Ledger | ISO 3308 Standard Unit', baseline_note: 'E=650 EEB (high-liquidity fractional siege currency); P=0.001kg, V=730d, FP=2.35' },
    { index: 40, id: 'alcohol_ethanol_potable_40pct_500ml', category: 'cat_spices_morale', source_code: 'Codex / OIV Distilled Spirits Standard (40% ABV)', baseline_note: 'E=8500 EEB (high-liquidity trade asset, solvent & antiseptic backup); V=3650d, FP=2.40' },

    // Category 4: cat_pharma_essential (041–055)
    { index: 41, id: 'amoxicillin_500mg_capsule', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List (WHO/MHP/HPS/EML/2023.02) | ATC: J01CA04 (Access)', baseline_note: 'E=4200 EEB (systemic broad-spectrum penicillin); P=0.001kg, V=1095d, FP=2.35' },
    { index: 42, id: 'azithromycin_500mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: J01FA10 (Watch Group Macrolide)', baseline_note: 'E=4800 EEB (respiratory & enteric bacterial infections); P=0.001kg, V=1095d, FP=2.40' },
    { index: 43, id: 'ciprofloxacin_500mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: J01MA02 (Watch Group Fluoroquinolone)', baseline_note: 'E=5000 EEB (invasive dysentery, cholera & Gram-negative sepsis); P=0.001kg, V=1460d, FP=2.45' },
    { index: 44, id: 'metronidazole_400mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: J01XD01 / P01AB01 (Access)', baseline_note: 'E=4300 EEB (anaerobic trauma & waterborne Giardia/Entamoeba); P=0.001kg, V=1460d, FP=2.35' },
    { index: 45, id: 'paracetamol_500mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: N02BE01 (INN: Paracetamol / USP: Acetaminophen)', baseline_note: 'E=1600 EEB (core antipyretic & non-opioid analgesic); P=0.001kg, V=1460d, FP=2.00' },
    { index: 46, id: 'metamizole_sodium_500mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO INN: Metamizole Sodium | ATC: N02BB02 | DCB 03069', baseline_note: 'E=1850 EEB (refractory fever & visceral/trauma pain); P=0.001kg, V=1460d, FP=2.10' },
    { index: 47, id: 'ibuprofen_400mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: M01AE01 (NSAID)', baseline_note: 'E=1950 EEB (musculoskeletal inflammation & analgesia); P=0.001kg, V=1460d, FP=2.10' },
    { index: 48, id: 'ibuprofen_oral_suspension_50mg_ml_20ml', category: 'cat_pharma_essential', source_code: 'WHO EMLc (Pediatric Essential List) | ATC: M01AE01', baseline_note: 'E=4600 EEB (divisible 20ml pediatric antipyretic drops); P=0.038kg, V=730d, FP=2.35' },
    { index: 49, id: 'loperamide_hydrochloride_2mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: A07DA03', baseline_note: 'E=2800 EEB (acute non-invasive diarrheal dehydration control); P=0.001kg, V=1460d, FP=2.25' },
    { index: 50, id: 'oral_rehydration_salts_who_sachet_27_9g', category: 'cat_pharma_essential', source_code: 'WHO/FCH/CAH/06.1 & WHO EML 23rd List | ATC: A07CA', baseline_note: 'E=5200 EEB (reconstitutes 1L low-osmolarity ORS); P=0.030kg, V=1095d, CP=0.90, FP=2.40' },
    { index: 51, id: 'loratadine_10mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: R06AX13', baseline_note: 'E=1750 EEB (non-sedating H1 antihistamine); P=0.001kg, V=1460d, FP=1.85' },
    { index: 52, id: 'omeprazole_20mg_capsule', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: A02BC01', baseline_note: 'E=1900 EEB (proton pump inhibitor for gastric ulcer/bleeding); P=0.001kg, V=1095d, FP=1.90' },
    { index: 53, id: 'potassium_iodide_130mg_tablet', category: 'cat_pharma_essential', source_code: 'US FDA CDER Guidance (Dec 2001) & WHO | ATC: V03AB21', baseline_note: 'E=4500 EEB (130mg thyroid blocking against I-131 fallout); P=0.001kg, V=2555d, FP=2.35' },
    { index: 54, id: 'ascorbic_acid_500mg_tablet', category: 'cat_pharma_essential', source_code: 'WHO EML 23rd List | ATC: A11GA01', baseline_note: 'E=1650 EEB (scurvy prevention & immune/tissue repair); P=0.001kg, V=1095d, FP=1.80' },
    { index: 55, id: 'multivitamin_mineral_complex_tablet', category: 'cat_pharma_essential', source_code: 'WHO / WFP / UNICEF Multiple Micronutrient Supplement (MMS) | ATC: A11AA03', baseline_note: 'E=2100 EEB (prevents micronutrient deficiency syndromes); P=0.002kg, V=1095d, FP=1.95' },

    // Category 5: cat_trauma_hygiene (056–070)
    { index: 56, id: 'ethanol_antiseptic_70pct_100ml', category: 'cat_trauma_hygiene', source_code: 'WHO EML 23rd List | ATC: D08AX08 (70% v/v Ethanol)', baseline_note: 'E=4800 EEB (bactericidal skin & instrument disinfection); P=0.095kg, V=1825d, FP=2.05' },
    { index: 57, id: 'hydrogen_peroxide_3pct_10vol_100ml', category: 'cat_trauma_hygiene', source_code: 'USP / BP / Ph.Eur. | ATC: D08AX01 (3% w/v H2O2)', baseline_note: 'E=3200 EEB (mechanical wound debridement & oral rinse); P=0.110kg, V=730d, FP=1.85' },
    { index: 58, id: 'povidone_iodine_10pct_topical_100ml', category: 'cat_trauma_hygiene', source_code: 'WHO EML 23rd List | ATC: D08AG02 (10% Povidone-Iodine)', baseline_note: 'E=6800 EEB (broad-spectrum trauma & surgical antisepsis); P=0.115kg, V=1095d, FP=2.25' },
    { index: 59, id: 'chlorhexidine_digluconate_2pct_100ml', category: 'cat_trauma_hygiene', source_code: 'WHO EML 23rd List | ATC: D08AC02 (2% Chlorhexidine)', baseline_note: 'E=6500 EEB (persistent-action topical antisepsis); P=0.110kg, V=1095d, FP=2.20' },
    { index: 60, id: 'gauze_sterile_compress_7_5cm_unit', category: 'cat_trauma_hygiene', source_code: 'WHO IEHK 2017 | EN 14079 (7.5×7.5cm Sterile Cotton Compress)', baseline_note: 'E=2200 EEB (sterile hemorrhage packing & wound barrier); P=0.012kg, V=1825d, FP=2.00' },
    { index: 61, id: 'tape_medical_waterproof_spool_5m', category: 'cat_trauma_hygiene', source_code: 'WHO IEHK 2017 | ISO 10993 (5m Waterproof Medical Tape)', baseline_note: 'E=3100 EEB (dressing fixation & blister prevention); P=0.045kg, V=1460d, FP=1.85' },
    { index: 62, id: 'bandage_elastic_compression_roll_2m', category: 'cat_trauma_hygiene', source_code: 'WHO IEHK 2017 | DIN 61632 (2m Elastic Compression Roll)', baseline_note: 'E=3800 EEB (pressure dressing & joint immobilization); P=0.055kg, V=2555d, FP=2.00' },
    { index: 63, id: 'tourniquet_tactical_arterial_unit', category: 'cat_trauma_hygiene', source_code: 'US DoD CoTCCC TCCC Guidelines (Windlass Arterial Tourniquet)', baseline_note: 'E=18500 EEB (stops fatal extremity arterial bleeding); P=0.080kg, V=3650d, FP=2.50, Frag=1.20' },
    { index: 64, id: 'suture_surgical_nylon_3_0_needle_unit', category: 'cat_trauma_hygiene', source_code: 'USP 3-0 Monofilament Nylon with Needle | WHO IEHK 2017', baseline_note: 'E=8200 EEB (primary wound closure); P=0.008kg, V=1825d, CP=0.75, FP=2.35' },
    { index: 65, id: 'syringe_sterile_5ml_with_needle_unit', category: 'cat_trauma_hygiene', source_code: 'ISO 7886-1 & ISO 7864 (Sterile 5mL Syringe with Needle)', baseline_note: 'E=3600 EEB (parenteral injection & wound irrigation); P=0.010kg, V=1825d, FP=2.05' },
    { index: 66, id: 'gloves_nitrile_exam_pair', category: 'cat_trauma_hygiene', source_code: 'ASTM D6319 / EN 455 (Powder-Free Nitrile Exam Gloves)', baseline_note: 'E=1900 EEB (biological barrier protection); P=0.010kg, V=1460d, FP=1.85' },
    { index: 67, id: 'respirator_particulate_n95_pff2_unit', category: 'cat_trauma_hygiene', source_code: 'CDC/NIOSH 42 CFR Part 84 (N95) | EN 149 (FFP2) | ABNT NBR 13698 (PFF2)', baseline_note: 'E=3400 EEB (airborne pathogen & rubble dust filtration); P=0.015kg, V=1825d, FP=2.10' },
    { index: 68, id: 'soap_glycerin_neutral_bar_200g', category: 'cat_trauma_hygiene', source_code: 'Sphere WASH Hygiene Standard 1.2 (200g Neutral Bar)', baseline_note: 'E=5400 EEB (interrupts fecal-oral & wound infection chains); P=0.200kg, V=1825d, FP=2.05' },
    { index: 69, id: 'paper_toilet_cellulose_roll_30m', category: 'cat_trauma_hygiene', source_code: 'Sphere WASH Sanitary Hygiene Benchmark (30m Cellulose Roll)', baseline_note: 'E=2600 EEB (sanitation dignity & dry tinder); P=0.100kg, Vol=0.85L, V=1825d, Frag=0.75' },
    { index: 70, id: 'sanitary_pad_absorbent_external_unit', category: 'cat_trauma_hygiene', source_code: 'Sphere WASH MHM Standard & UNFPA Dignity Kit', baseline_note: 'E=1800 EEB (menstrual hygiene & secondary trauma pad); P=0.008kg, V=1825d, FP=2.00' },

    // Category 6: cat_water_fire_shelter (071–080)
    { index: 71, id: 'sodium_hypochlorite_2_5pct_1000ml', category: 'cat_water_fire_shelter', source_code: 'WHO GDWQ 4th Ed. (ISBN 978-92-4-154995-0) | CDC SWS (2.5% Chlorine)', baseline_note: 'E=14500 EEB (bulk cold water disinfection & surface bleach); P=1.08kg, V=365d, FP=2.25' },
    { index: 72, id: 'water_purification_nadcc_tablet_unit', category: 'cat_water_fire_shelter', source_code: 'WHO GDWQ 4th Ed. & UNHCR WASH (67mg NaDCC Tablet)', baseline_note: 'E=2600 EEB (disinfects 20L jerrycan in 30 min); P=0.001kg, V=1825d, CP=0.95, FP=2.30' },
    { index: 73, id: 'filter_water_hollow_fiber_0_1micron_unit', category: 'cat_water_fire_shelter', source_code: 'US EPA / NSF P231 (0.1 Micron Hollow-Fiber Membrane Filter)', baseline_note: 'E=32000 EEB (100,000L zero-fuel bacterial/protozoal filtration); P=0.090kg, V=1825d, FP=2.50' },
    { index: 74, id: 'lighter_butane_piezo_standard_unit', category: 'cat_water_fire_shelter', source_code: 'ISO 9994:2018 (~3,000 Ignitions) | Sarajevo Siege Benchmark', baseline_note: 'E=7500 EEB (instant fire & primary siege barter currency); P=0.022kg, V=1825d, FP=2.30' },
    { index: 75, id: 'ferrocerium_ignition_rod_8mm_unit', category: 'cat_water_fire_shelter', source_code: 'Metallurgical Mischmetal Alloy (3,000°C Sparks, ~10,000 Strikes)', baseline_note: 'E=16000 EEB (all-weather permanent fire-starting rod); P=0.045kg, V=3650d, Frag=1.20' },
    { index: 76, id: 'matches_waterproof_safety_box_40un', category: 'cat_water_fire_shelter', source_code: 'EN 1783:1997 (Waterproof Safety Matches, Box of 40)', baseline_note: 'E=3200 EEB (40 reliable thermal ignitions); P=0.018kg, V=1460d, FP=1.95' },
    { index: 77, id: 'candle_paraffin_solid_white_30g_unit', category: 'cat_water_fire_shelter', source_code: 'ASTM F2417 / EN 15493 (30g Solid Paraffin Candle)', baseline_note: 'E=2100 EEB (~5–6h illumination & flame source); P=0.030kg, V=3650d, FP=1.80' },
    { index: 78, id: 'fuel_solid_hexamine_tablet_14g_unit', category: 'cat_water_fire_shelter', source_code: 'NATO STANAG / MIL-F-44072 (14g Hexamine Smokeless Fuel Tablet)', baseline_note: 'E=2900 EEB (boils 500ml water without smoke); P=0.014kg, V=1825d, FP=1.90' },
    { index: 79, id: 'blanket_thermal_aluminized_mylar_unit', category: 'cat_water_fire_shelter', source_code: 'ASTM F1868 / ISO 11092 (Aluminized BoPET Space Blanket)', baseline_note: 'E=5800 EEB (hypothermia & shock prevention); P=0.055kg, V=2555d, FP=2.10' },
    { index: 80, id: 'tarp_polyethylene_waterproof_3x3m_unit', category: 'cat_water_fire_shelter', source_code: 'UNHCR / IFRC Plastic Sheeting Spec (3m×3m Waterproof Tarp)', baseline_note: 'E=14000 EEB (shelter roof & rainwater catchment); P=0.950kg, Vol=1.2L, V=1825d, FP=2.20' },

    // Category 7: cat_tools_energy_comms (081–094)
    { index: 81, id: 'knife_fixed_blade_carbon_steel_fulltang', category: 'cat_tools_energy_comms', source_code: 'SAE/AISI 1095 High-Carbon Steel (Full-Tang Fixed-Blade Knife)', baseline_note: 'E=28000 EEB (woodcraft, shelter building & defense capital tool); P=0.240kg, V=3650d, Frag=1.20' },
    { index: 82, id: 'multitool_pliers_stainless_folding_unit', category: 'cat_tools_energy_comms', source_code: 'AISI 420HC Martensitic Stainless Steel Folding Multi-Tool', baseline_note: 'E=26000 EEB (portable mechanical & electrical repair station); P=0.220kg, V=3650d, Frag=1.18' },
    { index: 83, id: 'saw_wire_stainless_pocket_unit', category: 'cat_tools_energy_comms', source_code: 'MIL-W-83420 Braided Stainless Steel Pocket Wire Saw', baseline_note: 'E=7200 EEB (ultralight wood & material cutting); P=0.030kg, V=1825d, CP=0.85' },
    { index: 84, id: 'tape_cloth_adhesive_waterproof_48mm_10m', category: 'cat_tools_energy_comms', source_code: 'ASTM D5486M Type IV (48mm×10m Waterproof Cloth Duct Tape)', baseline_note: 'E=8400 EEB (heavy-duty structural & waterproof patching); P=0.160kg, V=1460d, FP=2.10' },
    { index: 85, id: 'cord_nylon_kernmantle_550lb_10m', category: 'cat_tools_energy_comms', source_code: 'MIL-C-5040H Type III (550lb 7-Strand Nylon Paracord, 10m)', baseline_note: 'E=9200 EEB (rigging, lashing & inner-core filament utility); P=0.075kg, V=3650d, Frag=1.20' },
    { index: 86, id: 'steel_wool_fine_grade_0000_pad_unit', category: 'cat_tools_energy_comms', source_code: 'Commercial Spec A-A-1043 (Grade #0000 Fine Steel Wool Pad)', baseline_note: 'E=1950 EEB (ignition tinder & metal scouring); P=0.015kg, V=1460d, FP=1.70' },
    { index: 87, id: 'needle_sewing_heavy_steel_with_thread_10m', category: 'cat_tools_energy_comms', source_code: 'High-Carbon Canvas Needle + 10m Bonded Polyester Thread', baseline_note: 'E=4600 EEB (repairs footwear, packs & heavy clothing); P=0.012kg, V=3650d, Frag=1.15' },
    { index: 88, id: 'fishing_kit_line_20m_hooks_5un_weights_5un', category: 'cat_tools_energy_comms', source_code: 'SOLAS / NATO Survival Fishing Kit (20m Line, 5 Hooks, 5 Weights)', baseline_note: 'E=11500 EEB (ongoing aquatic protein harvesting); P=0.025kg, V=3650d, CP=0.80' },
    { index: 89, id: 'battery_alkaline_lr6_aa_1_5v_unit', category: 'cat_tools_energy_comms', source_code: 'IEC 60086-2:2021 (LR6 Cylindrical Alkaline AA 1.5V) | ANSI 15A', baseline_note: 'E=2800 EEB (~3.8 Wh primary DC cell); P=0.023kg, V=2555d, FP=2.05' },
    { index: 90, id: 'battery_alkaline_lr03_aaa_1_5v_unit', category: 'cat_tools_energy_comms', source_code: 'IEC 60086-2:2021 (LR03 Cylindrical Alkaline AAA 1.5V) | ANSI 24A', baseline_note: 'E=2200 EEB (~1.7 Wh primary DC cell); P=0.011kg, V=2555d, FP=1.95' },
    { index: 91, id: 'battery_lithium_ion_18650_3_7v_3000mah_unit', category: 'cat_tools_energy_comms', source_code: 'IEC 61960-3:2017 (INR18650 Rechargeable Li-Ion 3.7V 3000mAh)', baseline_note: 'E=12500 EEB (11.1 Wh rechargeable DC cell, 500+ cycles); P=0.048kg, V=1825d, FP=2.30' },
    { index: 92, id: 'flashlight_led_aluminum_aa_compatible_unit', category: 'cat_tools_energy_comms', source_code: 'ANSI/PLATO FL 1-2019 (Anodized Aluminum IPX6 LED Flashlight)', baseline_note: 'E=15000 EEB (high-efficiency solid-state illumination); P=0.085kg, V=3650d, Frag=1.15' },
    { index: 93, id: 'panel_solar_monocrystalline_usb_5v_10w_unit', category: 'cat_tools_energy_comms', source_code: 'IEC 61215 (Monocrystalline 5V 10W USB Photovoltaic Panel)', baseline_note: 'E=38000 EEB (autonomous grid-down DC power generation); P=0.320kg, V=3650d, FP=2.45' },
    { index: 94, id: 'radio_transceiver_vhf_uhf_dualband_unit', category: 'cat_tools_energy_comms', source_code: 'ETSI EN 300 086 / FCC Part 90 (VHF/UHF Dual-Band 5W Transceiver)', baseline_note: 'E=42000 EEB (off-grid tactical & emergency radio comms); P=0.250kg, V=2555d, FP=2.45' },

    // Category 8: cat_store_of_value (095–100)
    { index: 95, id: 'faraday_bag_shielded_rf_emp_medium_unit', category: 'cat_store_of_value', source_code: 'MIL-STD-188-125-1 / IEEE Std 299 (RF/EMP Shielding Pouch)', baseline_note: 'E=14000 EEB (shields electronics from EMP/CME/RF tracking); P=0.090kg, V=3650d, Frag=1.10' },
    { index: 96, id: 'microsd_flash_storage_64gb_offline_wiki_unit', category: 'cat_store_of_value', source_code: 'SD Association microSDXC 64GB (Offline Medical & Technical Library)', baseline_note: 'E=25000 EEB (civilizational & medical reference archive); P=0.001kg, V=3650d, CP=0.75' },
    { index: 97, id: 'eyeglasses_reading_convex_diopter_plus_2_0', category: 'cat_store_of_value', source_code: 'ISO 16034:2002 (+2.00 Diopter Near-Vision Reading Glasses)', baseline_note: 'E=12000 EEB (restores precision close-up vision); P=0.028kg, V=3650d, Frag=0.80' },
    { index: 98, id: 'seeds_open_pollinated_vegetable_mix_50g', category: 'cat_store_of_value', source_code: 'ISTA & FAO Seed Security Standard (Non-Hybrid Heirloom Seeds 50g)', baseline_note: 'E=30000 EEB (sustainable agricultural food production); P=0.055kg, V=1095d, CP=0.50' },
    { index: 99, id: 'silver_bullion_999_fine_1_troy_oz_31_1g', category: 'cat_store_of_value', source_code: 'LBMA Good Delivery / ISO 4217: XAG (999.0 Fine Silver 1 Troy Oz = 31.1g)', baseline_note: 'E=22000 EEB (post-collapse silver bullion & oligodynamic water ion source); P=0.0311kg, V=36500d, Frag=1.20' },
    { index: 100, id: 'gold_bullion_999_fine_fractional_1g', category: 'cat_store_of_value', source_code: 'LBMA Good Delivery / ISO 4217: XAU (999.9 Fine Gold 1.0g Fractional Bar)', baseline_note: 'E=50000 EEB (supreme wealth density in economic_reconstruction); P=0.001kg, V=36500d, FP=2.50, Frag=1.20' }
  ]);

  /**
   * Traceability Matrix for Standardized Essential Human Services & Specialized Labor (Items 101 to 128).
   */
  var ESSENTIAL_SERVICES_TRACEABILITY_MATRIX = Object.freeze([
    { index: 101, id: 'service_trauma_wound_debridement_suturing_proc', category: 'cat_essential_services', source_code: 'WHO IMEESC (Surgical Care at the District Hospital, ISBN 92-4-154575-5) | ICRC War Surgery', baseline_note: 'E=42000 EEB (prevents septic gangrene & hemorrhage); Kit P=0.45kg, Vol=0.55L, V=3650d, CP=0.82, FP=2.45, Frag=1.05' },
    { index: 102, id: 'service_fracture_closed_reduction_splinting_proc', category: 'cat_essential_services', source_code: 'WHO IMEESC Orthopedic Trauma Protocol | AO Alliance Fracture Management', baseline_note: 'E=38000 EEB (restores limb mobility & prevents malunion disability); Kit P=0.65kg, Vol=0.85L, V=3650d, CP=0.85, FP=2.40, Frag=1.05' },
    { index: 103, id: 'service_dental_extraction_infection_drainage_proc', category: 'cat_essential_services', source_code: 'WHO Basic Package of Oral Care (BPOC) — Urgent Oral Treatment (UOT)', baseline_note: 'E=34000 EEB (resolves acute odontogenic abscess & deep neck sepsis risk); Kit P=0.40kg, Vol=0.45L, V=3650d, CP=0.85, FP=2.35, Frag=1.10' },
    { index: 104, id: 'service_obstetric_delivery_midwifery_care_proc', category: 'cat_essential_services', source_code: 'WHO/UNFPA/UNICEF IMPAC (Managing Complications in Pregnancy and Childbirth, ISBN 978-92-4-156549-3)', baseline_note: 'E=48000 EEB (AMTSL postpartum hemorrhage control & neonatal resuscitation); Kit P=0.55kg, Vol=0.65L, V=3650d, CP=0.80, FP=2.50, Frag=1.05' },
    { index: 105, id: 'service_clinical_triage_nursing_care_shift_4hr', category: 'cat_essential_services', source_code: 'Sphere Handbook Health Systems Standard 1.1 & WHO Emergency Triage Assessment and Treatment (ETAT)', baseline_note: 'E=14000 EEB (4-hour clinical nursing, IV/ORS titration & sterile wound care); Kit P=0.50kg, Vol=0.60L, V=14d, CP=0.90, FP=2.15, Frag=1.00' },
    { index: 106, id: 'service_water_well_pump_filtration_repair_proc', category: 'cat_essential_services', source_code: 'Sphere WASH Water Supply Standard 2.1 | RWSN (Rural Water Supply Network) Afridev/India Mark II Spec', baseline_note: 'E=36000 EEB (restores community borehole hand-pump & slow-sand filtration); Kit P=2.20kg, Vol=2.40L, V=365d, CP=0.75, FP=2.35, Frag=1.10' },
    { index: 107, id: 'service_sanitation_latrine_vector_control_proc', category: 'cat_essential_services', source_code: 'Sphere WASH Excreta Management Standard 3.1 & Vector Control Standard 4.1', baseline_note: 'E=28000 EEB (groundwater-safe VIP/trench latrine engineering & vector biohazard control); Kit P=2.50kg, Vol=2.60L, V=180d, CP=0.72, FP=2.10, Frag=1.05' },
    { index: 108, id: 'service_solar_pv_battery_dc_diagnostics_repair_proc', category: 'cat_essential_services', source_code: 'IEC 62446-1 (PV Systems Testing & Maintenance) | IEEE Std 450 / 1188 (Battery Maintenance)', baseline_note: 'E=35000 EEB (off-grid PV array, MPPT/PWM controller & DC battery bank restoration); Kit P=1.10kg, Vol=1.30L, V=365d, CP=0.82, FP=2.25, Frag=1.05' },
    { index: 109, id: 'service_generator_internal_combustion_overhaul_proc', category: 'cat_essential_services', source_code: 'ILO ISCO-08 Code 7233 (Machinery Mechanics) | ISO 8528 Reciprocating Internal Combustion Generators', baseline_note: 'E=38000 EEB (carburetor/injector, magneto ignition & valve lash overhaul); Kit P=2.80kg, Vol=3.00L, V=365d, CP=0.72, FP=2.20, Frag=1.10' },
    { index: 110, id: 'service_radio_vhf_uhf_antenna_calibration_repair_proc', category: 'cat_essential_services', source_code: 'ITU-R Handbook on Emergency Telecommunications | ETSI EN 300 086 | ILO ISCO-08 Code 7422', baseline_note: 'E=32000 EEB (RF transceiver repair, coax termination & VSWR < 1.5 antenna tuning); Kit P=0.85kg, Vol=1.05L, V=365d, CP=0.85, FP=2.25, Frag=1.05' },
    { index: 111, id: 'service_metallurgy_blade_tool_forging_sharpening_proc', category: 'cat_essential_services', source_code: 'ILO ISCO-08 Code 7221 (Blacksmiths, Hammersmiths & Forging Press Workers) | ASM Heat Treater Guide', baseline_note: 'E=26000 EEB (high-carbon thermal forging, quenching/tempering & edge tool profiling); Kit P=2.40kg, Vol=2.20L, V=730d, CP=0.75, FP=2.10, Frag=1.15' },
    { index: 112, id: 'service_mechanical_bicycle_cart_drivetrain_repair_proc', category: 'cat_essential_services', source_code: 'ILO ISCO-08 Code 7234 (Bicycle and Related Repairers) | ISO 4210 Cycles Safety Spec', baseline_note: 'E=24000 EEB (cargo bicycle/handcart wheel truing, hub bearing overhaul & drivetrain repair); Kit P=1.60kg, Vol=1.80L, V=180d, CP=0.80, FP=2.05, Frag=1.10' },
    { index: 113, id: 'service_shelter_roofing_structural_carpentry_proc', category: 'cat_essential_services', source_code: 'Sphere Shelter and Settlement Standard 3 & 4 | ILO ISCO-08 Code 7115 (Carpenters and Joiners)', baseline_note: 'E=34000 EEB (structural timber framing, truss reinforcement & weatherproof roof sealing); Kit P=2.60kg, Vol=2.80L, V=1095d, CP=0.72, FP=2.20, Frag=1.10' },
    { index: 114, id: 'service_masonry_thermal_stove_chimney_build_proc', category: 'cat_essential_services', source_code: 'ISO 19867-1:2018 (Clean Cookstoves and Clean Cooking Solutions) | ILO ISCO-08 Code 7112 (Bricklayers)', baseline_note: 'E=36000 EEB (high-efficiency rocket stove/oven masonry & draft flue saving 50-70% fuel); Kit P=3.50kg, Vol=3.80L, V=1825d, CP=0.68, FP=2.25, Frag=1.15' },
    { index: 115, id: 'service_footwear_cobbling_heavy_textile_repair_proc', category: 'cat_essential_services', source_code: 'ILO ISCO-08 Code 7536 (Shoemakers and Related Workers) | ISO 20345 Heavy Footwear Spec', baseline_note: 'E=18000 EEB (boot outsole resoling, awl lock-stitching & load-bearing pack/tarp repair); Kit P=0.75kg, Vol=0.85L, V=365d, CP=0.85, FP=1.95, Frag=1.10' },
    { index: 116, id: 'service_veterinary_livestock_obstetrics_wound_proc', category: 'cat_essential_services', source_code: 'FAO LEGS (Livestock Emergency Guidelines and Standards, 2nd Ed.) | ILO ISCO-08 Code 2250 / 3240', baseline_note: 'E=30000 EEB (livestock/draft animal trauma care, dystocia obstetrics & parasite dosing); Kit P=1.20kg, Vol=1.40L, V=365d, CP=0.80, FP=2.15, Frag=1.05' },
    { index: 117, id: 'service_agrarian_crop_grafting_seed_preservation_proc', category: 'cat_essential_services', source_code: 'FAO Seed Security Assessment & Quality Declared Seed (QDS) System | ILO ISCO-08 Code 6112', baseline_note: 'E=28000 EEB (fruit tree cambium grafting, soil remineralization & heirloom seed drying); Kit P=0.90kg, Vol=1.10L, V=730d, CP=0.78, FP=2.10, Frag=1.05' },
    { index: 118, id: 'service_food_preservation_smoking_fermentation_batch', category: 'cat_essential_services', source_code: 'FAO/WHO Codex Alimentarius CAC/RCP 52-2003 (Smoking & Salting) | ILO ISCO-08 Code 7511', baseline_note: 'E=25000 EEB (batch osmotic salt-curing, thermal smoking or lacto-fermentation of 15kg food); Kit P=1.80kg, Vol=2.10L, V=180d, CP=0.75, FP=2.05, Frag=1.05' },
    { index: 119, id: 'service_security_perimeter_watch_patrol_shift_4hr', category: 'cat_essential_services', source_code: 'ILO ISCO-08 Code 5414 (Security Guards) | ISO 8996 Vigilance & Patrol Metabolic Expenditure', baseline_note: 'E=9500 EEB (4-hour night/day perimeter sentry watch, access control & early warning); Kit P=1.20kg, Vol=1.30L, V=7d, CP=0.95, FP=2.10, Frag=1.00' },
    { index: 120, id: 'service_logistics_heavy_cargo_portage_5km_25kg', category: 'cat_essential_services', source_code: 'ISO 8996:2021 (Ergonomics of the thermal environment — Metabolic rate of heavy load carriage) | NIOSH Lifting', baseline_note: 'E=11000 EEB (secure pack-frame human portage of 25kg cargo across 5km off-road terrain); Kit P=1.50kg, Vol=1.80L, V=7d, CP=0.92, FP=1.95, Frag=1.00' },
    { index: 121, id: 'service_it_mesh_network_intranet_deployment_proc', category: 'cat_essential_services', source_code: 'IEEE 802.11s (Mesh Networking) | ITU-T Emergency Telecom | ILO ISCO-08 Code 2523 / 3513', baseline_note: 'E=26000 EEB (local WLAN/LoRa mesh intranet sharing 64GB MicroSD offline library); Kit P=1.60kg, Vol=1.80L, V=1095d, CP=0.78, FP=1.75, Frag=0.98' },
    { index: 122, id: 'service_it_data_recovery_extraction_proc', category: 'cat_essential_services', source_code: 'ISO/IEC 27037 (Digital Media Evidence & Extraction) | NIST SP 800-86 | ILO ISCO-08 Code 3512', baseline_note: 'E=24000 EEB (forensic extraction of engineering/WASH/medical PDFs from dead HDDs/SSDs/phones); Kit P=1.40kg, Vol=1.50L, V=3650d, CP=0.76, FP=1.85, Frag=0.95' },
    { index: 123, id: 'service_it_pcb_microsoldering_salvage_proc', category: 'cat_essential_services', source_code: 'IPC-7711/7721 (Rework, Modification and Repair of Electronic Assemblies) | ILO ISCO-08 Code 7421', baseline_note: 'E=25000 EEB (PCB microsoldering & component cannibalization for radios/solar controllers); Kit P=1.50kg, Vol=1.60L, V=730d, CP=0.75, FP=1.80, Frag=0.96' },
    { index: 124, id: 'service_it_microcontroller_low_power_automation_proc', category: 'cat_essential_services', source_code: 'IEC 61131-3 (Programmable Controllers) | FAO Irrigation Automation | ILO ISCO-08 Code 2152', baseline_note: 'E=27000 EEB (low-power MCU programming for borehole water pump & seed irrigation automation); Kit P=1.45kg, Vol=1.55L, V=1095d, CP=0.76, FP=1.70, Frag=0.98' },
    { index: 125, id: 'service_instruction_technical_literacy_class', category: 'cat_essential_services', source_code: 'UNESCO ISCED (Adult Functional Literacy) | WHO Health Literacy | ILO ISCO-08 Code 2359', baseline_note: 'E=22000 EEB (functional technical literacy class for antibiotic dosage & WASH manual reading); Kit P=0.80kg, Vol=0.90L, V=3650d, CP=0.88, FP=1.85, Frag=1.05' },
    { index: 126, id: 'service_instruction_applied_mathematics_proc', category: 'cat_essential_services', source_code: 'UNESCO Adult Numeracy Framework | ILO ISCO-08 Code 2320 (Vocational Education Teachers)', baseline_note: 'E=21000 EEB (applied carpentry/masonry geometry & BarterScore exchange parity arithmetic); Kit P=0.80kg, Vol=0.90L, V=3650d, CP=0.88, FP=1.80, Frag=1.05' },
    { index: 127, id: 'service_instruction_combat_medicine_triage_class', category: 'cat_essential_services', source_code: 'WHO/ICRC Basic Emergency Care (BEC) | CoTCCC First Responder | Sphere WASH Training', baseline_note: 'E=28000 EEB (practical workshop multiplying triage, arterial tourniquet & WASH responders); Kit P=1.80kg, Vol=2.10L, V=3650d, CP=0.82, FP=2.15, Frag=1.02' },
    { index: 128, id: 'service_instruction_technical_translation_proc', category: 'cat_essential_services', source_code: 'ISO 17100:2015 (Translation Services Requirements) | ITU Technical Terminology | ILO ISCO-08 Code 2643', baseline_note: 'E=20000 EEB (multilingual technical translation & decoding of salvaged manuals/radios); Kit P=0.95kg, Vol=1.10L, V=3650d, CP=0.86, FP=1.75, Frag=1.04' }
  ]);

  var COMPLETE_120_ITEM_TRACEABILITY_MATRIX = Object.freeze(
    COMPLETE_100_ITEM_TRACEABILITY_MATRIX.concat(ESSENTIAL_SERVICES_TRACEABILITY_MATRIX.slice(0, 20))
  );

  var COMPLETE_128_ITEM_TRACEABILITY_MATRIX = Object.freeze(
    COMPLETE_100_ITEM_TRACEABILITY_MATRIX.concat(ESSENTIAL_SERVICES_TRACEABILITY_MATRIX)
  );

  /**
   * Dedicated extensible ledger for user-added or regional custom items (Items 129+).
   * Keeps community/regional audit sources strictly separated from the canonical 001–128 reference catalog.
   *
   * @type {Array<Object>}
   */
  var CUSTOM_USER_AUDIT_SOURCES = [];

  /**
   * Registers an empirical/regulatory audit source record for a user-added item (Item 129+).
   *
   * @param {Object} entry - Audit source metadata following the Immutable Audit Triad.
   * @param {number} [entry.index] - Optional item number (>= 129).
   * @param {string} entry.id - Lowercase snake_case semantic ID matching the custom item.
   * @param {string} entry.category - Official category slug.
   * @param {string} entry.source_code - Pillar 1 permanent regulatory/scientific identifier.
   * @param {string} entry.baseline_note - Pillar 2 offline snapshot of extracted metrics.
   * @param {string} [entry.direct_url] - Pillar 3 optional verification URL.
   * @param {string} [entry.snapshot_date] - ISO date string (YYYY-MM-DD).
   * @param {string} [entry.contributor] - Name or identifier of the fork/regional maintainer.
   * @returns {Object} Frozen registered audit entry.
   */
  function registerCustomAuditSource(entry) {
    if (!entry || typeof entry !== 'object') {
      throw new Error('[AuditSources] Audit entry must be a valid object.');
    }
    if (!entry.id || typeof entry.id !== 'string') {
      throw new Error('[AuditSources] Audit entry requires a valid semantic `id` string.');
    }
    if (!entry.source_code || typeof entry.source_code !== 'string') {
      throw new Error('[AuditSources] Audit entry requires a permanent `source_code` identifier (Pillar 1).');
    }
    if (!entry.baseline_note || typeof entry.baseline_note !== 'string') {
      throw new Error('[AuditSources] Audit entry requires a `baseline_note` metric snapshot (Pillar 2).');
    }

    var normalizedEntry = Object.freeze({
      index: typeof entry.index === 'number' && entry.index >= 101 ? entry.index : 129 + CUSTOM_USER_AUDIT_SOURCES.length,
      id: entry.id.trim(),
      category: entry.category || 'cat_staple_foods',
      source_code: entry.source_code.trim(),
      baseline_note: entry.baseline_note.trim(),
      direct_url: entry.direct_url ? String(entry.direct_url).trim() : '',
      snapshot_date: entry.snapshot_date || new Date().toISOString().slice(0, 10),
      contributor: entry.contributor || 'Custom Regional Maintainer'
    });

    var existingIndex = -1;
    for (var i = 0; i < CUSTOM_USER_AUDIT_SOURCES.length; i++) {
      if (CUSTOM_USER_AUDIT_SOURCES[i].id === normalizedEntry.id) {
        existingIndex = i;
        break;
      }
    }

    if (existingIndex >= 0) {
      CUSTOM_USER_AUDIT_SOURCES[existingIndex] = normalizedEntry;
    } else {
      CUSTOM_USER_AUDIT_SOURCES.push(normalizedEntry);
    }

    return normalizedEntry;
  }

  /**
   * Returns a shallow copy of all registered user/regional custom audit records (Items 129+).
   *
   * @returns {Array<Object>}
   */
  function getCustomAuditSources() {
    return CUSTOM_USER_AUDIT_SOURCES.slice();
  }

  return Object.freeze({
    VERSION: '1.1.0',
    LINK_ROT_RESILIENCE_PROTOCOL: LINK_ROT_RESILIENCE_PROTOCOL,
    FUNDAMENTAL_UNIT_DEFINITION: FUNDAMENTAL_UNIT_DEFINITION,
    GRANULAR_DECIMAL_RUBRIC: GRANULAR_DECIMAL_RUBRIC,
    VERIFIED_EMPIRICAL_RECORDS: VERIFIED_EMPIRICAL_RECORDS,
    COMPLETE_100_ITEM_TRACEABILITY_MATRIX: COMPLETE_100_ITEM_TRACEABILITY_MATRIX,
    ESSENTIAL_SERVICES_TRACEABILITY_MATRIX: ESSENTIAL_SERVICES_TRACEABILITY_MATRIX,
    COMPLETE_120_ITEM_TRACEABILITY_MATRIX: COMPLETE_120_ITEM_TRACEABILITY_MATRIX,
    COMPLETE_128_ITEM_TRACEABILITY_MATRIX: COMPLETE_128_ITEM_TRACEABILITY_MATRIX,
    CUSTOM_USER_AUDIT_SOURCES: CUSTOM_USER_AUDIT_SOURCES,
    registerCustomAuditSource: registerCustomAuditSource,
    getCustomAuditSources: getCustomAuditSources
  });
});
