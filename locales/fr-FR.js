/**
 * @fileoverview BarterScore Engine - French (France / International) Technical Localization (fr-FR)
 * @author Erisson Marques (https://github.com/erissontech)
 * @license Apache-2.0
 * @version 1.1.0
 *
 * Regulated commercial, nutritional, and pharmacological terminology aligned with:
 * - Denomination Commune Internationale (DCI / OMS), ANSM, and Pharmacopee Francaise
 * - ANSES Table Ciqual (Table de composition nutritionnelle des aliments) and Codex Alimentarius (FAO/OMS)
 * - AFNOR / NF EN / IEC standards for batteries, personal protective equipment (FFP2), and field tools
 *
 * Compatible with offline local file:// protocol (window.BarterCore.Locales['fr-FR']),
 * CommonJS (Node.js), and ES Module environments.
 */

(function (root, factory) {
  'use strict';

  var localeFrFR = factory();

  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.Locales = root.BarterCore.Locales || {};
    root.BarterCore.Locales['fr-FR'] = localeFrFR;

    if (
      root.BarterCore.BarterEngine &&
      typeof root.BarterCore.BarterEngine.registerLocale === 'function'
    ) {
      root.BarterCore.BarterEngine.registerLocale('fr-FR', localeFrFR);
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = localeFrFR;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var FR_FR_DICTIONARY = {
    meta: {
      code: 'fr-FR',
      name: 'French (France / International)',
      native_name: 'Français (France / International)',
      direction: 'ltr',
      standard: 'DCI-ANSM / Pharmacopée Française / ANSES-Ciqual / AFNOR-NF-EN-IEC'
    },

    categories: {
      cat_staple_foods: {
        name: 'Aliments Caloriques de Base et Protéines',
        description: 'Céréales sèches, légumineuses, farines, lipides de cuisson et conserves protéiques de longue conservation.'
      },
      cat_critical_nutrition: {
        name: 'Nutrition Critique et Support Clinique',
        description: 'Rations alimentaires compactées d’urgence, préparations pour nourrissons 1er âge et concentrés protéiques.'
      },
      cat_spices_morale: {
        name: 'Électrolytes, Condiments et Soutien Psychologique',
        description: 'Chlorure de sodium iodé, agents de conservation culinaire, stimulants xanthiques (caféine/théobromine) et biens de moral.'
      },
      cat_pharma_essential: {
        name: 'Médicaments Essentiels (DCI / ANSM / OMS)',
        description: 'Antibiotiques systémiques, antalgiques, antipyrétiques, anti-inflammatoires, antidiarrhéiques et sels de réhydratation orale.'
      },
      cat_trauma_hygiene: {
        name: 'Soins de Traumatologie, Antisepsie et Hygiène',
        description: 'Contrôle des hémorragies artérielles, pansements stériles, biocides topiques, équipements EPI (FFP2/Nitrile) et assainissement.'
      },
      cat_water_fire_shelter: {
        name: 'Potabilisation de l’Eau, Allumage du Feu et Abri Thermique',
        description: 'Désinfection microbiologique de l’eau, allumage pyrophorique/butane, combustible solide et protection contre l’hypothermie.'
      },
      cat_tools_energy_comms: {
        name: 'Outillage de Terrain, Énergie Autonome et Radio',
        description: 'Coutellerie en acier au carbone, pinces multifonctions, cordage structurel, piles IEC/Li-Ion, solaire et radio VHF/UHF.'
      },
      cat_store_of_value: {
        name: 'Réserve de Valeur, Métaux Précieux et Archives Techniques',
        description: 'Métaux précieux fractionnés (.999), semences à pollinisation libre, optique de lecture et blindage électromagnétique.'
      },
      cat_essential_services: {
        name: 'Services Humains Essentiels, Actes Cliniques et Main-d’Œuvre Technique',
        description: 'Actes standardisés de chirurgie de traumatologie, dentisterie, obstétrique, assainissement WASH, énergie solaire, informatique hors-réseau, microélectronique, métallurgie, soins vétérinaires, instruction technique et logistique.'
      }
    },

    scenarios: {
      acute_collapse: {
        name: 'Effondrement Civil Aigu (Phase de Survie Immédiate)',
        description: 'Rupture critique des approvisionnements : l’eau potable, l’hémostase, les antibiotiques et les calories prêtes à consommer atteignent une valeur maximale ; les métaux précieux chutent à 0,01x.'
      },
      economic_reconstruction: {
        name: 'Reconstruction Économique et Relance Agraire',
        description: 'Échanges post-crise stabilisés : l’outillage durable, les semences reproductibles, l’énergie solaire/radio et les métaux précieux (5,0x) dominent la parité.'
      },
      baseline: {
        name: 'Ligne de Base Physique Pure (MEC 1,0x)',
        description: 'Score physique et nutritionnel intrinsèque (ScoreBase) sans multiplicateurs externes de scénario de crise.'
      }
    },

    ui: {
      app_title: 'BarterScore Engine — Évaluateur de Troc et Générateur de Manuel de Terrain',
      app_subtitle: 'Référentiel Déterministe de Valeur Physique et Calculateur d’Échange Hors-Ligne (Apache 2.0)',
      validator_status_ok: 'Audit du Validator : 100% Validé',
      validator_status_error: 'Audit du Validator : Erreurs de Schéma Détectées',
      validator_items_loaded: 'Articles Standardisés Chargés',
      validator_warnings: 'Avertissements',
      validator_errors: 'Erreurs',
      label_language: 'Langue de l’Interface et du Catalogue (BCP 47)',
      label_language_hint: 'Chaîne de Repli : Langue Sélectionnée → en-US → ID Technique',
      label_scenario: 'Scénario de Crise (Modificateur MEC)',
      btn_print_manual: 'Imprimer le Manuel Physique',
      sim_title: 'Simulateur Bilatéral de Troc et de Divisibilité',
      sim_subtitle: 'Calcule la parité exacte, la dépréciation selon la durée de vie restante en temps réel et les alertes d’indivisibilité/monnaie.',
      sim_offer_header: 'Article Offert (Votre Inventaire)',
      sim_request_header: 'Article Demandé (Contrepartie)',
      sim_select_item: 'Sélectionnez l’Article Standardisé',
      sim_quantity: 'Quantité Offerte (Unités Atomiques)',
      sim_lifecycle_remaining: 'Durée de Conservation Restante Réelle (Jours)',
      sim_lifecycle_nominal_hint: 'Durée de conservation nominale scellée :',
      sim_service_durability_label: 'Durabilité / Couverture du Service (Jours)',
      sim_service_durability_hint: 'Durabilité nominale du service (conservez la valeur standard pour un service complet ; réduisez uniquement si provisoire/palliatif) :',
      sim_unit_days: 'jours',
      sim_hint_unit_value: 'Valeur Unitaire Actuelle :',
      sim_hint_depreciation: 'Perte par péremption proche :',
      sim_hint_service_depreciation: 'Réduction pour service palliatif :',
      sim_summary_title: 'Résumé Direct du Règlement de l’Échange',
      sim_summary_deliver: 'Vous Remettez (Votre Offre) :',
      sim_summary_receive: 'Vous Recevez (Règlement Recommandé) :',
      sim_result_header: 'Parité Mathématique et Règlement de l’Échange',
      sim_exchange_rate: 'Parité Unitaire (1 Offert : X Demandé)',
      sim_offer_total_score: 'Valeur Totale de Votre Offre (Vous Remettez)',
      sim_request_unit_score: 'Valeur d’Une Unité (Article Demandé)',
      sim_exact_quantity: 'Qté Exacte à Recevoir (Article Demandé)',
      sim_recommended_quantity: 'Qté Recommandée à Recevoir (Article Demandé)',
      sim_sub_units_equivalent: 'Total Fractionné à Recevoir (Article Demandé)',
      sim_imbalance_balanced: 'Échange Équilibré : Aucune perte liée à l’indivisibilité.',
      sim_imbalance_surplus: 'VOUS DEVEZ LA MONNAIE À LA CONTREPARTIE (Vous Recevez Plus de Valeur par Indivisibilité)',
      sim_imbalance_deficit: 'LA CONTREPARTIE VOUS DOIT LA MONNAIE (Vous Remettez Plus de Valeur par Indivisibilité)',
      sim_msg_balanced: 'Échange mathématiquement équilibré : recevoir {rec} un ({sub} {measure}) de « {item} » équivaut exactement à la valeur de votre offre sans perte d’indivisibilité.',
      sim_msg_surplus_indivisible: 'L’article demandé « {item} » est indivisible ({req_unit_pts} pts/un) et vaut plus que votre offre actuelle ({offer_pts} pts ; il faudrait {needed_offer} un de votre offre pour couvrir 1 unité entière sans appoint). L’arrondi de {exact} un à {rec} unité(s) entière(s) génère un écart de +{pct}% ({delta} pts au-dessus de votre offre). Pour recevoir {rec} un maintenant, VOUS devez {delta} pts de monnaie à la contrepartie (ou augmentez la quantité offerte).',
      sim_msg_deficit_indivisible: 'L’article demandé « {item} » est indivisible ({req_unit_pts} pts/un). Votre offre ({offer_pts} pts) vaut plus que la ou les {rec} unité(s) entière(s) reçue(s) ({req_total_pts} pts). L’arrondi de {exact} un à {rec} unité(s) entière(s) laisse un solde en votre faveur de -{pct}% ({delta} pts). LA CONTREPARTIE vous doit {delta} pts de monnaie.',
      sim_msg_sub_unit_rounding: 'Le fractionnement de « {item} » en {sub} {measure} ({rec} un) introduit un écart minime d’arrondi de {sign}{pct}% ({delta} pts).',
      sim_change_suggestion: 'Options Immédiates de Monnaie d’Appoint (Choisissez 1 option ci-dessous pour régler {delta} pts) :',
      sim_change_suggestion_you_pay: 'Monnaie que VOUS Devez Remettre à la Contrepartie (Choisissez 1 option ci-dessous pour payer {delta} pts) :',
      sim_change_suggestion_counterparty_pays: 'Monnaie que la CONTREPARTIE Doit VOUS Remettre (Choisissez 1 option ci-dessous pour recevoir {delta} pts) :',
      sim_change_all_toggle: 'Voir toutes les {count} options de monnaie physiquement viables du catalogue ({div} divisibles en g/ml/un + {indiv} unités entières mineures)',
      table_title: 'Barème Général des Cotations du Catalogue de Référence (128 Articles)',
      table_search_placeholder: 'Filtrer par dénomination technique/DCI, ID sémantique ou étiquette fonctionnelle...',
      table_filter_all_categories: 'Les 9 Catégories Officielles',
      col_item: 'Spécification Technique et Dénomination Commerciale/DCI',
      col_unit: 'Unité Atomique et Divisibilité',
      col_energy: 'Énergie / EEB (E)',
      col_mass_vol: 'Masse / Vol (P / Vol)',
      col_lifecycle: 'Conservation / Durabilité (V)',
      col_in: 'Ind. Nutr. (IN)',
      col_base_score: 'Score Base',
      col_mec: 'Contexte (MEC)',
      col_final_score: 'Score Final',
      col_score_baseline: '1. Base Pure (1,0x)',
      col_score_acute: '2. Effondrement Aigu',
      col_score_recon: '3. Reconstruction',
      unit_divisible: 'Divisible',
      unit_indivisible: 'Indivisible',
      unit_food: 'Aliment Calorique',
      unit_non_food: 'Utilité / Non-Aliment',
      print_header_note: 'MANUEL PHYSIQUE DE COTATION DE TROC HORS-LIGNE (AVEC LES 3 SCÉNARIOS DE CRISE) — GÉNÉRÉ PAR BARTERSCORE ENGINE v1.1.0',
      print_guide_title: 'MANUEL DE TERRAIN ANALOGIQUE COMPLET (OPÉRATION SANS ÉLECTRICITÉ) ET TABLE DE MONNAIE FRACTIONNAIRE',
      print_step1_title: '1. Calculez Votre Crédit (Points que Vous Remettez)',
      print_step1_body: 'Repérez l’article offert et choisissez la colonne du scénario actif (Col 8 Base Pure 1,0x, Col 9 Effondrement Aigu ou Col 10 Reconstruction). Multipliez son Score par la quantité remise (ou le taux 1 g / 1 ml par le poids/volume).',
      print_step2_title: '2. Calculez la Quantité Exacte à Recevoir',
      print_step2_body: 'À l’aide d’une règle dans la même colonne de scénario, lisez le Score de l’article souhaité. Divisez vos Points Totaux par le Score de l’article demandé (Vos Points ÷ Score Demandé).',
      print_step3_title: '3. Réglez la Monnaie des Indivisibles (Sous-unités)',
      print_step3_body: 'Pour les articles indivisibles, soustrayez les points des unités entières (Points de Monnaie = Vos Points − Points Reçus) et réglez le solde avec la Table Rapide de Monnaie ci-dessous ou tout article divisible (taux 1 g / 1 ml).',
      print_step4_title: '4. Ajustement Manuel pour Péremption Proche (Règle de Poche)',
      print_step4_body: 'Si l’article est proche de sa date de péremption sur papier : >90 jours = 100% du score ; 31–90 jours = 75% (−25%) ; 8–30 jours = 50% (divisez la valeur par deux) ; 1–7 jours = 25% (−75%) ; 0 jour (périmé) = 0 pt.',
      print_scenarios_box_title: 'Comment Utiliser les 3 Colonnes de Scénario en Parallèle (Colonnes 8, 9 et 10)',
      print_scenarios_box_body: '• Col 8 — Ligne de Base Pure (MEC 1,0x) : Valeur physique et nutritionnelle intrinsèque (ScoreBase) sans multiplicateurs externes. • Col 9 — Effondrement Civil Aigu : Phase de survie immédiate ; eau/potabilisation (jusqu’à 4,32x), antibiotiques, hémostase et rations prêtes atteignent leur maximum, tandis que l’or/argent chutent à 0,01x. • Col 10 — Reconstruction Économique : Relance post-crise ; outillage en acier, semences reproductibles, solaire/radio et métaux précieux (5,00x) dominent la parité.',
      print_example_box_title: 'Exemple Pratique Résolu Pas à Pas (Colonne Effondrement Aigu — 0% de Perte)',
      print_example_box_body: 'Troc de 50 sachets de Lait Entier en Poudre (400 g) contre une Pince Multifonction Pliante en Acier Inoxydable (1 un, Indivisible) : 1) Votre Crédit : 50 × {milk_pts} pts = {milk_total} pts. 2) Score de la Pince : {pliers_pts} pts/un. 3) Division : {milk_total} ÷ {pliers_pts} = {pliers_exact} un → Recevez 2 Pinces entières ({pliers_two} pts). 4) Monnaie en Votre Faveur : {milk_total} − {pliers_two} = {change_pts} pts → Divisez par le taux du Sel Iodé ({salt_rate} pts/g) = {salt_g} g de Sel Raffiné Iodé (ou {sugar_g} g de Sucre Cristallisé à {sugar_rate} pts/g).',
      print_expiry_box_title: 'Protocoles de Dépréciation Manuelle de Conservation (Papier et Calculatrice de Poche)',
      print_expiry_box_body: '• Protocole A (Péremption Proche) : >90j = 100% ; 31–90j = 75% (−1/4) ; 8–30j = 50% (Moitié de Valeur) ; 1–7j = 25% (1/4 de Valeur) ; 0j/Périmé = 0 pt (Refuser). • Protocole B (Proportionnel pour Longue Conservation >90j) : 50% de durée d’usine restante ≈ −10% sur le score ; 25% restant ≈ −20% (approche log10(V_rest+1) ÷ log10(V_nom+1)). • Services Essentiels (101–128) : V représente la durabilité du résultat ; utilisez toujours 100% (1,0x) du score imprimé pour un service complet.',
      print_checklist_box_title: 'Liste de Contrôle pour Poste de Troc et Kit Analogique Hors-Réseau',
      print_checklist_box_body: '• Kit Analogique Requis : Table A4 Paysage imprimée, Règle plate, Calculatrice de poche (ou crayon/papier) et Balance de précision 1 g / Éprouvette graduée 1 ml. • Règles de Sécurité : 1) Refusez tout emballage sous vide percé, boîte bombée/rouillée ou blister endommagé (0 pt) ; 2) Vérifiez que les deux parties lisent la même colonne de scénario ; 3) Appliquez la décote de 50% (<30 jours) avant de multiplier la quantité ; 4) Réglez toujours les soldes indivisibles en g/ml/un.',
      print_change_table_title: 'Table de Consultation Rapide de Monnaie en Grammes / mL / Unités — Les 3 Scénarios de Crise (Col 8 Base | Col 9 Effondrement | Col 10 Reconstruction)'
    },

    items: {
      // 1. cat_staple_foods (20)
      rice_white_polished_raw_1000g: {
        name: 'Riz Blanc Poli à Grain Long, Cru (Sachet 1000 g)',
        description: 'Grain d’Oryza sativa usiné à faible teneur lipidique pour une conservation prolongée ; nécessite une cuisson à l’eau.'
      },
      beans_common_dry_1000g: {
        name: 'Haricots Secs Communs (Phaseolus vulgaris), Crus (Sachet 1000 g)',
        description: 'Légumineuse sèche riche en protéines végétales, fibres alimentaires, potassium et fer non héminique.'
      },
      lentils_dry_raw_500g: {
        name: 'Lentilles Sèches Entières (Lens culinaris), Crues (Sachet 500 g)',
        description: 'Légumineuse sèche à cuisson rapide sans trempage préalable, réduisant la consommation de combustible.'
      },
      chickpeas_dry_raw_500g: {
        name: 'Pois Chiches Secs Entiers (Cicer arietinum), Crus (Sachet 500 g)',
        description: 'Légumineuse à haute densité calorique, riche en protéines, acides gras insaturés et minéraux.'
      },
      pasta_wheat_dry_500g: {
        name: 'Pâtes Alimentaires Sèches de Semoule de Blé Dur (Sachet 500 g)',
        description: 'Pâtes déshydratées à cuisson rapide et haute digestibilité énergétique.'
      },
      flour_cassava_dry_1000g: {
        name: 'Farine de Manioc Torréfiée Sèche (Gari / Farofa) (Sachet 1000 g)',
        description: 'Farine de racine de Manihot esculenta pré-torréfiée ; consommable directement sans eau ni cuisson.'
      },
      flour_wheat_enriched_1000g: {
        name: 'Farine de Blé Panifiable Enrichie en Fer et Acide Folique (Sachet 1000 g)',
        description: 'Farine blanche de Triticum aestivum fortifiée pour la confection de pains plats et galettes.'
      },
      cornmeal_flaked_dry_500g: {
        name: 'Semoule / Flocons de Maïs Précuits Secs (Sachet 500 g)',
        description: 'Maïs dégermé et laminé à hydratation rapide et cuisson vapeur à faible coût énergétique.'
      },
      oats_rolled_whole_500g: {
        name: 'Flocons d’Avoine Complète (Avena sativa) (Sachet 500 g)',
        description: 'Céréale complète riche en bêta-glucanes et protéines ; consommable après simple réhydratation à froid.'
      },
      milk_powder_whole_400g: {
        name: 'Lait Entier de Vache en Poudre Instantané (Boîte ou Sachet 400 g)',
        description: 'Lait déshydraté riche en protéines complètes, matières grasses laitières, calcium biodisponible et vitamines A et D.'
      },
      oil_vegetable_refined_900ml: {
        name: 'Huile Végétale Alimentaire Raffinée (Tournesol ou Soja) (Bouteille PET 900 mL)',
        description: 'Source lipidique pure de triglycérides (9 kcal/g) pour l’apport calorique dense et les lampes à huile.'
      },
      lard_pork_rendered_500g: {
        name: 'Saindoux de Porc Fondu Pur (Pot Scellé 500 g)',
        description: 'Graisse animale saturée à haute stabilité oxydative pour la friture, la conservation et l’apport énergétique.'
      },
      fish_sardine_canned_oil_125g: {
        name: 'Sardines en Conserve à l’Huile Végétale (Boîte à Ouverture Facile 125 g)',
        description: 'Protéine marine stérilisée prête à consommer, riche en oméga-3 et en calcium assimilable via les arêtes.'
      },
      fish_tuna_canned_solid_170g: {
        name: 'Thon Entier en Conserve à l’Huile Végétale (Boîte Hermétique 170 g)',
        description: 'Protéine marine maigre stérilisée en autoclave à très longue durée de conservation hors réfrigération.'
      },
      meat_bovine_cured_salted_500g: {
        name: 'Viande Bovine Salée et Séchée (Bœuf Séché / Charque) (Sachet sous Vide 500 g)',
        description: 'Tissu musculaire bovin conservé par salaison osmotique, riche en fer héminique, protéines et sodium.'
      },
      meat_bovine_canned_cooked_320g: {
        name: 'Viande Bovine Cuite en Conserve (Corned-Beef) (Boîte Métallique 320 g)',
        description: 'Viande bovine stérilisée en boîte hermétique à haute teneur en protéines et lipides, prête à consommer.'
      },
      peanut_paste_roasted_500g: {
        name: 'Pâte / Beurre d’Arachide Torréfiée 100% Sans Sucre Ajouté (Pot 500 g)',
        description: 'Ration hypercalorique de lipides et protéines végétales prête à la consommation immédiate sans feu.'
      },
      honey_bee_pure_500g: {
        name: 'Miel Pur d’Abeille (Apis mellifera) (Pot Scellé 500 g)',
        description: 'Sucres naturels invertis à très faible activité de l’eau, conservation quasi illimitée et usage antiseptique topique.'
      },
      biscuit_wheat_salted_dry_400g: {
        name: 'Biscuits Secs Salés de Blé Type Crackers / Biscuits de Mer (Paquet 400 g)',
        description: 'Ration sèche de blé cuit au four à faible humidité résiduelle pour consommation directe en déplacement.'
      },
      water_potable_sealed_1000ml: {
        name: 'Eau Minérale Naturelle Potable Plate Scellée (Bouteille PET 1000 mL)',
        description: 'Eau microbiologiquement sûre pour l’hydratation immédiate et la reconstitution de préparations médicales.'
      },

      // 2. cat_critical_nutrition (5)
      infant_formula_powder_stage1_400g: {
        name: 'Préparation pour Nourrissons en Poudre — 1er Âge (0 à 6 Mois) (Boîte Hermétique 400 g)',
        description: 'Nutrition infantile complète conforme au Codex STAN 72 avec équilibre lactosérum/caséine, fer et vitamine C.'
      },
      ration_emergency_compressed_500g: {
        name: 'Ration Alimentaire Compactée d’Urgence (Norme Maritime SOLAS) (Bloc sous Vide 500 g)',
        description: 'Bloc calorique cuit enrichi en vitamines, formulé pour ne pas provoquer la soif et prêt à consommer.'
      },
      protein_whey_concentrate_powder_100g: {
        name: 'Concentré de Protéines de Lactosérum (Whey Protein 80%) en Poudre (Sachet 100 g)',
        description: 'Source d’acides aminés essentiels à haute valeur biologique pour la récupération traumatique et les états cataboliques.'
      },
      coconut_milk_powder_200g: {
        name: 'Lait de Coco Déshydraté en Poudre Soluble (Sachet 200 g)',
        description: 'Source concentrée de triglycérides à chaîne moyenne (TCM) à assimilation énergétique rapide.'
      },
      gelatin_unflavored_powder_50g: {
        name: 'Gélatine Alimentaire Neutre en Poudre Sans Arôme (Collagène Hydrolysé Pur) (Sachet 50 g)',
        description: 'Protéine structurelle pure de longue conservation et agent gélifiant culinaire.'
      },

      // 3. cat_spices_morale (15)
      salt_sodium_chloride_iodized_1000g: {
        name: 'Sel Alimentaire Fin Iodé (Chlorure de Sodium + Iodate de Potassium) (Sachet 1000 g)',
        description: 'Électrolyte physiologique vital, conservateur pour la salaison des viandes/poissons et base des solutions de réhydratation.'
      },
      sugar_sucrose_crystal_1000g: {
        name: 'Sucre Blanc Cristallisé Raffiné (Saccharose) (Sachet 1000 g)',
        description: 'Source glycémique rapide, conservateur osmotique et substrat du cotransport sodium-glucose en réhydratation orale.'
      },
      coffee_roasted_ground_vacuum_500g: {
        name: 'Café Torréfié Moulu Conditionné sous Vide (Paquet Briquette 500 g)',
        description: 'Stimulant du système nerveux central (caféine) jouissant d’une très forte liquidité dans les échanges.'
      },
      coffee_instant_soluble_granules_50g: {
        name: 'Café Soluble Instantané Lyophilisé / Granulé (Pot ou Sachet 50 g)',
        description: 'Dissolution instantanée dans l’eau froide ou chaude ; valeur psychologique maximale par gramme transporté.'
      },
      tomato_paste_concentrated_300g: {
        name: 'Double Concentré de Tomate (28–30% Résidu Sec) (Boîte 300 g)',
        description: 'Base culinaire acide riche en lycopène, potassium et vitamine C améliorant l’appétence des céréales.'
      },
      broth_bouillon_dehydrated_cube_10g: {
        name: 'Cube de Bouillon Déshydraté Pressé (Bœuf/Volaille/Légumes) (1 Cube de 10 g)',
        description: 'Apport concentré de sodium, lipides et umami transformant l’eau bouillie et le riz en soupe réconfortante.'
      },
      vinegar_acetic_acid_4pct_750ml: {
        name: 'Vinaigre Blanc d’Alcool Distillé (4% Acide Acétique) (Bouteille 750 mL)',
        description: 'Acidifiant pour conserves au vinaigre sûres (prévention du botulisme), détartrant et antiseptique domestique.'
      },
      garlic_dehydrated_powder_100g: {
        name: 'Ail Déshydraté en Poudre Pur (Allium sativum) (Pot ou Sachet 100 g)',
        description: 'Condiment aromatique concentré de longue conservation pour légumineuses et viandes salées.'
      },
      pepper_black_ground_50g: {
        name: 'Poivre Noir Moulu Pur (Piper nigrum) (Sachet Scellé 50 g)',
        description: 'Épice traditionnelle à haute valeur d’échange par gramme et exhausteur de goût.'
      },
      sodium_bicarbonate_pure_100g: {
        name: 'Bicarbonate de Sodium Pur Qualité Pharmaceutique/Alimentaire (NaHCO3) (Sachet 100 g)',
        description: 'Antiacide gastrique, dentifrice alcalin, tampon pour solution de réhydratation orale et agent levant.'
      },
      chocolate_dark_cocoa_60pct_100g: {
        name: 'Chocolat Noir Extra-Fin (Minimum 60% de Cacao) (Tablette 100 g)',
        description: 'Tablette énergétique riche en beurre de cacao, théobromine et glucose avec bonne tenue thermique.'
      },
      candy_hard_glucose_unit_5g: {
        name: 'Bonbon Dur au Glucose / Saccharose sous Emballage Individuel (1 Unité de 5 g)',
        description: 'Glucide simple à absorption buccale rapide contre l’hypoglycémie et unité fractionnaire de monnaie d’appoint.'
      },
      tea_camellia_sinensis_dry_50g: {
        name: 'Thé Noir ou Vert Sec en Feuilles / Sachets (Camellia sinensis) (Boîte 50 g)',
        description: 'Infusion stimulante riche en tanins et caféine encourageant l’ébullition préalable de l’eau.'
      },
      tobacco_cigarette_filtered_unit: {
        name: 'Cigarette de Tabac avec Filtre (1 Unité Individuelle)',
        description: 'Unité atomique standardisée de nicotine à liquidité historique éprouvée comme micro-monnaie en temps de crise.'
      },
      alcohol_ethanol_potable_40pct_500ml: {
        name: 'Spiritueux Distillé Potable (Vodka / Eau-de-Vie Neutre 40% vol. Éthanol) (Bouteille 500 mL)',
        description: 'Distillat à forte liquidité commerciale adapté à l’extraction de teintures végétales, à l’antisepsie et au moral.'
      },

      // 4. cat_pharma_essential (15)
      amoxicillin_500mg_capsule: {
        name: 'Amoxicilline Trihydratée 500 mg Gélule Orale (DCI/ANSM) (1 Gélule)',
        description: 'Médicament Essentiel OMS : antibiotique bêta-lactamine à large spectre pour infections respiratoires, ORL et cutanées.'
      },
      azithromycin_500mg_tablet: {
        name: 'Azithromycine Dihydratée 500 mg Comprimé Pelliculé (DCI/ANSM) (1 Comprimé)',
        description: 'Médicament Essentiel OMS : antibiotique macrolide à prise unique quotidienne pour infections respiratoires et entériques.'
      },
      ciprofloxacin_500mg_tablet: {
        name: 'Ciprofloxacine Chlorhydrate 500 mg Comprimé Pelliculé (DCI/ANSM) (1 Comprimé)',
        description: 'Médicament Essentiel OMS : antibactérien fluoroquinolone pour dysenterie bacillaire sévère, infections urinaires et Gram-négatifs.'
      },
      metronidazole_400mg_tablet: {
        name: 'Métronidazole 400 mg Comprimé Oral (DCI/ANSM) (1 Comprimé)',
        description: 'Médicament Essentiel OMS : antiprotozoaire (giardiase, amibiase hydrique) et antibactérien contre les anaérobies stricts.'
      },
      paracetamol_500mg_tablet: {
        name: 'Paracétamol 500 mg Comprimé Oral (DCI/ANSM) (1 Comprimé)',
        description: 'Médicament Essentiel OMS : antalgique et antipyrétique de première intention sans toxicité muqueuse gastroduodénale.'
      },
      metamizole_sodium_500mg_tablet: {
        name: 'Métamizole Sodique (Dipyrone) 500 mg Comprimé Oral (DCI) (1 Comprimé)',
        description: 'Pyrazolone antalgique, antipyrétique et spasmolytique puissante pour douleurs viscérales aiguës et fièvres réfractaires.'
      },
      ibuprofen_400mg_tablet: {
        name: 'Ibuprofène 400 mg Comprimé Pelliculé (DCI/ANSM) (1 Comprimé)',
        description: 'Médicament Essentiel OMS : anti-inflammatoire non stéroïdien (AINS) pour traumatismes musculosquelettiques, odontalgies et fièvre.'
      },
      ibuprofen_oral_suspension_50mg_ml_20ml: {
        name: 'Ibuprofène Suspension Buvable Pédiatrique Concentrée 50 mg/mL (Flacon Compte-Gouttes 20 mL)',
        description: 'Antipyrétique et anti-inflammatoire liquide concentré permettant un dosage pédiatrique précis selon le poids corporel.'
      },
      loperamide_hydrochloride_2mg_tablet: {
        name: 'Lopéramide Chlorhydrate 2 mg Gélule / Comprimé (DCI/ANSM) (1 Unité)',
        description: 'Antidiarrhéique ralentisseur du transit intestinal freinant la déshydratation aiguë lors des diarrhées non dysentériques.'
      },
      oral_rehydration_salts_who_sachet_27_9g: {
        name: 'Sels de Réhydratation Orale (SRO Formule OMS à Faible Osmolarité) (Sachet 27,9 g pour 1 L)',
        description: 'Formule officielle OMS/UNICEF glucose-électrolytes (245 mOsm/L) corrigeant la déshydratation diarrhéique aiguë.'
      },
      loratadine_10mg_tablet: {
        name: 'Loratadine 10 mg Comprimé Oral Antihistaminique Non Sédatif (DCI/ANSM) (1 Comprimé)',
        description: 'Antagoniste H1 de deuxième génération pour rhinite allergique, urticaire et piqûres d’insectes sans somnolence.'
      },
      omeprazole_20mg_capsule: {
        name: 'Oméprazole 20 mg Gélule Gastrorésistante (DCI/ANSM) (1 Gélule)',
        description: 'Inhibiteur de la pompe à protons pour ulcère gastroduodénal, reflux sévère et gastroprotection sous AINS.'
      },
      potassium_iodide_130mg_tablet: {
        name: 'Iodure de Potassium (KI) 130 mg Comprimé Sécable Protecteur Thyroïdien (1 Comprimé)',
        description: 'Contre-mesure d’urgence radiologique OMS saturant la thyroïde pour bloquer la fixation de l’iode radioactif I-131.'
      },
      ascorbic_acid_500mg_tablet: {
        name: 'Acide Ascorbique (Vitamine C) 500 mg Comprimé Oral (DCI/ANSM) (1 Comprimé)',
        description: 'Vitamine hydrosoluble essentielle contre le scorbut, cofacteur de synthèse du collagène cicatriciel et d’absorption du fer.'
      },
      multivitamin_mineral_complex_tablet: {
        name: 'Complexe Multivitaminé et Minéral Complet Comprimé Pelliculé (1 Comprimé)',
        description: 'Prophylaxie quotidienne en micronutriments essentiels et oligo-éléments face aux régimes de survie carencés.'
      },

      // 5. cat_trauma_hygiene (15)
      ethanol_antiseptic_70pct_100ml: {
        name: 'Alcool Éthylique Modifié à 70° Antiseptique Cutané (Solution Topique 70% v/v) (Flacon 100 mL)',
        description: 'Bactéricide et virucide topique d’action rapide pour la désinfection de la peau saine, des instruments et l’allumage d’urgence.'
      },
      hydrogen_peroxide_3pct_10vol_100ml: {
        name: 'Eau Oxygénée 10 Volumes (Peroxyde d’Hydrogène 3%) Solution Cutanée (Flacon 100 mL)',
        description: 'Solution oxydante effervescente pour le nettoyage mécanique des plaies souillées et bain de bouche dilué.'
      },
      povidone_iodine_10pct_topical_100ml: {
        name: 'Povidone Iodée 10% Solution Dermique Antiseptique (DCI/ANSM) (Flacon 100 mL)',
        description: 'Antiseptique iodophore à large spectre contre bactéries, champignons, virus et spores pour plaies et champ opératoire.'
      },
      chlorhexidine_digluconate_2pct_100ml: {
        name: 'Digluconate de Chlorhexidine 2% Solution Cutanée Antiseptique (DCI/ANSM) (Flacon 100 mL)',
        description: 'Antiseptique biguanide à effet rémanent prolongé conservant son activité antimicrobienne en présence de sang.'
      },
      gauze_sterile_compress_7_5cm_unit: {
        name: 'Compresse de Gaze Hydrophile Stérile en Coton 7,5 x 7,5 cm (1 Sachet Stérile)',
        description: 'Pansement chirurgical stérile multicouche pour tamponnement hémostatique, absorption des exsudats et couverture des plaies.'
      },
      tape_medical_waterproof_spool_5m: {
        name: 'Sparadrap Médical Hypoallergénique Imperméable sur Toile 2,5 cm x 5 m (1 Bobine)',
        description: 'Ruban adhésif chirurgical à forte tenue pour fixer pansements, attelles et prévenir les ampoules de marche.'
      },
      bandage_elastic_compression_roll_2m: {
        name: 'Bande Élastique de Compression et de Contention Crêpe 10 cm x 2 m avec Attaches (1 Rouleau)',
        description: 'Bandage réutilisable pour compression hémostatique, maintien des œdèmes et immobilisation articulaire.'
      },
      tourniquet_tactical_arterial_unit: {
        name: 'Garrot Artériel Tactique de Membre à Treuil (Standard CoTCCC) (1 Unité)',
        description: 'Dispositif mécanique vital permettant l’occlusion rapide à une seule main des hémorragies artérielles massives.'
      },
      suture_surgical_nylon_3_0_needle_unit: {
        name: 'Fil de Suture Chirurgicale Stérile Monofilament Polyamide (Nylon) 3-0 avec Aiguille Triangulaire (1 Sachet)',
        description: 'Suture non résorbable à haute résistance à la traction prête pour la fermeture primaire des lacérations profondes.'
      },
      syringe_sterile_5ml_with_needle_unit: {
        name: 'Seringue Hypodermique Stérile 5 mL Embout Luer-Lock avec Aiguille 21G (1 Blister Stérile)',
        description: 'Dispositif stérile pour injection parentérale et irrigation sous pression contrôlée des plaies contaminées.'
      },
      gloves_nitrile_exam_pair: {
        name: 'Gants Médicaux d’Examen en Nitrile Non Poudrés Ambidextres (1 Paire)',
        description: 'Barrière biologique et chimique résistante à la perforation pour les soins d’urgence.'
      },
      respirator_particulate_n95_pff2_unit: {
        name: 'Demi-Masque Filtrant contre les Particules FFP2 / N95 Sans Soupape (Norme NF EN 149) (1 Unité)',
        description: 'Filtre >=94–95% des aérosols infectieux, poussières toxiques, fumées d’incendie et cendres en suspension.'
      },
      soap_glycerin_neutral_bar_200g: {
        name: 'Pain de Savon Neutre à la Glycérine Sans Parfum (Pain Solide 200 g)',
        description: 'Tensioactif solide pour l’hygiène des mains, le lavage périlésionnel et l’assainissement contre la transmission fécale-orale.'
      },
      paper_toilet_cellulose_roll_30m: {
        name: 'Rouleau de Papier Hygiénique en Pure Ouade de Cellulose (1 Rouleau Standard de 30 m)',
        description: 'Consommable sanitaire de base à forte rotation dans le troc et amadou fibreux sec pour l’allumage du feu.'
      },
      sanitary_pad_absorbent_external_unit: {
        name: 'Serviette Hygiénique Absorbante Externe sous Pochette Individuelle (1 Unité)',
        description: 'Produit essentiel d’hygiène menstruelle servant également de pansement compressif absorbant d’urgence.'
      },

      // 6. cat_water_fire_shelter (10)
      sodium_hypochlorite_2_5pct_1000ml: {
        name: 'Solution d’Hypochlorite de Sodium à 2,5% de Chlore Actif pour Désinfection de l’Eau (Bouteille 1000 mL)',
        description: 'Biocide chloré liquide capable de potabiliser jusqu’à 10.000 litres d’eau contre le choléra, la typhoïde et la dysenterie.'
      },
      water_purification_nadcc_tablet_unit: {
        name: 'Comprimé Effervescent de Potabilisation d’Eau au Dichloroisocyanurate de Sodium (NaDCC) (1 Comprimé / 1–2 L)',
        description: 'Donneur organique de chlore recommandé par l’OMS inactivant bactéries, virus et kystes de Giardia.'
      },
      filter_water_hollow_fiber_0_1micron_unit: {
        name: 'Filtre à Eau Portable à Membrane de Fibres Creuses 0,1 Micron Absolu (1 Unité)',
        description: 'Microfiltration mécanique rétrolavable éliminant 99,9999% des bactéries et 99,9% des protozoaires sans produits chimiques.'
      },
      lighter_butane_piezo_standard_unit: {
        name: 'Briquet à Gaz Isobutane Pressurisé à Pierre ou Piézoélectrique (1 Unité)',
        description: 'Fournit jusqu’à 3.000 allumages immédiats ; même vide de gaz, sa molette produit des étincelles pour l’amadou.'
      },
      ferrocerium_ignition_rod_8mm_unit: {
        name: 'Tige d’Allumage en Ferrocérium (Pyrophorique) de 8 mm avec Grattoir en Acier (1 Unité)',
        description: 'Alliage de terres rares et de fer projetant des étincelles à 3.000 °C sous la pluie ou le vent (>10.000 utilisations).'
      },
      matches_waterproof_safety_box_40un: {
        name: 'Allumettes de Sécurité Imperméables et Résistantes au Vent (Boîte de 40 Unités)',
        description: 'Allumettes traitées par vernis hydrophobe s’enflammant de manière fiable après exposition à l’humidité.'
      },
      candle_paraffin_solid_white_30g_unit: {
        name: 'Bougie Cylindrique Blanche en Paraffine Solide à Haut Point de Fusion (1 Unité de 30 g)',
        description: 'Éclairage de secours sans coulure, apport thermique en micro-abri et imperméabilisant pour coutures.'
      },
      fuel_solid_hexamine_tablet_14g_unit: {
        name: 'Pastille de Combustible Solide à l’Hexamine (Hexaméthylènetétramine) Sans Fumée (1 Pastille de 14 g)',
        description: 'Combustible solide à haute densité énergétique brûlant sans fumée ni liquéfaction pour faire bouillir 500 mL d’eau.'
      },
      blanket_thermal_aluminized_mylar_unit: {
        name: 'Couverture de Survie Thermique Aluminisée (Polyéthylène Téréphtalate Mylar 210 x 130 cm) (1 Unité)',
        description: 'Réfléchit jusqu’à 90% du rayonnement thermique corporel pour prévenir l’hypothermie chez les blessés.'
      },
      tarp_polyethylene_waterproof_3x3m_unit: {
        name: 'Bâche Imperméable en Polyéthylène Tressé Renforcé avec Œillets Métalliques 3 x 3 m (1 Unité)',
        description: 'Couverture rapide d’abri étanche, pare-vapeur de sol et collecteur d’eau de pluie.'
      },

      // 7. cat_tools_energy_comms (14)
      knife_fixed_blade_carbon_steel_fulltang: {
        name: 'Couteau de Camp à Lame Fixe Plate Semelle (Full-Tang) en Acier au Carbone avec Étui (1 Unité)',
        description: 'Outil primaire de survie adapté au fendage du bois (bâtonnage), à la découpe et à la percussion d’étincelles.'
      },
      multitool_pliers_stainless_folding_unit: {
        name: 'Pince Multifonction Pliante en Acier Inoxydable Trempé (1 Unité)',
        description: 'Intègre pince à bec, coupe-fil, lame, scie à bois/métal, poinçon alésoir et tournevis.'
      },
      saw_wire_stainless_pocket_unit: {
        name: 'Scie-Fil Tressée de Poche en Acier Inoxydable avec Anneaux Pivotants (1 Unité)',
        description: 'Scie manuelle ultralégère pour la coupe rapide de bois de chauffage, perches d’abri, os ou tubes plastiques.'
      },
      tape_cloth_adhesive_waterproof_48mm_10m: {
        name: 'Ruban Adhésif Toilé Imperméable Haute Résistance (Duct Tape) 48 mm x 10 m (1 Rouleau)',
        description: 'Bande adhésive armée enduite de polyéthylène pour le colmatage de bâches, chaussures, tuyaux et récipients.'
      },
      cord_nylon_kernmantle_550lb_10m: {
        name: 'Cordelette Tressée en Polyamide Kernmantle 550 lb (Paracorde Type III à 7 Brins Internes) (Écheveau 10 m)',
        description: 'Cordage tactique imputrescible dont les 7 brins internes peuvent être extraits pour la pêche, la couture ou le piégeage.'
      },
      steel_wool_fine_grade_0000_pad_unit: {
        name: 'Tampon de Laine d’Acier au Carbone Extra-Fine Grade #0000 (1 Unité)',
        description: 'Amadou métallique entrant immédiatement en incandescence au contact d’une pile ou d’étincelles de ferrocérium.'
      },
      needle_sewing_heavy_steel_with_thread_10m: {
        name: 'Aiguille de Sellier/Voilier en Acier Robuste avec 10 m de Fil Polyester Ciré (1 Kit)',
        description: 'Kit de réparation structurelle pour sacs à dos, bâches, chaussures de marche et vêtements lourds.'
      },
      fishing_kit_line_20m_hooks_5un_weights_5un: {
        name: 'Kit Compact de Pêche de Subsistance (20 m Ligne Monofilament, 5 Hameçons, 5 Plombs) (1 Kit)',
        description: 'Système passif d’acquisition de protéines aquatiques avec une dépense calorique humaine minimale.'
      },
      battery_alkaline_lr6_aa_1_5v_unit: {
        name: 'Pile Alcaline Cylindrique Primaire Norme IEC LR6 / AA 1,5 V (1 Unité)',
        description: 'Cellule primaire universelle offrant jusqu’à 7 ans de stockage pour lampes, récepteurs radio et appareils médicaux.'
      },
      battery_alkaline_lr03_aaa_1_5v_unit: {
        name: 'Pile Alcaline Cylindrique Primaire Norme IEC LR03 / AAA 1,5 V (1 Unité)',
        description: 'Cellule primaire compacte 1,5 V pour lampes frontales LED, oxymètres de pouls et récepteurs de poche.'
      },
      battery_lithium_ion_18650_3_7v_3000mah_unit: {
        name: 'Accumulateur Rechargeable Lithium-Ion IEC 18650 3,7 V 3000 mAh avec Circuit de Protection (1 Cellule)',
        description: 'Batterie secondaire à haute densité énergétique (~11,1 Wh) supportant plus de 500 cycles de recharge solaire.'
      },
      flashlight_led_aluminum_aa_compatible_unit: {
        name: 'Lampe Torche Tactique LED en Aluminium Anodisé Compatible Pile AA (IEC LR6) (1 Unité)',
        description: 'Éclairage robuste résistant aux chocs et aux intempéries alimenté par une seule pile AA standard.'
      },
      panel_solar_monocrystalline_usb_5v_10w_unit: {
        name: 'Panneau Solaire Photovoltaïque Pliable en Silicium Monocristallin 10 W avec Sortie Régulée USB 5 V (1 Unité)',
        description: 'Générateur autonome à courant continu pour recharger accumulateurs 18650, lampes et émetteurs-récepteurs radio.'
      },
      radio_transceiver_vhf_uhf_dualband_unit: {
        name: 'Émetteur-Récepteur Radio Portable VHF/UHF Bibande (136–174 / 400–520 MHz) FM (1 Unité)',
        description: 'Communication tactique point à point et réception d’alertes météo indépendante des réseaux cellulaires.'
      },

      // 8. cat_store_of_value (6)
      faraday_bag_shielded_rf_emp_medium_unit: {
        name: 'Pochette Blindée Cage de Faraday Multicouche contre RF et Impulsion Électromagnétique (IEM/EMP) Format Moyen (1 Unité)',
        description: 'Atténuation électromagnétique (>85 dB) protégeant émetteurs-récepteurs, chargeurs solaires et cartes MicroSD.'
      },
      microsd_flash_storage_64gb_offline_wiki_unit: {
        name: 'Carte Mémoire MicroSDXC 64 Go Industrielle avec Bibliothèque Médicale, Agronomique et d’Ingénierie Hors-Ligne (1 Unité)',
        description: 'Archive encyclopédique complète hors-ligne (manuels cliniques, pharmacopée, agriculture, métallurgie et cartographie).'
      },
      eyeglasses_reading_convex_diopter_plus_2_0: {
        name: 'Lunettes de Lecture à Verres Convexes en Polycarbonate +2,00 Dioptries (1 Unité)',
        description: 'Restaure l’acuité visuelle de près pour sutures, réparations fines et lecture ; les verres concentrent la lumière solaire.'
      },
      seeds_open_pollinated_vegetable_mix_50g: {
        name: 'Banque de Semences Potagères à Pollinisation Libre Non Hybrides (Sachet Hermétique 50 g)',
        description: 'Semences fertiles reproductibles (haricot, maïs, courge, chou, tomate) pour l’autonomie alimentaire multigénérationnelle.'
      },
      silver_bullion_999_fine_1_troy_oz_31_1g: {
        name: 'Pièce / Lingotin d’Argent Pur .999 Fine Silver (1 Once Troy / 31,1035 g)',
        description: 'Actif physique universel de valeur intermédiaire pour le commerce en reconstruction et la conservation oligodynamique de l’eau.'
      },
      gold_bullion_999_fine_fractional_1g: {
        name: 'Lingotin Fractionné d’Or Pur .9999 Fine Gold Certifié (1,0 g)',
        description: 'Réserve patrimoniale inaltérable à densité de valeur maximale par milligramme pour les règlements de haut niveau.'
      },

      // 9. cat_essential_services (28)
      service_trauma_wound_debridement_suturing_proc: {
        name: 'Parage Chirurgical de Plaie, Irrigation et Suture Primaire (1 Acte)',
        description: 'Parage aseptique des tissus dévitalisés, irrigation abondante et suture primaire plan par plan (standard OMS IMEESC).'
      },
      service_fracture_closed_reduction_splinting_proc: {
        name: 'Réduction Fermée de Fracture / Luxation Orthopédique et Immobilisation par Attelle (1 Acte)',
        description: 'Réalignement anatomique par traction manuelle d’une fracture fermée ou luxation avec immobilisation rigide et contrôle neurovasculaire.'
      },
      service_dental_extraction_infection_drainage_proc: {
        name: 'Avulsion Dentaire d’Urgence (Extraction), Drainage d’Abcès et Contrôle de la Douleur (1 Acte)',
        description: 'Extraction dentaire atraumatique au davier/élévateur et incision-drainage d’abcès odontogène aigu pour prévenir le sepsis.'
      },
      service_obstetric_delivery_midwifery_care_proc: {
        name: 'Assistance Obstétricale à l’Accouchement, Réanimation Néonatale et Contrôle de l’Hémorragie du Post-Partum (1 Acte)',
        description: 'Accouchement assisté, gestion active de la délivrance, clampage stérile du cordon et réanimation néonatale (OMS IMPAC).'
      },
      service_clinical_triage_nursing_care_shift_4hr: {
        name: 'Garde de Triage Clinique, Surveillance d’Hydratation SRO/IV et Soins Infirmiers (Vacation de 4 Heures)',
        description: 'Vacation dédiée de 4 heures de soins infirmiers aigus incluant suivi des constantes vitales, réhydratation et réfection stérile des pansements.'
      },
      service_water_well_pump_filtration_repair_proc: {
        name: 'Réparation et Maintenance de Pompe Manuelle de Puits et Système de Filtration WASH (1 Intervention)',
        description: 'Démontage mécanique, remplacement des joints/clapet de pied, alignement des tiges et remise en état de la filtration communautaire (Sphère WASH).'
      },
      service_sanitation_latrine_vector_control_proc: {
        name: 'Ingénierie de Latrine Sanitaire (Norme Sphère) et Lutte Antivectorielle Biologique (1 Intervention)',
        description: 'Excavation dimensionnée, pose de dalle étanche avec évent grillagé anti-insectes, protection de la nappe phréatique et désinfection chaux/chlore.'
      },
      service_solar_pv_battery_dc_diagnostics_repair_proc: {
        name: 'Diagnostic et Réparation de Système Solaire Photovoltaïque Autonome, Régulateur et Parc Batteries CC (1 Intervention)',
        description: 'Recherche de pannes au multimètre, réparation de régulateur MPPT/PWM, équilibrage de cellules, désulfatation et câblage CC (IEC 62446).'
      },
      service_generator_internal_combustion_overhaul_proc: {
        name: 'Révision Mécanique de Moteur / Groupe Électrogène Thermique (Carburateur, Magnéto et Soupapes) (1 Intervention)',
        description: 'Nettoyage complet du carburateur/injecteur, calage de l’allumage par magnéto, réglage du jeu aux soupapes et étanchéité de compression.'
      },
      service_radio_vhf_uhf_antenna_calibration_repair_proc: {
        name: 'Réparation d’Émetteur-Récepteur VHF/UHF, Connectique Coaxiale et Accord ROS (VSWR) d’Antenne (1 Intervention)',
        description: 'Diagnostic de l’étage RF, soudure de connecteurs coaxiaux faible perte et accord résonant d’antenne dipôle/Yagi pour un ROS < 1,5.'
      },
      service_metallurgy_blade_tool_forging_sharpening_proc: {
        name: 'Forge Métallurgique, Trempe, Affûtage de Lames et Soudure/Brasage Structurel (1 Intervention)',
        description: 'Traitement thermique de l’acier au carbone (trempe et revenu), reprofilage du tranchant des haches/couteaux et assemblage métallique.'
      },
      service_mechanical_bicycle_cart_drivetrain_repair_proc: {
        name: 'Révision Mécanique de Transport Non Motorisé (Vélo / Charrette : Roulements, Rayons et Transmission) (1 Intervention)',
        description: 'Dévoilage et tension des rayons de roue, graissage/remplacement des roulements de moyeu, réglage de chaîne et freinage.'
      },
      service_shelter_roofing_structural_carpentry_proc: {
        name: 'Charpente Structurelle d’Abri, Consolidation de Fermes et Étanchéité de Toiture (1 Intervention)',
        description: 'Assemblage structurel de charpente bois, renforcement des pannes/chevrons et étanchéité hors d’eau face aux intempéries.'
      },
      service_masonry_thermal_stove_chimney_build_proc: {
        name: 'Construction Maçonnée de Poêle/Four à Bois Haute Performance (Rocket Stove) avec Cheminée (1 Intervention)',
        description: 'Édification d’une chambre de combustion isolée à tirage optimisé réduisant de 50–70% la consommation de bois et éliminant la fumée intérieure (ISO 19867).'
      },
      service_footwear_cobbling_heavy_textile_repair_proc: {
        name: 'Cordonnerie Robuste (Ressemelage de Bottes, Couture Sellier) et Réparation de Sacs/Bâches (1 Intervention)',
        description: 'Couture manuelle au point sellier à l’alêne et fil poissé, refixation de semelles de brodequins et renfort de sangles de portage.'
      },
      service_veterinary_livestock_obstetrics_wound_proc: {
        name: 'Soins Vétérinaires au Bétail et Animaux de Trait (Traumatologie, Obstétrique et Vermifugation) (1 Acte)',
        description: 'Intervention clinique sur animaux d’élevage ou de trait incluant vêlage dystocique, parage des sabots/plaies et contrôle parasitaire (FAO).'
      },
      service_agrarian_crop_grafting_seed_preservation_proc: {
        name: 'Greffage Agricole, Amendement du Sol et Sélection/Séchage Technique de Semences Non Hybrides (1 Intervention)',
        description: 'Greffage d’arbres fruitiers/cultures pérennes, correction du pH du sol à la cendre/compost et conditionnement des semences.'
      },
      service_food_preservation_smoking_fermentation_batch: {
        name: 'Service de Conservation Alimentaire par Salaison, Fumage Thermique ou Lactofermentation (1 Lot)',
        description: 'Traitement technique par salaison osmotique, fumage contrôlé à froid/chaud ou fermentation lactique anaérobie jusqu’à 15 kg.'
      },
      service_security_perimeter_watch_patrol_shift_4hr: {
        name: 'Garde Tactique de Surveillance Périmétrique, Contrôle d’Accès et Alerte Précoce (Vacation de 4 Heures)',
        description: 'Vacation disciplinée de 4 heures d’observation défensive diurne/nocturne, ronde périmétrique, filtrage d’accès et veille incendie/intrusion.'
      },
      service_logistics_heavy_cargo_portage_5km_25kg: {
        name: 'Portage Logistique Humain sur Claie (25 kg de Fournitures Essentielles sur 5 km Hors-Piste) (1 Trajet)',
        description: 'Transport terrestre manuel sécurisé de 25 kg d’eau, de grain ou de matériel médical sur 5 km de terrain accidenté ou dégradé (ISO 8996).'
      },
      service_it_mesh_network_intranet_deployment_proc: {
        name: 'Déploiement de Réseau Local Autonome (Intranet / WLAN / Maillage LoRa) pour Accès Collectif aux Archives (1 Intervention)',
        description: 'Configuration de routeurs récupérés ou nœuds LoRa pour créer un réseau sans fil local permettant l’accès simultané à la bibliothèque MicroSD 64 Go sans internet (IEEE 802.11s).'
      },
      service_it_data_recovery_extraction_proc: {
        name: 'Récupération Forensique de Données et Extraction d’Archives Techniques sur Supports Endommagés/Inopérants (1 Intervention)',
        description: 'Extraction physique et logique de manuels PDF d’ingénierie, schémas de potabilisation, cartes et dossiers médicaux depuis disques HDD, SSD et téléphones en panne (ISO/IEC 27037).'
      },
      service_it_pcb_microsoldering_salvage_proc: {
        name: 'Microsoudure sur Circuits Imprimés (PCB) et Récupération de Composants Électroniques (1 Intervention)',
        description: 'Dessoudage et récupération de transistors, condensateurs, résistances et diodes sur cartes électroniques hors d’usage pour réparer radios VHF/UHF ou régulateurs solaires (IPC-7711/7721).'
      },
      service_it_microcontroller_low_power_automation_proc: {
        name: 'Programmation de Microcontrôleurs Basse Consommation (MCU) pour Automatisation de Puits et d’Irrigation (1 Intervention)',
        description: 'Programmation embarquée (classe Arduino/ESP32/MCU) et intégration de capteurs/relais CC pour automatiser le pompage, la protection de batteries ou l’irrigation (IEC 61131-3).'
      },
      service_instruction_technical_literacy_class: {
        name: 'Instruction en Alphabétisation Technique Fonctionnelle et Lecture de Manuels Médicaux/Ingénierie (1 Module / Cours)',
        description: 'Formation structurée pour adultes visant à lire et interpréter avec exactitude les tables posologiques d’antibiotiques, les schémas de filtration d’eau et les archives hors-ligne (UNESCO ISCED).'
      },
      service_instruction_applied_mathematics_proc: {
        name: 'Instruction en Mathématiques Appliquées de Terrain, Géométrie Structurelle et Calcul de Troc (1 Module / Cours)',
        description: 'Enseignement pratique des calculs géométriques de charpente et maçonnerie thermique, conversions de doses et arithmétique de parité et monnaie BarterScore (OIT CITP-08 2320).'
      },
      service_instruction_combat_medicine_triage_class: {
        name: 'Atelier Pratique de Survie en Triage Clinique, Contrôle des Hémorragies et Assainissement WASH (1 Module / Cours)',
        description: 'Entraînement pratique formant de nouveaux secouristes au triage clinique, à la pose de garrot artériel, au méchage hémostatique et à l’hygiène de l’eau (OMS BEC / CICR).'
      },
      service_instruction_technical_translation_proc: {
        name: 'Traduction Technique Multilingue et Décodage de Manuels pour Rétro-Ingénierie (1 Intervention)',
        description: 'Traduction technique directe et enseignement terminologique (Anglais, Français, Espagnol, Portugais, Chinois) de manuels récupérés, fiches techniques et schémas radio (ISO 17100).'
      }
    }
  };

  return Object.freeze(FR_FR_DICTIONARY);
});
