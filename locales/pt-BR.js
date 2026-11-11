/**
 * @fileoverview BarterScore Engine - Portuguese (Brazil) Technical Localization (pt-BR)
 * @license Apache-2.0
 * @version 1.1.0
 *
 * Terminologia técnica comercial, nutricional e farmacêutica oficial do Brasil seguindo:
 * - Denominação Comum Brasileira (DCB / ANVISA) e Farmacopeia Brasileira para fármacos
 * - Tabela Brasileira de Composição de Alimentos (TBCA/USP e TACO/UNICAMP) e padrões MAPA/ANVISA para alimentos
 * - Normas ABNT / IEC para componentes elétricos, EPIs (CA/PFF2) e ferramentas
 *
 * Compatible with offline local file:// protocol (window.BarterCore.Locales['pt-BR']),
 * CommonJS (Node.js), and ES Module environments.
 */

(function (root, factory) {
  'use strict';

  var localePtBR = factory();

  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.Locales = root.BarterCore.Locales || {};
    root.BarterCore.Locales['pt-BR'] = localePtBR;

    if (
      root.BarterCore.BarterEngine &&
      typeof root.BarterCore.BarterEngine.registerLocale === 'function'
    ) {
      root.BarterCore.BarterEngine.registerLocale('pt-BR', localePtBR);
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = localePtBR;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var PT_BR_DICTIONARY = {
    meta: {
      code: 'pt-BR',
      name: 'Portuguese (Brazil)',
      native_name: 'Português (Brasil)',
      direction: 'ltr',
      standard: 'DCB-ANVISA / TBCA-TACO / ABNT-IEC'
    },

    categories: {
      cat_staple_foods: {
        name: 'Alimentos Calóricos de Base e Proteínas',
        description: 'Grãos secos, leguminosas, farinhas, lipídios de cocção e proteínas animais conservadas de longa guarda.'
      },
      cat_critical_nutrition: {
        name: 'Nutrição Crítica e Suporte Clínico',
        description: 'Rações compactadas de emergência, fórmula infantil de partida e matrizes proteicas concentradas.'
      },
      cat_spices_morale: {
        name: 'Eletrólitos, Condimentos e Conforto Psicológico',
        description: 'Cloreto de sódio iodado, conservantes culinários, estimulantes xantínicos (cafeína/teobromina) e itens de moral.'
      },
      cat_pharma_essential: {
        name: 'Fármacos Essenciais (DCB / ANVISA / OMS)',
        description: 'Antimicrobianos sistêmicos, analgésicos, antitérmicos, anti-inflamatórios, antidiarreicos e reposição hidroeletrolítica.'
      },
      cat_trauma_hygiene: {
        name: 'Atendimento a Trauma, Antissepsia e Higiene',
        description: 'Controle de hemorragia arterial, curativos estéreis, biocidas tópicos, barreira biológica (PFF2/Nitrilo) e saneamento.'
      },
      cat_water_fire_shelter: {
        name: 'Potabilização de Água, Ignição e Abrigo Térmico',
        description: 'Desinfecção microbiológica de água, ignição pirofórica/butano, combustível sólido e proteção contra hipotermia.'
      },
      cat_tools_energy_comms: {
        name: 'Ferramentas de Campo, Energia Off-Grid e Rádio',
        description: 'Cutelaria em aço carbono, multiferramentas, cabos estruturais, células IEC/Li-Ion, geração solar e transceptores VHF/UHF.'
      },
      cat_store_of_value: {
        name: 'Reserva de Valor, Metais de Escambo e Acervo Técnico',
        description: 'Metais preciosos fracionados (.999), sementes crioulas de polinização aberta, correção óptica e blindagem eletromagnética.'
      },
      cat_essential_services: {
        name: 'Serviços Humanos Essenciais, Procedimentos Clínicos e Mão de Obra Técnica',
        description: 'Procedimentos padronizados de cirurgia de trauma, odontologia, obstetrícia, saneamento WASH, elétrica solar, TI off-grid, microeletrônica, metalurgia, veterinária, instrução técnica e logística.'
      }
    },

    scenarios: {
      acute_collapse: {
        name: 'Colapso Civil Agudo (Fase de Sobrevivência Imediata)',
        description: 'Ruptura logística severa: água potável, controle de hemorragia, antibióticos e calorias prontas atingem valor máximo; metais preciosos caem para 0,01x.'
      },
      economic_reconstruction: {
        name: 'Reconstrução Econômica e Retomada Agrária',
        description: 'Comércio pós-crise estabilizado: ferramentas duráveis, sementes crioulas, energia solar/rádio e metais preciosos (5,0x) lideram a paridade.'
      },
      baseline: {
        name: 'Linha de Base Física Pura (MEC 1,0x)',
        description: 'Pontuação física e nutricional intrínseca (ScoreBase) sem multiplicadores externos de fase de crise.'
      }
    },

    ui: {
      app_title: 'BarterScore Engine — Avaliador de Escambo e Gerador de Manual de Campo',
      app_subtitle: 'Referência Determinística de Valor Físico e Calculadora de Trocas Offline (Apache 2.0)',
      validator_status_ok: 'Auditoria do Validator: 100% Validado',
      validator_status_error: 'Auditoria do Validator: Erros de Schema Detectados',
      validator_items_loaded: 'Itens Padronizados Carregados',
      validator_warnings: 'Avisos',
      validator_errors: 'Erros',
      label_language: 'Idioma da Interface e Catálogo (BCP 47)',
      label_language_hint: 'Cadeia de Fallback: Idioma Selecionado → en-US → ID Técnico',
      label_scenario: 'Cenário de Crise (Modificador MEC)',
      btn_print_manual: 'Imprimir Manual Físico',
      sim_title: 'Simulador Bilateral de Escambo e Divisibilidade',
      sim_subtitle: 'Calcula paridade exata, depreciação por validade restante em tempo real e alertas de indivisibilidade/troco.',
      sim_offer_header: 'Item Ofertado (Seu Estoque)',
      sim_request_header: 'Item Solicitado (Contraparte)',
      sim_select_item: 'Selecione o Item Padronizado',
      sim_quantity: 'Quantidade Ofertada (Unidades Atômicas)',
      sim_lifecycle_remaining: 'Validade Restante Real (Dias)',
      sim_lifecycle_nominal_hint: 'Validade nominal lacrado:',
      sim_service_durability_label: 'Durabilidade / Cobertura do Serviço (Dias)',
      sim_service_durability_hint: 'Durabilidade nominal do serviço (mantenha o padrão para serviço completo; reduza apenas se provisório/paliativo):',
      sim_unit_days: 'dias',
      sim_hint_unit_value: 'Valor Unitário Atual:',
      sim_hint_depreciation: 'Perda por validade:',
      sim_hint_service_depreciation: 'Redução por serviço paliativo:',
      sim_summary_title: 'Resumo Direto da Liquidação da Troca',
      sim_summary_deliver: 'Você Entrega (Sua Oferta):',
      sim_summary_receive: 'Você Recebe (Liquidação Recomendada):',
      sim_result_header: 'Paridade Matemática e Liquidação da Troca',
      sim_exchange_rate: 'Paridade Unitária (1 Ofertado : X Solicitado)',
      sim_offer_total_score: 'Valor Total da Sua Oferta (Você Entrega)',
      sim_request_unit_score: 'Valor de 1 Unidade (Item Solicitado)',
      sim_exact_quantity: 'Qtd. Exata a Receber (Item Solicitado)',
      sim_recommended_quantity: 'Qtd. Recomendada a Receber (Item Solicitado)',
      sim_sub_units_equivalent: 'Total Fracionado a Receber (Item Solicitado)',
      sim_imbalance_balanced: 'Troca Equilibrada: Sem perda por indivisibilidade.',
      sim_imbalance_surplus: 'VOCÊ DEVE TROCO À CONTRAPARTE (Você Recebe Valor a Mais por Indivisibilidade)',
      sim_imbalance_deficit: 'A CONTRAPARTE DEVE TROCO A VOCÊ (Você Entrega Valor a Mais por Indivisibilidade)',
      sim_msg_balanced: 'Troca matematicamente equilibrada: receber {rec} un ({sub} {measure}) de "{item}" equivale ao valor da sua oferta sem perda por indivisibilidade.',
      sim_msg_surplus_indivisible: 'O item solicitado "{item}" é indivisível ({req_unit_pts} pts/un) e vale mais do que a sua oferta atual ({offer_pts} pts; seriam necessárias {needed_offer} un da sua oferta para cobrir 1 unidade inteira sem troco). Arredondar de {exact} un para {rec} unidade(s) inteira(s) gera uma diferença de +{pct}% ({delta} pts acima da sua oferta). Para receber {rec} un agora, VOCÊ fica devendo {delta} pts de troco à contraparte (ou aumente a quantidade da sua oferta).',
      sim_msg_deficit_indivisible: 'O item solicitado "{item}" é indivisível ({req_unit_pts} pts/un). A sua oferta ({offer_pts} pts) vale mais do que {rec} unidade(s) inteira(s) recebida(s) ({req_total_pts} pts). Arredondar de {exact} un para {rec} unidade(s) inteira(s) gera um saldo a seu favor de -{pct}% ({delta} pts). A CONTRAPARTE fica devendo {delta} pts de troco a você.',
      sim_msg_sub_unit_rounding: 'O fracionamento de "{item}" em {sub} {measure} ({rec} un) gera uma diferença mínima de arredondamento de {sign}{pct}% ({delta} pts).',
      sim_change_suggestion: 'Opções Imediatas de Troco (Escolha 1 opção abaixo para quitar {delta} pts):',
      sim_change_suggestion_you_pay: 'Troco que VOCÊ Deve Entregar à Contraparte (Escolha 1 opção abaixo para você pagar {delta} pts):',
      sim_change_suggestion_counterparty_pays: 'Troco que a CONTRAPARTE Deve Entregar a VOCÊ (Escolha 1 opção abaixo para você receber {delta} pts):',
      sim_change_all_toggle: 'Ver todas as {count} opções de troco fisicamente viáveis no catálogo ({div} divisíveis em g/ml/un + {indiv} unidades inteiras menores)',
      table_title: 'Tabela Geral de Cotações do Catálogo de Referência (128 Itens)',
      table_search_placeholder: 'Filtrar por nome comercial/DCB, ID semântico ou tag funcional...',
      table_filter_all_categories: 'Todas as 9 Categorias Oficiais',
      col_item: 'Especificação Técnica e Nome Comercial/DCB',
      col_unit: 'Unidade Atômica e Divisibilidade',
      col_energy: 'Energia / EEB (E)',
      col_mass_vol: 'Peso / Vol (P / Vol)',
      col_lifecycle: 'Validade / Durabilidade (V)',
      col_in: 'Índ. Nutr. (IN)',
      col_base_score: 'Score Base',
      col_mec: 'Contexto (MEC)',
      col_final_score: 'Score Final',
      col_score_baseline: '1. Base Pura (1,0x)',
      col_score_acute: '2. Colapso Agudo',
      col_score_recon: '3. Reconstrução',
      unit_divisible: 'Divisível',
      unit_indivisible: 'Indivisível',
      unit_food: 'Alimento Calórico',
      unit_non_food: 'Utilidade / Não-Alimento',
      print_header_note: 'MANUAL FÍSICO DE COTAÇÃO DE ESCAMBO OFFLINE (COM AS 3 SITUAÇÕES DE CRISE) — GERADO PELO BARTERSCORE ENGINE v1.1.0',
      print_guide_title: 'MANUAL DE CAMPO ANALÓGICO COMPLETO (OPERAÇÃO EM BLACKOUT TOTAL) E TABELA DE TROCO FRACIONÁRIO',
      print_step1_title: '1. Calcule Seu Crédito (Pontos que Você Entrega)',
      print_step1_body: 'Localize o item ofertado e escolha a coluna da situação atual (Col 8 Base Pura 1,0x, Col 9 Colapso Agudo ou Col 10 Reconstrução). Multiplique o Score pela quantidade entregue (ou multiplique a taxa 1 g / 1 ml pelo peso/volume).',
      print_step2_title: '2. Calcule a Quantidade Exata a Receber',
      print_step2_body: 'Com uma régua na mesma coluna de situação, leia o Score do item desejado. Divida seus Pontos Totais pelo Score do item solicitado (Seus Pontos ÷ Score Solicitado).',
      print_step3_title: '3. Quite o Troco de Itens Indivisíveis (Subunidades)',
      print_step3_body: 'Em itens indivisíveis, subtraia os pontos das unidades inteiras (Pontos de Troco = Seus Pontos − Pontos Recebidos) e liquide a diferença usando a Tabela Rápida de Troco abaixo ou qualquer item divisível (taxa 1 g / 1 ml).',
      print_step4_title: '4. Desconto Manual por Validade Próxima (Regra de Bolso)',
      print_step4_body: 'Se o item estiver perto do vencimento no uso em papel: >90 dias = 100% do score; 31–90 dias = 75% (−25%); 8–30 dias = 50% (reduza o valor pela metade); 1–7 dias = 25% (−75%); 0 dias (vencido) = 0 pts.',
      print_scenarios_box_title: 'Como Usar as 3 Colunas de Situação Lado a Lado (Colunas 8, 9 e 10)',
      print_scenarios_box_body: '• Col 8 — Linha de Base Pura (MEC 1,0x): Valor intrínseco físico e nutricional (ScoreBase) sem multiplicadores externos. • Col 9 — Colapso Civil Agudo: Fase de sobrevivência imediata; água/purificação (até 4,32x), antibióticos, controle de hemorragia e rações prontas atingem valor máximo, enquanto ouro/prata caem para 0,01x. • Col 10 — Reconstrução Econômica: Retomada pós-crise; ferramentas de aço, sementes crioulas, energia solar/rádio e metais preciosos (5,00x) lideram a paridade.',
      print_example_box_title: 'Exemplo Prático Resolvido Passo a Passo (Coluna Colapso Agudo — 0% de Perda)',
      print_example_box_body: 'Troca de 50 pacotes de Leite em Pó Integral (400 g) por Alicate Multiferramenta Dobrável em Aço Inox (1 un, Indivisível): 1) Seu Crédito: 50 × {milk_pts} pts = {milk_total} pts. 2) Score do Alicate: {pliers_pts} pts/un. 3) Divisão: {milk_total} ÷ {pliers_pts} = {pliers_exact} un → Receba 2 Alicates inteiros ({pliers_two} pts). 4) Troco Devido a Você: {milk_total} − {pliers_two} = {change_pts} pts → Divida pela taxa do Sal Iodado ({salt_rate} pts/g) = {salt_g} g de Sal Refinado Iodado (ou {sugar_g} g de Açúcar Cristal a {sugar_rate} pts/g).',
      print_expiry_box_title: 'Protocolos de Desconto Manual de Validade (Papel e Calculadora de Bolso)',
      print_expiry_box_body: '• Protocolo A (Vencimento Próximo): >90d = 100%; 31–90d = 75% (−1/4); 8–30d = 50% (Metade do Valor); 1–7d = 25% (1/4 do Valor); 0d/Vencido = 0 pts (Recusar). • Protocolo B (Proporcional para Longa Duração >90d): 50% da validade de fábrica restante ≈ −10% no score; 25% da validade de fábrica restante ≈ −20% no score (aproxima log10(V_rest+1) ÷ log10(V_nom+1)). • Serviços Essenciais (101–128): V é a durabilidade do serviço; use sempre 100% (1,0x) do score impresso para serviços completos.',
      print_checklist_box_title: 'Checklist de Inspeção para Postos de Escambo e Kit Analógico de Blackout',
      print_checklist_box_body: '• Kit Analógico Necessário: Tabela A4 Paisagem impressa, Régua reta, Calculadora de bolso (ou lápis/papel) e Balança de 1 g / Copo graduado de 1 ml. • Regras de Segurança: 1) Recuse vácuo violado, latas estufadas/enferrujadas ou blísteres rompidos (0 pts); 2) Confirme que ambos leem a mesma coluna de situação; 3) Aplique o desconto de 50% (<30 dias) antes de multiplicar a quantidade; 4) Sempre liquide sobras de indivisíveis em g/ml/un.',
      print_change_table_title: 'Tabela Pronta de Consulta Rápida de Troco em Gramas / mL / Unidades — As 3 Situações de Crise (Col 8 Base | Col 9 Colapso | Col 10 Reconstrução)'
    },

    items: {
      // 1. cat_staple_foods (20)
      rice_white_polished_raw_1000g: {
        name: 'Arroz Branco Polido Tipo 1, Grão Longo Fino, Cru (Pacote 1000 g)',
        description: 'Grão de Oryza sativa beneficiado com baixo teor lipídico para estocagem prolongada; requer cocção em água.'
      },
      beans_common_dry_1000g: {
        name: 'Feijão-Comum Seco Tipo 1 (Carioca ou Preto), Cru (Pacote 1000 g)',
        description: 'Leguminosa seca (Phaseolus vulgaris) rica em proteína vegetal, fibra alimentar, potássio e ferro não-heme.'
      },
      lentils_dry_raw_500g: {
        name: 'Lentilha Seca em Grãos (Lens culinaris), Crua (Pacote 500 g)',
        description: 'Leguminosa de cozimento rápido que dispensa remolho prolongado, economizando combustível de cocção.'
      },
      chickpeas_dry_raw_500g: {
        name: 'Grão-de-Bico Seco em Grãos (Cicer arietinum), Cru (Pacote 500 g)',
        description: 'Leguminosa de alta densidade energética, rica em proteínas, lipídios insaturados e minerais.'
      },
      pasta_wheat_dry_500g: {
        name: 'Macarrão de Sêmola de Trigo Seco (Espaguete/Parafuso) (Pacote 500 g)',
        description: 'Massa alimentícia seca de rápido preparo e alta aceitação calórica.'
      },
      flour_cassava_dry_1000g: {
        name: 'Farinha de Mandioca Seca Torrada Tipo 1 (Pacote 1000 g)',
        description: 'Farinha de Manihot esculenta pré-torrada; pronta para consumo imediato a frio sem gastar água ou fogo.'
      },
      flour_wheat_enriched_1000g: {
        name: 'Farinha de Trigo Especial Tipo 1 Enriquecida com Ferro e Ácido Fólico (Pacote 1000 g)',
        description: 'Farinha de panificação fortificada conforme norma ANVISA para preparo de pães ázimos e massas.'
      },
      cornmeal_flaked_dry_500g: {
        name: 'Farinha de Milho Flocada Pré-Cozida (Flocão de Milho) (Pacote 500 g)',
        description: 'Milho degerminado e flocado para preparo rápido no vapor (cuscuz) ou mingau com baixo consumo de lenha/gás.'
      },
      oats_rolled_whole_500g: {
        name: 'Aveia em Flocos Integrais (Avena sativa) (Pacote 500 g)',
        description: 'Cereal integral rico em betaglucanas e proteínas; pode ser consumido hidratado a frio sem fogo.'
      },
      milk_powder_whole_400g: {
        name: 'Leite em Pó Integral Instantâneo (Lata ou Pacote Aluminizado 400 g)',
        description: 'Leite bovino desidratado rico em proteínas de alto valor biológico, gordura láctea, cálcio e vitaminas A e D.'
      },
      oil_vegetable_refined_900ml: {
        name: 'Óleo Vegetal Comestível Refinado (Soja, Milho ou Girassol) (Frasco PET 900 mL)',
        description: 'Fonte lipídica pura (9 kcal/g) essencial para densidade calórica de refeições e iluminação a pavio.'
      },
      lard_pork_rendered_500g: {
        name: 'Banha Suína Refinada Pura (Pacote ou Pote 500 g)',
        description: 'Gordura animal saturada altamente estável contra oxidação para fritura, conservação (confit) e aporte calórico.'
      },
      fish_sardine_canned_oil_125g: {
        name: 'Sardinha em Conserva em Óleo Comestível (Lata 125 g com Abertura Fácil)',
        description: 'Proteína marinha esterilizada pronta para consumo, rica em ômega-3 e cálcio biodisponível nas espinhas macias.'
      },
      fish_tuna_canned_solid_170g: {
        name: 'Atum Sólido em Conserva em Óleo Comestível (Lata Hermética 170 g)',
        description: 'Proteína animal magra esterilizada em autoclave, pronta para consumo imediato sem refrigeração.'
      },
      meat_bovine_cured_salted_500g: {
        name: 'Carne Bovina Salgada e Dessecada (Charque / Carne-Seca) (Pacote a Vácuo 500 g)',
        description: 'Corte bovino preservado por desidratação osmótica, rico em proteína completa, ferro heme e cloreto de sódio.'
      },
      meat_bovine_canned_cooked_320g: {
        name: 'Carne Bovina Cozida em Conserva (Fiambre Bovino / Corned Beef) (Lata 320 g)',
        description: 'Carne bovina cozida e esterilizada em lata hermética de longa validade (5 anos), pronta para consumo.'
      },
      peanut_paste_roasted_500g: {
        name: 'Pasta de Amendoim Torrado Integral sem Açúcar (Pote 500 g)',
        description: 'Alimento hipercalórico pronto para consumo imediato, rico em lipídios monoinsaturados e proteína vegetal.'
      },
      honey_bee_pure_500g: {
        name: 'Mel Puro de Abelha (Apis mellifera) (Pote Lacrado 500 g)',
        description: 'Carboidrato natural de baixíssima atividade de água, validade virtualmente indefinida e ação antisséptica tópica.'
      },
      biscuit_wheat_salted_dry_400g: {
        name: 'Biscoito Salgado Seco Tipo Água e Sal / Cream Cracker (Pacote 400 g)',
        description: 'Ração seca de trigo pronta para consumo imediato em deslocamentos sem necessidade de preparo.'
      },
      water_potable_sealed_1000ml: {
        name: 'Água Mineral Natural Potável Sem Gás Lacrada (Garrafa PET 1000 mL)',
        description: 'Água potável microbiologicamente segura para hidratação imediata e reconstituição de medicamentos.'
      },

      // 2. cat_critical_nutrition (5)
      infant_formula_powder_stage1_400g: {
        name: 'Fórmula Infantil em Pó de Partida — Fase 1 (0 a 6 Meses) (Lata Hermética 400 g)',
        description: 'Substituto completo do leite materno (padrão ANVISA/Codex) com relação soro/caseína ajustada, ferro e vitamina C.'
      },
      ration_emergency_compressed_500g: {
        name: 'Ração Sólida Compactada de Emergência Hipercalórica (Padrão Marítimo SOLAS) (Bloco a Vácuo 500 g)',
        description: 'Bloco calórico fortificado com vitaminas e minerais, formulado para não provocar sede e suportar extremos térmicos.'
      },
      protein_whey_concentrate_powder_100g: {
        name: 'Proteína Concentrada do Soro do Leite (Whey Protein 80%) em Pó (Sachê 100 g)',
        description: 'Suplemento proteico de rápida absorção rico em aminoácidos essenciais (BCAA) para recuperação de trauma e desnutrição.'
      },
      coconut_milk_powder_200g: {
        name: 'Leite de Coco em Pó Solúvel (Pacote Aluminizado 200 g)',
        description: 'Fonte concentrada de triglicerídeos de cadeia média (TCM) de rápida metabolização energética.'
      },
      gelatin_unflavored_powder_50g: {
        name: 'Gelatina em Pó Incolor Sem Sabor (Colágeno Hidrolisado Puro) (Pacote 50 g)',
        description: 'Proteína estrutural pura de longa guarda e agente geleificante culinário.'
      },

      // 3. cat_spices_morale (15)
      salt_sodium_chloride_iodized_1000g: {
        name: 'Sal Refinado Iodado para Consumo Humano (NaCl + Iodato de Potássio) (Pacote 1000 g)',
        description: 'Eletrólito vital para homeostase, salga de carnes/peixes, solução fisiológica e soro de reidratação caseiro.'
      },
      sugar_sucrose_crystal_1000g: {
        name: 'Açúcar Cristal ou Refinado Branco (Sacarose de Cana) (Pacote 1000 g)',
        description: 'Energia glicêmica rápida, conservante osmótico de frutas e substrato de co-transporte de sódio em reidratação oral.'
      },
      coffee_roasted_ground_vacuum_500g: {
        name: 'Café Torrado e Moído Tradicional/Superior Embalado a Vácuo (Tijolo 500 g)',
        description: 'Estimulante do sistema nervoso central (cafeína) de altíssima liquidez de escambo em embalagem barreira de alumínio.'
      },
      coffee_instant_soluble_granules_50g: {
        name: 'Café Solúvel Granulado / Liofilizado (Pote ou Refil 50 g)',
        description: 'Dissolução instantânea mesmo em água fria; altíssimo valor de moral por grama transportado.'
      },
      tomato_paste_concentrated_300g: {
        name: 'Extrato de Tomate Concentrado Duplo (Lata ou Sachê 300 g)',
        description: 'Base culinária ácida rica em licopeno, potássio e vitamina C para tornar grãos básicos palatáveis.'
      },
      broth_bouillon_dehydrated_cube_10g: {
        name: 'Caldo Culinário Desidratado Prensado (Carne/Galinha/Legumes) (1 Tablete de 10 g)',
        description: 'Concentrado de sódio, gordura e condimentos que transforma água fervida e arroz/macarrão em sopa nutritiva.'
      },
      vinegar_acetic_acid_4pct_750ml: {
        name: 'Vinagre de Álcool Branco Destilado (Acidez 4% Ácido Acético) (Frasco 750 mL)',
        description: 'Acidificante para conservas vegetais seguras (prevenção de botulismo), antisséptico leve e desinfetante.'
      },
      garlic_dehydrated_powder_100g: {
        name: 'Alho Desidratado em Pó ou Granulado Puro (Allium sativum) (Pacote 100 g)',
        description: 'Condimento aromático concentrado de longa vida útil que dispensa alho in natura perecível.'
      },
      pepper_black_ground_50g: {
        name: 'Pimenta-do-Reino Preta Moída Pura (Piper nigrum) (Pacote Lacrado 50 g)',
        description: 'Especiaria clássica de alto valor agregado por grama e excelente moeda fracionária culinária.'
      },
      sodium_bicarbonate_pure_100g: {
        name: 'Bicarbonato de Sódio Puro Grau Farmacêutico/Alimentício (NaHCO3) (Pacote 100 g)',
        description: 'Antiácido estomacal, higienizador bucal, tampão alcalino para soro reidratante e fermento químico.'
      },
      chocolate_dark_cocoa_60pct_100g: {
        name: 'Chocolate Meio Amargo / Amargo (Mínimo 60% Cacau) (Barra 100 g)',
        description: 'Barra energética rica em manteiga de cacau, teobromina e glicose, mais resistente ao calor que o chocolate ao leite.'
      },
      candy_hard_glucose_unit_5g: {
        name: 'Bala Dura de Glicose / Sacarose Embalada Individualmente (1 Unidade de 5 g)',
        description: 'Carboidrato simples de absorção bucal rápida para hipoglicemia e unidade ideal de troco miúdo.'
      },
      tea_camellia_sinensis_dry_50g: {
        name: 'Chá Preto ou Verde Seco a Granel / Sachês (Camellia sinensis) (Caixa/Pacote 50 g)',
        description: 'Infusão estimulante rica em taninos e cafeína que incentiva a fervura prévia da água consumida.'
      },
      tobacco_cigarette_filtered_unit: {
        name: 'Cigarro de Tabaco Manufaturado com Filtro (1 Unidade Avulsa)',
        description: 'Unidade atômica padronizada de nicotina com liquidez histórica comprovada como micro-moeda em zonas de crise.'
      },
      alcohol_ethanol_potable_40pct_500ml: {
        name: 'Bebida Alcoólica Destilada Potável (Vodka / Aguardente 40% vol. Etanol) (Garrafa 500 mL)',
        description: 'Destilado límpido de alta liquidez comercial, útil para extração de tinturas fitoterápicas, assepsia e moral.'
      },

      // 4. cat_pharma_essential (15)
      amoxicillin_500mg_capsule: {
        name: 'Amoxicilina Tri-hidratada 500 mg Cápsula Dura Oral (DCB 00668) (1 Cápsula)',
        description: 'Antibiótico bactericida beta-lactâmico (penicilina de amplo espectro) para infecções respiratórias, otites, sinusites e pele.'
      },
      azithromycin_500mg_tablet: {
        name: 'Azitromicina Di-hidratada 500 mg Comprimido Revestido (DCB 00994) (1 Comprimido)',
        description: 'Antibiótico macrolídeo de posologia curta (dose única diária) para pneumonias atípicas e infecções entéricas.'
      },
      ciprofloxacin_500mg_tablet: {
        name: 'Cloridrato de Ciprofloxacino 500 mg Comprimido Revestido (DCB 02135) (1 Comprimido)',
        description: 'Antibiótico fluoroquinolona de 2ª geração para infecções urinárias graves, diarreia infecciosa invasiva e bacilos Gram-negativos.'
      },
      metronidazole_400mg_tablet: {
        name: 'Metronidazol 400 mg Comprimido Revestido (DCB 05953) (1 Comprimido)',
        description: 'Antiprotozoário (giardíase, amebíase por água contaminada) e antibacteriano específico contra bactérias anaeróbias.'
      },
      paracetamol_500mg_tablet: {
        name: 'Paracetamol 500 mg Comprimido Simples (DCB 06827) (1 Comprimido)',
        description: 'Analgésico e antitérmico de primeira linha seguro para controle de febre e dor sem agressão gástrica ou antiagregação plaquetária.'
      },
      metamizole_sodium_500mg_tablet: {
        name: 'Dipirona Monoidratada (Metamizol Sódico) 500 mg Comprimido (DCB 03097) (1 Comprimido)',
        description: 'Potente analgésico, antitérmico e espasmolítico padrão da clínica brasileira para febres refratárias e cólicas intensas.'
      },
      ibuprofen_400mg_tablet: {
        name: 'Ibuprofeno 400 mg Comprimido Revestido (DCB 04766) (1 Comprimido)',
        description: 'Anti-inflamatório não esteroidal (AINE), analgésico e antitérmico para traumas osteomusculares, odontalgias e inflamações.'
      },
      ibuprofen_oral_suspension_50mg_ml_20ml: {
        name: 'Ibuprofeno Suspensão Oral Gotas 50 mg/mL (Frasco Conta-Gotas 20 mL)',
        description: 'Antitérmico e anti-inflamatório líquido concentrado essencial para dosagem pediátrica ajustada por quilograma de peso.'
      },
      loperamide_hydrochloride_2mg_tablet: {
        name: 'Cloridrato de Loperamida 2 mg Comprimido (DCB 05419) (1 Comprimido)',
        description: 'Antidiarreico inibidor do peristaltismo intestinal para conter espoliação hídrica aguda em diarreias não-disentéricas.'
      },
      oral_rehydration_salts_who_sachet_27_9g: {
        name: 'Sais para Reidratação Oral (Fórmula Padrão OMS/MS de Baixa Osmolaridade) (Envelope 27,9 g para 1 L)',
        description: 'Mistura oficial de cloreto de sódio, citrato trissódico, cloreto de potássio e glicose anidra contra desidratação letal.'
      },
      loratadine_10mg_tablet: {
        name: 'Loratadina 10 mg Comprimido Simples (DCB 05425) (1 Comprimido)',
        description: 'Anti-histamínico H1 de segunda geração não-sedativo para reações alérgicas, urticária, rinite e picadas de insetos.'
      },
      omeprazole_20mg_capsule: {
        name: 'Omeprazol 20 mg Cápsula Dura de Liberação Retardada (Microgrânulos Gastrorresistentes) (1 Cápsula)',
        description: 'Inibidor da bomba de prótons para tratamento de gastrite, úlcera péptica e proteção gástrica durante uso de anti-inflamatórios.'
      },
      potassium_iodide_130mg_tablet: {
        name: 'Iodeto de Potássio 130 mg Comprimido Sulcado (Bloqueador Tireoidiano) (1 Comprimido)',
        description: 'Agente de proteção radiológica (padrão OMS) que satura a glândula tireoide impedindo a captação de iodo radioativo (I-131).'
      },
      ascorbic_acid_500mg_tablet: {
        name: 'Ácido Ascórbico (Vitamina C) 500 mg Comprimido (DCB 00104) (1 Comprimido)',
        description: 'Prevenção e tratamento do escorbuto, cofator essencial de síntese de colágeno cicatricial e absorção de ferro.'
      },
      multivitamin_mineral_complex_tablet: {
        name: 'Polivitamínico e Polimineral Completo (A a Z) Comprimido Revestido (1 Comprimido)',
        description: 'Suplementação profilática diária de vitaminas e oligoelementos para dietas restritivas baseadas em grãos secos.'
      },

      // 5. cat_trauma_hygiene (15)
      ethanol_antiseptic_70pct_100ml: {
        name: 'Álcool Etílico Hidratado Antisséptico 70% INPM (70° GL) (Frasco 100 mL)',
        description: 'Antisséptico bactericida e virucida de ação rápida para pele íntegra, desinfecção de instrumentais e auxílio de ignição.'
      },
      hydrogen_peroxide_3pct_10vol_100ml: {
        name: 'Água Oxigenada 10 Volumes (Peróxido de Hidrogênio 3%) Solução Tópica (Frasco 100 mL)',
        description: 'Agente oxidante efervescente para limpeza mecânica de feridas sujas, remoção de crostas hemáticas e antissepsia.'
      },
      povidone_iodine_10pct_topical_100ml: {
        name: 'Iodopovidona (PVPI) 10% Solução Aquosa Tópica (1% Iodo Ativo) (Frasco 100 mL)',
        description: 'Antisséptico iodóforo de amplo espectro (bactérias, fungos, vírus e esporos) para preparo cirúrgico e ferimentos.'
      },
      chlorhexidine_digluconate_2pct_100ml: {
        name: 'Digliconato de Clorexidina 2% Solução Tópica Antisséptica (Frasco 100 mL)',
        description: 'Antisséptico catiônico de efeito residual prolongado (até 6 horas) que mantém eficácia mesmo na presença de sangue.'
      },
      gauze_sterile_compress_7_5cm_unit: {
        name: 'Compressa de Gaze Hidrófila Estéril 7,5 x 7,5 cm (13 Fios/cm²) (1 Envelope Lacrado)',
        description: 'Curativo cirúrgico estéril de algodão puro para tamponamento de sangramentos, limpeza e cobertura de feridas abertas.'
      },
      tape_medical_waterproof_spool_5m: {
        name: 'Esparadrapo Impermeável Hospitalar de Alta Aderência 2,5 cm x 5 m (1 Carretel)',
        description: 'Fita adesiva têxtil impermeável à base de óxido de zinco para fixação firme de curativos, talas e proteção contra bolhas.'
      },
      bandage_elastic_compression_roll_2m: {
        name: 'Atadura Elástica Compressiva de Crepom/Elastano 10 cm x 2 m com Presilhas (1 Rolo)',
        description: 'Faixa reutilizável para curativos compressivos hemostáticos, imobilização de entorses articulares e fixação de talas.'
      },
      tourniquet_tactical_arterial_unit: {
        name: 'Torniquete Tático Arterial de Extremidades com Barra de Torção (Padrão CoTCCC) (1 Unidade)',
        description: 'Dispositivo mecânico de salvamento imediato capaz de ocluir totalmente hemorragias arteriais exsanguinantes em membros.'
      },
      suture_surgical_nylon_3_0_needle_unit: {
        name: 'Fio de Sutura Cirúrgica Mononylon 3-0 Estéril com Agulha Cortante Triangular Encastoada (1 Envelope)',
        description: 'Fio monofilamentar de poliamida não-absorvível estéril pronto para síntese primária de lacerações traumáticas profundas.'
      },
      syringe_sterile_5ml_with_needle_unit: {
        name: 'Seringa Hipodérmica Estéril Descartável 5 mL Bico Luer-Lock com Agulha 25x7 mm (22G) (1 Unidade)',
        description: 'Dispositivo estéril para administração intramuscular/endovenosa precisa e irrigação sob pressão de feridas contaminadas.'
      },
      gloves_nitrile_exam_pair: {
        name: 'Luvas de Procedimento Não-Cirúrgico em Borracha Nitrílica Sem Pó (1 Par)',
        description: 'Barreira de proteção biológica e química resistente à perfuração para atendimento a feridos e manejo de dejetos.'
      },
      respirator_particulate_n95_pff2_unit: {
        name: 'Respirador Purificador de Ar Semifacial Filtrante PFF2 / N95 Sem Válvula (Norma ABNT NBR 13698) (1 Unidade)',
        description: 'Retém no mínimo 94% de aerossóis biológicos, poeiras tóxicas, fumaça de queimadas e cinzas em suspensão.'
      },
      soap_glycerin_neutral_bar_200g: {
        name: 'Sabão Glicerinado Neutro em Barra sem Perfume (Barra Sólida 200 g)',
        description: 'Agente tensoativo essencial para lavagem de mãos, assepsia periférica de ferimentos e lavagem de roupas/utensílios.'
      },
      paper_toilet_cellulose_roll_30m: {
        name: 'Papel Higiênico Folha Simples/Dupla de Celulose Virgem (1 Rolo de 30 m)',
        description: 'Insumo de higiene pessoal de alta rotatividade no escambo e excelente isca fibrosa seca para ignição de fogo.'
      },
      sanitary_pad_absorbent_external_unit: {
        name: 'Absorvente Higiênico Externo de Alta Absorção Embalado Individualmente (1 Unidade)',
        description: 'Item indispensável de higiene íntima que atua em emergências como excelente compressa hemostática estéril improvisada.'
      },

      // 6. cat_water_fire_shelter (10)
      sodium_hypochlorite_2_5pct_1000ml: {
        name: 'Solução de Hipoclorito de Sódio a 2,5% de Cloro Ativo Puro (Sem Perfume/Corante) (Frasco 1000 mL)',
        description: 'Cloro líquido padrão Ministério da Saúde (2 gotas/L) capaz de potabilizar até 10.000 litros de água contra cólera e tifo.'
      },
      water_purification_nadcc_tablet_unit: {
        name: 'Pastilha Efervescente Purificadora de Água de Dicloroisocianurato de Sódio (NaDCC) (1 Pastilha para 1–2 L)',
        description: 'Desinfetante químico portátil de longa validade que elimina bactérias, vírus e protozoários sem alterar severamente o gosto.'
      },
      filter_water_hollow_fiber_0_1micron_unit: {
        name: 'Filtro Portátil de Membrana de Fibra Oca 0,1 Mícron Absoluto (Retrolavável) (1 Unidade)',
        description: 'Barreira física mecânica que retém 99,9999% de bactérias (Salmonella, E. coli, Vibrio cholerae) e protozoários imediatamente.'
      },
      lighter_butane_piezo_standard_unit: {
        name: 'Isqueiro Descartável a Gás Isobutano Pressurizado (Pedra ou Piezoelétrico) (1 Unidade)',
        description: 'Fornece até 3.000 acendimentos instantâneos; mesmo após o término do gás, a roda de ferrocério gera faíscas para iscas.'
      },
      ferrocerium_ignition_rod_8mm_unit: {
        name: 'Pederneira de Ferrocério Maciço 8 mm comRaspador de Aço Carbono (1 Unidade)',
        description: 'Bastão pirofórico à prova d’água que projeta faíscas a 3.000 °C em qualquer clima para mais de 10.000 ignições.'
      },
      matches_waterproof_safety_box_40un: {
        name: 'Fósforos de Segurança Impermeabilizados Resistentes à Umidade (Caixa com 40 Palitos)',
        description: 'Palitos tratados com revestimento hidrofóbico e lixa de fósforo vermelho que acendem mesmo sob neblina ou umidade.'
      },
      candle_paraffin_solid_white_30g_unit: {
        name: 'Vela Cilíndrica Branca de Parafina Sólida Pura (1 Unidade de 30 g)',
        description: 'Fonte confiável de iluminação noturna, aquecimento pontual de micro-abrigos e parafina para impermeabilizar tecidos.'
      },
      fuel_solid_hexamine_tablet_14g_unit: {
        name: 'Pastilha de Combustível Sólido de Hexamina (Urotropina) sem Fumaça (1 Pastilha de 14 g)',
        description: 'Queima limpa, sem fumaça visível e sem derreter, ideal para ferver 500 mL de água ou aquecer rações discretamente.'
      },
      blanket_thermal_aluminized_mylar_unit: {
        name: 'Manta Térmica Aluminizada de Emergência (Poliéster Metalizado Mylar 210 x 130 cm) (1 Unidade)',
        description: 'Reflete até 90% do calor radiante corporal, prevenindo hipotermia em feridos, abrigos improvisados e sinalização visual.'
      },
      tarp_polyethylene_waterproof_3x3m_unit: {
        name: 'Lona Impermeável de Polietileno Trançado de Alta Densidade com Ilhoses Metálicos 3 x 3 m (1 Unidade)',
        description: 'Cobertura estrutural rápida contra chuva/vento, isolamento de solo úmido e calha coletora de água pluvial.'
      },

      // 7. cat_tools_energy_comms (14)
      knife_fixed_blade_carbon_steel_fulltang: {
        name: 'Faca de Campo Lâmina Fixa Integral (Full-Tang) em Aço Carbono com Bainha (1 Unidade)',
        description: 'Ferramenta primária indestrutível para rachar lenha (batoning), preparo de alimentos, entalhe e geração de faíscas.'
      },
      multitool_pliers_stainless_folding_unit: {
        name: 'Alicate Multiferramenta Dobrável em Aço Inoxidável Temperado (1 Unidade)',
        description: 'Integra alicate de bico, cortador de arame, lâmina, serra, punção e chaves de fenda/Phillips para manutenção mecânica.'
      },
      saw_wire_stainless_pocket_unit: {
        name: 'Serra de Fio Trançado em Aço Inoxidável de Bolso com Argolas Giratórias (1 Unidade)',
        description: 'Serra manual ultraleve para corte rápido de galhos, caibros de abrigo e materiais plásticos ou ósseos.'
      },
      tape_cloth_adhesive_waterproof_48mm_10m: {
        name: 'Fita Adesiva Entretelada Impermeável de Alta Resistência (Cloth Tape) 48 mm x 10 m (1 Rolo)',
        description: 'Fita estrutural revestida em polietileno com trama têxtil para vedação de lonas, botas, mangueiras e reparos de emergência.'
      },
      cord_nylon_kernmantle_550lb_10m: {
        name: 'Cabo de Nylon Trançado Kernmantle 550 lb (Paracord Tipo III com 7 Filamentos Internos) (Meada 10 m)',
        description: 'Corda tática de poliamida resistente ao apodrecimento cujos 7 fios internos servem para pesca, armadilhas e costura.'
      },
      steel_wool_fine_grade_0000_pad_unit: {
        name: 'Esponja de Lã de Aço Carbono Extrafina Grau #0000 (1 Unidade)',
        description: 'Isca de fogo imediata por curto-circuito em baterias ou faísca de pederneira, além de polimento e desoxidação metálica.'
      },
      needle_sewing_heavy_steel_with_thread_10m: {
        name: 'Agulha de Costura Pesada (Veleiro/Couro) em Aço com 10 m de Linha de Poliéster Encerada (1 Kit)',
        description: 'Kit vitalício para reparo estrutural de mochilas, lonas, calçados pesados, correias e vestuário de proteção.'
      },
      fishing_kit_line_20m_hooks_5un_weights_5un: {
        name: 'Kit Compacto de Pesca de Subsistência (20 m Linha Monofilamento, 5 Anzóis Aço, 5 Chumbadas) (1 Kit)',
        description: 'Sistema passivo de obtenção de proteína animal aquática com gasto energético humano próximo de zero.'
      },
      battery_alkaline_lr6_aa_1_5v_unit: {
        name: 'Pilha Alcalina Cilíndrica Padrão IEC LR6 / ABNT AA 1,5 V (1 Unidade)',
        description: 'Célula primária universal de longa guarda (até 7 anos) para lanternas, rádios portáteis e equipamentos médicos.'
      },
      battery_alkaline_lr03_aaa_1_5v_unit: {
        name: 'Pilha Alcalina Cilíndrica Padrão IEC LR03 / ABNT AAA (Palito) 1,5 V (1 Unidade)',
        description: 'Célula primária compacta de 1,5 V para lanternas de cabeça (headlamps), oxímetros de pulso e receptores.'
      },
      battery_lithium_ion_18650_3_7v_3000mah_unit: {
        name: 'Bateria Recarregável de Íons de Lítio IEC 18650 3,7 V 3000 mAh com Circuito de Proteção (1 Célula)',
        description: 'Acumulador energético de alta densidade (~11,1 Wh) capaz de suportar mais de 500 ciclos de recarga via painel solar.'
      },
      flashlight_led_aluminum_aa_compatible_unit: {
        name: 'Lanterna Tática LED em Alumínio Anodizado Compatível com Pilha AA (IEC LR6) (1 Unidade)',
        description: 'Iluminação de estado sólido de baixo consumo, resistente a impactos e água, alimentada por uma única pilha AA.'
      },
      panel_solar_monocrystalline_usb_5v_10w_unit: {
        name: 'Painel Solar Fotovoltaico Dobrável de Silício Monocristalino 10 W com Saída Regulada USB 5 V (1 Unidade)',
        description: 'Gerador autônomo de energia elétrica contínua para recarregar baterias 18650, lanternas e rádios transceptores.'
      },
      radio_transceiver_vhf_uhf_dualband_unit: {
        name: 'Rádio Transceptor Portátil HT Dual-Band VHF/UHF (136–174 / 400–520 MHz) FM (1 Unidade)',
        description: 'Comunicação bidirecional ponto-a-ponto e escuta de emergência totalmente independente de redes celulares ou internet.'
      },

      // 8. cat_store_of_value (6)
      faraday_bag_shielded_rf_emp_medium_unit: {
        name: 'Bolsa Blindada Gaiola de Faraday Multi-Camadas contra RF e Pulso Eletromagnético (EMP) Tamanho Médio (1 Unidade)',
        description: 'Atenuação eletromagnética (>85 dB) para proteger rádios HT, painéis solares, cartões MicroSD e multímetros.'
      },
      microsd_flash_storage_64gb_offline_wiki_unit: {
        name: 'Cartão de Memória MicroSDXC 64 GB Industrial Gravado com Biblioteca Médica, Agrícola e de Engenharia Offline (1 Unidade)',
        description: 'Repositório enciclopédico completo offline contendo tratados clínicos, farmacopeia, agronomia, metalurgia e mapas.'
      },
      eyeglasses_reading_convex_diopter_plus_2_0: {
        name: 'Óculos de Leitura com Lentes Convexas em Policarbonato +2,00 Dioptrias (Grau +2,0) (1 Unidade)',
        description: 'Restaura a acuidade visual de perto para suturas, reparos finos e leitura; as lentes convergem luz solar para ignição.'
      },
      seeds_open_pollinated_vegetable_mix_50g: {
        name: 'Banco de Sementes Hortícolas Crioulas de Polinização Aberta Não-Híbridas (Pacote Hermético 50 g)',
        description: 'Sementes férteis reprodutíveis (feijão, milho, abóbora, couve, tomate) que garantem soberania alimentar contínua.'
      },
      silver_bullion_999_fine_1_troy_oz_31_1g: {
        name: 'Moeda / Barra de Prata Pura .999 Fine Silver (1 Onça Troy / 31,1035 g)',
        description: 'Reserva universal de valor tangível para comércio de médio porte na reconstrução e ação oligodinâmica bacteriostática.'
      },
      gold_bullion_999_fine_fractional_1g: {
        name: 'Lâmina / Barra Fracionada de Ouro Puro .9999 Fine Gold Certificada (1,0 g)',
        description: 'Reserva patrimonial incorruptível de altíssima densidade de valor por miligrama para liquidação de alto valor.'
      },

      // 9. cat_essential_services (28)
      service_trauma_wound_debridement_suturing_proc: {
        name: 'Desbridamento Cirúrgico de Ferida, Irrigação e Sutura Primária (1 Procedimento)',
        description: 'Limpeza cirúrgica asséptica de tecido desvitalizado, irrigação copiosa e fechamento primário por planos com sutura (padrão OMS IMEESC).'
      },
      service_fracture_closed_reduction_splinting_proc: {
        name: 'Redução Incruenta de Fratura / Luxação Ortopédica e Imobilização com Tala (1 Procedimento)',
        description: 'Alinhamento anatômico por tração manual de fratura fechada ou luxação articular com imobilização rígida e checagem neurovascular.'
      },
      service_dental_extraction_infection_drainage_proc: {
        name: 'Exodontia de Urgência (Extração Dentária), Drenagem de Abscesso e Controle de Dor (1 Procedimento)',
        description: 'Extração dentária atraumática com fórceps/alavanca e incisão/drenagem de abscesso odontogênico agudo para prevenir sepse cervical.'
      },
      service_obstetric_delivery_midwifery_care_proc: {
        name: 'Assistência Obstétrica ao Parto, Reanimação Neonatal e Controle de Hemorragia Pós-Parto (1 Procedimento)',
        description: 'Condução qualificada do parto, manejo ativo do 3º período, clampeamento estéril do cordão e reanimação neonatal (padrão OMS IMPAC).'
      },
      service_clinical_triage_nursing_care_shift_4hr: {
        name: 'Plantão de Triagem Clínica, Monitoramento de Hidratação SRO/EV e Curativos (Turno de 4 Horas)',
        description: 'Turno dedicado de 4 horas de enfermagem aguda com controle de sinais vitais, titulação de reidratação oral/venosa e troca estéril de curativos.'
      },
      service_water_well_pump_filtration_repair_proc: {
        name: 'Manutenção e Revisão de Bomba Manual de Poço Artesiano e Sistema de Filtração WASH (1 Procedimento)',
        description: 'Desmontagem mecânica, substituição de gaxetas/válvula de retenção, alinhamento de hastes e reabilitação de filtro comunitário (Sphere WASH).'
      },
      service_sanitation_latrine_vector_control_proc: {
        name: 'Engenharia de Latrina Sanitária (Padrão Sphere) e Saneamento de Vetores Biológicos (1 Procedimento)',
        description: 'Escavação dimensionada, vedação de laje com tubo de ventilação anti-insetos, proteção de lençol freático e desinfecção com cal/cloro.'
      },
      service_solar_pv_battery_dc_diagnostics_repair_proc: {
        name: 'Diagnóstico e Reparo de Sistema Solar Fotovoltaico Off-Grid, Controlador e Banco de Baterias CC (1 Procedimento)',
        description: 'Isolamento de falhas com multímetro, reparo de controlador MPPT/PWM, balanceamento de células, dessulfatação e barramentos CC (IEC 62446).'
      },
      service_generator_internal_combustion_overhaul_proc: {
        name: 'Revisão Mecânica de Motor Estacionário / Gerador a Combustão (Carburador, Magneto e Válvulas) (1 Procedimento)',
        description: 'Limpeza técnica de carburador/bico injetor, calibração de ignição por magneto, ajuste de folga de válvulas e vedação de compressão.'
      },
      service_radio_vhf_uhf_antenna_calibration_repair_proc: {
        name: 'Reparo de Rádio Transceptor VHF/UHF, Conectorização Coaxial e Ajuste de ROE (VSWR) de Antena (1 Procedimento)',
        description: 'Diagnóstico de estágio de RF, soldagem de conectores coaxiais de baixa perda e ajuste físico de antena dipolo/Yagi para ROE < 1,5.'
      },
      service_metallurgy_blade_tool_forging_sharpening_proc: {
        name: 'Forjamento Metalúrgico, Têmpera, Afiação de Precisão em Lâminas e Brasagem/Solda Estrutural (1 Procedimento)',
        description: 'Tratamento térmico de aço carbono (têmpera e revenimento), retífica de fio em machados/facas e união estrutural metálica de carga.'
      },
      service_mechanical_bicycle_cart_drivetrain_repair_proc: {
        name: 'Revisão Mecânica de Transporte de Carga Não-Motorizado (Bicicleta / Carrinho: Rolamentos, Raios e Transmissão) (1 Procedimento)',
        description: 'Alinhamento e tensão de raios de roda, lubrificação/troca de esferas de cubo, ajuste de relação de corrente e calibragem de freios.'
      },
      service_shelter_roofing_structural_carpentry_proc: {
        name: 'Carpintaria Estrutural de Abrigo, Estabilização de Tesouras de Telhado e Vedação contra Intempéries (1 Procedimento)',
        description: 'Encaixe estrutural de madeiramento, reforço de caibros/terças e impermeabilização de cobertura contra chuva e vento severo.'
      },
      service_masonry_thermal_stove_chimney_build_proc: {
        name: 'Construção em Alvenaria de Fogão a Lenha de Alta Eficiência (Rocket Stove / Forno) com Chaminé (1 Procedimento)',
        description: 'Edificação de câmara de combustão isolada e duto de tiragem que reduz o consumo de lenha em 50–70% e elimina fumaça interna (ISO 19867).'
      },
      service_footwear_cobbling_heavy_textile_repair_proc: {
        name: 'Sapataria Pesada (Ressola de Botas, Costura Selaria) e Reparo Estrutural de Mochilas/Lonas (1 Procedimento)',
        description: 'Costura manual travada com sovela e fio encerado, refixação de solado de botas de marcha e reforço de alças de carga e lonas.'
      },
      service_veterinary_livestock_obstetrics_wound_proc: {
        name: 'Atendimento Veterinário a Animais de Produção/Tração (Trauma, Obstetrícia e Controle Parasitário) (1 Procedimento)',
        description: 'Intervenção clínica em rebanhos ou animais de trabalho incluindo auxílio ao parto distócico, casqueamento/sutura e vermifugação (FAO).'
      },
      service_agrarian_crop_grafting_seed_preservation_proc: {
        name: 'Enxertia Agrícola, Remineralização de Solo e Seleção/Secagem Técnica de Sementes Crioulas (1 Procedimento)',
        description: 'Enxertia de frutíferas/culturas perenes, correção de pH do solo com cinzas/composto e beneficiamento de sementes para vigor germinativo.'
      },
      service_food_preservation_smoking_fermentation_batch: {
        name: 'Serviço de Conservação de Alimentos por Cura Salgada, Defumação Térmica ou Lactofermentação (1 Lote)',
        description: 'Processamento técnico por salga osmótica, defumação controlada em fumeiro ou fermentação lática anaeróbica de até 15 kg de alimentos.'
      },
      service_security_perimeter_watch_patrol_shift_4hr: {
        name: 'Turno de Vigia Tático de Perímetro, Controle de Acesso e Alerta Antecipado (Turno de 4 Horas)',
        description: 'Plantão disciplinado de 4 horas de observação defensiva diurna/noturna, ronda de perímetro, controle de acesso e alerta contra incêndio/intrusão.'
      },
      service_logistics_heavy_cargo_portage_5km_25kg: {
        name: 'Transporte Logístico Humano com Armação de Carga (25 kg de Suprimentos por 5 km Off-Road) (1 Viagem)',
        description: 'Porte seguro de 25 kg de água, grãos ou insumos médicos através de 5 km de terreno acidentado ou obstruído sem vias pavimentadas (ISO 8996).'
      },
      service_it_mesh_network_intranet_deployment_proc: {
        name: 'Implantação de Rede Local Off-Grid (Intranet / WLAN / Mesh LoRa) para Acesso Coletivo a Acervo (1 Procedimento)',
        description: 'Configuração de roteadores salvados ou módulos LoRa para criar uma rede local sem internet permitindo que múltiplos dispositivos acessem simultaneamente o acervo MicroSD de 64 GB (IEEE 802.11s).'
      },
      service_it_data_recovery_extraction_proc: {
        name: 'Recuperação Forense de Dados e Extração de Arquivos Técnicos em Dispositivos Danificados/Inoperantes (1 Procedimento)',
        description: 'Extração física e lógica de PDFs de engenharia, esquemas de purificação de água, mapas e prontuários médicos a partir de HDDs, SSDs, pendrives e celulares mortos (ISO/IEC 27037).'
      },
      service_it_pcb_microsoldering_salvage_proc: {
        name: 'Microssoldagem em Placas Eletrônicas (PCB) e Canibalização de Componentes de Sucata (1 Procedimento)',
        description: 'Dessoldagem e reaproveitamento de transistores, capacitores, resistores e diodos de placas-mãe queimadas para consertar rádios VHF/UHF ou controladores de carga solar (IPC-7711/7721).'
      },
      service_it_microcontroller_low_power_automation_proc: {
        name: 'Programação de Microcontroladores de Baixo Consumo (MCU) para Automação de Poços e Irrigação (1 Procedimento)',
        description: 'Programação embarcada (classe Arduino/ESP32/MCU) e integração de sensores/relés CC para automatizar bombas de poços artesianos, corte de bateria ou irrigação agrícola (IEC 61131-3).'
      },
      service_instruction_technical_literacy_class: {
        name: 'Instrução em Alfabetização Técnica Funcional e Leitura de Manuais Médicos/Engenharia (1 Módulo / Aula)',
        description: 'Capacitação estruturada de jovens e adultos focada na leitura e interpretação precisa de bulas/dosagens de antibióticos, esquemas de filtração de água e manuais offline (UNESCO ISCED).'
      },
      service_instruction_applied_mathematics_proc: {
        name: 'Instrução em Matemática Aplicada de Campo, Geometria Estrutural e Logística de Trocas (1 Módulo / Procedimento)',
        description: 'Ensino prático de cálculos geométricos para telhados e alvenaria térmica, conversão de pesos/volumes clínicos e aritmética de paridade e troco na tabela BarterScore (ILO ISCO-08 2320).'
      },
      service_instruction_combat_medicine_triage_class: {
        name: 'Oficina Prática de Sobrevivência em Triagem Clínica, Controle de Hemorragia e Saneamento WASH (1 Módulo / Aula)',
        description: 'Treinamento prático para multiplicar novos socorristas em triagem clínica, aplicação de torniquete arterial, tamponamento de feridas e construção de latrinas seguras (OMS BEC / CICV).'
      },
      service_instruction_technical_translation_proc: {
        name: 'Tradução Técnica Multilíngue e Decodificação de Manuais para Engenharia Reversa (1 Procedimento)',
        description: 'Tradução técnica direta e ensino de terminologia (Inglês, Chinês, Espanhol, Português) de manuais salvados, datasheets eletrônicos e interfaces de rádios transceptores (ISO 17100).'
      }
    }
  };

  return Object.freeze(PT_BR_DICTIONARY);
});
