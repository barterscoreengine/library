/**
 * @fileoverview BarterScore Engine - Spanish (Spain / International) Technical Localization (es-ES)
 * @license Apache-2.0
 * @version 1.1.0
 *
 * Terminología técnica comercial, alimentaria y farmacéutica regulada conforme a:
 * - Denominación Oficial Española (DOE / AEMPS), Real Farmacopea Española y DCI (OMS)
 * - Código Alimentario Español (CAE) y Codex Alimentarius (FAO/OMS)
 * - Normas UNE-EN / IEC para baterías, equipos de protección individual (FFP2) y herramientas
 *
 * Compatible with offline local file:// protocol (window.BarterCore.Locales['es-ES']),
 * CommonJS (Node.js), and ES Module environments.
 */

(function (root, factory) {
  'use strict';

  var localeEsES = factory();

  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.Locales = root.BarterCore.Locales || {};
    root.BarterCore.Locales['es-ES'] = localeEsES;

    if (
      root.BarterCore.BarterEngine &&
      typeof root.BarterCore.BarterEngine.registerLocale === 'function'
    ) {
      root.BarterCore.BarterEngine.registerLocale('es-ES', localeEsES);
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = localeEsES;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var ES_ES_DICTIONARY = {
    meta: {
      code: 'es-ES',
      name: 'Spanish (Spain / International)',
      native_name: 'Español (España / Internacional)',
      direction: 'ltr',
      standard: 'DOE-AEMPS / Real Farmacopea Española / CAE-Codex / UNE-EN-IEC'
    },

    categories: {
      cat_staple_foods: {
        name: 'Alimentos Calóricos Básicos y Proteínas',
        description: 'Cereales secos, legumbres, harinas, lípidos de cocción y conservas proteicas de larga duración.'
      },
      cat_critical_nutrition: {
        name: 'Nutrición Crítica y Soporte Clínico',
        description: 'Raciones compactadas de emergencia, preparado para lactantes de inicio y concentrados proteicos.'
      },
      cat_spices_morale: {
        name: 'Electrolitos, Condimentos y Confort Psicológico',
        description: 'Cloruro sódico yodado, conservantes culinarios, estimulantes xantínicos (cafeína/teobromina) y bienes de moral.'
      },
      cat_pharma_essential: {
        name: 'Medicamentos Esenciales (DOE / AEMPS / OMS)',
        description: 'Antimicrobianos sistémicos, analgésicos, antipiréticos, antiinflamatorios, antidiarreicos y rehidratación oral.'
      },
      cat_trauma_hygiene: {
        name: 'Atención al Trauma, Antisepsia e Higiene',
        description: 'Control de hemorragias arteriales, apósitos estériles, biocidas tópicos, protección EPI (FFP2/Nitrilo) y saneamiento.'
      },
      cat_water_fire_shelter: {
        name: 'Potabilización de Agua, Ignición y Abrigo Térmico',
        description: 'Desinfección microbiológica del agua, ignición pirofórica/butano, combustible sólido y protección frente a hipotermia.'
      },
      cat_tools_energy_comms: {
        name: 'Herramientas de Campo, Energía Autónoma y Radio',
        description: 'Cuchillería en acero al carbono, multiherramientas, cordaje estructural, pilas IEC/Li-Ion, energía solar y radio VHF/UHF.'
      },
      cat_store_of_value: {
        name: 'Reserva de Valor, Metales Preciosos y Archivo Técnico',
        description: 'Metales preciosos fraccionados (.999), semillas de polinización abierta, óptica de lectura y blindaje electromagnético.'
      },
      cat_essential_services: {
        name: 'Servicios Humanos Esenciales, Procedimientos Clínicos y Mano de Obra Técnica',
        description: 'Procedimientos estandarizados de cirugía de trauma, odontología, obstetricia, saneamiento WASH, energía solar, informática aislada, microelectrónica, metalurgia, veterinaria, instrucción técnica y logística.'
      }
    },

    scenarios: {
      acute_collapse: {
        name: 'Colapso Civil Agudo (Fase de Supervivencia Inmediata)',
        description: 'Ruptura crítica de suministros: agua potable, control de hemorragias, antibióticos y calorías listas alcanzan valor máximo; los metales preciosos caen a 0,01x.'
      },
      economic_reconstruction: {
        name: 'Reconstrucción Económica y Recuperación Agraria',
        description: 'Intercambio poscrisis estabilizado: herramientas duraderas, semillas no híbridas, energía solar/radio y metales preciosos (5,0x) lideran la paridad.'
      },
      baseline: {
        name: 'Línea Base Física Pura (MEC 1,0x)',
        description: 'Puntuación física y nutricional intrínseca (ScoreBase) sin multiplicadores externos de escenario de crisis.'
      }
    },

    ui: {
      app_title: 'BarterScore Engine — Evaluador de Trueque y Generador de Manual de Campo',
      app_subtitle: 'Referencia Determinista de Valor Físico y Calculadora de Intercambio Offline (Apache 2.0)',
      validator_status_ok: 'Auditoría del Validator: 100% Validado',
      validator_status_error: 'Auditoría del Validator: Errores de Esquema Detectados',
      validator_items_loaded: 'Artículos Estandarizados Cargados',
      validator_warnings: 'Advertencias',
      validator_errors: 'Errores',
      label_language: 'Idioma de la Interfaz y Catálogo (BCP 47)',
      label_language_hint: 'Cadena de Respaldo: Idioma Seleccionado → en-US → ID Técnico',
      label_scenario: 'Escenario de Crisis (Modificador MEC)',
      btn_print_manual: 'Imprimir Manual Físico',
      sim_title: 'Simulador Bilateral de Trueque y Divisibilidad',
      sim_subtitle: 'Calcula paridad exacta, depreciación por vida útil restante en tiempo real y alertas de indivisibilidad/cambio.',
      sim_offer_header: 'Artículo Ofrecido (Su Inventario)',
      sim_request_header: 'Artículo Solicitado (Contraparte)',
      sim_select_item: 'Seleccione el Artículo Estandarizado',
      sim_quantity: 'Cantidad Ofrecida (Unidades Atómicas)',
      sim_lifecycle_remaining: 'Vida Útil Restante Real (Días)',
      sim_lifecycle_nominal_hint: 'Vida útil nominal sellado:',
      sim_service_durability_label: 'Durabilidad / Cobertura del Servicio (Días)',
      sim_service_durability_hint: 'Durabilidad nominal del servicio (mantenga el valor estándar para servicio completo; reduzca solo si es provisional/paliativo):',
      sim_unit_days: 'días',
      sim_hint_unit_value: 'Valor Unitario Actual:',
      sim_hint_depreciation: 'Pérdida por caducidad:',
      sim_hint_service_depreciation: 'Reducción por servicio paliativo:',
      sim_summary_title: 'Resumen Directo de Liquidación del Intercambio',
      sim_summary_deliver: 'Usted Entrega (Su Oferta):',
      sim_summary_receive: 'Usted Recibe (Liquidación Recomendada):',
      sim_result_header: 'Paridad Matemática y Liquidación del Intercambio',
      sim_exchange_rate: 'Paridad Unitaria (1 Ofrecido : X Solicitado)',
      sim_offer_total_score: 'Valor Total de Su Oferta (Usted Entrega)',
      sim_request_unit_score: 'Valor de 1 Unidad (Artículo Solicitado)',
      sim_exact_quantity: 'Cant. Exacta a Recibir (Artículo Solicitado)',
      sim_recommended_quantity: 'Cant. Recomendada a Recibir (Artículo Solicitado)',
      sim_sub_units_equivalent: 'Total Fraccionado a Recibir (Artículo Solicitado)',
      sim_imbalance_balanced: 'Intercambio Equilibrado: Sin pérdida por indivisibilidad.',
      sim_imbalance_surplus: 'USTED DEBE CAMBIO A LA CONTRAPARTE (Usted Recibe Más Valor por Indivisibilidad)',
      sim_imbalance_deficit: 'LA CONTRAPARTE LE DEBE CAMBIO A USTED (Usted Entrega Más Valor por Indivisibilidad)',
      sim_msg_balanced: 'Intercambio matemáticamente equilibrado: recibir {rec} un ({sub} {measure}) de "{item}" equivale al valor de su oferta sin pérdida por indivisibilidad.',
      sim_msg_surplus_indivisible: 'El artículo solicitado "{item}" es indivisible ({req_unit_pts} pts/un) y vale más que su oferta actual ({offer_pts} pts; se necesitarían {needed_offer} un de su oferta para cubrir 1 unidad entera sin cambio). Redondear de {exact} un a {rec} unidad(es) entera(s) genera una diferencia de +{pct}% ({delta} pts por encima de su oferta). Para recibir {rec} un ahora, USTED debe {delta} pts de cambio a la contraparte (o aumente la cantidad de su oferta).',
      sim_msg_deficit_indivisible: 'El artículo solicitado "{item}" es indivisible ({req_unit_pts} pts/un). Su oferta ({offer_pts} pts) vale más que la(s) {rec} unidad(es) entera(s) recibida(s) ({req_total_pts} pts). Redondear de {exact} un a {rec} unidad(es) entera(s) deja un saldo a su favor de -{pct}% ({delta} pts). LA CONTRAPARTE le debe {delta} pts de cambio a usted.',
      sim_msg_sub_unit_rounding: 'El fraccionamiento de "{item}" en {sub} {measure} ({rec} un) introduce una mínima diferencia de redondeo de {sign}{pct}% ({delta} pts).',
      sim_change_suggestion: 'Opciones Inmediatas de Cambio (Elija 1 opción abajo para liquidar {delta} pts):',
      sim_change_suggestion_you_pay: 'Cambio que USTED Debe Entregar a la Contraparte (Elija 1 opción abajo para pagar {delta} pts):',
      sim_change_suggestion_counterparty_pays: 'Cambio que la CONTRAPARTE Debe Entregarle a USTED (Elija 1 opción abajo para recibir {delta} pts):',
      sim_change_all_toggle: 'Ver todas las {count} opciones de cambio físicamente viables en el catálogo ({div} divisibles en g/ml/un + {indiv} unidades enteras menores)',
      table_title: 'Tabla General de Cotizaciones del Catálogo de Referencia (128 Artículos)',
      table_search_placeholder: 'Filtrar por denominación técnica/DOE, ID semántico o etiqueta funcional...',
      table_filter_all_categories: 'Las 9 Categorías Oficiales',
      col_item: 'Especificación Técnica y Denominación Comercial/DOE',
      col_unit: 'Unidad Atómica y Divisibilidad',
      col_energy: 'Energía / EEB (E)',
      col_mass_vol: 'Masa / Vol (P / Vol)',
      col_lifecycle: 'Vida Útil / Durabilidad (V)',
      col_in: 'Índ. Nutr. (IN)',
      col_base_score: 'Score Base',
      col_mec: 'Contexto (MEC)',
      col_final_score: 'Score Final',
      col_score_baseline: '1. Base Pura (1,0x)',
      col_score_acute: '2. Colapso Agudo',
      col_score_recon: '3. Reconstrucción',
      unit_divisible: 'Divisible',
      unit_indivisible: 'Indivisible',
      unit_food: 'Alimento Calórico',
      unit_non_food: 'Utilidad / No Alimento',
      print_header_note: 'MANUAL FÍSICO DE COTIZACIÓN DE TRUEQUE OFFLINE (CON LOS 3 ESCENARIOS DE CRISIS) — GENERADO POR BARTERSCORE ENGINE v1.1.0',
      print_guide_title: 'MANUAL DE CAMPO ANALÓGICO COMPLETO (OPERACIÓN EN APAGÓN TOTAL) Y TABLA DE CAMBIO FRACCIONARIO',
      print_step1_title: '1. Calcule Su Crédito (Puntos que Usted Entrega)',
      print_step1_body: 'Localice el artículo ofrecido y elija la columna del escenario activo (Col 8 Base Pura 1,0x, Col 9 Colapso Agudo o Col 10 Reconstrucción). Multiplique su Score por la cantidad entregada (o la tasa 1 g / 1 ml por el peso/volumen).',
      print_step2_title: '2. Calcule la Cantidad Exacta a Recibir',
      print_step2_body: 'Con una regla en la misma columna de escenario, lea el Score del artículo deseado. Divida sus Puntos Totales entre el Score del artículo solicitado (Sus Puntos ÷ Score Solicitado).',
      print_step3_title: '3. Liquide el Cambio de Indivisibles (Subunidades)',
      print_step3_body: 'En artículos indivisibles, reste los puntos de las unidades enteras (Puntos de Cambio = Sus Puntos − Puntos Recibidos) y liquide el resto con la Tabla Rápida de Cambio abajo o cualquier artículo divisible (tasa 1 g / 1 ml).',
      print_step4_title: '4. Ajuste Manual por Caducidad Próxima (Regla de Bolsillo)',
      print_step4_body: 'Si el artículo está próximo a caducar en papel: >90 días = 100% del score; 31–90 días = 75% (−25%); 8–30 días = 50% (reduzca el valor a la mitad); 1–7 días = 25% (−75%); 0 días (caducado) = 0 pts.',
      print_scenarios_box_title: 'Cómo Usar las 3 Columnas de Escenario en Paralelo (Columnas 8, 9 y 10)',
      print_scenarios_box_body: '• Col 8 — Línea Base Pura (MEC 1,0x): Valor físico y nutricional intrínseco (ScoreBase) sin multiplicadores externos. • Col 9 — Colapso Civil Agudo: Fase de supervivencia inmediata; agua/potabilización (hasta 4,32x), antibióticos, control de hemorragias y raciones listas alcanzan su máximo, mientras el oro/plata caen a 0,01x. • Col 10 — Reconstrucción Económica: Recuperación poscrisis; herramientas de acero, semillas no híbridas, energía solar/radio y metales preciosos (5,00x) lideran la paridad.',
      print_example_box_title: 'Ejemplo Práctico Resuelto Paso a Paso (Columna Colapso Agudo — 0% de Pérdida)',
      print_example_box_body: 'Trueque de 50 paquetes de Leche Entera en Polvo (400 g) por Alicate Multiherramienta Plegable en Acero Inox (1 un, Indivisible): 1) Su Crédito: 50 × {milk_pts} pts = {milk_total} pts. 2) Score del Alicate: {pliers_pts} pts/un. 3) División: {milk_total} ÷ {pliers_pts} = {pliers_exact} un → Reciba 2 Alicates enteros ({pliers_two} pts). 4) Cambio a Su Favor: {milk_total} − {pliers_two} = {change_pts} pts → Divida entre la tasa de Sal Yodada ({salt_rate} pts/g) = {salt_g} g de Sal Refinada Yodada (o {sugar_g} g de Azúcar Cristal a {sugar_rate} pts/g).',
      print_expiry_box_title: 'Protocolos de Depreciación Manual de Vida Útil (Papel y Calculadora de Bolsillo)',
      print_expiry_box_body: '• Protocolo A (Caducidad Próxima): >90d = 100%; 31–90d = 75% (−1/4); 8–30d = 50% (Mitad de Valor); 1–7d = 25% (1/4 de Valor); 0d/Caducado = 0 pts (Rechazar). • Protocolo B (Proporcional para Larga Duración >90d): 50% de vida útil de fábrica restante ≈ −10% en el score; 25% restante ≈ −20% (aproxima log10(V_rest+1) ÷ log10(V_nom+1)). • Servicios Esenciales (101–128): V es la durabilidad del servicio; use siempre el 100% (1,0x) del score impreso para servicios completos.',
      print_checklist_box_title: 'Lista de Verificación para Puestos de Trueque y Kit Analógico de Apagón',
      print_checklist_box_body: '• Kit Analógico Requerido: Tabla A4 Horizontal impresa, Regla recta, Calculadora de bolsillo (o lápiz/papel) y Báscula de 1 g / Probeta de 1 ml. • Reglas de Seguridad: 1) Rechace envases al vacío perforados, latas abombadas/oxidadas o blísteres rotos (0 pts); 2) Confirme que ambas partes leen la misma columna de escenario; 3) Aplique el descuento del 50% (<30 días) antes de multiplicar la cantidad; 4) Liquide siempre los restos indivisibles en g/ml/un.',
      print_change_table_title: 'Tabla Lista de Consulta Rápida de Cambio en Gramos / mL / Unidades — Los 3 Escenarios de Crisis (Col 8 Base | Col 9 Colapso | Col 10 Reconstrucción)'
    },

    items: {
      // 1. cat_staple_foods (20)
      rice_white_polished_raw_1000g: {
        name: 'Arroz Blanco Pulido de Grano Largo, Crudo (Paquete 1000 g)',
        description: 'Grano de Oryza sativa elaborado con bajo contenido lipídico para almacenamiento prolongado; requiere cocción en agua.'
      },
      beans_common_dry_1000g: {
        name: 'Alubias / Frijoles Secos Comunes (Phaseolus vulgaris), Crudos (Paquete 1000 g)',
        description: 'Legumbre seca rica en proteínas vegetales, fibra dietética, potasio y hierro no hemo.'
      },
      lentils_dry_raw_500g: {
        name: 'Lentejas Secas Enteras (Lens culinaris), Crudas (Paquete 500 g)',
        description: 'Legumbre seca de cocción rápida sin necesidad de remojo previo, con bajo consumo de combustible.'
      },
      chickpeas_dry_raw_500g: {
        name: 'Garbanzos Secos Enteros (Cicer arietinum), Crudos (Paquete 500 g)',
        description: 'Legumbre de elevada densidad calórica, rica en proteínas, ácidos grasos insaturados y minerales.'
      },
      pasta_wheat_dry_500g: {
        name: 'Pasta Alimenticia Seca de Sémola de Trigo Duro (Paquete 500 g)',
        description: 'Pasta deshidratada de rápida cocción y alta aceptabilidad calórica.'
      },
      flour_cassava_dry_1000g: {
        name: 'Harina de Mandioca / Yuca Tostada Seca (Paquete 1000 g)',
        description: 'Harina de raíz de Manihot esculenta pretostada; apta para consumo directo sin agua ni fuego.'
      },
      flour_wheat_enriched_1000g: {
        name: 'Harina de Trigo Panificable Enriquecida con Hierro y Ácido Fólico (Paquete 1000 g)',
        description: 'Harina refinada de Triticum aestivum fortificada para elaboración de panes planos y masas.'
      },
      cornmeal_flaked_dry_500g: {
        name: 'Harina de Maíz Precocida en Copos (Paquete 500 g)',
        description: 'Maíz desgerminado y laminado de rápida hidratación y cocción al vapor con mínimo gasto energético.'
      },
      oats_rolled_whole_500g: {
        name: 'Copos de Avena Integral (Avena sativa) (Paquete 500 g)',
        description: 'Cereal integral rico en betaglucanos y proteínas; apto para consumo por hidratación en frío.'
      },
      milk_powder_whole_400g: {
        name: 'Leche Entera de Vaca en Polvo Instantánea (Lata o Bolsa 400 g)',
        description: 'Leche deshidratada rica en proteínas completas, grasa láctea, calcio biodisponible y vitaminas A y D.'
      },
      oil_vegetable_refined_900ml: {
        name: 'Aceite Vegetal Comestible Refinado (Girasol o Soja) (Botella PET 900 mL)',
        description: 'Fuente lipídica pura de triglicéridos (9 kcal/g) para suplementación calórica y lámparas de mecha.'
      },
      lard_pork_rendered_500g: {
        name: 'Manteca de Cerdo Ibérico/Blanco Fundida Pura (Envase 500 g)',
        description: 'Grasa animal saturada de alta estabilidad frente a la oxidación para fritura, conserva y aporte calórico.'
      },
      fish_sardine_canned_oil_125g: {
        name: 'Sardinas en Conserva en Aceite Vegetal (Lata Abre-Fácil 125 g)',
        description: 'Proteína marina esterilizada lista para su consumo, rica en lípidos omega-3 y calcio en espinas blandas.'
      },
      fish_tuna_canned_solid_170g: {
        name: 'Atún Claro en Conserva en Aceite Vegetal (Lata Hermética 170 g)',
        description: 'Proteína marina magra esterilizada en autoclave de larga vida útil sin refrigeración.'
      },
      meat_bovine_cured_salted_500g: {
        name: 'Carne de Vacuno Curada y Salada Deshidratada (Cecina / Tasajo) (Envase al Vacío 500 g)',
        description: 'Tejido muscular bovino conservado por salazón osmótica, rico en hierro hemo, proteínas y sodio.'
      },
      meat_bovine_canned_cooked_320g: {
        name: 'Carne de Vacuno Cocida en Conserva (Corned Beef) (Lata Hermética 320 g)',
        description: 'Carne bovina esterilizada en lata metálica con alto contenido proteico y graso, lista para consumir.'
      },
      peanut_paste_roasted_500g: {
        name: 'Crema / Pasta de Cacahuete Tostado 100% Sin Azúcar Añadido (Tarro 500 g)',
        description: 'Ración hipercalórica de lípidos y proteínas vegetales lista para consumo inmediato sin cocción.'
      },
      honey_bee_pure_500g: {
        name: 'Miel Pura de Abeja (Apis mellifera) (Tarro Sellado 500 g)',
        description: 'Azúcares naturales invertidos de mínima actividad de agua, conservación indefinida y uso antiséptico tópico.'
      },
      biscuit_wheat_salted_dry_400g: {
        name: 'Galletas Saladas Secas de Trigo Tipo Cracker / Galleta Marinera (Paquete 400 g)',
        description: 'Ración seca de trigo horneado de baja humedad para consumo directo en marcha.'
      },
      water_potable_sealed_1000ml: {
        name: 'Agua Mineral Natural Potable Sin Gas Precintada (Botella PET 1000 mL)',
        description: 'Agua microbiológicamente segura para hidratación inmediata y reconstitución de preparados farmacológicos.'
      },

      // 2. cat_critical_nutrition (5)
      infant_formula_powder_stage1_400g: {
        name: 'Preparado para Lactantes en Polvo — Etapa 1 (0 a 6 Meses) (Lata Hermética 400 g)',
        description: 'Nutrición infantil completa conforme al Codex STAN 72 con equilibrio suero/caseína, hierro y vitamina C.'
      },
      ration_emergency_compressed_500g: {
        name: 'Ración Alimentaria Compactada de Emergencia (Norma Marítima SOLAS) (Bloque al Vacío 500 g)',
        description: 'Bloque calórico horneado enriquecido con vitaminas, formulado para no inducir sed.'
      },
      protein_whey_concentrate_powder_100g: {
        name: 'Concentrado de Proteína de Suero Lácteo (Whey Protein 80%) en Polvo (Sobre 100 g)',
        description: 'Fuente de aminoácidos esenciales de alto valor biológico para recuperación traumática y estados catabólicos.'
      },
      coconut_milk_powder_200g: {
        name: 'Leche de Coco Deshidratada en Polvo Soluble (Envase 200 g)',
        description: 'Fuente concentrada de triglicéridos de cadena media (MCT) de rápida absorción energética.'
      },
      gelatin_unflavored_powder_50g: {
        name: 'Gelatina Neutra en Polvo Sin Sabor (Colágeno Hidrolizado Puro) (Sobre 50 g)',
        description: 'Proteína estructural pura de larga conservación y agente gelificante.'
      },

      // 3. cat_spices_morale (15)
      salt_sodium_chloride_iodized_1000g: {
        name: 'Sal Comestible Fina Yodada (Cloruro Sódico + Yodato Potásico) (Paquete 1000 g)',
        description: 'Electrolito fisiológico esencial, conservante para salazón de carnes/pescados y base de rehidratación oral.'
      },
      sugar_sucrose_crystal_1000g: {
        name: 'Azúcar Blanco Granulado Refinado (Sacarosa) (Paquete 1000 g)',
        description: 'Fuente glucémica rápida, conservante osmótico y sustrato de cotransporte sodio-glucosa en suero oral.'
      },
      coffee_roasted_ground_vacuum_500g: {
        name: 'Café Tostado Natural Molido Envasado al Vacío (Paquete Ladrillo 500 g)',
        description: 'Estimulante del sistema nervioso central (cafeína) de altísima liquidez en intercambios.'
      },
      coffee_instant_soluble_granules_50g: {
        name: 'Café Soluble Instantáneo Liofilizado / Granulado (Frasco o Sobre 50 g)',
        description: 'Disolución instantánea en agua fría o caliente; máximo valor psicológico por gramo de peso.'
      },
      tomato_paste_concentrated_300g: {
        name: 'Concentrado Doble de Tomate (28–30% Extracto Seco) (Lata 300 g)',
        description: 'Base culinaria ácida rica en licopeno, potasio y vitamina C para mejorar la palatabilidad de cereales.'
      },
      broth_bouillon_dehydrated_cube_10g: {
        name: 'Pastilla de Caldo Deshidratado Prensado (Carne/Ave/Verduras) (1 Pastilla de 10 g)',
        description: 'Aporte concentrado de sodio, lípidos y umami que convierte agua hervida y arroz en sopa reconfortante.'
      },
      vinegar_acetic_acid_4pct_750ml: {
        name: 'Vinagre Blanco Destilado (4% Ácido Acético) (Botella 750 mL)',
        description: 'Acidificante para encurtidos seguros (prevención de botulismo), desincrustante y antiséptico doméstico.'
      },
      garlic_dehydrated_powder_100g: {
        name: 'Ajo Deshidratado en Polvo Puro (Allium sativum) (Envase 100 g)',
        description: 'Condimento aromático concentrado de larga vida útil para legumbres y carnes curadas.'
      },
      pepper_black_ground_50g: {
        name: 'Pimienta Negra Molida Pura (Piper nigrum) (Sobre Sellado 50 g)',
        description: 'Especia tradicional de alto valor por gramo y potenciador de palatabilidad.'
      },
      sodium_bicarbonate_pure_100g: {
        name: 'Bicarbonato Sódico Puro Grado Farmacéutico/Alimentario (NaHCO3) (Envase 100 g)',
        description: 'Antiácido gástrico, dentífrico alcalino, tampón para solución de rehidratación oral y gasificante.'
      },
      chocolate_dark_cocoa_60pct_100g: {
        name: 'Chocolate Negro Extrafino (Mínimo 60% Cacao) (Tableta 100 g)',
        description: 'Tableta energética rica en manteca de cacao, teobromina y glucosa con buena tolerancia térmica.'
      },
      candy_hard_glucose_unit_5g: {
        name: 'Caramelo Duro de Glucosa / Sacarosa Envuelto Individualmente (1 Unidad de 5 g)',
        description: 'Carbohidrato simple de absorción oral rápida frente a hipoglucemia y unidad fraccionaria de cambio.'
      },
      tea_camellia_sinensis_dry_50g: {
        name: 'Té Negro o Verde Seco en Hebras / Bolsitas (Camellia sinensis) (Envase 50 g)',
        description: 'Infusión estimulante rica en taninos y cafeína que fomenta la ebullición previa del agua.'
      },
      tobacco_cigarette_filtered_unit: {
        name: 'Cigarrillo de Tabaco Rubia/Negro con Filtro (1 Unidad Individual)',
        description: 'Unidad atómica estandarizada de nicotina con liquidez histórica probada como micromoneda en crisis.'
      },
      alcohol_ethanol_potable_40pct_500ml: {
        name: 'Bebida Espirituosa Destilada Potable (Vodka / Aguardiente Neutro 40% vol. Etanol) (Botella 500 mL)',
        description: 'Destilado de alta liquidez comercial apto para extracción de tinturas botánicas, antisepsia y moral.'
      },

      // 4. cat_pharma_essential (15)
      amoxicillin_500mg_capsule: {
        name: 'Amoxicilina Trihidrato 500 mg Cápsula Dura Oral (DOE/AEMPS) (1 Cápsula)',
        description: 'Medicamento Esencial OMS: antibiótico betalactámico de amplio espectro para infecciones respiratorias, ORL y cutáneas.'
      },
      azithromycin_500mg_tablet: {
        name: 'Azitromicina Dihidrato 500 mg Comprimido Recubierto con Película (DOE/AEMPS) (1 Comprimido)',
        description: 'Medicamento Esencial OMS: antibiótico macrólido de pauta corta (dosis diaria única) para infecciones respiratorias y entéricas.'
      },
      ciprofloxacin_500mg_tablet: {
        name: 'Ciprofloxacino Hidrocloruro 500 mg Comprimido Recubierto (DOE/AEMPS) (1 Comprimido)',
        description: 'Medicamento Esencial OMS: bactericida fluoroquinolona para disentería bacteriana grave, infecciones urinarias y Gram-negativos.'
      },
      metronidazole_400mg_tablet: {
        name: 'Metronidazol 400 mg Comprimido Oral (DOE/AEMPS) (1 Comprimido)',
        description: 'Medicamento Esencial OMS: antiprotozoario (giardiasis, amebiasis hídrica) y antibacteriano frente a anaerobios estrictos.'
      },
      paracetamol_500mg_tablet: {
        name: 'Paracetamol 500 mg Comprimido Oral (DOE/AEMPS) (1 Comprimido)',
        description: 'Medicamento Esencial OMS: analgésico y antipirético de primera elección sin riesgo de lesión mucosa gastroduodenal.'
      },
      metamizole_sodium_500mg_tablet: {
        name: 'Metamizol Sódico (Dipirona) 500 mg Comprimido / Cápsula Oral (DOE/AEMPS) (1 Unidad)',
        description: 'Pirazolona analgésica, antipirética y espasmolítica potente para dolor visceral agudo y fiebre refractaria.'
      },
      ibuprofen_400mg_tablet: {
        name: 'Ibuprofeno 400 mg Comprimido Recubierto con Película (DOE/AEMPS) (1 Comprimido)',
        description: 'Medicamento Esencial OMS: antiinflamatorio no esteroideo (AINE) para traumatismos musculoesqueléticos, odontalgia y fiebre.'
      },
      ibuprofen_oral_suspension_50mg_ml_20ml: {
        name: 'Ibuprofeno Suspensión Oral Pediátrica Concentrada 50 mg/mL (Frasco Cuentagotas 20 mL)',
        description: 'Antipirético y antiinflamatorio líquido concentrado para dosificación pediátrica exacta por peso corporal.'
      },
      loperamide_hydrochloride_2mg_tablet: {
        name: 'Loperamida Hidrocloruro 2 mg Comprimido / Cápsula Dura (DOE/AEMPS) (1 Unidad)',
        description: 'Antidiarreico inhibidor de la motilidad intestinal para frenar la deshidratación aguda en diarreas no disentéricas.'
      },
      oral_rehydration_salts_who_sachet_27_9g: {
        name: 'Sales de Rehidratación Oral (Fórmula OMS de Baja Osmolaridad) (Sobre 27,9 g para 1 L)',
        description: 'Fórmula oficial OMS/UNICEF de glucosa y electrolitos (245 mOsm/L) para revertir la deshidratación diarreica aguda.'
      },
      loratadine_10mg_tablet: {
        name: 'Loratadina 10 mg Comprimido Oral Antihistamínico No Sedante (DOE/AEMPS) (1 Comprimido)',
        description: 'Antagonista H1 de segunda generación para rinitis alérgica, urticaria y picaduras sin inducir somnolencia.'
      },
      omeprazole_20mg_capsule: {
        name: 'Omeprazol 20 mg Cápsula Dura Gastrorresistente (DOE/AEMPS) (1 Cápsula)',
        description: 'Inhibidor de la bomba de protones para enfermedad ulcerosa péptica, reflujo y gastroprotección con AINE.'
      },
      potassium_iodide_130mg_tablet: {
        name: 'Yoduro de Potasio (KI) 130 mg Comprimido Ranurado Bloqueador Tiroideo (1 Comprimido)',
        description: 'Contramedida de emergencia radiológica OMS que satura el tiroides impidiendo la captación de yodo radiactivo I-131.'
      },
      ascorbic_acid_500mg_tablet: {
        name: 'Ácido Ascórbico (Vitamina C) 500 mg Comprimido Oral (DOE/AEMPS) (1 Comprimido)',
        description: 'Vitamina hidrosoluble esencial contra el escorbuto, cofactor de síntesis de colágeno cicatricial y absorción de hierro.'
      },
      multivitamin_mineral_complex_tablet: {
        name: 'Complejo Multivitamínico y Mineral Completo Comprimido Recubierto (1 Comprimido)',
        description: 'Profilaxis diaria de micronutrientes esenciales y oligoelementos frente a dietas de supervivencia deficitarias.'
      },

      // 5. cat_trauma_hygiene (15)
      ethanol_antiseptic_70pct_100ml: {
        name: 'Alcohol Etílico 70° Antiséptico para Piel Sana (Solución Tópica 70% v/v) (Frasco 100 mL)',
        description: 'Bactericida y virucida tópico de acción rápida para desinfección cutánea, instrumental y encendido de emergencia.'
      },
      hydrogen_peroxide_3pct_10vol_100ml: {
        name: 'Agua Oxigenada 10 Volúmenes (Peróxido de Hidrógeno 3%) Solución Cutánea (Frasco 100 mL)',
        description: 'Solución oxidante efervescente para arrastre mecánico de detritos en heridas sucias y colutorio diluido.'
      },
      povidone_iodine_10pct_topical_100ml: {
        name: 'Povidona Yodada 10% Solución Cutánea Antiséptica (DOE/AEMPS) (Frasco 100 mL)',
        description: 'Antiséptico yodóforo de amplio espectro frente a bacterias, hongos, virus y esporas para campo quirúrgico y heridas.'
      },
      chlorhexidine_digluconate_2pct_100ml: {
        name: 'Digluconato de Clorhexidina 2% Solución Cutánea Antiséptica (DOE/AEMPS) (Frasco 100 mL)',
        description: 'Antiséptico biguanídico de acción residual prolongada que conserva su actividad antimicrobiana en presencia de sangre.'
      },
      gauze_sterile_compress_7_5cm_unit: {
        name: 'Compresa de Gasa Hidrófila Estéril de Algodón 7,5 x 7,5 cm (1 Sobre Estéril)',
        description: 'Apósito quirúrgico estéril multicapa para taponamiento hemostático, absorción de exudados y cobertura de heridas.'
      },
      tape_medical_waterproof_spool_5m: {
        name: 'Esparadrapo Hipoalergénico Impermeable de Tela 2,5 cm x 5 m (1 Carrete)',
        description: 'Cinta adhesiva quirúrgica de alta fijación para asegurar apósitos, férulas y prevenir ampollas por fricción.'
      },
      bandage_elastic_compression_roll_2m: {
        name: 'Venda Elástica de Compresión y Fijación Crepé 10 cm x 2 m con Ganchos (1 Rollo)',
        description: 'Vendaje reutilizable para compresión hemostática, contención de edemas e inmovilización articular.'
      },
      tourniquet_tactical_arterial_unit: {
        name: 'Torniquete Arterial Táctico de Extremidades con Molinete (Estándar CoTCCC) (1 Unidad)',
        description: 'Dispositivo mecánico vital para la oclusión rápida con una sola mano de hemorragias arteriales masivas.'
      },
      suture_surgical_nylon_3_0_needle_unit: {
        name: 'Sutura Quirúrgica Estéril Monofilamento de Poliamida (Nylon) 3-0 con Aguja Triangular (1 Sobre)',
        description: 'Sutura no reabsorbible de alta resistencia a la tracción lista para el cierre primario de laceraciones profundas.'
      },
      syringe_sterile_5ml_with_needle_unit: {
        name: 'Jeringa Hipodérmica Estéril de 5 mL Cono Luer-Lock con Aguja 21G (1 Blíster Estéril)',
        description: 'Dispositivo estéril para inyección parenteral e irrigación a presión controlada de heridas contaminadas.'
      },
      gloves_nitrile_exam_pair: {
        name: 'Guantes Médicos de Examen de Nitrilo Sin Polvo Ambidiestros (1 Par)',
        description: 'Barrera biológica y química resistente a la perforación para asistencia sanitaria de urgencia.'
      },
      respirator_particulate_n95_pff2_unit: {
        name: 'Mascarilla Autofiltrante para Partículas FFP2 / N95 Sin Válvula (Norma UNE-EN 149) (1 Unidad)',
        description: 'Filtra >=94–95% de aerosoles infecciosos, polvos tóxicos, humo de incendios y cenizas en suspensión.'
      },
      soap_glycerin_neutral_bar_200g: {
        name: 'Pastilla de Jabón Neutro de Glicerina Sin Perfume (Pastilla Sólida 200 g)',
        description: 'Tensioactivo sólido para higiene de manos, lavado perilesional y saneamiento textil frente a transmisión fecal-oral.'
      },
      paper_toilet_cellulose_roll_30m: {
        name: 'Rollo de Papel Higiénico de Celulosa Virgen (1 Rollo Estándar de 30 m)',
        description: 'Consumible básico de saneamiento de alta rotación en trueque y yesca fibrosa seca para encendido.'
      },
      sanitary_pad_absorbent_external_unit: {
        name: 'Compresa Higiénica Absorbente Externa Envasada Individualmente (1 Unidad)',
        description: 'Producto esencial de higiene menstrual que sirve además como apósito compresivo absorbente de emergencia.'
      },

      // 6. cat_water_fire_shelter (10)
      sodium_hypochlorite_2_5pct_1000ml: {
        name: 'Solución de Hipoclorito Sódico al 2,5% de Cloro Activo Apta para Desinfección de Agua (Botella 1000 mL)',
        description: 'Biocida clorado líquido capaz de potabilizar hasta 10.000 litros de agua frente a cólera, tifus y disentería.'
      },
      water_purification_nadcc_tablet_unit: {
        name: 'Comprimido Efervescente Potabilizador de Agua de Dicloroisocianurato Sódico (NaDCC) (1 Comprimido / 1–2 L)',
        description: 'Donador orgánico de cloro recomendado por la OMS que inactiva bacterias, virus y quistes de Giardia.'
      },
      filter_water_hollow_fiber_0_1micron_unit: {
        name: 'Filtro Potabilizador Portátil de Membrana de Fibra Hueca 0,1 Micras Absolutas (1 Unidad)',
        description: 'Microfiltración mecánica retrolavable que elimina el 99,9999% de bacterias y el 99,9% de protozoos sin químicos.'
      },
      lighter_butane_piezo_standard_unit: {
        name: 'Encendedor Presurizado de Gas Isobutano con Ignición por Piedra o Piezoeléctrica (1 Unidad)',
        description: 'Proporciona hasta 3.000 encendidos inmediatos; agotado el gas, su rueda genera chispas para yesca fina.'
      },
      ferrocerium_ignition_rod_8mm_unit: {
        name: 'Barra de Ferrocerio (Pedernal Pirofórico) de 8 mm con Rascador de Acero (1 Unidad)',
        description: 'Aleación de tierras raras y hierro que proyecta chispas a 3.000 °C bajo lluvia o viento (>10.000 usos).'
      },
      matches_waterproof_safety_box_40un: {
        name: 'Cerillas / Fósforos de Seguridad Impermeables y Resistentes al Viento (Caja de 40 Unidades)',
        description: 'Cerillas tratadas con barniz hidrófobo que encienden de forma fiable tras exposición a la humedad.'
      },
      candle_paraffin_solid_white_30g_unit: {
        name: 'Vela Cilíndrica Blanca de Parafina Sólida de Alto Punto de Fusión (1 Unidad de 30 g)',
        description: 'Iluminación de emergencia sin goteo, aporte térmico en microabrigos e impermeabilizante de costuras.'
      },
      fuel_solid_hexamine_tablet_14g_unit: {
        name: 'Pastilla de Combustible Sólido de Hexamina (Hexametilentetramina) Sin Humo (1 Pastilla de 14 g)',
        description: 'Combustible sólido de alta densidad energética que arde sin humo ni licuefacción para hervir 500 mL de agua.'
      },
      blanket_thermal_aluminized_mylar_unit: {
        name: 'Manta Térmica de Emergencia Aluminizada (Polietileno Tereftalato Mylar 210 x 130 cm) (1 Unidad)',
        description: 'Refleja hasta el 90% del calor radiante corporal para prevenir la hipotermia en heridos e intemperie.'
      },
      tarp_polyethylene_waterproof_3x3m_unit: {
        name: 'Toldo / Lona Impermeable de Polietileno Trenzado Reforzado con Ojales Metálicos 3 x 3 m (1 Unidad)',
        description: 'Cubierta rápida de refugio impermeable, barrera contra humedad del suelo y captador de agua de lluvia.'
      },

      // 7. cat_tools_energy_comms (14)
      knife_fixed_blade_carbon_steel_fulltang: {
        name: 'Cuchillo de Monte de Hoja Enteriza (Full-Tang) en Acero al Carbono con Funda (1 Unidad)',
        description: 'Herramienta primaria de supervivencia apta para partir leña (batoning), despiece y percusión de chispas.'
      },
      multitool_pliers_stainless_folding_unit: {
        name: 'Alicate Multiherramienta Plegable en Acero Inoxidable Templado (1 Unidad)',
        description: 'Integra alicates de punta, cortaalambres, hoja, sierra para madera/metal, punzón y destornilladores.'
      },
      saw_wire_stainless_pocket_unit: {
        name: 'Sierra de Cable Trenzado de Acero Inoxidable de Bolsillo con Anillas Giratorias (1 Unidad)',
        description: 'Sierra manual ultraligera para corte rápido de leña, travesaños de refugio, hueso o tubería plástica.'
      },
      tape_cloth_adhesive_waterproof_48mm_10m: {
        name: 'Cinta Americana Adhesiva Impermeable Reforzada con Malla Textil 48 mm x 10 m (1 Rollo)',
        description: 'Cinta estructural de alta tracción recubierta de polietileno para sellado de lonas, calzado y envases.'
      },
      cord_nylon_kernmantle_550lb_10m: {
        name: 'Cuerda Trenzada de Poliamida Kernmantle 550 lb (Paracord Tipo III de 7 Hebras Internas) (Madeja 10 m)',
        description: 'Cordaje táctico imputrescible cuyas 7 hebras interiores pueden extraerse para pesca, sutura de equipo o lazos.'
      },
      steel_wool_fine_grade_0000_pad_unit: {
        name: 'Almohadilla de Lana de Acero al Carbono Extrafina Grado #0000 (1 Unidad)',
        description: 'Yesca metálica que entra en incandescencia inmediata con una pila o chispa de ferrocerio, además de abrasivo fino.'
      },
      needle_sewing_heavy_steel_with_thread_10m: {
        name: 'Aguja de Guarnicionero/Veleiro de Acero Pesado con 10 m de Hilo de Poliéster Encerado (1 Kit)',
        description: 'Kit de reparación estructural para mochilas, lonas, calzado de campaña y prendas de abrigo.'
      },
      fishing_kit_line_20m_hooks_5un_weights_5un: {
        name: 'Kit Compacto de Pesca de Subsistencia (20 m Sedal Monofilamento, 5 Anzuelos, 5 Plomos) (1 Kit)',
        description: 'Sistema pasivo de obtención de proteína acuática con gasto calórico humano mínimo.'
      },
      battery_alkaline_lr6_aa_1_5v_unit: {
        name: 'Pila Alcalina Cilíndrica Primaria Norma IEC LR6 / AA 1,5 V (1 Unidad)',
        description: 'Celda primaria universal con hasta 7 años de vida en almacén para linternas, receptores y equipos médicos.'
      },
      battery_alkaline_lr03_aaa_1_5v_unit: {
        name: 'Pila Alcalina Cilíndrica Primaria Norma IEC LR03 / AAA 1,5 V (1 Unidad)',
        description: 'Celda primaria compacta de 1,5 V para frontales LED, pulsioxímetros y receptores de bolsillo.'
      },
      battery_lithium_ion_18650_3_7v_3000mah_unit: {
        name: 'Batería Recargable de Iones de Litio IEC 18650 3,7 V 3000 mAh con Circuito de Protección (1 Celda)',
        description: 'Acumulador secundario de alta densidad energética (~11,1 Wh) apto para más de 500 ciclos de carga solar.'
      },
      flashlight_led_aluminum_aa_compatible_unit: {
        name: 'Linterna Táctica LED en Aluminio Anodizado Compatible con Pila AA (IEC LR6) (1 Unidad)',
        description: 'Iluminación de estado sólido resistente a impactos y salpicaduras alimentada por una sola pila AA.'
      },
      panel_solar_monocrystalline_usb_5v_10w_unit: {
        name: 'Panel Solar Fotovoltaico Plegable de Silicio Monocristalino 10 W con Salida Regulada USB 5 V (1 Unidad)',
        description: 'Generador autónomo de corriente continua para recargar baterías 18650, linternas y transceptores de radio.'
      },
      radio_transceiver_vhf_uhf_dualband_unit: {
        name: 'Transceptor Portátil de Radio VHF/UHF Doble Banda (136–174 / 400–520 MHz) FM (1 Unidad)',
        description: 'Comunicación táctica punto a punto y recepción de alertas meteorológicas independiente de redes celulares.'
      },

      // 8. cat_store_of_value (6)
      faraday_bag_shielded_rf_emp_medium_unit: {
        name: 'Bolsa Blindada Jaula de Faraday Multicapa contra RF y Pulso Electromagnético (EMP) Tamaño Mediano (1 Unidad)',
        description: 'Atenuación electromagnética (>85 dB) para proteger transceptores, cargadores solares y memorias MicroSD.'
      },
      microsd_flash_storage_64gb_offline_wiki_unit: {
        name: 'Tarjeta de Memoria MicroSDXC 64 GB Industrial con Biblioteca Médica, Agronómica y de Ingeniería Offline (1 Unidad)',
        description: 'Archivo enciclopédico completo sin conexión (manuales clínicos, farmacopea, agricultura, metalurgia y cartografía).'
      },
      eyeglasses_reading_convex_diopter_plus_2_0: {
        name: 'Gafas de Lectura con Lentes Convexas de Policarbonato +2,00 Dioptrías (1 Unidad)',
        description: 'Restaura la agudeza visual cercana para suturas, reparaciones de precisión y lectura; las lentes concentran luz solar.'
      },
      seeds_open_pollinated_vegetable_mix_50g: {
        name: 'Banco de Semillas Hortícolas de Polinización Abierta No Híbridas (Sobre Hermético 50 g)',
        description: 'Semillas fértiles reproducibles (alubia, maíz, calabaza, col, tomate) para soberanía alimentaria multigeneracional.'
      },
      silver_bullion_999_fine_1_troy_oz_31_1g: {
        name: 'Moneda / Lingote de Plata Pura .999 Fine Silver (1 Onza Troy / 31,1035 g)',
        description: 'Activo físico universal de denominación media para comercio en reconstrucción y conservación oligodinámica de agua.'
      },
      gold_bullion_999_fine_fractional_1g: {
        name: 'Lingote Fraccionado de Oro Puro .9999 Fine Gold Certificado (1,0 g)',
        description: 'Reserva patrimonial incorruptible de máxima densidad de valor por miligramo para liquidación de alto nivel.'
      },

      // 9. cat_essential_services (28)
      service_trauma_wound_debridement_suturing_proc: {
        name: 'Desbridamiento Quirúrgico de Herida, Irrigación y Cierre Primario con Sutura (1 Procedimiento)',
        description: 'Limpieza quirúrgica aséptica de tejido desvitalizado, irrigación abundante y sutura primaria por planos (estándar OMS IMEESC).'
      },
      service_fracture_closed_reduction_splinting_proc: {
        name: 'Reducción Cerrada de Fractura / Luxación Ortopédica e Inmovilización con Férula (1 Procedimiento)',
        description: 'Alineación anatómica por tracción manual de fractura cerrada o luxación articular con inmovilización rígida y control neurovascular.'
      },
      service_dental_extraction_infection_drainage_proc: {
        name: 'Exodoncia de Urgencia (Extracción Dental), Drenaje de Absceso y Control del Dolor (1 Procedimiento)',
        description: 'Extracción dental atraumática con fórceps/botador e incisión-drenaje de absceso odontogénico agudo para prevenir sepsis cervical.'
      },
      service_obstetric_delivery_midwifery_care_proc: {
        name: 'Atención Obstétrica del Parto, Reanimación Neonatal y Control de Hemorragia Posparto (1 Procedimiento)',
        description: 'Asistencia cualificada al parto, manejo activo del alumbramiento, pinzamiento estéril del cordón y reanimación neonatal (OMS IMPAC).'
      },
      service_clinical_triage_nursing_care_shift_4hr: {
        name: 'Guardia de Triaje Clínico, Monitorización de Hidratación SRO/IV y Curas (Turno de 4 Horas)',
        description: 'Turno dedicado de 4 horas de enfermería aguda con control de constantes vitales, pauta de rehidratación y cambio estéril de apósitos.'
      },
      service_water_well_pump_filtration_repair_proc: {
        name: 'Reparación y Mantenimiento de Bomba Manual de Pozo y Sistema de Filtración WASH (1 Procedimiento)',
        description: 'Desmontaje mecánico, sustitución de juntas/válvula de pie, alineación de vástagos y rehabilitación de filtración comunitaria (Sphere WASH).'
      },
      service_sanitation_latrine_vector_control_proc: {
        name: 'Ingeniería de Letrina Sanitaria (Norma Sphere) y Control de Vectores Biológicos (1 Procedimiento)',
        description: 'Excavación dimensionada, sellado de losa con conducto de ventilación antiinsectos, protección freática y desinfección con cal/cloro.'
      },
      service_solar_pv_battery_dc_diagnostics_repair_proc: {
        name: 'Diagnóstico y Reparación de Sistema Solar Fotovoltaico Aislado, Regulador y Banco de Baterías CC (1 Procedimiento)',
        description: 'Aislamiento de fallos con multímetro, reparación de regulador MPPT/PWM, equilibrado de celdas, desulfatación y embarrados CC (IEC 62446).'
      },
      service_generator_internal_combustion_overhaul_proc: {
        name: 'Revisión Mecánica de Motor / Generador de Combustión Interna (Carburador, Magneto y Válvulas) (1 Procedimiento)',
        description: 'Limpieza técnica de carburador/inyector, puesta a punto de encendido por magneto, reglaje de válvulas y estanqueidad de compresión.'
      },
      service_radio_vhf_uhf_antenna_calibration_repair_proc: {
        name: 'Reparación de Transceptor VHF/UHF, Conectorización Coaxial y Ajuste ROE (VSWR) de Antena (1 Procedimiento)',
        description: 'Diagnóstico de etapa de RF, soldadura de conectores coaxiales de baja pérdida y ajuste resonante de antena dipolo/Yagi para ROE < 1,5.'
      },
      service_metallurgy_blade_tool_forging_sharpening_proc: {
        name: 'Forja Metalúrgica, Templado, Afilado de Hojas de Corte y Soldadura/Brasaje Estructural (1 Procedimiento)',
        description: 'Tratamiento térmico de acero al carbono (temple y revenido), vaciado de filo en hachas/cuchillos y unión metálica estructural.'
      },
      service_mechanical_bicycle_cart_drivetrain_repair_proc: {
        name: 'Revisión Mecánica de Transporte de Carga No Motorizado (Bicicleta / Carretilla: Rodamientos, Radios y Transmisión) (1 Procedimiento)',
        description: 'Centrado y tensado de radios de rueda, engrase/sustitución de rodamientos de buje, ajuste de cadena y calibración de frenos.'
      },
      service_shelter_roofing_structural_carpentry_proc: {
        name: 'Carpintería Estructural de Refugio, Estabilización de Cerchas y Sellado Impermeable de Cubierta (1 Procedimiento)',
        description: 'Ensamblaje estructural de entramado de madera, refuerzo de vigas/cabrios e impermeabilización frente a lluvia y viento severo.'
      },
      service_masonry_thermal_stove_chimney_build_proc: {
        name: 'Construcción en Albañilería de Estufa/Horno de Leña de Alta Eficiencia (Rocket Stove) con Chimenea (1 Procedimiento)',
        description: 'Edificación de cámara de combustión aislada y tiro de chimenea que reduce el consumo de leña un 50–70% y elimina el humo interior (ISO 19867).'
      },
      service_footwear_cobbling_heavy_textile_repair_proc: {
        name: 'Reparación de Calzado Pesado (Resuelado de Botas, Costura Guarnicionera) y Mochilas/Lonas (1 Procedimiento)',
        description: 'Costura manual bloqueada con lezna e hilo encerado, fijación de suelas de botas de campaña y refuerzo de correas de carga y lonas.'
      },
      service_veterinary_livestock_obstetrics_wound_proc: {
        name: 'Asistencia Veterinaria a Ganado y Animales de Tiro (Trauma, Obstetricia y Desparasitación) (1 Procedimiento)',
        description: 'Intervención clínica en animales de producción o trabajo incluyendo parto distócico, desbridamiento de pezuñas/heridas y antiparasitarios (FAO).'
      },
      service_agrarian_crop_grafting_seed_preservation_proc: {
        name: 'Injerto Agrícola, Remineralización del Suelo y Selección/Secado Técnico de Semillas No Híbridas (1 Procedimiento)',
        description: 'Injerto de frutales/cultivos perennes, corrección de pH edáfico con ceniza/compost y acondicionado de semillas para vigor germinativo.'
      },
      service_food_preservation_smoking_fermentation_batch: {
        name: 'Servicio de Conservación de Alimentos por Salazón, Ahumado Térmico o Lactofermentación (1 Lote)',
        description: 'Procesamiento técnico por curado osmótico en sal, ahumado controlado en frío/caliente o fermentación láctica anaeróbica de hasta 15 kg.'
      },
      service_security_perimeter_watch_patrol_shift_4hr: {
        name: 'Guardia Táctica de Vigilancia Perimetral, Control de Accesos y Alerta Temprana (Turno de 4 Horas)',
        description: 'Turno disciplinado de 4 horas de observación defensiva diurna/nocturna, patrulla perimetral, control de paso y alerta contra intrusión/incendio.'
      },
      service_logistics_heavy_cargo_portage_5km_25kg: {
        name: 'Porteo Logístico Humano con Bastidor de Carga (25 kg de Suministros Esenciales en 5 km Campo a Través) (1 Viaje)',
        description: 'Transporte terrestre manual seguro de 25 kg de agua, grano o insumos médicos a través de 5 km de terreno abrupto o con escombros (ISO 8996).'
      },
      service_it_mesh_network_intranet_deployment_proc: {
        name: 'Despliegue de Red Local Autónoma (Intranet / WLAN / Malla LoRa) para Acceso Colectivo al Archivo (1 Procedimiento)',
        description: 'Configuración de enrutadores recuperados o nodos LoRa para crear una red local inalámbrica (WLAN) que permita acceder simultáneamente a la tarjeta MicroSD de 64 GB sin internet (IEEE 802.11s).'
      },
      service_it_data_recovery_extraction_proc: {
        name: 'Recuperación Forense de Datos y Extracción de Archivos Técnicos en Dispositivos Dañados/Inoperativos (1 Procedimiento)',
        description: 'Extracción física y lógica de PDFs de ingeniería, esquemas de potabilización, cartografía e historiales clínicos desde discos HDD, SSD y móviles averiados (ISO/IEC 27037).'
      },
      service_it_pcb_microsoldering_salvage_proc: {
        name: 'Microsoldadura en Placas de Circuito Impreso (PCB) y Recuperación de Componentes Electrónicos (1 Procedimiento)',
        description: 'Desoldadura y aprovechamiento de transistores, condensadores, resistencias y diodos de placas base descartadas para reparar transceptores VHF/UHF o reguladores solares (IPC-7711/7721).'
      },
      service_it_microcontroller_low_power_automation_proc: {
        name: 'Programación de Microcontroladores de Bajo Consumo (MCU) para Automatización de Pozos y Riego (1 Procedimiento)',
        description: 'Programación embebida (clase Arduino/ESP32/MCU) e integración de sensores/relés CC para automatizar bombas de pozos artesianos, gestión de baterías o riego agrícola (IEC 61131-3).'
      },
      service_instruction_technical_literacy_class: {
        name: 'Instrucción en Alfabetización Técnica Funcional y Lectura de Manuales Médicos/Ingeniería (1 Módulo / Clase)',
        description: 'Formación estructurada de adultos orientada a leer e interpretar con precisión tablas de posología de antibióticos, esquemas de filtración de agua y archivos offline (UNESCO ISCED).'
      },
      service_instruction_applied_mathematics_proc: {
        name: 'Instrucción en Matemáticas Aplicadas de Campo, Geometría Estructural y Logística de Trueque (1 Módulo / Procedimiento)',
        description: 'Enseñanza práctica de cálculos geométricos para cubiertas y albañilería térmica, conversión de dosis y aritmética de paridad y cambio en la tabla BarterScore (OIT CIUO-08 2320).'
      },
      service_instruction_combat_medicine_triage_class: {
        name: 'Taller Práctico de Supervivencia en Triaje Clínico, Control de Hemorragias y Saneamiento WASH (1 Módulo / Clase)',
        description: 'Entrenamiento práctico para formar nuevos socorristas en triaje clínico, aplicación de torniquete arterial, empaquetamiento de heridas y letrinas seguras (OMS BEC / CICR).'
      },
      service_instruction_technical_translation_proc: {
        name: 'Traducción Técnica Multilingüe y Decodificación de Manuales para Ingeniería Inversa (1 Procedimiento)',
        description: 'Traducción técnica directa y enseñanza terminológica (Inglés, Chino, Español, Portugués) de manuales recuperados, hojas de datos y transceptores de radio (ISO 17100).'
      }
    }
  };

  return Object.freeze(ES_ES_DICTIONARY);
});
