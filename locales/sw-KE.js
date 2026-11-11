/**
 * @fileoverview BarterScore Engine - Swahili (Kenya / East Africa) Localization Pack (sw-KE)
 * @license Apache-2.0
 * @version 1.1.0
 *
 * Official IETF BCP 47 Locale: sw-KE
 * Nomenclature Standards:
 * - Pharmaceuticals: WHO INN / Kenya Essential Medicines List (KEML — Ministry of Health) & Pharmacy and Poisons Board (PPB)
 * - Foods & Nutrition: Kenya Food Composition Tables (KFCT — FAO/MoH), KEBS / East African Standards (EAS) & Codex Alimentarius
 * - Batteries & Respirators: KEBS / IEC 60086-2 (LR6, LR03), IEC 61960-3 (INR18650), NIOSH N95 / EN 149 FFP2
 *
 * UMD Loader compatible with local file:// protocol (window.BarterCore.Locales['sw-KE'])
 * and CommonJS (module.exports). Zero commercial brands.
 */

(function (root, factory) {
  'use strict';

  var localePack = factory();

  // 1. Always attach to global namespace for offline file:// protocol compatibility
  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.Locales = root.BarterCore.Locales || {};
    root.BarterCore.Locales['sw-KE'] = localePack;
  }

  // 2. Support CommonJS / Node.js environments
  if (typeof module === 'object' && module.exports) {
    module.exports = localePack;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var SW_KE_LOCALE = {
    meta: {
      code: 'sw-KE',
      locale: 'sw-KE',
      name: 'Swahili (Kenya / East Africa)',
      native_name: 'Kiswahili (Kenya)',
      language_name: 'Kiswahili (Kenya / Afrika Mashariki)',
      direction: 'ltr',
      standard: 'WHO INN / KEML-PPB Kenya / FAO KFCT / KEBS-EAS / IEC / Codex Alimentarius',
      nomenclature_standard: 'WHO INN / KEML-PPB Kenya / FAO KFCT / KEBS-EAS / IEC / Codex Alimentarius'
    },

    categories: {
      cat_staple_foods: {
        name: 'Vyakula vikuu na Msingi wa Nishati (Kalori)',
        description:
          'Nafaka, mikunde mikavu, unga, mafuta, protini za makopo za muda mrefu na maji safi ya kunywa yaliyofungwa.'
      },
      cat_critical_nutrition: {
        name: 'Lishe Maalum na Virutubisho Muhimu',
        description:
          'Maziwa ya unga ya watoto wachanga, vyakula vya dharura vilivyoshindiliwa na protini zilizokolezwa za kuokoa maisha.'
      },
      cat_spices_morale: {
        name: 'Viungo, Vihifadhi na Bidhaa za Ari yaKisaikolojia',
        description:
          'Chumvi yenye madini joto, sukari, vichocheo vya mfumo wa fahamu, vihifadhi asidi na bidhaa ndogondogo zenye mzunguko wa haraka.'
      },
      cat_pharma_essential: {
        name: 'Dawa Muhimu na Tiba za Kuokoa Maisha',
        description:
          'Antibiotiki za mwili mzima, dawa za kupunguza homa na maumivu, chumvi za kurejesha maji mwilini (ORS) na kinga ya tezi dhidi ya mionzi (WHO INN / KEML).'
      },
      cat_trauma_hygiene: {
        name: 'Huduma ya Kwanza ya Majeraha, Upasuaji na Usafi',
        description:
          'Dawa za kuua vijidudu kwenye vidonda, bandeji za kufunga damu ya mishipa mikuu, nyuzi za kushonea na vifaa vya kinga ya kibiolojia.'
      },
      cat_water_fire_shelter: {
        name: 'Usafishaji wa Maji, Moto, Nishati Joto na Makazi',
        description:
          'Kemikali na vichujio vya kusafisha maji, vifaa vya kuwashia moto, nishati ngumu ya kupikia na vifaa vya kuzuia baridi kali.'
      },
      cat_tools_energy_comms: {
        name: 'Zana, Nishati Ndogo, Mawasiliano na Mbegu',
        description:
          'Zana za chuma cha kaboni, kamba za ujenzi, betri za IEC, paneli za jua, redio za masafa ya VHF/UHF na mbegu za kilimo.'
      },
      cat_store_of_value: {
        name: 'Hifadhi ya Thamani na Madini ya Thamani',
        description:
          'Dhahabu na fedha safi (999.0) pamoja na vyombo vya kuhifadhia maktaba ya maarifa ya kidijitali bila mtandao.'
      },
      cat_essential_services: {
        name: 'Huduma Muhimu za Kibinadamu, Matibabu, TEHAMA Bila Mtandao na Ufundi',
        description:
          'Taratibu za matibabu na upasuaji wa dharura, ukunga, ukarabati wa visima vya maji, umeme wa jua, uhunzi, mitandao ya ndani bila intaneti (Mesh), uokoaji wa data na mafunzo ya kiufundi.'
      }
    },

    scenarios: {
      baseline: {
        name: 'Msingi Halisi wa Kifizikia (Bila Kizidisho cha Muktadha — 1.0x)',
        description:
          'Thamani ya msingi (ScoreBase) inayotokana na kalori, uzito, ujazo, muda wa kuhifadhi na uimara bila kizidisho cha mazingira.'
      },
      acute_collapse: {
        name: 'Mporomoko Mkali wa Kijamii (Survival Immediate — Hifadhi ya Thamani 0.01x)',
        description:
          'Kipaumbele cha juu kwa usafishaji wa maji, kuzuia damu, antibiotiki na vyakula vilivyo tayari kuliwa. Madini ya thamani hupoteza 99% ya thamani ya matumizi (0.01x).'
      },
      economic_reconstruction: {
        name: 'Ujenzi Mpya wa Kiuchumi (Biashara na Uzalishaji — Hifadhi ya Thamani 5.0x)',
        description:
          'Kufufuka kwa uzalishaji, kilimo na biashara ya masafa marefu. Madini ya thamani (5.0x), zana za kudumu, mbegu na nishati ya jua hupanda thamani.'
      }
    },

    ui: {
      app_title: 'BarterScore Engine — Kikokotoo cha Thamani ya Mbadilishano na Jenereta ya Mwongozo',
      app_subtitle:
        'Mfumo wa Kimahesabu wa Mbadilishano wa Bidhaa Muhimu na Huduma bila Mtandao (Leseni ya Apache 2.0)',
      validator_status_ok: 'Ukaguzi wa Muundo (Schema): Umeidhinishwa 100%',
      validator_status_error: 'Ukaguzi wa Muundo: Hitilafu Zimegunduliwa kwenye Data',
      validator_items_loaded: 'Bidhaa na Huduma Rasmi Zilizopakiwa',
      validator_warnings: 'Maonyo',
      validator_errors: 'Hitilafu',
      status_valid_dataset: 'Ukaguzi wa Muundo (Schema): Umeidhinishwa 100%',
      status_invalid_dataset: 'Ukaguzi wa Muundo: Hitilafu Zimegunduliwa kwenye Data',
      label_language: 'Lugha ya Kiolesura na Orodha (BCP 47)',
      label_language_hint: 'Mlolongo wa Mbadala: Lugha Iliyochaguliwa → en-US → Kitambulisho cha Kiufundi',
      label_scenario: 'Awamu ya Muktadha wa Dharura (MEC)',
      label_search: 'Chuja kwa jina la bidhaa, kitambulisho cha kiufundi au lebo...',
      label_category_filter: 'Chuja kwa Kundi',
      option_all_categories: 'Makundi Yote (Bidhaa na Huduma 128)',
      btn_print_manual: 'Chapisha Mwongozo wa Karatasi (A4)',
      btn_reset_defaults: 'Rejesha Mipangilio ya Awali',
      sim_title: 'Kiigaji cha Mbadilishano wa Pande Mbili na Mgawanyiko wa Vipimo',
      sim_subtitle:
        'Hukokotoa uwiano kamili wa ubadilishaji, uchakavu wa muda wa matumizi na tahadhari za chenji kwa bidhaa zisizogawanyika.',
      sim_offer_header: 'Bidhaa Unayotoa (Hesabu Yako)',
      sim_request_header: 'Bidhaa Unayoomba (Upande wa Pili)',
      sim_select_item: 'Chagua Bidhaa au Huduma Rasmi',
      sim_label_item: 'Chagua Bidhaa au Huduma Rasmi',
      sim_quantity: 'Idadi Unayotoa (Vipimo vya Msingi)',
      sim_label_quantity: 'Idadi Unayotoa (Vipimo vya Msingi)',
      sim_lifecycle_remaining: 'Siku Zilizosalia za Matumizi (Muda Halisi)',
      sim_label_lifecycle: 'Siku Zilizosalia za Matumizi (Muda Halisi)',
      sim_lifecycle_nominal_hint: 'Muda rasmi wa kuhifadhi bidhaa mpya:',
      sim_service_durability_label: 'Uimara wa Matokeo ya Huduma (Siku)',
      sim_service_durability_hint:
        'Uimara rasmi wa matokeo ya huduma (weka chaguo-msingi kwa huduma kamili; punguza tu ikiwa ni ya muda/dharura):',
      sim_unit_days: 'siku',
      sim_hint_unit_value: 'Thamani ya Kipimo kwa Sasa:',
      sim_hint_depreciation: 'Upungufu wa muda wa kuhifadhi:',
      sim_hint_service_depreciation: 'Upungufu wa huduma ya muda:',
      sim_btn_swap: 'Badilisha Upande (⇄)',
      sim_summary_title: 'Muhtasari wa Moja kwa Moja wa Makabidhiano ya Mbadilishano',
      sim_summary_deliver: 'Unakabidhi (Ofa Yako):',
      sim_summary_receive: 'Unapokea (Makabidhiano Yanayopendekezwa):',
      sim_summary_you_deliver: 'Unakabidhi (Ofa Yako)',
      sim_summary_you_receive: 'Unapokea (Makabidhiano Yanayopendekezwa)',
      sim_result_header: 'Uwiano wa Mbadilishano na Makabidhiano Yaliyokokotolewa',
      sim_exchange_rate: 'Uwiano wa Kipimo (1 Unachotoa : X Unavyopokea)',
      sim_result_rate: 'Uwiano wa Kipimo (1 Unachotoa : X Unavyopokea)',
      sim_offer_total_score: 'Thamani ya Jumla Unayotoa (Unakabidhi)',
      sim_result_offer_total: 'Thamani ya Jumla Unayotoa (Unakabidhi)',
      sim_request_unit_score: 'Thamani ya Kipimo 1 (Bidhaa Unayoomba)',
      sim_result_request_unit: 'Thamani ya Kipimo 1 (Bidhaa Unayoomba)',
      sim_exact_quantity: 'Kiasi Halisi cha Kupokea (Bidhaa Unayoomba)',
      sim_result_exact_qty: 'Kiasi Halisi cha Kimahesabu (Bidhaa Unayoomba)',
      sim_recommended_quantity: 'Kiasi Kinachopendekezwa Kupokea (Bidhaa Unayoomba)',
      sim_result_recommended_qty: 'Kiasi Kinachopendekezwa Kupokea (Bidhaa Unayoomba)',
      sim_sub_units_equivalent: 'Jumla ya Vipimo Vidogo vya Kupokea (Bidhaa Unayoomba)',
      sim_result_sub_units: 'Jumla ya Vipimo Vidogo vya Kupokea (Bidhaa Unayoomba)',
      sim_imbalance_balanced: 'Makabidhiano Yaliyosawazishwa: Hakuna hasara ya kutogawanyika.',
      sim_imbalance_surplus: 'WEWE UNADAIWA CHENJI NA UPANDE WA PILI (Ziada ya Kutogawanyika Uliyopokea)',
      sim_imbalance_deficit: 'UPANDE WA PILI UNAWAJIBIKA KUKUPA CHENJI (Salio la Kutogawanyika Unalodai)',
      sim_Alert_balanced: 'Mbadilishano Uko Sawa Kimahesabu (Hakuna Hasara ya Kukadiria)',
      sim_alert_surplus: 'Ziada kwa Kutogawanyika — UNADAIWA CHENJI NA UPANDE WA PILI',
      sim_alert_deficit: 'Upungufu kwa Kutogawanyika — UPANDE WA PILI UNAWAJIBIKA KUKUPA CHENJI',
      sim_msg_balanced:
        'Mbadilishano uko sawa kimahesabu: kupokea vipimo {rec} ({sub} {measure}) vya "{item}" kunalingana na thamani ya ofa yako bila hasara ya kutogawanyika.',
      sim_msg_surplus_indivisible:
        'Bidhaa inayoombwa "{item}" haigawanyiki ({req_unit_pts} pts/kipimo) na ina thamani kubwa kuliko ofa yako ya sasa ({offer_pts} pts; ingehitaji vipimo {needed_offer} vya bidhaa unayotoa ili kufikia kipimo 1 kamili bila chenji). Kukadiria kutoka vipimo {exact} hadi kipimo/vipimo kamili {rec} kunazalisha tofauti ya +{pct}% ({delta} pts juu ya ofa yako). Ili kupokea vipimo {rec} sasa, WEWE unawajibika kulipa chenji ya {delta} pts kwa upande wa pili (au ongeza idadi ya bidhaa unayotoa).',
      sim_msg_deficit_indivisible:
        'Bidhaa inayoombwa "{item}" haigawanyiki ({req_unit_pts} pts/kipimo). Ofa yako ({offer_pts} pts) ina thamani kubwa kuliko vipimo kamili {rec} utakavyopokea ({req_total_pts} pts). Kukadiria kutoka vipimo {exact} hadi vipimo kamili {rec} kunaacha salio la -{pct}% ({delta} pts) kwa faida yako. UPANDE WA PILI unawajibika kukurudishia chenji yenye thamani ya {delta} pts.',
      sim_msg_sub_unit_rounding:
        'Kugawa "{item}" hadi {sub} {measure} (vipimo {rec}) kunaleta tofauti ndogo ya kukadiria ya {sign}{pct}% ({delta} pts).',
      sim_change_suggestion:
        'Chaguzi za Mara kwa Mara za Chenji (Chagua chaguo 1 hapa chini kufidia {delta} pts):',
      sim_change_suggestion_you_pay:
        'Chenji Ambayo WEWE Unapaswa Kulipa kwa Upande wa Pili (Chagua chaguo 1 hapa chini ili ulipe {delta} pts):',
      sim_change_suggestion_counterparty_pays:
        'Chenji Ambayo UPANDE WA PILI Unapaswa Kukulipa WEWE (Chagua chaguo 1 hapa chini ili upokee {delta} pts):',
      sim_change_all_toggle:
        'Onyesha chaguzi zote {count} za chenji zinazowezekana kwenye orodha ({div} zinazogawanyika kwa g/ml/un + {indiv} vipimo vidogo kamili)',
      sim_change_Select_all:
        'Onyesha Bidhaa Zote {count} za Orodha Zinazofaa Kama Chenji kwa Tofauti Hii (Kwa Kundi)',
      sim_change_packs_unit: 'vifurushi/vipimo',
      table_title: 'Jedwali Kamili la Thamani za Mbadilishano wa Orodha Rasmi (Bidhaa na Huduma 128)',
      table_search_placeholder: 'Chuja kwa jina la bidhaa, kitambulisho cha kiufundi au lebo...',
      table_filter_all_categories: 'Makundi Yote 9 Rasmi',
      col_index: '#',
      col_item: 'Jina la Kiufundi la Bidhaa na Maelezo',
      col_unit: 'Kipimo cha Msingi na Mgawanyiko',
      col_category: 'Kundi',
      col_divisible: 'Mgawanyiko',
      col_energy: 'Nishati / EEB (E)',
      col_mass_vol: 'Uzito / Ujazo (P / Vol)',
      col_nutritional_idx: 'IN',
      col_burden: 'P + Vol (kg / L)',
      col_lifecycle: 'Muda wa Kuhifadhi / Uimara (V)',
      col_in: 'Faharasa ya Lishe (IN)',
      col_base_score: 'Alama ya Msingi',
      col_mec: 'Muktadha (MEC)',
      col_final_score: 'Alama ya Mwisho ya Mbadilishano',
      col_score_baseline: '1. Msingi Halisi (1.0x)',
      col_score_acute: '2. Mporomoko Mkali',
      col_score_recon: '3. Ujenzi Mpya',
      unit_divisible: 'Inagawanyika',
      unit_indivisible: 'Haigawanyiki',
      unit_food: 'Chakula cha Kalori',
      unit_non_food: 'Kifaa / Si Chakula',
      badge_food: 'Chakula (kcal)',
      badge_non_food: 'Si Chakula (EEB)',
      badge_divisible: 'Inagawanyika',
      badge_indivisible: 'Haigawanyiki (Kamili)',
      unit_days: 'siku',
      unit_points: 'pts',
      print_header_note:
        'MWONGOZO WA MAREJEO YA MBADILISHANO BILA MTANDAO (MIKTADHA YOTE 3 YA DHARURA) — BARTERSCORE ENGINE v1.1.0',
      print_header_notice:
        'MWONGOZO WA MBADILISHANO BILA MTANDAO — BARTERSCORE ENGINE v1.1.0 (APACHE 2.0) — REJEA YA KIFIZIKIA NA KISAYANSI',
      print_guide_title:
        'MWONGOZO KAMILI WA UENDESHAJI WA KARATASI (BILA UMEME) NA JEDWALI LA CHENJI NDOGONDOGO',
      print_step1_title: '1. Kokotoa Salio Lako (Alama Unazokabidhi)',
      print_step1_body:
        'Tafuta bidhaa unayotoa na uchague safu wima ya muktadha husika (Safu 8 Msingi 1.0x, Safu 9 Mporomoko Mkali, au Safu 10 Ujenzi Mpya). Zidisha alama yake kwa idadi unayotoa (au zidisha kiwango chake cha 1 g / 1 ml kwa uzito/ujazo).',
      print_step2_title: '2. Kokotoa Kiasi Halisi cha Kupokea',
      print_step2_body:
        'Kwa kutumia rula iliyonyooka katika safu wima hiyohiyo ya muktadha, soma alama ya bidhaa unayoomba. Gawanya Jumla ya Alama Zako kwa Alama ya Bidhaa Unayoomba (Alama Zako ÷ Alama Lengwa).',
      print_step3_title: '3. Fidia Chenji ya Bidhaa Zisizogawanyika (Vipimo Vidogo)',
      print_step3_body:
        'Kwa bidhaa zisizogawanyika, toa alama za vipimo kamili kutoka kwenye salio lako (Alama za Chenji = Alama Zako − Alama Zilizopokelewa) na ufidie salio kwa kutumia Jedwali la Haraka la Chenji hapa chini au bidhaa yoyote inayogawanyika (kiwango cha 1 g / 1 ml).',
      print_step4_title: '4. Marekebisho ya Muda wa Matumizi (Kanuni ya Bidhaa Zinazokaribia Kuisha)',
      print_step4_body:
        'Ikiwa bidhaa inakaribia kuisha muda wake: >siku 90 = 100% ya alama; siku 31–90 = 75% (−25%); siku 8–30 = 50% (punguza thamani nusu); siku 1–7 = 25% (−75%); siku 0 (imeharibika) = 0 pts.',
      print_step5_title: '5. Maana ya Kifizikia ya Alama 1 ya BarterScore (1 pt) na Udhibiti wa Kipimo (ε = 0.1)',
      print_step5_body:
        '• Alama 1 (1.00 pt) = Kilokalori 1 Halisi ya Kuokoa Maisha (E × IN = 1) kwa kila kipimo cha Mzigo wa Uzito na Ujazo (P + Vol + 0.1 = 1.0) kwa Muongo 1 wa Kilogarithimu wa Muda wa Matumizi (V = siku 9 → log10(10) = 1.0).\n• Udhibiti ε = 0.1: Kuongeza 0.1 kwenye (P + Vol + 0.1) huzuia mgawanyiko kwa sifuri kwa vitu vidogo vya 1 g (0.001 kg), na kuweka ukomo wa faida ya kubebeka hadi ~9.8x.',
      print_step6_title: '6. Vyanzo Rasmi vya Kisayansi na Kanuni ya Utatu Usiobadilika Bila Mtandao',
      print_step6_body:
        '• Kila bidhaa imefungamanishwa na msimbo rasmi wa kudumu (USDA FDC ID 169756 Mchele / 173734 Maharagwe, FAO KFCT / KEBS, WHO EML 23rd ATC J01CA04, KEML Kenya, WHO ORS 245 mOsm/L, WHO GDWQ NaDCC 67mg/20L, Sphere WASH 2.1 15L/siku, IEC 60086, LBMA 999).\n• Nakala kamili ya data imehifadhiwa ndani ya audit_sources/OFFLINE_AUDIT_DOSSIER.md kwa ajili ya ukaguzi wa 100% bila intaneti.',
      print_scenarios_box_title: 'Jinsi ya Kutumia Safu Wima 3 za Muktadha Sambamba (Safu 8, 9 na 10)',
      print_scenarios_box_body:
        '• Safu 8 — Msingi Halisi (1.0x MEC): Thamani ya ndani ya kifizikia na lishe (ScoreBase) bila vizidisho vya dharura. • Safu 9 — Mporomoko Mkali wa Kijamii: Awamu ya kuokoa maisha; maji safi/usafishaji (hadi 4.32x), antibiotiki, matibabu ya majeraha na vyakula vilivyo tayari kuliwa vinapanda kileleni, huku madini ya thamani yakishuka hadi 0.01x. • Safu 10 — Ujenzi Mpya wa Kiuchumi: Awamu ya kufufua uchumi; zana za chuma imara, mbegu za asili, vifaa vya jua/redio na madini ya thamani (5.00x) vinaongoza.',
      print_example_box_title: 'Mfano Halisi wa Mahesabu Hatua kwa Hatua (Safu ya Mporomoko Mkali — Hasara ya Kukadiria 0%)',
      print_example_box_body:
        'Badilisha pakiti 50 za Maziwa ya Unga Kamili (400 g) kwa Koleo la Kukunja la Chuma cha Pua (kipimo 1, Haigawanyiki): 1) Salio Lako: 50 × {milk_pts} pts = {milk_total} pts. 2) Alama Lengwa: {pliers_pts} pts/kipimo. 3) Mgawanyo: {milk_total} ÷ {pliers_pts} = vipimo {pliers_exact} → Pokea Koleo 2 kamili ({pliers_two} pts). 4) Chenji Unayodai: {milk_total} − {pliers_two} = {change_pts} pts → Gawanya kwa kiwango cha Chumvi yenye Madini Joto ({salt_rate} pts/g) = {salt_g} g ya Chumvi (au {sugar_g} g ya Sukari kwa {sugar_rate} pts/g).',
      print_expiry_box_title: 'Itifaki za Kupunguza Thamani kwa Muda wa Matumizi (Karatasi na Kikokotoo cha Mfukoni)',
      print_expiry_box_body:
        '• Itifaki A (Karibu Kuisha Muda): >siku 90 = 100%; siku 31–90 = 75% (−1/4); siku 8–30 = 50% (Nusu ya Thamani); siku 1–7 = 25% (Robo ya Thamani); siku 0/Imeharibika = 0 pts (Kataa). • Itifaki B (Uwiano kwa Bidhaa za Muda Mrefu >siku 90): 50% ya muda wa kiwandani uliosalia ≈ −10% ya alama; 25% ya muda wa kiwandani uliosalia ≈ −20% ya alama (inakadiria log10(V_rem+1) ÷ log10(V_nom+1)). • Huduma Muhimu (101–128): V ni uimara wa matokeo; tumia 100% (1.0x) kwa huduma kamili.',
      print_checklist_box_title: 'Orodha ya Ukaguzi wa Kituo cha Mbadilishano cha Jamii na Vifaa vya Umeme Unapokatika',
      print_checklist_box_body:
        '• Vifaa Vinavyohitajika: Jedwali Lililochapishwa la A4, Rula Iliyonyooka, Kikokotoo cha Mfukoni (au kalamu/karatasi), na Mizani ya Jikoni ya 1 g / Kipimo cha Ujazo cha 1 ml. • Kanuni za Usalama: 1) Kataa mifuko iliyotoboka, makopo yaliyovimba/yenye kutu, au vifungashio vya dawa vilivyopasuka (0 pts); 2) Hakikisha pande zote mbili zinasoma kutoka safu wima moja ya muktadha; 3) Tumia punguzo la nusu thamani (<siku 30) kabla ya kuzidisha idadi; 4) Daima fidia chenji kwa g/ml/un.',
      print_change_table_title:
        'Jedwali la Haraka la Chenji Ndogondogo — Miktadha Yote 3 ya Dharura (Safu 8 Msingi | Safu 9 Mporomoko | Safu 10 Ujenzi)',
      print_lookup_title:
        'JEDWALI LA MAREJEO YA HARAKA YA CHENJI NDOGONDOGO (KWA BIDHAA ZISIZOGAWANYIKA — SAFU WIMA 3 ZA MUKTADHA)',
      print_lookup_col_item: 'Bidhaa ya Chenji (Sarafu ya Kugawanyika / Kipimo Kidogo)',
      print_lookup_col_pack: 'Kifurushi Kamili',
      print_lookup_col_sub: 'Kipimo cha Chenji',
      print_lookup_col_s1: '1. Msingi Halisi (1.0x)',
      print_lookup_col_s2: '2. Mporomoko Mkali',
      print_lookup_col_s3: '3. Ujenzi Mpya',
      print_lookup_col_formula: 'Jinsi ya Kupima Chenji Halisi'
    },

    items: {
      // =========================================================================
      // 1. cat_staple_foods (Items 001 - 020)
      // =========================================================================
      rice_white_polished_raw_1000g: {
        name: "Mchele Mweupe Uliong'arishwa Mbichi (Mfuko 1000 g)",
        description:
          'Nafaka ndefu ya mchele mweupe (Oryza sativa), msingi wa wanga na kalori za muda mrefu. Kifurushi cha 1000 g.'
      },
      beans_common_dry_1000g: {
        name: 'Maharagwe Makavu ya Kawaida (Mfuko 1000 g)',
        description:
          'Mbegu kavu za maharagwe (Phaseolus vulgaris), chanzo kikuu cha protini ya mimea, madini ya chuma na potasiamu. 1000 g.'
      },
      lentils_dry_raw_500g: {
        name: 'Dengu Kavu Mbichi (Mfuko 500 g)',
        description:
          'Mikunde mikavu ya dengu (Lens culinaris) yenye protini nyingi na muda mfupi wa kuchemsha (hutumia kuni/mafuta kidogo). 500 g.'
      },
      chickpeas_dry_raw_500g: {
        name: 'Njegere / Dengu Kubwa Kavu (Chickpeas Mfuko 500 g)',
        description:
          'Mbegu kavu za Cicer arietinum zenye kiwango kikubwa cha protini, mafuta na nishati. Kifurushi cha 500 g.'
      },
      pasta_wheat_dry_500g: {
        name: 'Tambi Kavu za Ngano (Pasta Mfuko 500 g)',
        description:
          'Tambi zilizotengenezwa kwa unga wa ngano ngumu (Triticum durum), hupikwa haraka na kutoa nishati ya haraka. 500 g.'
      },
      flour_cassava_dry_1000g: {
        name: 'Unga wa Muhogo Mkavu Ulioanikwa (Mfuko 1000 g)',
        description:
          'Unga mkavu wa muhogo (Manihot esculenta) wenye kalori nyingi na uwezo wa kuliwa kwa maji moto kidogo. 1000 g.'
      },
      flour_wheat_enriched_1000g: {
        name: 'Unga wa Ngano Ulioongezwa Madini ya Chuma na Asidi ya Foliki (Mfuko 1000 g)',
        description:
          'Unga mweupe wa ngano (Triticum aestivum) ulioimarishwa kwa madini ya chuma kwa ajili ya kuoka mikate na chapati. 1000 g.'
      },
      cornmeal_flaked_dry_500g: {
        name: 'Unga wa Mahindi Uliochakatwa (Sembe / Cornmeal Mfuko 500 g)',
        description:
          'Unga wa mahindi makavu (Zea mays) uliosagwa kwa ajili ya kupika ugali au uji haraka. Kifurushi cha 500 g.'
      },
      oats_rolled_whole_500g: {
        name: 'Shayiri Iliyobonyezwa (Rolled Oats Mfuko 500 g)',
        description:
          'Nafaka kamili ya shayiri (Avena sativa) yenye mafuta na protini nyingi, inaweza kuliwa kwa kulowekwa bila moto. 500 g.'
      },
      milk_powder_whole_400g: {
        name: 'Maziwa ya Unga Kamili ya Ng’ombe (Kopo/Mfuko 400 g)',
        description:
          'Maziwa yaliyokaushwa yenye mafuta kamili, protini, kalsiamu na vitamini; huyeyuka kwenye maji bila kupikwa. 400 g.'
      },
      oil_vegetable_refined_900ml: {
        name: 'Mafuta ya Kupikia ya Mboga Yaliyosafishwa (Chupa 900 mL)',
        description:
          'Mafuta safi ya mboga (soya, alizeti au mahindi), msongamano wa juu zaidi wa nishati ya kalori (884 kcal/100g). 900 mL.'
      },
      lard_pork_rendered_500g: {
        name: 'Mafuta Imara ya Wanyama Yaliyoyeyushwa (Chombo 500 g)',
        description:
          'Mafuta safi ya lipid (100% fat) yenye uwezo mkubwa wa kuhifadhiwa bila kuharibika kwa ajili ya kupikia na kuhifadhi nyama. 500 g.'
      },
      fish_sardine_canned_oil_125g: {
        name: 'Samaki wa Dagaa / Sardini kwenye Mafuta ya Kopo (Kopo 125 g)',
        description:
          'Samaki wa Sardini waliopikwa na kufungwa kwenye kopo la chuma pamoja na mafuta; tayari kuliwa, tajiri kwa protini na kalsiamu. 125 g.'
      },
      fish_tuna_canned_solid_170g: {
        name: 'Samaki wa Jodari (Tuna) Kwenye Kopo (Kopo 170 g)',
        description:
          'Nyama imara ya samaki wa jodari iliyopikwa kwenye kopo la chuma; chanzo cha protini safi tayari kwa matumizi. 170 g.'
      },
      meat_bovine_cured_salted_500g: {
        name: 'Nyama ya Ng’ombe Iliyokaushwa kwa Chumvi (Charque / Biltong 500 g)',
        description:
          'Nyama ya ng’ombe iliyotiwa chumvi nyingi na kukaushwa ili kuhifadhika kwa miezi mingi bila jokofu. Kifurushi cha 500 g.'
      },
      meat_bovine_canned_cooked_320g: {
        name: 'Nyama ya Ng’ombe Iliyopikwa kwenye Kopo (Corned Beef 320 g)',
        description:
          'Nyama ya ng’ombe iliyopikwa na kufungwa kwenye kopo imara la chuma (tayari kuliwa, muda wa matumizi miaka 5). 320 g.'
      },
      peanut_paste_roasted_500g: {
        name: 'Siagi ya Karanga Zilizokaangwa (Chombo 500 g)',
        description:
          'Mchanganyiko mzito wa karanga zilizokaangwa (Arachis hypogaea), tayari kuliwa bila moto, tajiri kwa mafuta na protini. 500 g.'
      },
      honey_bee_pure_500g: {
        name: 'Asali Safi ya Nyuki (Chombo 500 g)',
        description:
          'Asali asilia ya nyuki (Apis mellifera) isiyoharibika kwa miaka mingi; chanzo cha nishati ya haraka na kutibu vidonda. 500 g.'
      },
      biscuit_wheat_salted_dry_400g: {
        name: 'Biskuti Kavu za Ngano zenye Chumvi (Pakiti 400 g)',
        description:
          'Biskuti kavu zenye chumvi na wanga, tayari kuliwa mara moja wakati wa safari au dharura. 400 g.'
      },
      water_potable_sealed_1000ml: {
        name: 'Maji Safi ya Kunywa Yaliyofungwa (Chupa 1000 mL / Lita 1)',
        description:
          'Maji safi na salama ya kunywa yaliyofungwa kiwandani kwa ajili ya kuzuia upungufu mkali wa maji mwilini (Sphere WASH 2.1). 1000 mL.'
      },

      // =========================================================================
      // 2. cat_critical_nutrition (Items 021 - 025)
      // =========================================================================
      infant_formula_powder_stage1_400g: {
        name: 'Maziwa ya Unga ya Watoto Wachanga Hatua ya 1 (0–Miezi 6, Kopo 400 g)',
        description:
          'Lishe kamili ya maziwa ya watoto wachanga kulingana na Codex Alimentarius CXS 72-1981 yenye vitamini C, chuma na kalsiamu. 400 g.'
      },
      ration_emergency_compressed_500g: {
        name: 'Chakula cha Dharura Kilichoshindiliwa chenye Kalori Nyingi (Pakiti 500 g)',
        description:
          'Biskuti za uokoaji za ISO 18813 / SOLAS (aina ya BP-5) zilizoongezwa vitamini, tayari kuliwa bila maji ya kupikia (miaka 5). 500 g.'
      },
      protein_whey_concentrate_powder_100g: {
        name: 'Unga wa Protini ya Maziwa Iliyokolezwa (Whey Protein 80% Pakiti 100 g)',
        description:
          'Protini yenye uwezo mkubwa wa kufyonzwa mwilini kwa ajili ya wagonjwa wa majeraha, kuungua na utapiamlo. 100 g.'
      },
      coconut_milk_powder_200g: {
        name: 'Unga wa Tui la Nazi Lililokaushwa (Pakiti 200 g)',
        description:
          'Mafuta ya nazi yaliyokaushwa yenye nishati kubwa ya kalori (MCT lipids) na potasiamu. Kifurushi cha 200 g.'
      },
      gelatin_unflavored_powder_50g: {
        name: 'Unga wa Jelatini Safi Bila Ladha (Kolajeni Pakiti 50 g)',
        description:
          'Protini safi ya kolajeni kwa ajili ya kusaidia kupona kwa tishu na viungo. Kifurushi cha 50 g.'
      },

      // =========================================================================
      // 3. cat_spices_morale (Items 026 - 040)
      // =========================================================================
      salt_sodium_chloride_iodized_1000g: {
        name: 'Chumvi ya Mezani Yenye Madini Joto (Sodiamu Kloridi Mfuko 1000 g)',
        description:
          'Chumvi safi yenye madini ya ayodini (Codex CXS 150-1985); muhimu kwa elektroliti za mwili, kuhifadhi nyama na sarafu ya chenji kwa gramu. 1000 g.'
      },
      sugar_sucrose_crystal_1000g: {
        name: 'Sukari Nyeupe ya Fuwele (Sukrosi Mfuko 1000 g)',
        description:
          'Sukari safi ya miwa (100% sukrosi); chanzo cha nishati ya haraka, kihifadhi na sarafu kuu ya chenji kwa gramu. 1000 g.'
      },
      coffee_roasted_ground_vacuum_500g: {
        name: 'Kahawa Iliyokaangwa na Kusagwa Kwenye Mfuko wa Ombwe (500 g)',
        description:
          'Kahawa safi (Coffea arabica/canephora) iliyofungwa bila hewa; kichocheo cha kafeini chenye thamani kubwa ya ubadilishanaji. 500 g.'
      },
      coffee_instant_soluble_granules_50g: {
        name: 'Kahawa ya Papo Hapo Inayoyeyuka kwenye Maji (Chombo 50 g)',
        description:
          'Chembe za kahawa kavu inayoyeyuka moja kwa moja kwenye maji baridi au vuguvugu bila kuhitaji moto. 50 g.'
      },
      tomato_paste_concentrated_300g: {
        name: 'Nyanya Iliyokolezwa Kwenye Kopo (Tomato Paste 300 g)',
        description:
          'Mchuzi mzito wa nyanya kwenye kopo la chuma, chanzo cha vitamini C, lycopene na potasiamu. 300 g.'
      },
      broth_bouillon_dehydrated_cube_10g: {
        name: 'Kidonge cha Supu Iliyokaushwa chenye Chumvi (10 g — Kipimo 1)',
        description:
          'Mchanganyiko ulioshindiliwa wa chumvi, mafuta na viungo vya kuongeza ladha na sodiamu kwenye supu. Kipimo 1 (10 g).'
      },
      vinegar_acetic_acid_4pct_750ml: {
        name: 'Siki ya Chakula (Asidi ya Asetiki 4% Chupa 750 mL)',
        description:
          'Siki yenye asidi ya asetiki 4% kwa ajili ya kuhifadhi mboga, kuongeza asidi na kusafisha vyombo. 750 mL.'
      },
      garlic_dehydrated_powder_100g: {
        name: 'Unga wa Kitunguu Saumu Kilichokaushwa (Pakiti 100 g)',
        description:
          'Kitunguu saumu (Allium sativum) kilichokaushwa na kusagwa chenye uwezo wa kudumu muda mrefu. 100 g.'
      },
      pepper_black_ground_50g: {
        name: 'Pilipili Manga Iliyosagwa (Pakiti 50 g)',
        description:
          'Pilipili manga kavu (Piper nigrum) yenye piperini kwa ajili ya kuongeza ladha na kuhifadhi vyakula. 50 g.'
      },
      sodium_bicarbonate_pure_100g: {
        name: 'Magadi Soda Safi (Sodiamu Bikaboneti NaHCO3 Pakiti 100 g)',
        description:
          'Sodiamu bikaboneti ya daraja la chakula na tiba: hutumika kupunguza tindikali tumboni, kuoka, usafi wa meno na kuosha vidonda. 100 g.'
      },
      chocolate_dark_cocoa_60pct_100g: {
        name: 'Chokoleti Nyeusi (Kakao >= 60% Bamba 100 g)',
        description:
          'Chokoleti yenye kakao 60%+, tajiri kwa kalori, chuma, theobromine na kurejesha ari wakati wa dhiki. 100 g.'
      },
      candy_hard_glucose_unit_5g: {
        name: 'Pipi Ngumu ya Glukosi (5 g — Pipi 1)',
        description:
          'Pipi ngumu ya sukari na glukosi inayodumu muda mrefu kwa ajili ya kupandisha sukari ya damu haraka na kutumia kama chenji ndogo. Pipi 1 (5 g).'
      },
      tea_camellia_sinensis_dry_50g: {
        name: 'Majani Makavu ya Chai (Camellia sinensis Pakiti 50 g)',
        description:
          'Majani makavu ya chai nyeusi au ya kijani; huboresha ladha ya maji yaliyochemshwa na kutoa kafeini na tanini. 50 g.'
      },
      tobacco_cigarette_filtered_unit: {
        name: 'Sigara ya Tumbaku Yenye Kichujio (Sigara 1)',
        description:
          'Kipimo cha sigara 1; imethibitishwa kihistoria (Mzingiro wa Sarajevo) kama sarafu ndogo yenye ukwasi wa juu zaidi wakati wa mzingiro. Sigara 1.'
      },
      alcohol_ethanol_potable_40pct_500ml: {
        name: 'Pombe Kali Safi (Ethanoli ya Kunywa 40% v/v Chupa 500 mL)',
        description:
          'Kinywaji kilichochujwa chenye ethanoli 40% katika chupa iliyofungwa; mali ya mzunguko wa haraka wa biashara, kiyeyushi na dawa ya dharura ya kuua vijidudu. 500 mL.'
      },

      // =========================================================================
      // 4. cat_pharma_essential (Items 041 - 055) — WHO INN / KEML-PPB Kenya
      // =========================================================================
      amoxicillin_500mg_capsule: {
        name: 'Amoksisilini (Amoxicillin) 500 mg Kibonge cha Kunywa (WHO INN / KEML) (Kibonge 1)',
        description:
          'Antibiotiki ya kundi la penisilini yenye wigo mpana (WHO EML Access Group, ATC J01CA04) dhidi ya maambukizi makali ya bakteria. Kibonge 1.'
      },
      azithromycin_500mg_tablet: {
        name: 'Azithromaisini (Azithromycin) 500 mg Kidonge cha Kunywa (WHO INN / KEML) (Kidonge 1)',
        description:
          'Antibiotiki ya kundi la makrolidi (WHO EML Watch Group, ATC J01FA10) kwa maambukizi ya mfumo wa hewa na matumbo. Kidonge 1.'
      },
      ciprofloxacin_500mg_tablet: {
        name: 'Siprofloksasini (Ciprofloxacin) 500 mg Kidonge cha Kunywa (WHO INN / KEML) (Kidonge 1)',
        description:
          'Antibiotiki ya fluoroquinolone (WHO EML Watch Group, ATC J01MA02) dhidi ya kuhara damu, kipindupindu na maambukizi makali ya bakteria. Kidonge 1.'
      },
      metronidazole_400mg_tablet: {
        name: 'Metronidazoli (Metronidazole) 400 mg Kidonge cha Kunywa (WHO INN / KEML) (Kidonge 1)',
        description:
          'Dawa ya antibiotiki na kuua protozoa (WHO EML Access Group, ATC J01XD01) dhidi ya bakteria wasiotumia oksijeni, Giardia na amiba. Kidonge 1.'
      },
      paracetamol_500mg_tablet: {
        name: 'Parasetamoli (Acetaminophen) 500 mg Kidonge cha Kunywa (WHO INN / KEML) (Kidonge 1)',
        description:
          'Dawa ya msingi ya kupunguza homa kali na kutuliza maumivu (WHO EML, ATC N02BE01). Kidonge 1.'
      },
      metamizole_sodium_500mg_tablet: {
        name: 'Metamizoli Sodiamu (Dipyrone) 500 mg Kidonge cha Kunywa (WHO INN) (Kidonge 1)',
        description:
          'Dawa yenye nguvu ya kutuliza maumivu makali ya majeraha na kushusha homa kali (ATC N02BB02). Kidonge 1.'
      },
      ibuprofen_400mg_tablet: {
        name: 'Ibuprofeni (Ibuprofen) 400 mg Kidonge cha Kunywa (WHO INN / KEML) (Kidonge 1)',
        description:
          'Dawa ya kupunguza uvimbe, homa na maumivu ya misuli na mifupa (NSAID, WHO EML, ATC M01AE01). Kidonge 1.'
      },
      ibuprofen_oral_suspension_50mg_ml_20ml: {
        name: 'Ibuprofeni ya Kimiminika ya Watoto 50 mg/mL (Chupa 20 mL)',
        description:
          'Dawa ya matone ya kupunguza homa na maumivu kwa watoto (WHO EMLc, ATC M01AE01), inaweza kugawanywa kwa mililita. Chupa 20 mL.'
      },
      loperamide_hydrochloride_2mg_tablet: {
        name: 'Loperamidi Hidrokloridi (Loperamide) 2 mg Kidonge (WHO INN / KEML) (Kidonge 1)',
        description:
          'Dawa ya kudhibiti kuhara kwa ghafla ili kuzuia upotevu wa haraka wa maji na chumvi mwilini (ATC A07DA03). Kidonge 1.'
      },
      oral_rehydration_salts_who_sachet_27_9g: {
        name: 'Chumvi za Kurejesha Maji Mwilini (ORS ya WHO 245 mOsm/L Pakiti 27.9 g)',
        description:
          'Pakiti rasmi ya WHO/UNICEF (WHO/FCH/CAH/06.1, ATC A07CA) ya glukosi na elektroliti ya kuchanganywa na lita 1 ya maji kuokoa maisha dhidi ya kuhara na kipindupindu. Pakiti 1.'
      },
      loratadine_10mg_tablet: {
        name: 'Loratadini (Loratadine) 10 mg Kidonge cha Kunywa (WHO INN / KEML) (Kidonge 1)',
        description:
          'Dawa ya mzio (antihistamine H1 isiyoleta usingizi, WHO EML, ATC R06AX13) kwa ajili ya athari za mzio na kuumwa na wadudu. Kidonge 1.'
      },
      omeprazole_20mg_capsule: {
        name: 'Omeprazoli (Omeprazole) 20 mg Kibonge cha Kunywa (WHO INN / KEML) (Kibonge 1)',
        description:
          'Dawa ya kuzuia uzalishaji wa asidi nyingi tumboni na kutibu vidonda vya tumbo (WHO EML, ATC A02BC01). Kibonge 1.'
      },
      potassium_iodide_130mg_tablet: {
        name: 'Potasiamu Ayodidi (Potassium Iodide KI) 130 mg Kidonge (Kinga ya Tezi) (Kidonge 1)',
        description:
          'Kipimo rasmi cha WHO/FDA (ATC V03AB21) cha kuzuia tezi ya shingo kufyonza ayodini yenye mionzi (I-131) wakati wa ajali za nyuklia. Kidonge 1.'
      },
      ascorbic_acid_500mg_tablet: {
        name: 'Asidi ya Askobiki (Vitamini C) 500 mg Kidonge cha Kunywa (WHO INN / KEML) (Kidonge 1)',
        description:
          'Vitamini C (ATC A11GA01) kwa ajili ya kuzuia ugonjwa wa kiseyeye (scurvy), kuimarisha kinga na kusaidia vidonda kupona. Kidonge 1.'
      },
      multivitamin_mineral_complex_tablet: {
        name: 'Mchanganyiko wa Vitamini na Madini Muhimu (MMS Kidonge 1)',
        description:
          'Kidonge chenye vitamini na madini muhimu (WHO/WFP MMS, ATC A11AA03) kuzuia upungufu wa virutubisho wakati wa uhaba wa chakula. Kidonge 1.'
      },

      // =========================================================================
      // 5. cat_trauma_hygiene (Items 056 - 070)
      // =========================================================================
      ethanol_antiseptic_70pct_100ml: {
        name: 'Alkoholi ya Kuua Vijidudu (Ethanoli 70% v/v Chupa 100 mL)',
        description:
          'Suluhisho la ethanoli 70% (WHO EML, ATC D08AX08) kwa ajili ya kusafisha ngozi na vifaa vya tiba kabla ya upasuaji mdogo. 100 mL.'
      },
      hydrogen_peroxide_3pct_10vol_100ml: {
        name: 'Hidrojeni Peroksidi 3% (10 Volumes Chupa 100 mL)',
        description:
          'Dawa ya kusafisha vidonda vichafu kwa kuondoa tishu zilizokufa (ATC D08AX01). Chupa 100 mL.'
      },
      povidone_iodine_10pct_topical_100ml: {
        name: 'Povidoni-Ayodini (Povidone-Iodine) 10% ya Kupaka (Chupa 100 mL)',
        description:
          'Dawa yenye wigo mpana ya kuua bakteria, fangasi na virusi kwenye majeraha na kabla ya upasuaji (WHO EML, ATC D08AG02). 100 mL.'
      },
      chlorhexidine_digluconate_2pct_100ml: {
        name: 'Klorheksidini Diglukonati (Chlorhexidine) 2% ya Kupaka (Chupa 100 mL)',
        description:
          'Dawa ya kuua vijidudu yenye uwezo wa kubaki hai kwenye ngozi na vidonda kwa muda mrefu (WHO EML, ATC D08AC02). 100 mL.'
      },
      gauze_sterile_compress_7_5cm_unit: {
        name: ' Gozi Tasa ya Pamba ya Kufungia Kidonda (7.5 cm × 7.5 cm Pakiti 1)',
        description:
          'Kitambaa tasa cha pamba (WHO IEHK 2017 / EN 14079) kwa ajili ya kufyonza damu na kufunika majeraha. Pakiti 1.'
      },
      tape_medical_waterproof_spool_5m: {
        name: 'Plasta ya Kitabibu Isiyopitisha Maji (Rola 2.5 cm × 5 m)',
        description:
          'Plasta imara ya kushikilia bandeji na gozi kwenye ngozi. Rola ya mita 5.'
      },
      bandage_elastic_compression_roll_2m: {
        name: 'Bandeji Nyumbufu ya Kukaza na Kufunga Viungo (Rola 2 m)',
        description:
          'Bandeji ya kushinikiza kidonda ili kupunguza kutokwa na damu na kushikilia viungo vilivyoteguka. Rola 1 (mita 2).'
      },
      tourniquet_tactical_arterial_unit: {
        name: 'Kifaa cha Kufunga Damu ya Mshipa Mkuu (Tactical Arterial Tourniquet — Kipimo 1)',
        description:
          'Kifaa cha kuokoa maisha cha CoTCCC chenye kijiti cha kukaza ili kusimamisha kabisa uvujaji mkubwa wa damu kwenye mikono au miguu. Kipimo 1.'
      },
      suture_surgical_nylon_3_0_needle_unit: {
        name: 'Uzi Tasa wa Kushonea Vidonda wa Nailoni 3-0 Wenye Sindano (Pakiti 1)',
        description:
          'Uzi wa upasuaji wa USP 3-0 uliounganishwa na sindano ya chuma cha pua kwa ajili ya kufunga majeraha makubwa. Pakiti 1.'
      },
      syringe_sterile_5ml_with_needle_unit: {
        name: 'Bomba Tasa la Sindano 5 mL lenye Sindano (ISO 7886-1 — Kipimo 1)',
        description:
          'Bomba la sindano lililofungwa kwa ajili ya kudunga dawa au kusafisha kidonda kwa shinikizo la maji. Kipimo 1.'
      },
      gloves_nitrile_exam_pair: {
        name: 'Glovu za Nitrili za Uchunguzi wa Kitabibu (Jozi 1)',
        description:
          'Glovu za kinga ya kibiolojia (ASTM D6319 / EN 455) zisizo na mpira wa latex kwa ajili ya kuzuia maambukizi wakati wa kutibu majeraha. Jozi 1.'
      },
      respirator_particulate_n95_pff2_unit: {
        name: 'Barakoa ya Kuchuja Chembe na Vijidudu N95 / FFP2 (NIOSH / EN 149 — Kipimo 1)',
        description:
          'Barakoa yenye uwezo wa kuchuja >= 94–95% ya vumbi la vifusi, moshi na bakteria au virusi vinavyoenezwa kwa hewa. Kipimo 1.'
      },
      soap_glycerin_neutral_bar_200g: {
        name: 'Sabuni Ngumu ya Gliserini Isiyo na Kemikali Kali (Mche 200 g)',
        description:
          'Sabuni ya kunawa mikono, kuosha vidonda na usafi wa mwili ili kukata mnyororo wa maambukizi ya kipindupindu na kuhara (Sphere WASH 1.2). 200 g.'
      },
      paper_toilet_cellulose_roll_30m: {
        name: 'Karatasi ya Choo ya Selulosi (Rola 30 m)',
        description:
          'Rola ya karatasi ya usafi wa kibinafsi na kuwashia moto. Rola 1 (mita 30).'
      },
      sanitary_pad_absorbent_external_unit: {
        name: 'Pedi ya Usafi ya Wanawake Yenye Uwezo Mkubwa wa Kufyonza (Kipimo 1)',
        description:
          'Pedi ya usafi wa hedhi (Sphere WASH / UNFPA) na inaweza pia kutumika kama pedi ya pili ya kufyonza damu kwenye majeraha. Kipimo 1.'
      },

      // =========================================================================
      // 6. cat_water_fire_shelter (Items 071 - 080)
      // =========================================================================
      sodium_hypochlorite_2_5pct_1000ml: {
        name: 'Sodiamu Hipokloriti 2.5% (Klorini ya Kutibu Maji na Kuua Vijidudu Chupa 1000 mL)',
        description:
          'Kimiminika cha klorini 2.5% (WHO GDWQ / CDC SWS) cha kutibu maelfu ya lita za maji ya kunywa na kuua vijidudu kwenye maeneo ya matibabu. 1000 mL.'
      },
      water_purification_nadcc_tablet_unit: {
        name: 'Kidonge cha Kusafisha Maji cha NaDCC 67 mg (Hutibu Lita 20 — Kidonge 1)',
        description:
          'Kidonge cha Sodiamu Dikloroisosianurati 67 mg (WHO GDWQ / UNHCR WASH); kidonge 1 husafisha dumu la lita 20 za maji ndani ya dakika 30 bila kuchemsha. Kidonge 1.'
      },
      filter_water_hollow_fiber_0_1micron_unit: {
        name: 'Kichujio cha Maji cha Utando wa Mikroni 0.1 (Hollow-Fiber — Kipimo 1)',
        description:
          'Kichujio cha kubebeka (kiwango cha US EPA / NSF P231) kinachoondoa 99.9999% ya bakteria na protozoa hadi lita 100,000 za maji bila kemikali wala moto. Kipimo 1.'
      },
      lighter_butane_piezo_standard_unit: {
        name: 'Kiberiti cha Gesi ya Butani ( ~Miwasho 3,000 — Kipimo 1)',
        description:
          'Kiberiti cha gesi kinachotoa moto papo hapo (ISO 9994); sarafu kuu ya mzunguko wakati wa mzingiro wa mijini. Kipimo 1.'
      },
      ferrocerium_ignition_rod_8mm_unit: {
        name: 'Fimbo ya Kuwashia Moto ya Ferrosiriamu 8 mm (~Miwasho 10,000 — Kipimo 1)',
        description:
          'Fimbo ya aloi ya metali inayotoa cheche za joto la 3,000 °C kuwasha moto hata ikiwa imelowa maji au kwenye upepo mkali. Kipimo 1.'
      },
      matches_waterproof_safety_box_40un: {
        name: 'Njiti za Kiberiti Zisizozimika kwa Maji (Kisanduku cha Njiti 40)',
        description:
          'Kisanduku kilichofungwa chenye njiti 40 za kiberiti zinazowaka hata kwenye unyevunyevu (EN 1783). Kisanduku 1.'
      },
      candle_paraffin_solid_white_30g_unit: {
        name: 'Mshumaa Mweupe wa Parafini Ngumu 30 g (Mshumaa 1)',
        description:
          'Chanzo cha mwanga na moto kinachowaka kwa saa 5–6 bila kuhitaji betri. Mshumaa 1 (30 g).'
      },
      fuel_solid_hexamine_tablet_14g_unit: {
        name: 'Kidonge cha Nishati Ngumu ya Heksamini 14 g Isiyotoa Moshi (Kidonge 1)',
        description:
          'Kidonge cha mafuta magumu ya kupikia (NATO STANAG) kinachochemsha 500 mL za maji bila kutoa moshi unaoonekana. Kidonge 1 (14 g).'
      },
      blanket_thermal_aluminized_mylar_unit: {
        name: 'Blanketi la Dharura la Kuhifadhi Joto la Mwili (Aluminized Mylar — Kipimo 1)',
        description:
          'Shuka jepesi lisilopitisha maji wala upepo linaloakisi >90% ya joto la mwili ili kuzuia baridi kali (hypothermia) na mshtuko. Kipimo 1.'
      },
      tarp_polyethylene_waterproof_3x3m_unit: {
        name: 'Turubai Ngumu Isiyopitisha Maji ya Poliethilini (3 m × 3 m — Kipimo 1)',
        description:
          'Turubai imara lenye matundu ya kufungia kamba (kiwango cha UNHCR/IFRC) kwa ajili ya kujenga paa la dharura na kukinga maji ya mvua. Kipimo 1.'
      },

      // =========================================================================
      // 7. cat_tools_energy_comms (Items 081 - 094)
      // =========================================================================
      knife_fixed_blade_carbon_steel_fulltang: {
        name: 'Kisu Imara cha Chuma cha Kaboni (Full-Tang SAE 1095 — Kipimo 1)',
        description:
          'Kisu kigumu cha kazi nzito za msituni, kukata kuni, kujenga makazi na ulinzi; chuma kimoja kuanzia ncha hadi mpini. Kipimo 1.'
      },
      multitool_pliers_stainless_folding_unit: {
        name: 'Koleo na Zana Nyingi za Kukunja za Chuma cha Pua (Multi-Tool — Kipimo 1)',
        description:
          'Kifaa cha mfukoni chenye koleo, kikata waya, bisibisi na visu vya kufanyia ukarabati wa mitambo na umeme. Kipimo 1.'
      },
      saw_wire_stainless_pocket_unit: {
        name: 'Msumeno wa Waya wa Chuma cha Pua wa Mfukoni (MIL-W-83420 — Kipimo 1)',
        description:
          'Msumeno mwepesi wa nyaya zilizosokotwa kwa ajili ya kukata mbao, matawi na mabomba ya plastiki. Kipimo 1.'
      },
      tape_cloth_adhesive_waterproof_48mm_10m: {
        name: 'Plasta Ngumu ya Kitambaa Isiyopitisha Maji (48 mm × 10 m — Rola 1)',
        description:
          'Mkanda wenye gundi kali na nyuzi za kitambaa (ASTM D5486M) kwa ajili ya kuziba matundu kwenye maturubai, mabomba na vifaa. Rola 1 (mita 10).'
      },
      cord_nylon_kernmantle_550lb_10m: {
        name: 'Kamba ya Nailoni ya Paracord 550 lb (MIL-C-5040H Mita 10)',
        description:
          'Kamba imara yenye uwezo wa kuhimili uzito wa kg 250 na nyuzi 7 za ndani zinazoweza kutolewa kwa ajili ya kushonea au kuvulia samaki. Mita 10.'
      },
      steel_wool_fine_grade_0000_pad_unit: {
        name: 'Sufi ya Chuma Laini (Steel Wool Daraja #0000 — Kipimo 1)',
        description:
          'Sufi ya chuma kwa ajili ya kusafisha vyuma na kuwashia moto papo hapo kwa kutumia betri au cheche. Kipimo 1.'
      },
      needle_sewing_heavy_steel_with_thread_10m: {
        name: 'Sindano Ngumu ya Kushonea Turubai na Mita 10 za Uzi wa Poliyesta (Seti 1)',
        description:
          'Seti ya sindano ya chuma cha kaboni na uzi usiooza kwa ajili ya kukarabati viatu, mikoba ya mgongoni na mahema. Seti 1.'
      },
      fishing_kit_line_20m_hooks_5un_weights_5un: {
        name: 'Seti ya Uvuvi wa Dharura (Mshipi 20 m + Ndoano 5 + Mawe ya Risasi 5)',
        description:
          'Vifaa kamili vya uvuvi (SOLAS/NATO) vya kupata protini ya samaki bila kutumia risasi wala nishati. Seti 1.'
      },
      battery_alkaline_lr6_aa_1_5v_unit: {
        name: 'Betri ya Alkali ya LR6 (Ukubwa wa AA, 1.5 V — IEC 60086-2 — Betri 1)',
        description:
          'Betri ya msingi ya 1.5 V (~3.8 Wh) kwa ajili ya tochi, redio na vifaa vya matibabu. Betri 1.'
      },
      battery_alkaline_lr03_aaa_1_5v_unit: {
        name: 'Betri ya Alkali ya LR03 (Ukubwa wa AAA, 1.5 V — IEC 60086-2 — Betri 1)',
        description:
          'Betri ndogo ya 1.5 V (~1.7 Wh) kwa ajili ya tochi za kichwani na vifaa vidogo vya elektroniki. Betri 1.'
      },
      battery_lithium_ion_18650_3_7v_3000mah_unit: {
        name: 'Betri Inayochajiwa ya Lithiamu-Ayoni INR18650 (3.7 V, 3000 mAh — Betri 1)',
        description:
          'Betri ya kuchajiwa tena (IEC 61960-3, ~11.1 Wh) inayoweza kuchajiwa mara 500+ kwa kutumia paneli ya jua ya 5V. Betri 1.'
      },
      flashlight_led_aluminum_aa_compatible_unit: {
        name: 'Tochi ya LED ya Alumini Inayostahimili Maji (Betri ya AA / IPX4 — Kipimo 1)',
        description:
          'Tochi imara ya LED yenye matumizi madogo ya umeme kwa ajili ya usalama wa usiku na huduma za matibabu. Kipimo 1.'
      },
      panel_solar_monocrystalline_usb_5v_10w_unit: {
        name: 'Paneli ya Jua ya Kukunja ya Monocrystalline (USB 5 V / 10 W — Kipimo 1)',
        description:
          'Jenereta ya umeme wa jua ya DC 5V kwa ajili ya kuchaji betri za 18650, redio na tochi bila mafuta. Kipimo 1.'
      },
      radio_transceiver_vhf_uhf_dualband_unit: {
        name: 'Redio ya Mawasiliano ya Pande Mbili ya VHF/UHF (Dual-Band — Kipimo 1)',
        description:
          'Redio ya upepo inayofanya kazi bila minara ya simu wala intaneti kwa ajili ya kuratibu uokoaji na usalama. Kipimo 1.'
      },

      // =========================================================================
      // 8. cat_store_of_value (Items 095 - 100)
      // =========================================================================
      faraday_bag_shielded_rf_emp_medium_unit: {
        name: 'Mfuko wa Kinga ya Mawimbi ya Umeme na Sumaku (Faraday Bag RF / EMP — Kipimo 1)',
        description:
          'Mfuko maalum unaozuia mawimbi ya sumakuumeme (HEMP/CME >85 dB) ili kulinda redio, vidhibiti vya jua na diski za data. Kipimo 1.'
      },
      microsd_flash_storage_64gb_offline_wiki_unit: {
        name: 'Kadi ya Kumbukumbu ya MicroSD 64 GB Yenye Maktaba ya Maarifa Bila Mtandao (Kipimo 1)',
        description:
          'Hifadhi ya kidijitali yenye vitabu vya matibabu, uhandisi, kilimo, dawa na Wikipedia kamili ya kusomwa bila intaneti. Kipimo 1.'
      },
      eyeglasses_reading_convex_diopter_plus_2_0: {
        name: 'Miwani ya Kusomea ya Lenzi ya Polikaboneti (+2.00 Diopta — Kipimo 1)',
        description:
          'Inarejesha uwezo wa kuona karibu kwa ajili ya kushona vidonda, kukarabati saketi za umeme na kusoma miongozo ya dawa. Kipimo 1.'
      },
      seeds_open_pollinated_vegetable_mix_50g: {
        name: 'Mbegu za Mboga na Mazao Zisizobadilishwa Vinasaba (Open-Pollinated Pakiti 50 g)',
        description:
          'Mbegu zenye uwezo wa kuota na kutoa mbegu mpya kila msimu kwa ajili ya uhuru wa chakula wakati wa ujenzi mpya. Pakiti 50 g.'
      },
      silver_bullion_999_fine_1_troy_oz_31_1g: {
        name: 'Fedha Safi ya Uwekezaji (999.0 Fine Silver — Aunsi 1 ya Troy / 31.1 g)',
        description:
          'Sarafu au kipande cha fedha safi (LBMA 999.0, 31.1035 g) kwa ajili ya biashara ya kati wakati wa ujenzi mpya wa uchumi. Kipimo 1.'
      },
      gold_bullion_999_fine_fractional_1g: {
        name: 'Kipande cha Dhahabu Safi (999.0 Fine Gold — Gramu 1)',
        description:
          'Gramu 1 ya dhahabu safi (LBMA 999.0); hifadhi ya juu zaidi ya thamani inayobebeka kwa urahisi katika awamu ya ujenzi mpya. Kipimo 1 (1 g).'
      },

      // =========================================================================
      // 9. cat_essential_services (Items 101 - 128)
      // =========================================================================
      service_trauma_wound_debridement_suturing_proc: {
        name: 'Usafishaji wa Kidonda kwa Upasuaji Mdogo na Kushona (Taratibu 1 ya Kitabibu)',
        description:
          'Utaratibu wa kitabibu (WHO IMEESC) wa kusafisha tishu zilizoharibika, kuzuia damu na kushona kidonda kwa uzi ili kuzuia maambukizi ya sumu kwenye damu (sepsis). Taratibu 1.'
      },
      service_fracture_closed_reduction_splinting_proc: {
        name: 'Urekebishaji wa Mfupa Uliovunjika na Kufunga Banhzi (Taratibu 1 ya Mifupa)',
        description:
          'Utaratibu wa kurudisha mfupa au kiungo kilichoteguka mahali pake na kukifunga ili kuzuia ulemavu wa kudumu (WHO IMEESC). Taratibu 1.'
      },
      service_dental_extraction_infection_drainage_proc: {
        name: 'Ung’oaji wa Jino la Dharura na Utoaji wa Usaha kwenye Fizi (Taratibu 1 ya Meno)',
        description:
          'Matibabu ya dharura ya kung’oa jino lililoharibika na kutoa usaha ili kuzuia maambukizi kusambaa kooni na kwenye damu. Taratibu 1.'
      },
      service_obstetric_delivery_midwifery_care_proc: {
        name: 'Usaidizi wa Kuzalisha Mama Mjamzito na Huduma ya Ukunga (Taratibu 1)',
        description:
          'Huduma ya kitaalamu ya ukunga (WHO IMPAC ISBN 978-92-4-156549-3), udhibiti wa kutokwa na damu baada ya kujifungua na uangalizi wa mtoto mchanga. Taratibu 1.'
      },
      service_clinical_triage_nursing_care_shift_4hr: {
        name: 'Zamu ya Saa 4 ya Uchunguzi wa Wagonjwa na Uuguzi wa Dharura (Zamu 1 ya Saa 4)',
        description:
          'Saa 4 za kazi ya uuguzi, uwekaji wa maji ya mishipa/ORS, ubadilishaji wa bandeji na ufuatiliaji wa wagonjwa mahututi. Zamu 1.'
      },
      service_water_well_pump_filtration_repair_proc: {
        name: 'Ukarabati wa Pampu ya Kisima cha Maji na Mfumo wa Kuchuja (Huduma 1 ya Uhandisi)',
        description:
          'Ukarabati wa pampu za mikono za visima, vali na mifumo ya kuchuja maji ili kurejesha maji safi kwa jamii (Sphere WASH 2.1). Huduma 1.'
      },
      service_sanitation_latrine_vector_control_proc: {
        name: 'Ujenzi wa Choo cha Dharura na Udhibiti wa Wadudu Waenezao Magonjwa (Huduma 1)',
        description:
          'Usanifu na ujenzi wa vyoo salama na mifumo ya kuzuia kuchafuka kwa vyanzo vya maji kwa vinyesi ili kuzuia mlipuko wa kipindupindu. Huduma 1.'
      },
      service_solar_pv_battery_dc_diagnostics_repair_proc: {
        name: 'Uchunguzi na Ukarabati wa Mfumo wa Umeme wa Jua na Betri za DC (Huduma 1)',
        description:
          'Utambuzi wa hitilafu na ukarabati wa paneli za jua, vidhibiti vya chaji na betri za Li-Ion/Asidi ili kurejesha nishati ya DC. Huduma 1.'
      },
      service_generator_internal_combustion_overhaul_proc: {
        name: 'Ukarabati wa Injini Ndogo ya Mafuta au Jenereta (Huduma 1 ya Kimitambo)',
        description:
          'Usafishaji wa kabureta, mfumo wa cheche na ukarabati wa jenereta, pampu za maji za injini au pikipiki za mizigo. Huduma 1.'
      },
      service_radio_vhf_uhf_antenna_calibration_repair_proc: {
        name: 'Ukarabati wa Redio za VHF/UHF na Urekebishaji wa Antena (SWR) (Huduma 1)',
        description:
          'Upimaji wa masafa, uundaji wa antena za dipoli na urekebishaji wa SWR ili kuwezesha mawasiliano ya dharura bila minara. Huduma 1.'
      },
      service_metallurgy_blade_tool_forging_sharpening_proc: {
        name: 'Uhunzi wa Vyuma, Ufuaji wa Zana na Uezekaji wa Makali (Huduma 1 ya Uhunzi)',
        description:
          'Kazi ya uhunzi na matibabu ya joto ya kurejesha visu, mashoka, majembe na vipuri vya chuma cha kaboni. Huduma 1.'
      },
      service_mechanical_bicycle_cart_drivetrain_repair_proc: {
        name: 'Ukarabati wa Baiskeli ya Mizigo na Mkokoteni wa Magurudumu (Huduma 1)',
        description:
          'Urekebishaji wa magurudumu, mnyororo, breki na beringi za baiskeli na mikokoteni inayotumika kusafirisha maji na chakula bila mafuta. Huduma 1.'
      },
      service_shelter_roofing_structural_carpentry_proc: {
        name: 'Useremala wa Ujenzi na Ukarabati wa Paa Lisilopitisha Mvua (Huduma 1)',
        description:
          'Uimarishaji wa kuta na mihimili ya mbao pamoja na kuziba paa na kuweka mfumo wa kukinga maji ya mvua. Huduma 1.'
      },
      service_masonry_thermal_stove_chimney_build_proc: {
        name: 'Ujenzi wa Jiko Banifu la Kuni (Rocket Stove) na Bomba la Moshi (Huduma 1)',
        description:
          'Ujenzi wa jiko la matofali au chuma linalopunguza matumizi ya kuni kwa 50–70% na kutoa moshi nje ya makazi. Huduma 1.'
      },
      service_footwear_cobbling_heavy_textile_repair_proc: {
        name: 'Ushonaji na Ukarabati wa Viatu Ngumu, Mabuti na Mikoba ya Mzigo (Huduma 1)',
        description:
          'Kushona soli za viatu na kukarabati mikoba ya kubebea mizigo na mahema ili kuzuia majeraha ya miguu wakati wa kutembea. Huduma 1.'
      },
      service_veterinary_livestock_obstetrics_wound_proc: {
        name: 'Matibabu ya Mifugo, Majeraha na Usaidizi wa Kuzalisha Wanyama (Huduma 1 ya Mifugo)',
        description:
          'Huduma ya daktari wa mifugo (FAO) ya kutibu majeraha, maambukizi na kusaidia wanyama wa kazi au wa maziwa kuzaa salama. Huduma 1.'
      },
      service_agrarian_crop_grafting_seed_preservation_proc: {
        name: 'Uoteshaji wa Miche ya Matunda (Grafting) na Uhifadhi wa Mbegu za Kilimo (Huduma 1)',
        description:
          'Huduma ya kitaalamu ya kilimo ya kuunganisha miche ya miti ya matunda na kuchagua/kukausha mbegu kwa ajili ya msimu ujao. Huduma 1.'
      },
      service_food_preservation_smoking_fermentation_batch: {
        name: 'Ukaushaji wa Nyama na Samaki kwa Moshi na Chumvi (Kundi 1 la Kilo 10–20)',
        description:
          'Uchakataji wa nyama au samaki wabichi kwa chumvi na moshi ili waweze kuhifadhiwa kwa miezi mingi bila umeme. Huduma 1.'
      },
      service_security_perimeter_watch_patrol_shift_4hr: {
        name: 'Zamu ya Saa 4 ya Ulinzi wa Eneo na Doria ya Tahadhari (Zamu 1 ya Saa 4)',
        description:
          'Saa 4 za ulinzi wa ghala la chakula, kituo cha tiba au makazi ili kuwalinda wakazi wakati wa kupumzika. Zamu 1.'
      },
      service_logistics_heavy_cargo_portage_5km_25kg: {
        name: 'Usafirishaji wa Mzigo wa Kilo 25 kwa Kilomita 5 Kwenye Njia Ngumu (Safari 1)',
        description:
          'Usafirishaji wa maji, chakula au wagonjwa (kg 25 kwa km 5) katika maeneo yasiyopitika kwa magari (ISO 8996). Safari 1.'
      },
      service_it_mesh_network_intranet_deployment_proc: {
        name: 'Ufungaji wa Mtandao wa Ndani Bila Intaneti (WLAN/LoRa Mesh) na Maktaba ya Kidijitali (Huduma 1)',
        description:
          'Usanidi wa mtandao wa mawasiliano wa ndani (IEEE 802.11s / LoRa) unaosambaza vitabu vya matibabu, ramani na ujumbe bila intaneti. Huduma 1.'
      },
      service_it_data_recovery_extraction_proc: {
        name: 'Uokoaji wa Data za Kiufundi na Kitabibu Kutoka Kwenye Vifaa Vilivyoharibika (Taratibu 1)',
        description:
          'Utoaji wa faili muhimu za matibabu, uhandisi na ramani kutoka kwenye diski, simu au kompyuta zilizokufa (ISO/IEC 27037). Taratibu 1.'
      },
      service_it_pcb_microsoldering_salvage_proc: {
        name: 'Uchomeleaji Mdogo wa Saketi za Elektroniki (PCB Microsoldering) na Uokoaji wa Vipuri (Taratibu 1)',
        description:
          'Ukarabati wa bodi za elektroniki (IPC-7711/7721) kwa kubadilisha vipuri (capacitors, MOSFETs, IC) kwenye redio, vigeuzi vya jua na vifaa vya tiba. Taratibu 1.'
      },
      service_it_microcontroller_low_power_automation_proc: {
        name: 'Uundaji wa Mfumo Otomatiki wa Kudhibiti Pampu za Maji na Chaji ya Betri (Taratibu 1)',
        description:
          'Upangaji wa saketi za vidhibiti vidogo (IEC 61131-3) vya kuwasha na kuzima pampu za visima, umwagiliaji na ulinzi kwa kutumia umeme kidogo wa DC. Taratibu 1.'
      },
      service_instruction_technical_literacy_class: {
        name: 'Somo la Kusoma na Kuelewa Miongozo ya Dawa, Dozi na Usafishaji wa Maji (Kipindi 1)',
        description:
          'Mafunzo ya vitendo (UNESCO ISCED) ya kusoma vipimo vya dawa (mg/kg), uandaaji wa ORS na utumiaji salama wa klorini. Kipindi 1.'
      },
      service_instruction_applied_mathematics_proc: {
        name: 'Somo la Hisabati ya Vitendo, Jiometri ya Ujenzi na Mahesabu ya Mbadilishano (Kipindi 1)',
        description:
          'Mafunzo ya kukokotoa ujazo wa matanki ya maji, vipimo vya ujenzi, umeme wa jua (Wh/Ah) na uwiano wa BarterScore bila kompyuta. Kipindi 1.'
      },
      service_instruction_combat_medicine_triage_class: {
        name: 'Mafunzo ya Huduma ya Kwanza ya Dharura, Kufunga Damu na Usafi wa Maji (Warsha 1)',
        description:
          'Mafunzo ya vitendo (WHO/ICRC BEC) ya kutumia tourniquet kuzuia damu, kushughulikia majeraha na kuzuia maambukizi katika jamii. Warsha 1.'
      },
      service_instruction_technical_translation_proc: {
        name: 'Tafsiri ya Kitaalamu ya Miongozo ya Dawa, Uhandisi na Vifaa (Taratibu 1)',
        description:
          'Tafsiri sahihi ya maelekezo ya dawa za kigeni, michoro ya saketi za umeme na miongozo ya ukarabati (ISO 17100). Taratibu 1.'
      }
    }
  };

  return Object.freeze(SW_KE_LOCALE);
});
