/**
 * @fileoverview BarterScore Engine - English (United States) Technical Localization (en-US)
 * @license Apache-2.0
 * @version 1.0.0
 *
 * Authentic regulatory, commercial, and scientific terminology following:
 * - WHO International Nonproprietary Names (INN) & USP for pharmaceuticals
 * - Codex Alimentarius (FAO/WHO) & USDA commercial standards for foods
 * - IEC / ANSI nomenclature for batteries and electrical components
 *
 * Compatible with offline local file:// protocol (window.BarterCore.Locales['en-US']),
 * CommonJS (Node.js), and ES Module environments.
 */

(function (root, factory) {
  'use strict';

  var localeEnUS = factory();

  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.Locales = root.BarterCore.Locales || {};
    root.BarterCore.Locales['en-US'] = localeEnUS;

    if (
      root.BarterCore.BarterEngine &&
      typeof root.BarterCore.BarterEngine.registerLocale === 'function'
    ) {
      root.BarterCore.BarterEngine.registerLocale('en-US', localeEnUS);
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = localeEnUS;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var EN_US_DICTIONARY = {
    meta: {
      code: 'en-US',
      name: 'English (United States)',
      native_name: 'English (US)',
      direction: 'ltr',
      standard: 'WHO-INN / USP / Codex Alimentarius / IEC-ANSI'
    },

    categories: {
      cat_staple_foods: {
        name: 'Staple Caloric Foods & Proteins',
        description: 'Shelf-stable grains, pulses, flours, cooking lipids, and preserved animal proteins.'
      },
      cat_critical_nutrition: {
        name: 'Critical & Clinical Nutrition',
        description: 'High-density emergency rations, pediatric infant formula, and concentrated protein matrices.'
      },
      cat_spices_morale: {
        name: 'Electrolytes, Condiments & Morale Comforts',
        description: 'Food preservation salts, culinary seasonings, caffeine/theobromine stimulants, and trade comforts.'
      },
      cat_pharma_essential: {
        name: 'Essential Pharmaceuticals (WHO/INN)',
        description: 'Systemic antimicrobials, analgesics, antipyretics, gastrointestinal agents, and micronutrients.'
      },
      cat_trauma_hygiene: {
        name: 'Trauma Care, Antiseptics & Sanitation',
        description: 'Hemorrhage control devices, sterile dressings, topical biocides, and personal barrier hygiene.'
      },
      cat_water_fire_shelter: {
        name: 'Water Purification, Ignition & Thermal Shelter',
        description: 'Potable water treatment, thermal ignition tools, solid fuels, and microclimate shelter.'
      },
      cat_tools_energy_comms: {
        name: 'Field Tools, Off-Grid Energy & Communications',
        description: 'Carbon/stainless steel hardware, structural cordage, IEC cells, solar generation, and VHF/UHF radio.'
      },
      cat_store_of_value: {
        name: 'Store of Value, Bullion & Knowledge Archives',
        description: 'High-purity precious metals, non-hybrid seed banks, optical aids, and EMP-shielded technical archives.'
      }
    },

    scenarios: {
      acute_collapse: {
        name: 'Acute Civil Collapse (Survival Phase)',
        description: 'Immediate supply-chain failure: potable water, hemorrhage control, systemic antibiotics, and ready-to-eat calories command peak value; precious metals drop to 0.01x.'
      },
      economic_reconstruction: {
        name: 'Economic Reconstruction & Agrarian Recovery',
        description: 'Stabilized post-crisis trade: durable tools, open-pollinated seeds, off-grid solar/comms, and fractional bullion (5.0x) lead exchange parity.'
      },
      baseline: {
        name: 'Unmodified Physical Baseline (1.0x MEC)',
        description: 'Pure physical and nutritional score (ScoreBase) without external crisis phase multipliers.'
      }
    },

    ui: {
      app_title: 'BarterScore Engine — Offline Field Valuation & Manual Generator',
      app_subtitle: 'Deterministic Physical Barter Reference & Exchange Calculator (Apache 2.0)',
      validator_status_ok: 'Schema Validator Audit: 100% Validated',
      validator_status_error: 'Schema Validator Audit: Validation Errors Detected',
      validator_items_loaded: 'Standardized Items Loaded',
      validator_warnings: 'Warnings',
      validator_errors: 'Errors',
      label_language: 'Interface & Catalog Language (BCP 47)',
      label_language_hint: 'Fallback Chain: Selected Locale → en-US → Technical ID',
      label_scenario: 'Crisis Phase Context (MEC)',
      btn_print_manual: 'Print Field Manual',
      sim_title: 'Bilateral Barter Exchange & Divisibility Simulator',
      sim_subtitle: 'Calculates exact parity ratios, real-time shelf-life depreciation, and atomic indivisibility alerts.',
      sim_offer_header: 'Offered Item (Your Inventory)',
      sim_request_header: 'Requested Item (Counterparty)',
      sim_select_item: 'Select Standardized Item',
      sim_quantity: 'Offered Quantity (Atomic Units)',
      sim_lifecycle_remaining: 'Remaining Shelf Life (Days)',
      sim_lifecycle_nominal_hint: 'Nominal fresh shelf life:',
      sim_unit_days: 'days',
      sim_hint_unit_value: 'Current Unit Value:',
      sim_hint_depreciation: 'Shelf-life loss:',
      sim_summary_title: 'Direct Trade Settlement Summary',
      sim_summary_deliver: 'You Deliver (Offer):',
      sim_summary_receive: 'You Receive (Recommended Settlement):',
      sim_result_header: 'Calculated Barter Parity & Settlement',
      sim_exchange_rate: 'Unit Parity Ratio (1 Offered : X Requested)',
      sim_offer_total_score: 'Total Offered Value (You Deliver)',
      sim_request_unit_score: '1 Unit Value (Requested Item)',
      sim_exact_quantity: 'Exact Qty to Receive (Requested Item)',
      sim_recommended_quantity: 'Recommended Qty to Receive (Requested Item)',
      sim_sub_units_equivalent: 'Total Portioned Amount to Receive (Requested Item)',
      sim_imbalance_balanced: 'Balanced Settlement: Zero indivisibility loss.',
      sim_imbalance_surplus: 'Indivisibility Surplus (Counterparty Overpays)',
      sim_imbalance_deficit: 'Indivisibility Deficit (Uncompensated Change Owed to You)',
      sim_msg_balanced: 'Mathematically balanced trade: receiving {rec} un ({sub} {measure}) of "{item}" matches your offered value with zero indivisibility loss.',
      sim_msg_surplus_indivisible: 'Requested item "{item}" is indivisible (cannot be split). Rounding from {exact} un to {rec} whole unit(s) creates a +{pct}% value surplus ({delta} pts above your offer). Add more offered items or pay divisible change to the counterparty.',
      sim_msg_deficit_indivisible: 'Requested item "{item}" is indivisible (cannot be split). Rounding from {exact} un to {rec} whole unit(s) results in a -{pct}% value deficit ({delta} pts of uncompensated change owed to you). Request divisible change from the counterparty.',
      sim_msg_sub_unit_rounding: 'Portioning "{item}" to {sub} {measure} ({rec} un) introduces a minor {sign}{pct}% rounding difference ({delta} pts).',
      sim_change_suggestion: 'Immediate Change Options (Pick 1 option below to settle {delta} pts):',
      sim_change_all_toggle: 'View all {count} physically viable change options across the catalog ({div} divisible in g/ml/un + {indiv} whole small units)',
      table_title: 'Complete Centennial Catalog Quotation Schedule',
      table_search_placeholder: 'Filter by item name, semantic ID, or functional tag...',
      table_filter_all_categories: 'All 8 Official Categories',
      col_item: 'Technical Item Name & Specification',
      col_unit: 'Atomic Unit & Divisibility',
      col_energy: 'Energy / EEB (E)',
      col_mass_vol: 'Mass / Vol (P / Vol)',
      col_lifecycle: 'Shelf Life (V)',
      col_in: 'Nutr. Index (IN)',
      col_base_score: 'Base Score',
      col_mec: 'Context (MEC)',
      col_final_score: 'Final Barter Score',
      col_score_baseline: '1. Pure Baseline (1.0x)',
      col_score_acute: '2. Acute Collapse',
      col_score_recon: '3. Reconstruction',
      unit_divisible: 'Divisible',
      unit_indivisible: 'Indivisible',
      unit_food: 'Caloric Food',
      unit_non_food: 'Utility / Non-Food',
      print_header_note: 'OFFLINE PHYSICAL BARTER REFERENCE MANUAL (ALL 3 CRISIS SCENARIOS) — GENERATED BY BARTERSCORE ENGINE v1.0.0',
      print_guide_title: 'COMPLETE ANALOG FIELD MANUAL (TOTAL BLACKOUT DOCTRINE) & FRACTIONAL CHANGE SCHEDULE',
      print_step1_title: '1. Calculate Your Credit (Points You Deliver)',
      print_step1_body: 'Locate your offered item and choose the active scenario column (Col 8 Baseline 1.0x, Col 9 Acute Collapse, or Col 10 Reconstruction). Multiply its score by the quantity delivered (or multiply its 1 g / 1 ml rate by weight/volume).',
      print_step2_title: '2. Calculate Exact Quantity to Receive',
      print_step2_body: 'Using a straightedge ruler in the same scenario column, read the score of the requested item. Divide Your Total Points by the Requested Item Score (Your Points ÷ Target Score).',
      print_step3_title: '3. Settle Indivisible Change (Divisible Sub-Units)',
      print_step3_body: 'For indivisible items, subtract whole-unit points from your credit (Change Points = Your Points − Received Points) and settle the remainder using the Quick Change Table below or any divisible item (1 g / 1 ml rate).',
      print_step4_title: '4. Manual Shelf-Life Adjustment (Near-Expiration Rule)',
      print_step4_body: 'If an item is nearing expiration on paper: >90 days = 100% score; 31–90 days = 75% (−25%); 8–30 days = 50% (reduce value by half); 1–7 days = 25% (−75%); 0 days (expired) = 0 pts.',
      print_scenarios_box_title: 'How to Use the 3 Side-by-Side Scenario Columns (Columns 8, 9 & 10)',
      print_scenarios_box_body: '• Col 8 — Pure Baseline (1.0x MEC): Intrinsic physical & nutritional value (ScoreBase) without external crisis multipliers. • Col 9 — Acute Civil Collapse: Survival phase; potable water/purification (up to 4.32x), systemic antibiotics, trauma care, and ready-to-eat rations peak, while bullion drops to 0.01x. • Col 10 — Economic Reconstruction: Recovery phase; durable steel tools, heirloom seeds, solar/radio gear, and fractional bullion (5.00x) lead parity.',
      print_example_box_title: 'Step-by-Step Worked Field Example (Acute Collapse Column — 0% Rounding Loss)',
      print_example_box_body: 'Trade 50 packs of Whole Milk Powder (400 g) for Foldable Stainless Multitool Pliers (1 un, Indivisible): 1) Your Credit: 50 × {milk_pts} pts = {milk_total} pts. 2) Target Score: {pliers_pts} pts/unit. 3) Division: {milk_total} ÷ {pliers_pts} = {pliers_exact} units → Receive 2 whole Multitool Pliers ({pliers_two} pts). 4) Change Owed to You: {milk_total} − {pliers_two} = {change_pts} pts → Divide by Iodized Salt rate ({salt_rate} pts/g) = {salt_g} g of Iodized Salt (or {sugar_g} g of Crystal Sugar at {sugar_rate} pts/g).',
      print_expiry_box_title: 'Manual Shelf-Life Depreciation Protocols (Paper & Pocket Calculator)',
      print_expiry_box_body: '• Protocol A (Near Expiration): >90d = 100%; 31–90d = 75% (−1/4); 8–30d = 50% (Half Value); 1–7d = 25% (1/4 Value); 0d/Spoiled = 0 pts (Reject). • Protocol B (Proportional Long-Life Goods >90d): 50% of factory shelf life remaining ≈ −10% score; 25% of factory life remaining ≈ −20% score (approximates log10(V_rem+1) ÷ log10(V_nom+1)).',
      print_checklist_box_title: 'Community Trade Post Inspection Checklist & Required Blackout Kit',
      print_checklist_box_body: '• Required Analog Kit: Printed A4 Landscape Schedule, Straightedge Ruler, Pocket Calculator (or pencil/paper), and 1 g Kitchen Scale / 1 ml Graduated Cylinder. • Safety Rules: 1) Reject punctured vacuum seals, bloated/rusted cans, or broken pharmaceutical blisters (0 pts); 2) Confirm both parties read from the same scenario column; 3) Apply <30d half-value discount before multiplying quantity; 4) Always settle indivisible remainders in g/ml/un.',
      print_change_table_title: 'Pre-Calculated Fractional Change Lookup Table — All 3 Crisis Scenarios (Col 8 Base | Col 9 Acute | Col 10 Recon)'
    },

    items: {
      // 1. cat_staple_foods (20)
      rice_white_polished_raw_1000g: {
        name: 'White Rice, Long-Grain Polished, Raw (1000 g Pack)',
        description: 'Milled Oryza sativa grain, low lipid content for extended ambient storage; requires boiling water.'
      },
      beans_common_dry_1000g: {
        name: 'Common Beans (Phaseolus vulgaris), Dry Raw (1000 g Pack)',
        description: 'Dry whole pulses providing high plant protein, dietary fiber, potassium, and non-heme iron.'
      },
      lentils_dry_raw_500g: {
        name: 'Whole Dry Lentils (Lens culinaris), Raw (500 g Pack)',
        description: 'Fast-cooking dry pulse requiring no pre-soaking, rich in protein and iron with low fuel demand.'
      },
      chickpeas_dry_raw_500g: {
        name: 'Dry Chickpeas / Garbanzo Beans (Cicer arietinum), Raw (500 g Pack)',
        description: 'High-protein, lipid-bearing dry legume with superior caloric density and mineral profile.'
      },
      pasta_wheat_dry_500g: {
        name: 'Dry Durum Wheat Semolina Pasta (500 g Pack)',
        description: 'Extruded dried wheat pasta; rapid hydration and cooking cycle with high palatability.'
      },
      flour_cassava_dry_1000g: {
        name: 'Toasted Dry Cassava Flour / Farinha (1000 g Pack)',
        description: 'Pre-toasted Manihot esculenta root meal; directly edible without fuel or cooking water.'
      },
      flour_wheat_enriched_1000g: {
        name: 'All-Purpose Enriched White Wheat Flour (1000 g Pack)',
        description: 'Milled Triticum aestivum flour fortified with iron and folic acid for flatbreads and baking.'
      },
      cornmeal_flaked_dry_500g: {
        name: 'Pre-Cooked Flaked Yellow Cornmeal (500 g Pack)',
        description: 'Degerminated flaked maize meal; steams rapidly with minimal water and fuel.'
      },
      oats_rolled_whole_500g: {
        name: 'Whole-Grain Rolled Oats (Avena sativa) (500 g Pack)',
        description: 'Steamed and rolled oat groats; can be consumed via cold-soaking without heat.'
      },
      milk_powder_whole_400g: {
        name: 'Whole Cow Milk Powder, Instant Full-Cream (400 g Can/Pouch)',
        description: 'Spray-dried whole dairy milk rich in complete protein, milkfat, bioavailable calcium, and vitamins A/D.'
      },
      oil_vegetable_refined_900ml: {
        name: 'Refined Edible Vegetable Oil (Soybean/Sunflower) (900 mL Bottle)',
        description: 'Pure triglyceride lipid source (9 kcal/g) for high-density caloric supplementation and oil lamps.'
      },
      lard_pork_rendered_500g: {
        name: 'Rendered Pure Pork Lard, Shelf-Stable (500 g Pack)',
        description: 'Saturated animal cooking fat resistant to oxidative rancidity; high caloric density.'
      },
      fish_sardine_canned_oil_125g: {
        name: 'Canned Sardines in Edible Vegetable Oil (125 g Pull-Tab Can)',
        description: 'Sterilized ready-to-eat marine protein with edible softened bones providing calcium and omega-3 lipids.'
      },
      fish_tuna_canned_solid_170g: {
        name: 'Canned Solid Skipjack/Yellowfin Tuna in Oil (170 g Can)',
        description: 'Hermetically sealed ready-to-eat lean marine protein with long ambient shelf life.'
      },
      meat_bovine_cured_salted_500g: {
        name: 'Salted & Dehydrated Cured Beef / Carne Seca (500 g Vacuum Pack)',
        description: 'Osmotically preserved bovine muscle tissue rich in heme iron, complete protein, and sodium.'
      },
      meat_bovine_canned_cooked_320g: {
        name: 'Canned Cooked Corned Beef (320 g Hermetic Can)',
        description: 'Retort-sterilized precooked beef with high fat and protein density; ready to eat cold or heated.'
      },
      peanut_paste_roasted_500g: {
        name: 'Roasted Peanut Butter / Paste, Unsweetened (500 g Jar)',
        description: 'High-viscosity lipid and protein ration requiring zero preparation or cooking fuel.'
      },
      honey_bee_pure_500g: {
        name: 'Pure Apis mellifera Blossom Honey (500 g Sealed Jar)',
        description: 'Low-water-activity natural invert sugar with indefinite shelf life and topical osmotic wound utility.'
      },
      biscuit_wheat_salted_dry_400g: {
        name: 'Dry Salted Wheat Crackers / Hardtack Biscuits (400 g Pack)',
        description: 'Low-moisture baked wheat ration for immediate consumption on the move.'
      },
      water_potable_sealed_1000ml: {
        name: 'Factory-Sealed Potable Drinking Water (1000 mL PET Bottle)',
        description: 'Microbiologically safe饮用 water for immediate hydration and reconstitution of oral medications.'
      },

      // 2. cat_critical_nutrition (5)
      infant_formula_powder_stage1_400g: {
        name: 'Infant Milk Formula Powder, Stage 1 (0–6 Months) (400 g Hermetic Can)',
        description: 'Codex STAN 72 compliant complete infant nutrition with whey/casein balance, iron, and vitamin C.'
      },
      ration_emergency_compressed_500g: {
        name: 'Compressed High-Energy Emergency Food Ration (500 g Vacuum Block)',
        description: 'SOLAS/ISO marine-grade baked wheat-lipid bar fortified with vitamins; non-thirst-provoking.'
      },
      protein_whey_concentrate_powder_100g: {
        name: 'Whey Protein Concentrate 80% Powder (100 g Sealed Pouch)',
        description: 'High-biological-value branched-chain amino acid source for trauma recovery and catabolic states.'
      },
      coconut_milk_powder_200g: {
        name: 'Spray-Dried Coconut Milk Powder (200 g Pack)',
        description: 'Concentrated medium-chain triglyceride (MCT) lipid source soluble in warm water.'
      },
      gelatin_unflavored_powder_50g: {
        name: 'Pure Unflavored Hydrolyzed Collagen Gelatin Powder (50 g Pack)',
        description: 'Shelf-stable structural protein and culinary thickening agent.'
      },

      // 3. cat_spices_morale (15)
      salt_sodium_chloride_iodized_1000g: {
        name: 'Refined Iodized Table Salt (NaCl + Potassium Iodate) (1000 g Pack)',
        description: 'Essential physiological electrolyte, meat/fish curing preservative, and oral rehydration component.'
      },
      sugar_sucrose_crystal_1000g: {
        name: 'Refined White Granulated Cane/Beet Sucrose (1000 g Pack)',
        description: 'Pure carbohydrate energy source, osmotic fruit preservative, and WHO ORS co-transport substrate.'
      },
      coffee_roasted_ground_vacuum_500g: {
        name: 'Roasted & Ground Coffea arabica/canephora, Vacuum Brick (500 g)',
        description: 'Central nervous system caffeine stimulant and high-demand barter commodity in vacuum foil.'
      },
      coffee_instant_soluble_granules_50g: {
        name: 'Freeze-Dried / Spray-Dried Instant Soluble Coffee (50 g Pouch/Jar)',
        description: 'Instantly dissolves in cold or hot water; lightweight morale and alertness ration.'
      },
      tomato_paste_concentrated_300g: {
        name: 'Double-Concentrated Tomato Paste (28–30% Brix) (300 g Can)',
        description: 'Acidic culinary base rich in lycopene, potassium, and vitamin C to mask ration monotony.'
      },
      broth_bouillon_dehydrated_cube_10g: {
        name: 'Dehydrated Salted Bouillon Broth Cube (10 g Single Cube)',
        description: 'Concentrated sodium, lipid, and glutamates turning boiled water and plain grains into palatable soup.'
      },
      vinegar_acetic_acid_4pct_750ml: {
        name: 'Distilled White Vinegar (4% Acetic Acid Solution) (750 mL Bottle)',
        description: 'Food pickling acidifier (botulism prevention), descaler, and mild household biocide.'
      },
      garlic_dehydrated_powder_100g: {
        name: 'Dehydrated Granulated Garlic Powder (Allium sativum) (100 g Pack)',
        description: 'Shelf-stable aromatic seasoning for staple grains and preserved meats.'
      },
      pepper_black_ground_50g: {
        name: 'Ground Black Pepper (Piper nigrum) (50 g Sealed Pouch)',
        description: 'High-value traditional spice and palatability enhancer with minimal weight.'
      },
      sodium_bicarbonate_pure_100g: {
        name: 'Pure Sodium Bicarbonate (NaHCO3, USP/Food Grade) (100 g Pack)',
        description: 'Multipurpose gastric antacid, dentifrice, alkaline cleaner, oral rehydration buffer, and leavening agent.'
      },
      chocolate_dark_cocoa_60pct_100g: {
        name: 'Dark Chocolate Bar (Minimum 60% Cocoa Solids) (100 g Bar)',
        description: 'Heat-tolerant cocoa butter, theobromine, and glucose bar providing high morale value.'
      },
      candy_hard_glucose_unit_5g: {
        name: 'Individually Wrapped Hard Glucose/Sucrose Lozenge (5 g Unit)',
        description: 'Rapid sublingual/oral simple carbohydrate for hypoglycemia and micro-denomination barter change.'
      },
      tea_camellia_sinensis_dry_50g: {
        name: 'Dried Loose Black/Green Tea Leaves (Camellia sinensis) (50 g Pack)',
        description: 'Tannin and L-theanine/caffeine infusion that encourages boiled-water consumption.'
      },
      tobacco_cigarette_filtered_unit: {
        name: 'Factory-Rolled Filtered Tobacco Cigarette (1 Single Stick)',
        description: 'Standardized atomic nicotine unit with historically proven micro-currency liquidity in crisis zones.'
      },
      alcohol_ethanol_potable_40pct_500ml: {
        name: 'Distilled Potable Neutral Spirit / Vodka (40% ABV Ethanol) (500 mL Bottle)',
        description: 'High-liquidity barter spirit suitable for botanical tincture extraction, degerming, and morale.'
      },

      // 4. cat_pharma_essential (15)
      amoxicillin_500mg_capsule: {
        name: 'Amoxicillin Trihydrate 500 mg Oral Capsule (1 Capsule)',
        description: 'WHO Essential Medicine: broad-spectrum beta-lactam penicillin antibiotic for respiratory, ENT, and skin infections.'
      },
      azithromycin_500mg_tablet: {
        name: 'Azithromycin Dihydrate 500 mg Film-Coated Tablet (1 Tablet)',
        description: 'WHO Essential Medicine: macrolide antibiotic with once-daily dosing for atypical respiratory and enteric infections.'
      },
      ciprofloxacin_500mg_tablet: {
        name: 'Ciprofloxacin Hydrochloride 500 mg Oral Tablet (1 Tablet)',
        description: 'WHO Essential Medicine: fluoroquinolone bactericidal agent for severe gram-negative dysentery, urinary, and systemic infections.'
      },
      metronidazole_400mg_tablet: {
        name: 'Metronidazole 400 mg Oral Tablet (1 Tablet)',
        description: 'WHO Essential Medicine: antiprotozoal and anaerobic antibacterial for Giardia, Entamoeba, and dental/intra-abdominal sepsis.'
      },
      paracetamol_500mg_tablet: {
        name: 'Paracetamol (Acetaminophen) 500 mg Oral Tablet (1 Tablet)',
        description: 'WHO Essential Medicine: first-line antipyretic and non-opioid analgesic without gastrointestinal mucosal bleeding risk.'
      },
      metamizole_sodium_500mg_tablet: {
        name: 'Metamizole Sodium (Dipyrone) 500 mg Oral Tablet (1 Tablet)',
        description: 'Potent pyrazolone analgesic, antipyretic, and spasmolytic for acute visceral pain and refractory high fever.'
      },
      ibuprofen_400mg_tablet: {
        name: 'Ibuprofen 400 mg Film-Coated Oral Tablet (1 Tablet)',
        description: 'WHO Essential Medicine: non-steroidal anti-inflammatory drug (NSAID) for musculoskeletal trauma, dental pain, and fever.'
      },
      ibuprofen_oral_suspension_50mg_ml_20ml: {
        name: 'Ibuprofen Pediatric Oral Suspension 50 mg/mL (20 mL Dropper Bottle)',
        description: 'Concentrated liquid pediatric antipyretic and anti-inflammatory allowing weight-calibrated drop dosing.'
      },
      loperamide_hydrochloride_2mg_tablet: {
        name: 'Loperamide Hydrochloride 2 mg Oral Tablet/Capsule (1 Unit)',
        description: 'Peripheral mu-opioid receptor agonist that slows intestinal motility to prevent lethal fluid loss in non-dysenteric diarrhea.'
      },
      oral_rehydration_salts_who_sachet_27_9g: {
        name: 'Oral Rehydration Salts (WHO Low-Osmolarity Formula) (27.9 g Sachet for 1 L)',
        description: 'WHO/UNICEF standard glucose-electrolyte powder (245 mOsm/L) for reversing acute diarrheal dehydration.'
      },
      loratadine_10mg_tablet: {
        name: 'Loratadine 10 mg Non-Sedating Antihistamine Tablet (1 Tablet)',
        description: 'Second-generation H1-receptor antagonist for allergic rhinitis, urticaria, and insect-bite hypersensitivity without drowsiness.'
      },
      omeprazole_20mg_capsule: {
        name: 'Omeprazole 20 mg Delayed-Release Gastro-Resistant Capsule (1 Capsule)',
        description: 'Proton-pump inhibitor for peptic ulcer disease, NSAID gastric protection, and severe gastroesophageal reflux.'
      },
      potassium_iodide_130mg_tablet: {
        name: 'Potassium Iodide (KI) 130 mg Thyroid-Blocking Scored Tablet (1 Tablet)',
        description: 'WHO nuclear emergency countermeasure saturating the thyroid gland to block uptake of radioactive iodine-131.'
      },
      ascorbic_acid_500mg_tablet: {
        name: 'Ascorbic Acid (Vitamin C) 500 mg Oral Tablet (1 Tablet)',
        description: 'Water-soluble essential vitamin preventing scurvy, supporting wound collagen synthesis, and enhancing non-heme iron absorption.'
      },
      multivitamin_mineral_complex_tablet: {
        name: 'Complete Daily Multivitamin & Trace Mineral Oral Tablet (1 Tablet)',
        description: 'Micronutrient prophylaxis (Vitamins A, B-complex, C, D, E, Zinc, Selenium, Iron) for restricted-ration diets.'
      },

      // 5. cat_trauma_hygiene (15)
      ethanol_antiseptic_70pct_100ml: {
        name: 'Ethyl Alcohol 70% (v/v) Topical Antiseptic Solution (100 mL Bottle)',
        description: 'Optimal bactericidal concentration for intact skin disinfection, instrument wiping, and emergency tinder.'
      },
      hydrogen_peroxide_3pct_10vol_100ml: {
        name: 'Hydrogen Peroxide 3% (10 Volumes) Topical Solution (100 mL Bottle)',
        description: 'Effervescent oxidizing solution for mechanical wound debris removal and diluted oral mucosal rinses.'
      },
      povidone_iodine_10pct_topical_100ml: {
        name: 'Povidone-Iodine (PVP-I) 10% Aqueous Topical Antiseptic (100 mL Bottle)',
        description: 'WHO Essential Medicine: broad-spectrum iodophor active against bacteria, fungi, viruses, and spores for surgical prep.'
      },
      chlorhexidine_digluconate_2pct_100ml: {
        name: 'Chlorhexidine Digluconate 2% Antiseptic Solution (100 mL Bottle)',
        description: 'Persistent cationic biguanide skin and wound cleanser retaining antimicrobial activity in the presence of blood.'
      },
      gauze_sterile_compress_7_5cm_unit: {
        name: 'Sterile Hydrophilic Cotton Gauze Compress 7.5 x 7.5 cm (1 Sealed Pack)',
        description: 'Multi-ply woven surgical gauze for hemorrhage packing, exudate absorption, and sterile wound coverage.'
      },
      tape_medical_waterproof_spool_5m: {
        name: 'Waterproof Medical Adhesive Surgical Tape 2.5 cm x 5 m (1 Spool)',
        description: 'High-tack zinc-oxide/acrylic medical tape for securing dressings, splints, and preventing foot friction blisters.'
      },
      bandage_elastic_compression_roll_2m: {
        name: 'Woven Elastic Compression Bandage Roll (2 m with Clips)',
        description: 'Reusable crepe compression wrap for pressure dressings, venous stasis, and joint sprain immobilization.'
      },
      tourniquet_tactical_arterial_unit: {
        name: 'Windlass Tactical Arterial Limb Tourniquet (CoTCCC Standard) (1 Unit)',
        description: 'Life-saving mechanical windlass device designed for single-handed occlusion of catastrophic extremity arterial bleeding.'
      },
      suture_surgical_nylon_3_0_needle_unit: {
        name: 'Sterile Monofilament Nylon 3-0 Surgical Suture with Swaged Reverse-Cutting Needle (1 Pack)',
        description: 'Non-absorbable high-tensile polyamide suture for primary closure of deep traumatic lacerations.'
      },
      syringe_sterile_5ml_with_needle_unit: {
        name: 'Sterile Luer-Lock 5 mL Hypodermic Syringe with 21G Needle (1 Blister Unit)',
        description: 'Precision parenteral medication delivery and high-pressure sterile wound irrigation device.'
      },
      gloves_nitrile_exam_pair: {
        name: 'Powder-Free Medical Examination Nitrile Gloves (1 Pair)',
        description: 'Puncture-resistant synthetic elastomer barrier protecting against bloodborne pathogens and hazardous chemicals.'
      },
      respirator_particulate_n95_pff2_unit: {
        name: 'NIOSH N95 / EN149 FFP2 (PFF2) Particulate Filtering Facepiece Respirator (1 Unit)',
        description: 'Electrostatic polypropylene melt-blown mask filtering >=94–95% of airborne aerosols, smoke, ash, and pathogens.'
      },
      soap_glycerin_neutral_bar_200g: {
        name: 'Neutral Glycerin Bar Soap, Unscented (200 g Solid Bar)',
        description: 'Surfactant bar for handwashing, wound periphery cleansing, and laundry sanitation to interrupt fecal-oral disease transmission.'
      },
      paper_toilet_cellulose_roll_30m: {
        name: 'Virgin Cellulose Toilet Tissue Roll (30 m Standard Roll)',
        description: 'High-turnover sanitation consumable, nasal/hygiene wipe, and dry fibrous fire tinder.'
      },
      sanitary_pad_absorbent_external_unit: {
        name: 'Individually Wrapped High-Absorbency External Sanitary Pad (1 Unit)',
        description: 'Essential menstrual hygiene product that doubles as a high-capacity improvised pressure dressing for large wounds.'
      },

      // 6. cat_water_fire_shelter (10)
      sodium_hypochlorite_2_5pct_1000ml: {
        name: 'Unscented Sodium Hypochlorite Solution 2.5% Active Chlorine (1000 mL Bottle)',
        description: 'Bulk liquid chlorine biocide capable of disinfecting up to 10,000 liters of drinking water and BSL-grade surfaces.'
      },
      water_purification_nadcc_tablet_unit: {
        name: 'Sodium Dichloroisocyanurate (NaDCC) Effervescent Water Purification Tablet (1 Tablet / 1–2 L)',
        description: 'WHO-recommended organic chlorine donor destroying bacteria, viruses, and Giardia cysts with stable shelf life.'
      },
      filter_water_hollow_fiber_0_1micron_unit: {
        name: '0.1-Micron Absolute Hollow-Fiber Membrane Water Filter (1 Unit)',
        description: 'Backflushable mechanical microfilter removing 99.9999% of bacteria and 99.9% of protozoa without chemicals.'
      },
      lighter_butane_piezo_standard_unit: {
        name: 'Sealed Pressurized Isobutane Lighter with Piezo/Flint Ignition (1 Unit)',
        description: 'Provides up to 3,000 instant flames for cooking and sterilization; functions as spark igniter even when fuel is depleted.'
      },
      ferrocerium_ignition_rod_8mm_unit: {
        name: 'Heavy-Duty 8 mm Ferrocerium Fire-Starting Rod with Steel Striker (1 Unit)',
        description: 'Pyrophoric lanthanide-iron alloy rod showering 3,000 °C sparks in rain, wind, or freezing conditions (>10,000 strikes).'
      },
      matches_waterproof_safety_box_40un: {
        name: 'Waterproof & Wind-Resistant Safety Matches (Box of 40 Matches)',
        description: 'Varnish-coated red-phosphorus striker box matches that ignite reliably after moisture exposure.'
      },
      candle_paraffin_solid_white_30g_unit: {
        name: 'Solid White High-Melting-Point Paraffin Wax Candle (30 g Unit)',
        description: 'Dripless emergency illumination, localized warmth inside micro-shelters, and wax lubricant/waterproofer.'
      },
      fuel_solid_hexamine_tablet_14g_unit: {
        name: 'Hexamine (Hexamethylenetetramine) Solid Smokeless Fuel Tablet (14 g Unit)',
        description: 'High-energy density solid stove fuel burning without smoke or liquefaction to boil 500 mL of water.'
      },
      blanket_thermal_aluminized_mylar_unit: {
        name: 'Aluminized Polyethylene Terephthalate (Mylar) Emergency Space Blanket 210 x 130 cm (1 Unit)',
        description: 'Reflects up to 90% of radiated body heat to prevent hypothermia in trauma and exposure casualties.'
      },
      tarp_polyethylene_waterproof_3x3m_unit: {
        name: 'Reinforced Woven Polyethylene Waterproof Tarp with Grommets 3 x 3 m (1 Unit)',
        description: 'Rapid A-frame/lean-to shelter roof, ground moisture barrier, and clean rainwater catchment sheet.'
      },

      // 7. cat_tools_energy_comms (14)
      knife_fixed_blade_carbon_steel_fulltang: {
        name: 'Full-Tang High-Carbon Steel Fixed-Blade Field Knife with Sheath (1 Unit)',
        description: 'Primary bushcraft and survival tool capable of wood batoning, food processing, and striking ferrocerium/flint sparks.'
      },
      multitool_pliers_stainless_folding_unit: {
        name: 'Heavy-Duty Folding Stainless Steel Pliers Multitool (1 Unit)',
        description: 'Integrated needle-nose pliers, hard-wire cutters, wood/metal saw, awl, and screwdrivers for mechanical repairs.'
      },
      saw_wire_stainless_pocket_unit: {
        name: 'Braided Multi-Strand Stainless Steel Pocket Wire Saw with Swivel Rings (1 Unit)',
        description: 'Ultralight pocket saw for harvesting firewood, clearing shelter poles, and cutting bone or PVC pipe.'
      },
      tape_cloth_adhesive_waterproof_48mm_10m: {
        name: 'Heavy-Duty Polyethylene-Coated Cloth Adhesive Tape 48 mm x 10 m (1 Roll)',
        description: 'High-tensile waterproof fabric tape for patching tarps, boots, water containers, and splints.'
      },
      cord_nylon_kernmantle_550lb_10m: {
        name: 'Type III 550-lb Nylon Kernmantle Paracord (7 Inner Strands) (10 m Hank)',
        description: 'Mil-spec braided nylon utility cordage whose 7 inner yarns can be extracted for fishing lines, snares, or sewing.'
      },
      steel_wool_fine_grade_0000_pad_unit: {
        name: 'Super-Fine Grade #0000 Carbon Steel Wool Pad (1 Pad)',
        description: 'Fine metallic filaments that ignite instantly upon contact with a 9V/AA battery atau ferrocerium spark, plus metal scouring.'
      },
      needle_sewing_heavy_steel_with_thread_10m: {
        name: 'Heavy-Duty Canvas/Leather Steel Repair Needle with 10 m Waxed Polyester Thread (1 Kit)',
        description: 'Essential field repair kit for backpacks, heavy outerwear, footwear, and canvas shelter seams.'
      },
      fishing_kit_line_20m_hooks_5un_weights_5un: {
        name: 'Compact Subsistence Fishing Kit (20 m Monofilament Line, 5 Hooks, 5 Sinkers) (1 Kit)',
        description: 'Passive protein harvesting kit requiring near-zero caloric expenditure to operate.'
      },
      battery_alkaline_lr6_aa_1_5v_unit: {
        name: 'Primary Alkaline Cylindrical Battery IEC LR6 / ANSI AA 1.5 V (1 Cell)',
        description: 'Universal 1.5 V primary power cell with 7-year shelf life for flashlights, radios, and medical meters.'
      },
      battery_alkaline_lr03_aaa_1_5v_unit: {
        name: 'Primary Alkaline Cylindrical Battery IEC LR03 / ANSI AAA 1.5 V (1 Cell)',
        description: 'Compact 1.5 V primary power cell for headlamps, pulse oximeters, and compact receivers.'
      },
      battery_lithium_ion_18650_3_7v_3000mah_unit: {
        name: 'Rechargeable Lithium-Ion Cylindrical Cell IEC 18650 3.7 V 3000 mAh Protected (1 Cell)',
        description: 'High-energy-density secondary cell (~11.1 Wh) rated for 500+ solar recharge cycles.'
      },
      flashlight_led_aluminum_aa_compatible_unit: {
        name: 'Anodized Aircraft-Aluminum Solid-State LED Flashlight (IEC LR6/AA Compatible) (1 Unit)',
        description: 'Impact- and water-resistant tactical illumination running on ubiquitous single AA cells.'
      },
      panel_solar_monocrystalline_usb_5v_10w_unit: {
        name: 'Foldable Monocrystalline Photovoltaic Solar Panel 10 W with Regulated 5 V USB Output (1 Unit)',
        description: 'Off-grid renewable DC power generator for recharging 18650 banks, radios, and LED lanterns.'
      },
      radio_transceiver_vhf_uhf_dualband_unit: {
        name: 'Handheld Dual-Band VHF/UHF (136–174 / 400–520 MHz) FM Transceiver Radio (1 Unit)',
        description: 'Line-of-sight tactical coordination and emergency broadcast receiver operating independently of cellular towers.'
      },

      // 8. cat_store_of_value (6)
      faraday_bag_shielded_rf_emp_medium_unit: {
        name: 'Multi-Layer RF / EMP Shielded Faraday Cage Pouch, Medium (1 Unit)',
        description: 'Attenuates electromagnetic pulse (HEMP/CME) and RF signals (>85 dB) to protect radios, solar controllers, and storage drives.'
      },
      microsd_flash_storage_64gb_offline_wiki_unit: {
        name: '64 GB Industrial MicroSDXC Card Preloaded with Offline Medical, Engineering & Agricultural Library (1 Unit)',
        description: 'Complete offline civilization archive (medical handbooks, pharmacopoeia, agronomy, metallurgy, and maps).'
      },
      eyeglasses_reading_convex_diopter_plus_2_0: {
        name: 'Polycarbonate Convex Reading Eyeglasses +2.00 Diopters (1 Unit)',
        description: 'Restores near-vision acuity for suturing, electronics repair, and reading manuals; lenses can focus solar rays.'
      },
      seeds_open_pollinated_vegetable_mix_50g: {
        name: 'Non-Hybrid Open-Pollinated (Heirloom) Survival Vegetable Seed Vault (50 g Hermetic Pouch)',
        description: 'True-breeding high-germination seeds (beans, maize, squash, cabbage, tomato) enabling multi-generational food production.'
      },
      silver_bullion_999_fine_1_troy_oz_31_1g: {
        name: '.999 Fine Silver Bullion Coin / Round (1 Troy Ounce / 31.1035 g)',
        description: 'Globally recognized medium-denomination hard asset for post-collapse reconstruction and oligodynamic water preservation.'
      },
      gold_bullion_999_fine_fractional_1g: {
        name: '.9999 Fine Fractional Gold Bullion Bar / Wafer (1.0 g Assay Unit)',
        description: 'Ultra-compact, corrosion-proof store of wealth for high-value capital settlement and safe border transit.'
      }
    }
  };

  return Object.freeze(EN_US_DICTIONARY);
});
