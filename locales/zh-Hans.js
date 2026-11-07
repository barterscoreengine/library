/**
 * @fileoverview BarterScore Engine - Simplified Chinese (Mainland China) Technical Localization (zh-Hans)
 * @license Apache-2.0
 * @version 1.0.0
 *
 * 严格遵循中国大陆法定标准与商业流通规范的专业术语本地化：
 * - 药品名称严格采用《中华人民共和国药典》(ChP) 及国家药监局 (NMPA) 中国药品通用名称 (CADN) 与世界卫生组织 INN 标准
 * - 食品与营养分类严格采用《中国食物成分表》与食品安全国家标准 (GB) 商业包装规范
 * - 电池、防护用品与工具采用国家标准 (GB/T、GB 19083、GB 2626) 与 IEC 标准术语
 *
 * Compatible with offline local file:// protocol (window.BarterCore.Locales['zh-Hans']),
 * CommonJS (Node.js), and ES Module environments.
 */

(function (root, factory) {
  'use strict';

  var localeZhHans = factory();

  if (typeof root !== 'undefined') {
    root.BarterCore = root.BarterCore || {};
    root.BarterCore.Locales = root.BarterCore.Locales || {};
    root.BarterCore.Locales['zh-Hans'] = localeZhHans;

    if (
      root.BarterCore.BarterEngine &&
      typeof root.BarterCore.BarterEngine.registerLocale === 'function'
    ) {
      root.BarterCore.BarterEngine.registerLocale('zh-Hans', localeZhHans);
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = localeZhHans;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var ZH_HANS_DICTIONARY = {
    meta: {
      code: 'zh-Hans',
      name: 'Simplified Chinese (Mainland China)',
      native_name: '简体中文 (中国大陆标准)',
      direction: 'ltr',
      standard: '《中华人民共和国药典》(ChP) / NMPA-CADN / 国家标准 (GB) / IEC'
    },

    categories: {
      cat_staple_foods: {
        name: '基础主食热量与蛋白质储备',
        description: '耐储存原粮谷物、干豆类、粉类、食用油脂及高温灭菌肉鱼罐头。'
      },
      cat_critical_nutrition: {
        name: '危重特殊医学与应急营养品',
        description: '高能量压缩干粮、1段婴儿配方奶粉及高生物价浓缩蛋白质粉。'
      },
      cat_spices_morale: {
        name: '电解质、调味防腐与心理士气物资',
        description: '加碘精制盐、食糖、咖啡因/可可碱提神物资、香辛料及高流通性慰藉品。'
      },
      cat_pharma_essential: {
        name: '国家基本药物与核心急救药品 (中国药典/WHO)',
        description: '全身性抗感染药、解热镇痛抗炎药、止泻药、低渗口服补液盐及微量营养素。'
      },
      cat_trauma_hygiene: {
        name: '创伤急救、消毒杀菌与防疫卫生用品',
        description: '动脉止血带、无菌敷料、外用广谱消毒剂、N95/KN95防护口罩及个人卫生耗材。'
      },
      cat_water_fire_shelter: {
        name: '饮水净化、点火引燃与防寒庇护装备',
        description: '含氯饮水消毒剂、超滤净水器、打火镁棒/丁烷打火机、固体燃料及保温急救毯。'
      },
      cat_tools_energy_comms: {
        name: '野外作业工具、离网电力与无线电通信',
        description: '全龙骨高碳钢刀具、多功能钳、伞绳、IEC标准干电池/18650锂电、单晶硅太阳能板及VHF/UHF对讲机。'
      },
      cat_store_of_value: {
        name: '价值储藏、贵金属硬通货与离线知识库',
        description: '足金/足银投资条块、非杂交可留种蔬菜种子、老花镜、防电磁脉冲袋及离线百科存储卡。'
      }
    },

    scenarios: {
      acute_collapse: {
        name: '急性社会崩溃期 (初期生存危机阶段)',
        description: '供应链彻底中断：安全饮用水、动脉止血、广谱抗生素与即食高热量食品价值飙升；贵金属硬通货权重降至 0.01x。'
      },
      economic_reconstruction: {
        name: '秩序重建与农业生产力恢复期',
        description: '灾后贸易企稳：耐用手工具、可留种农作物种子、离网太阳能/无线电设备及足金足银硬通货 (5.0x) 主导交换比价。'
      },
      baseline: {
        name: '基准物理与营养原值 (MEC 1.0x)',
        description: '纯粹依据热量/效用、重量体积比、保质期、营养指数与耐久度计算的原始基础分 (ScoreBase)。'
      }
    },

    ui: {
      app_title: 'BarterScore Engine — 离线应急物资估值与易货手册生成器',
      app_subtitle: '确定性实物易货比价模型与离线交换计算器 (Apache 2.0 开源许可)',
      validator_status_ok: '数据模型校验 (Validator)：100% 校验通过',
      validator_status_error: '数据模型校验 (Validator)：检测到结构错误',
      validator_items_loaded: '已加载标准物资条目',
      validator_warnings: '警告',
      validator_errors: '错误',
      label_language: '界面与物资目录语言 (BCP 47)',
      label_language_hint: '回退链路：当前所选语言 → en-US → 英文语义 ID',
      label_scenario: '危机阶段环境修正系数 (MEC)',
      btn_print_manual: '打印纸质速查手册',
      sim_title: '双边实物易货比价与最小分割单位模拟器',
      sim_subtitle: '实时计算精确交换比例、剩余保质期折旧衰减及不可分割物资的找零偏差预警。',
      sim_offer_header: '己方出让物资 (库存持有)',
      sim_request_header: '对方换取物资 (目标需求)',
      sim_select_item: '选择标准化物资条目',
      sim_quantity: '出让数量 (最小消费原子单位)',
      sim_lifecycle_remaining: '实际剩余保质期 (天)',
      sim_lifecycle_nominal_hint: '未拆封标称保质期：',
      sim_unit_days: '天',
      sim_hint_unit_value: '当前单件价值：',
      sim_hint_depreciation: '保质期折旧损耗：',
      sim_summary_title: '双边易货交割直观结论摘要',
      sim_summary_deliver: '己方交出 (出让物资)：',
      sim_summary_receive: '己方收取 (建议交割目标物资)：',
      sim_result_header: '数学等价交换比与交割建议',
      sim_exchange_rate: '单位等价汇率 (1 出让单位 : X 目标单位)',
      sim_offer_total_score: '己方出让总价值 (您交出)',
      sim_request_unit_score: '目标物资单件价值 (1 单位)',
      sim_exact_quantity: '应得理论精确数量 (目标物资)',
      sim_recommended_quantity: '建议实际收取数量 (目标物资)',
      sim_sub_units_equivalent: '应得拆分子单位总量 (目标物资)',
      sim_imbalance_balanced: '等价交割平衡：无不可分割取整损耗。',
      sim_imbalance_surplus: '取整溢价偏差 (对方交出价值超出己方报价)',
      sim_imbalance_deficit: '取整折损偏差 (对方应向您补足找零)',
      sim_msg_balanced: '数学等价平衡：收取 {rec} 单位（共 {sub} {measure}）“{item}”与您的出让总价值完全匹配，无不可分割取整损耗。',
      sim_msg_surplus_indivisible: '目标物资“{item}”整件不可拆分。从理论值 {exact} 单位取整至 {rec} 整件会产生 +{pct}% 的溢价偏差（超出己方报价 {delta} pts）。请追加己方出让物资，或向对方补足可拆分找零。',
      sim_msg_deficit_indivisible: '目标物资“{item}”整件不可拆分。从理论值 {exact} 单位取整至 {rec} 整件会导致 -{pct}% 的折损偏差（对方尚欠您 {delta} pts 找零）。请向对方索取可拆分小额物资作为找零。',
      sim_msg_sub_unit_rounding: '将目标物资“{item}”拆分为 {sub} {measure}（{rec} 单位）会产生 {sign}{pct}% 的微幅取整误差（{delta} pts）。',
      sim_change_suggestion: '即时找零交割方案（任选以下 1 项物资即可结清 {delta} pts 差额）：',
      sim_change_all_toggle: '展开查看目录中全部 {count} 种物理可行的找零物资方案（{div} 种按 g/ml/un 可拆分物资 + {indiv} 种小额整件物资）',
      table_title: '百年核心物资目录完整比价行情表',
      table_search_placeholder: '按药典/国标名称、英文语义ID或功能标签搜索...',
      table_filter_all_categories: '全部 8 大官方物资分类',
      col_item: '国标/药典规范名称与技术规格',
      col_unit: '最小单位与可分割性',
      col_energy: '热量 / 等效功用 (E)',
      col_mass_vol: '质量 / 体积 (P / Vol)',
      col_lifecycle: '保质期 (V)',
      col_in: '营养指数 (IN)',
      col_base_score: '基础分 (Base)',
      col_mec: '环境系数 (MEC)',
      col_final_score: '最终易货分',
      col_score_baseline: '1. 基准原值 (1.0x)',
      col_score_acute: '2. 急性崩溃期',
      col_score_recon: '3. 秩序重建期',
      unit_divisible: '可拆分计量',
      unit_indivisible: '整件不可拆',
      unit_food: '热量食品',
      unit_non_food: '实用物资/非食品',
      print_header_note: '离线应急实物易货基准比价手册（含全部 3 大危机阶段并列报价）— 由 BARTERSCORE ENGINE v1.0.0 生成',
      print_guide_title: '全面断电纸质易货完整操作手册与预计算零钱速查表',
      print_step1_title: '1. 计算己方总积分（您交出的物资分值）',
      print_step1_body: '在目录表中定位己方物资并选定当前危机阶段列（第8列 基准原值1.0x、第9列 急性崩溃期 或 第10列 秩序重建期），将其分值乘以件数（或用 1 g / 1 ml 单价乘以重量/体积）。',
      print_step2_title: '2. 计算应收取的目标物资精确数量',
      print_step2_body: '用直尺在同一危机阶段列查出目标物资的单件分值，用己方总积分除以目标物资分值（己方积分 ÷ 目标分值）。',
      print_step3_title: '3. 结清整件不可拆差额（可拆分零钱找补）',
      print_step3_body: '交易不可拆整件物资时，将差额积分（找零积分 = 己方积分 − 实收整件积分）对照下方《零钱速查表》或按任意可拆分物资的 1 g / 1 ml 单价称重补齐。',
      print_step4_title: '4. 临期物资纸质心算折旧规则（无电子设备速算）',
      print_step4_body: '纸质作业遇临期物资时按剩余天数直接打折：>90天 = 100% 原分值；31–90天 = 75%（扣减25%）；8–30天 = 50%（少于30天分值减半）；1–7天 = 25%（扣减75%）；0天（已过期）= 0 分拒收。',
      print_scenarios_box_title: '如何并列查阅第 8、9、10 列三大危机阶段行情',
      print_scenarios_box_body: '• 第8列 — 基准原值 (MEC 1.0x)：纯粹物理与营养基础分 (ScoreBase)。 • 第9列 — 急性社会崩溃期：初期求生阶段；饮水/净水片（最高 4.32x）、全身性抗生素、止血急救与免煮口粮分值飙升，金银硬通货跌至 0.01x。 • 第10列 — 秩序重建与农业恢复期：灾后生产恢复；高碳钢手工具、可留种种子、太阳能/对讲机及足金足银硬通货（5.00x）主导交换比价。',
      print_example_box_title: '现场纸笔/计算器实战算例（以第9列“急性崩溃期”为例 — 0% 找零损耗）',
      print_example_box_body: '用 50 袋全脂速溶奶粉 (400 g) 换取 折叠式不锈钢多功能钳 (1 把，整件不可拆)：1) 己方总积分：50 × {milk_pts} pts = {milk_total} pts。2) 多功能钳单价：{pliers_pts} pts/把。3) 相除：{milk_total} ÷ {pliers_pts} = {pliers_exact} 把 → 实收 2 把完整多功能钳（{pliers_two} pts）。4) 应退找零差额：{milk_total} − {pliers_two} = {change_pts} pts → 除以加碘食盐单价（{salt_rate} pts/g）= 补交 {salt_g} g 加碘精制食盐（或按 {sugar_rate} pts/g 补交 {sugar_g} g 白砂糖）。',
      print_expiry_box_title: '保质期折旧双轨心算准则（无需科学计算器对数运算）',
      print_expiry_box_body: '• 准则 A（临期绝对天数）：>90天 = 100%；31–90天 = 75%（扣1/4）；8–30天 = 50%（分值减半）；1–7天 = 25%（仅留1/4）；0天/变质 = 0 分拒收。 • 准则 B（长保质期物资 >90天 按比例折旧）：剩余原厂保质期 50% 约扣减 10% 分值；剩余 25% 约扣减 20% 分值（拟合 log10(V_rem+1) ÷ log10(V_nom+1)）。',
      print_checklist_box_title: '社区易货交割站安全核验清单与断电必备工具包',
      print_checklist_box_body: '• 断电作业 4 件套：A4 横向打印手册、直尺、太阳能/纽扣计算器（或纸笔）、1 g 精度厨房秤 / 1 ml 量筒。 • 交割铁律：1) 凡真空袋漏气、罐头膨胀生锈、药板泡罩破损一律按 0 分拒收；2) 双方必须确认读取同一阶段列；3) 临期不足 30 天先减半再乘数量；4) 整件尾数差额必须用 g/ml/un 零钱物资结清。',
      print_change_table_title: '高流通找零物资分值速查表（克 / 毫升 / 单片）— 全部 3 大危机阶段（第8列基准 | 第9列崩溃 | 第10列重建）'
    },

    items: {
      // 1. cat_staple_foods (20)
      rice_white_polished_raw_1000g: {
        name: '一级精制白大米 / 籼米或粳米 (GB/T 1354 标准，1000 g 袋装)',
        description: '脱壳精碾稻谷 (Oryza sativa)，脂肪含量极低，适合常温长期储备，需加水煮熟食用。'
      },
      beans_common_dry_1000g: {
        name: '干芸豆 / 干红腰豆 / 干黑豆 (Phaseolus vulgaris，1000 g 袋装)',
        description: '高植物蛋白干豆类主食，富含膳食纤维、钾及非血红素铁，需充分沸水煮熟。'
      },
      lentils_dry_raw_500g: {
        name: '干小扁豆 / 兵豆 (Lens culinaris，500 g 袋装)',
        description: '无需提前浸泡即可快速煮熟的高蛋白干豆，大幅节省燃料与饮用水消耗。'
      },
      chickpeas_dry_raw_500g: {
        name: '干鹰嘴豆 (Cicer arietinum，500 g 袋装)',
        description: '兼具优质植物蛋白与不饱和脂肪酸的高热量耐储豆类，富含钙、铁、镁。'
      },
      pasta_wheat_dry_500g: {
        name: '硬质小麦粉干意大利面 / 干挂面 (500 g 包装)',
        description: '低水分挤压成型干面条，复水煮熟极快，适口性与饱腹感强。'
      },
      flour_cassava_dry_1000g: {
        name: '熟制干燥木薯粉 (Manihot esculenta，1000 g 袋装)',
        description: '经烘焙熟化脱水的木薯颗粒粉，无需生火煮沸即可直接干吃或冷水冲调食用。'
      },
      flour_wheat_enriched_1000g: {
        name: '营养强化特一粉 / 通用小麦面粉 (强化铁与叶酸，1000 g 袋装)',
        description: '符合粮油国标的精制小麦粉，可用于烙饼、死面干粮及面糊制作。'
      },
      cornmeal_flaked_dry_500g: {
        name: '预熟化玉米片粉 / 速熟玉米糁 (500 g 袋装)',
        description: '脱胚压片处理的玉米粉，仅需少量热水焖蒸即可快速食用，极省燃料。'
      },
      oats_rolled_whole_500g: {
        name: '全谷物压片燕麦片 (Avena sativa，500 g 袋装)',
        description: '蒸汽熟化压制的完整燕麦片，富含β-葡聚糖与蛋白质，可冷水浸泡直接食用。'
      },
      milk_powder_whole_400g: {
        name: '全脂速溶调制乳粉 / 全脂奶粉 (GB 19644 标准，400 g 听装/袋装)',
        description: '喷雾干燥纯牛奶粉，富含完全蛋白质、乳脂、高生物利用度钙及维生素 A、D。'
      },
      oil_vegetable_refined_900ml: {
        name: '一级精炼食用植物油 (大豆油/葵花籽油/菜籽油，900 mL PET瓶装)',
        description: '高能量密度纯脂质来源 (9 kcal/g)，用于补充日常热量缺口及应急油灯照明。'
      },
      lard_pork_rendered_500g: {
        name: '精炼纯猪油 / 食用猪板油 (500 g 密封罐/袋装)',
        description: '高饱和度动物油脂，抗酸败能力优于普通植物油，兼具高热量补给与食物油封保存功能。'
      },
      fish_sardine_canned_oil_125g: {
        name: '油浸沙丁鱼罐头 (125 g 易拉罐装)',
        description: '商业无菌开罐即食深海鱼蛋白，酥软鱼骨提供丰富钙质与 Omega-3 脂肪酸。'
      },
      fish_tuna_canned_solid_170g: {
        name: '油浸块状金枪鱼罐头 (170 g 马口铁密封罐装)',
        description: '高温高压灭菌高蛋白低水分鱼肉罐头，常温下可长期安全保存并直接食用。'
      },
      meat_bovine_cured_salted_500g: {
        name: '传统盐腌风干牛肉干 / 腊牛肉 (500 g 真空包装)',
        description: '通过高渗盐腌与脱水工艺保存的牛瘦肉，富含血红素铁、完全蛋白质与氯化钠。'
      },
      meat_bovine_canned_cooked_320g: {
        name: '咸牛肉罐头 / 红烧牛肉罐头 (320 g 马口铁罐装)',
        description: '军民通用高温灭菌熟牛肉罐头，富含动物脂肪与优质蛋白，开罐即食。'
      },
      peanut_paste_roasted_500g: {
        name: '纯烘焙无糖花生酱 (500 g 密封瓶装)',
        description: '超高热量密度的植物脂肪与蛋白质糊状口粮，无需加热或用水即可直接食用。'
      },
      honey_bee_pure_500g: {
        name: '纯正天然成熟百花蜂蜜 (GB 14963 标准，500 g 密封瓶装)',
        description: '超低水分活度的天然转化糖，常温保质期极长，兼具创面高渗抑菌促进愈合作用。'
      },
      biscuit_wheat_salted_dry_400g: {
        name: '咸味苏打饼干 / 韧性干饼干 (400 g 密封包装)',
        description: '低水分耐储小麦烘焙口粮，适合行进途中随时补充碳水化合物与钠盐。'
      },
      water_potable_sealed_1000ml: {
        name: '包装饮用水 / 天然矿泉水 (GB 19298 标准，1000 mL 原厂密封瓶装)',
        description: '微生物指标合格的无菌饮用水，用于急性缺水补给及口服药物冲配。'
      },

      // 2. cat_critical_nutrition (5)
      infant_formula_powder_stage1_400g: {
        name: '婴儿配方乳粉 1段 (0–6月龄适用，GB 10765 标准，400 g 密封铁听装)',
        description: '断奶或无母乳环境下新生儿唯一救命全营养来源，强化乳清蛋白、铁及维生素 C。'
      },
      ration_emergency_compressed_500g: {
        name: '高能量应急救生压缩饼干 / 船用压缩口粮 (SOLAS 标准，500 g 真空铝箔砖)',
        description: '高密度烘焙小麦油脂复合块，强化多种维生素，配方具有低致渴性。'
      },
      protein_whey_concentrate_powder_100g: {
        name: '浓缩乳清蛋白粉 (WPC 80% 蛋白质含量，100 g 密封袋装)',
        description: '富含支链氨基酸 (BCAA) 的高生物利用度蛋白源，用于外伤术后、烧伤及重度营养不良恢复。'
      },
      coconut_milk_powder_200g: {
        name: '速溶纯椰浆粉 / 椰子粉 (200 g 铝箔袋装)',
        description: '富含中链甘油三酯 (MCT) 的高热量植物脂肪粉，温水冲调即可快速供能。'
      },
      gelatin_unflavored_powder_50g: {
        name: '食用明胶粉 / 纯水解胶原蛋白粉 (无味型，50 g 袋装)',
        description: '高纯度结构蛋白补充剂与食品增稠凝固剂，干燥密封下极耐储存。'
      },

      // 3. cat_spices_morale (15)
      salt_sodium_chloride_iodized_1000g: {
        name: '食用加碘精制盐 (氯化钠 + 碘酸钾，GB 2721 标准，1000 g 袋装)',
        description: '维持人体体液渗透压的核心电解质，用于腌制肉鱼防腐、配制生理盐水及口服补液。'
      },
      sugar_sucrose_crystal_1000g: {
        name: '一级白砂糖 / 精制蔗糖 (GB/T 317 标准，1000 g 袋装)',
        description: '快速升糖能量源、果酱高渗防腐剂，以及配制自制口服补液盐促进钠水吸收的必需底物。'
      },
      coffee_roasted_ground_vacuum_500g: {
        name: '深度烘焙研磨纯咖啡粉 (500 g 真空铝箔砖装)',
        description: '中枢神经系统咖啡因兴奋剂，在危机时期具有极高硬通货流通属性的提神物资。'
      },
      coffee_instant_soluble_granules_50g: {
        name: '冻干/喷雾干燥速溶黑咖啡粉 (50 g 瓶装或铝箔袋装)',
        description: '冷水或热水均可瞬间溶解，单位重量士气提升与抗疲劳价值极高。'
      },
      tomato_paste_concentrated_300g: {
        name: '双倍浓缩纯番茄膏 (可溶性固形物 28–30%，300 g 马口铁罐装)',
        description: '富含番茄红素、钾与维生素 C 的酸性调味基料，有效改善单一主食口感。'
      },
      broth_bouillon_dehydrated_cube_10g: {
        name: '浓缩高汤块 / 牛肉鸡汁浓汤宝 (10 g 独立铝箔单块)',
        description: '富含钠盐、油脂与呈味核苷酸的固体汤料，可将白水煮米饭转化为可口热汤。'
      },
      vinegar_acetic_acid_4pct_750ml: {
        name: '酿造/蒸馏白醋 (总酸 ≥4.0% 乙酸溶液，750 mL 瓶装)',
        description: '用于蔬菜酸渍防腐（抑制肉毒梭菌）、水垢清除及日常环境弱酸性消杀。'
      },
      garlic_dehydrated_powder_100g: {
        name: '纯脱水大蒜粉 / 蒜粒 (Allium sativum，100 g 密封袋装)',
        description: '长效耐储香辛调味料，替代易腐烂发芽的新鲜大蒜。'
      },
      pepper_black_ground_50g: {
        name: '纯研磨黑胡椒粉 (Piper nigrum，50 g 密封袋装)',
        description: '高单位价值传统香辛料，去腥增香并具备良好的小额易货流通性。'
      },
      sodium_bicarbonate_pure_100g: {
        name: '药用/食用级纯碳酸氢钠粉 (小苏打 NaHCO3，100 g 袋装)',
        description: '多功能碱性物资：中和胃酸、口腔清洁、配制标准口服补液盐缓冲剂及面食膨松剂。'
      },
      chocolate_dark_cocoa_60pct_100g: {
        name: '纯脂黑巧克力排块 (总可可固形物 ≥60%，100 g 铝箔板装)',
        description: '富含可可脂、可可碱与葡萄糖的高能量士气口粮，耐高温融化性能优于牛奶巧克力。'
      },
      candy_hard_glucose_unit_5g: {
        name: '独立包装葡萄糖/蔗糖硬质水果糖 (5 g 单颗装)',
        description: '低血糖急救快速含服糖源，同时是极佳的微小面额易货找零单位。'
      },
      tea_camellia_sinensis_dry_50g: {
        name: '精制干燥红茶 / 绿茶茶叶 (Camellia sinensis，50 g 密封袋/盒装)',
        description: '富含茶多酚、单宁与茶氨酸的传统饮品，有助于改善煮沸消毒水的苦涩口感。'
      },
      tobacco_cigarette_filtered_unit: {
        name: '机制过滤嘴烤烟/混合型卷烟 (1 支标准单支装)',
        description: '高度标准化的尼古丁最小消费单元，在历次战乱与危机中均充当高流动性小额等价物。'
      },
      alcohol_ethanol_potable_40pct_500ml: {
        name: '40% vol. 蒸馏饮用烈酒 / 纯粮伏特加或清香型白酒 (500 mL 玻璃/PET瓶装)',
        description: '高流通性硬通货酒类，可用于中草药有效成分浸提、创面应急清洁及御寒慰藉。'
      },

      // 4. cat_pharma_essential (15 - 严格采用《中华人民共和国药典》通用名)
      amoxicillin_500mg_capsule: {
        name: '阿莫西林胶囊 0.5 g (500 mg 按 C16H19N3O5S 计，1 粒铝塑泡罩装)',
        description: '《中国药典》收载广谱半合成青霉素类β-内酰胺抗生素，用于敏感菌所致呼吸道、耳鼻喉、泌尿道及软组织感染。'
      },
      azithromycin_500mg_tablet: {
        name: '阿奇霉素片 0.5 g (500 mg 薄膜衣片，1 片铝塑泡罩装)',
        description: '《中国药典》收载氮杂内酯类（大环内酯类）抗生素，半衰期长、每日仅需服药一次，用于支原体肺炎及肠道感染。'
      },
      ciprofloxacin_500mg_tablet: {
        name: '盐酸环丙沙星片 0.5 g (500 mg 按环丙沙星计，1 片铝塑泡罩装)',
        description: '《中国药典》收载第三代氟喹诺酮类杀菌药，对革兰阴性杆菌（伤寒、志贺菌痢疾、严重尿路及全身感染）具有强效活性。'
      },
      metronidazole_400mg_tablet: {
        name: '甲硝唑片 0.4 g (400 mg，1 片装)',
        description: '《中国药典》收载抗厌氧菌及抗滴虫/抗阿米巴原虫核心药物，用于污染水源贾第鞭毛虫病、阿米巴痢疾及牙源性/腹腔厌氧菌感染。'
      },
      paracetamol_500mg_tablet: {
        name: '对乙酰氨基酚片 (扑热息痛) 0.5 g (500 mg，1 片装)',
        description: '《中国药典》与 WHO 一线解热镇痛药，用于发热及轻中度疼痛，无非甾体抗炎药常见的胃肠道溃疡出血风险。'
      },
      metamizole_sodium_500mg_tablet: {
        name: '安乃近片 (氨基比林甲磺酸钠 / Metamizole Sodium) 0.5 g (500 mg，1 片装)',
        description: '吡唑酮类强效解热、镇痛及解痉药，用于顽固性高热急症及剧烈内脏平滑肌绞痛。'
      },
      ibuprofen_400mg_tablet: {
        name: '布洛芬片 0.4 g (400 mg 糖衣/薄膜衣片，1 片装)',
        description: '《中国药典》收载非甾体抗炎药 (NSAID)，具有显著抗炎、镇痛与解热作用，用于骨关节外伤疼痛、牙痛及高热。'
      },
      ibuprofen_oral_suspension_50mg_ml_20ml: {
        name: '布洛芬混悬滴剂 50 mg/mL (20 mL 附滴管瓶装)',
        description: '高浓度儿科专用液体退热镇痛药，可通过刻度滴管按婴幼儿体重精确给药。'
      },
      loperamide_hydrochloride_2mg_tablet: {
        name: '盐酸洛哌丁胺胶囊 / 片 2 mg (1 粒/片装)',
        description: '《中国药典》收载肠道动力抑制型止泻药，用于控制非细菌性急性水样腹泻，防止致命性脱水与电解质衰竭。'
      },
      oral_rehydration_salts_who_sachet_27_9g: {
        name: '口服补液盐散 (III) / WHO 低渗配方口服补液盐 (27.9 g / 1 L 冲剂袋装)',
        description: '《中国药典》与世卫组织标准低渗葡萄糖电解质散 (245 mOsm/L)，治疗急性腹泻脱水与热射病失水的一线救命药。'
      },
      loratadine_10mg_tablet: {
        name: '氯雷他定片 10 mg (1 片铝塑泡罩装)',
        description: '《中国药典》收载第二代非镇静型长效 H1 受体拮抗剂，用于过敏性鼻炎、急性荨麻疹及虫咬超敏反应且不引起嗜睡。'
      },
      omeprazole_20mg_capsule: {
        name: '奥美拉唑肠溶胶囊 20 mg (1 粒铝塑泡罩装)',
        description: '《中国药典》收载质子泵抑制剂 (PPI)，抑制胃酸分泌，用于消化性溃疡出血预防、急性胃炎及服用抗炎药时的胃黏膜保护。'
      },
      potassium_iodide_130mg_tablet: {
        name: '碘化钾片 130 mg (核辐射应急甲状腺阻断片，1 片刻痕片)',
        description: '核事故与放射性落下灰应急专用药物，通过稳定碘饱和甲状腺，阻断放射性碘-131 的摄取沉积。'
      },
      ascorbic_acid_500mg_tablet: {
        name: '维生素C片 (抗坏血酸) 0.5 g (500 mg，1 片装)',
        description: '《中国药典》收载水溶性必需维生素，防治坏血病、加速创伤胶原蛋白合成并促进植物性非血红素铁吸收。'
      },
      multivitamin_mineral_complex_tablet: {
        name: '多维元素片 (复合维生素与矿物质薄膜衣片，1 片装)',
        description: '含维生素 A、B族、C、D、E 及铁、锌、硒等微量元素，预防长期单一口粮导致的营养缺乏症。'
      },

      // 5. cat_trauma_hygiene (15)
      ethanol_antiseptic_70pct_100ml: {
        name: '70%–75% 医用乙醇消毒液 (70% v/v 酒精溶液，100 mL 密封瓶装)',
        description: '《中国药典》标准杀菌浓度，用于完整皮肤消毒、医疗器械擦拭及应急引燃助燃。'
      },
      hydrogen_peroxide_3pct_10vol_100ml: {
        name: '过氧化氢消毒液 3% (医用双氧水，100 mL 避光瓶装)',
        description: '《中国药典》收载强氧化性创面清洗剂，通过发泡机械剥离深部污染伤口坏死组织并抑制破伤风厌氧菌。'
      },
      povidone_iodine_10pct_topical_100ml: {
        name: '聚维酮碘溶液 10% (医用碘伏外用溶液，有效碘 1%，100 mL 瓶装)',
        description: '《中国药典》收载广谱碘伏消毒剂，对细菌繁殖体、真菌、病毒及部分芽孢均有效，对创面刺激小、无需脱碘。'
      },
      chlorhexidine_digluconate_2pct_100ml: {
        name: '葡萄糖酸氯己定消毒液 2% (洗必泰外用溶液，100 mL 瓶装)',
        description: '具有持久抑菌残留效应的阳离子表面活性消毒剂，在血液和血清存在下仍保持抗菌活性。'
      },
      gauze_sterile_compress_7_5cm_unit: {
        name: '医用脱脂棉无菌纱布敷料垫 7.5 × 7.5 cm (独立灭菌包装 1 片)',
        description: '多层折叠纯棉无菌外科敷料，用于伤口填塞止血、吸收渗出液及无菌包扎覆盖。'
      },
      tape_medical_waterproof_spool_5m: {
        name: '医用防水氧化锌胶布 / 外科固定胶带 2.5 cm × 5 m (1 卷)',
        description: '高粘性防水医用织物胶布，用于牢固固定敷料、夹板及预防长途行军足部磨泡。'
      },
      bandage_elastic_compression_roll_2m: {
        name: '医用高弹力加压绷带卷 10 cm × 2 m (附固定卡扣，1 卷)',
        description: '可重复清洗使用的弹性织物绷带，用于创伤加压止血包扎、关节扭伤制动及夹板固定。'
      },
      tourniquet_tactical_arterial_unit: {
        name: '旋压式战术动脉止血带 (CAT 标准单手操作型，1 条)',
        description: '四肢大动脉破裂大出血一线救命器械，通过高强度绞棒机械加压彻底阻断远端动脉血流。'
      },
      suture_surgical_nylon_3_0_needle_unit: {
        name: '带针无菌医用单丝尼龙手术缝合线 3-0 (附反角三角缝合针，1 包)',
        description: '高抗张强度不可吸收聚酰胺单丝缝合线，用于深部外伤撕裂伤口的清创一期缝合。'
      },
      syringe_sterile_5ml_with_needle_unit: {
        name: '一次性使用无菌螺口注射器 5 mL 附 21G 注射针 (独立吸塑包装 1 支)',
        description: '用于肌内/静脉精确注射给药，或配合洁净生理盐水对污染伤口进行高压脉冲冲洗。'
      },
      gloves_nitrile_exam_pair: {
        name: '一次性医用无粉丁腈检查手套 (1 双)',
        description: '抗穿刺合成丁腈橡胶防护屏障，防止创伤救治中接触血液传染病病原体及化学污染物。'
      },
      respirator_particulate_n95_pff2_unit: {
        name: '医用防护口罩 / 颗粒物防护口罩 N95 / KN95 / FFP2 无呼吸阀 (GB 19083 / GB 2626，1 只)',
        description: '静电驻极熔喷布过滤层对非油性颗粒物、飞沫气溶胶、火灾浓烟及粉尘过滤效率 ≥95%。'
      },
      soap_glycerin_neutral_bar_200g: {
        name: '无香型中性甘油皂 / 医用清洁肥皂 (200 g 固体皂块)',
        description: '高耐储表面活性清洁剂，用于手部卫生、创口外周清洗及衣物去污，切断粪口传播链。'
      },
      paper_toilet_cellulose_roll_30m: {
        name: '原生木浆卫生卷纸 (30 m 标准卷装)',
        description: '高频消耗的个人卫生必需品，同时可作为干燥易燃纤维火绒使用。'
      },
      sanitary_pad_absorbent_external_unit: {
        name: '独立密封包装高吸收性卫生巾 (1 片)',
        description: '女性经期核心卫生保障物资，在紧急外伤时可兼作高吸液量无菌加压大敷料。'
      },

      // 6. cat_water_fire_shelter (10)
      sodium_hypochlorite_2_5pct_1000ml: {
        name: '次氯酸钠消毒原液 (有效氯含量 2.5%，无香精色素，1000 mL 瓶装)',
        description: '高浓度含氯液体消杀剂，按比例稀释最高可净化约 10,000 升饮用水并杀灭霍乱弧菌与伤寒杆菌。'
      },
      water_purification_nadcc_tablet_unit: {
        name: '二氯异氰尿酸钠 (NaDCC) 饮用水泡腾消毒片 (1 片可净化 1–2 L 水)',
        description: '世卫组织推荐有机氯净水片，常温性质稳定，快速杀灭水中细菌、病毒及贾第虫包囊。'
      },
      filter_water_hollow_fiber_0_1micron_unit: {
        name: '0.1 微米绝对孔径中空纤维超滤膜便携净水器 (可反冲洗型，1 支)',
        description: '纯物理微孔过滤装置，无需化学品即可滤除水中 99.9999% 的致病菌与原生动物寄生虫。'
      },
      lighter_butane_piezo_standard_unit: {
        name: '标准充气式异丁烷打火机 (砂轮或压电陶瓷点火，1 只)',
        description: '可提供约 3,000 次瞬时明火点燃；燃料耗尽后其砂轮火石仍可激发火花引燃火绒。'
      },
      ferrocerium_ignition_rod_8mm_unit: {
        name: '8 mm 实心镧铈打火镁棒 / 铁铈齐打火棒 (附高碳钢刮片，1 套)',
        description: '全天候高可靠性发火合金棒，在暴雨严寒下仍可刮出 3,000 °C 高温火花（寿命逾万次）。'
      },
      matches_waterproof_safety_box_40un: {
        name: '防潮防水防风安全火柴 (40 根盒装，附防水磷面)',
        description: '药头经疏水涂层处理的红磷安全火柴，受潮甩干后仍能正常擦燃。'
      },
      candle_paraffin_solid_white_30g_unit: {
        name: '高熔点纯白固体石蜡照明蜡烛 (30 g 单支装)',
        description: '无烟耐燃应急光源、狭小避难空间微热源，蜡体还可用于拉链润滑与帆布接缝防水。'
      },
      fuel_solid_hexamine_tablet_14g_unit: {
        name: '乌洛托品 (六亚甲基四胺 / Hexamine) 无烟固体燃料块 (14 g 单块装)',
        description: '高热值军用级固体炉燃料，燃烧无黑烟、不液化流淌，单块即可煮沸 500 mL 饮用水。'
      },
      blanket_thermal_aluminized_mylar_unit: {
        name: '镀铝聚酯薄膜 (Mylar) 急救保温毯 / 太空防寒毯 210 × 130 cm (1 条)',
        description: '反射高达 90% 的人体红外辐射热量，预防失温症、创伤休克低体温并可用于反光求救。'
      },
      tarp_polyethylene_waterproof_3x3m_unit: {
        name: '高密度双面覆膜聚乙烯 (PE) 防水油布 / 天幕篷布 3 × 3 m (附金属扣眼，1 张)',
        description: '快速搭建防雨防风庇护所、隔绝地面潮气及收集洁净雨水的多功能防护布。'
      },

      // 7. cat_tools_energy_comms (14)
      knife_fixed_blade_carbon_steel_fulltang: {
        name: '全龙骨 (Full-Tang) 高碳钢直柄野外生存刀 (附刀鞘，1 把)',
        description: '不可替代的核心求生工具，可劈木备柴 (Batoning)、切割食材并配合打火棒/燧石取火。'
      },
      multitool_pliers_stainless_folding_unit: {
        name: '重型不锈钢折叠多功能工具钳 (1 把)',
        description: '集成尖嘴钳、硬质剪线钳、木锯、主刀、锥子及十字/一字螺丝刀，用于设备抢修。'
      },
      saw_wire_stainless_pocket_unit: {
        name: '多股绞合不锈钢便携口袋线锯 (附旋转拉环，1 条)',
        description: '超轻量口袋伐木工具，可快速锯断枯木、庇护所支架、骨头或塑料管材。'
      },
      tape_cloth_adhesive_waterproof_48mm_10m: {
        name: '高强度防水布基胶带 / 大力胶带 48 mm × 10 m (1 卷)',
        description: '聚乙烯覆膜纤维编织强力胶带，用于修补破损防水布、军靴、水桶及固定夹板。'
      },
      cord_nylon_kernmantle_550lb_10m: {
        name: '七芯高强锦纶伞绳 (550 磅级 Type III 夹芯尼龙绳，10 m 束装)',
        description: '耐腐抗拉结构绳索，抽出内部 7 股细尼龙芯线可拆分为鱼线、陷阱套索或缝补线。'
      },
      steel_wool_fine_grade_0000_pad_unit: {
        name: '#0000 号极细低碳钢丝棉团 (1 团)',
        description: '接触电池正负极或镁棒火花即刻剧烈燃烧的极佳引火物，兼具精密金属除锈抛光功能。'
      },
      needle_sewing_heavy_steel_with_thread_10m: {
        name: '重型帆布/皮革手缝钢针配 10 m 涂蜡高强涤纶线 (1 套)',
        description: '用于修补撕裂背囊、防寒服、重型鞋靴及帐篷篷布的关键耐用工具包。'
      },
      fishing_kit_line_20m_hooks_5un_weights_5un: {
        name: '便携求生垂钓工具包 (含 20 m 单丝尼龙鱼线、5 枚高碳钢鱼钩、5 颗铅坠，1 套)',
        description: '几乎不消耗人体热量的被动式水产蛋白质获取工具。'
      },
      battery_alkaline_lr6_aa_1_5v_unit: {
        name: '5号碱性锌锰干电池 (IEC LR6 / GB/T 8897.2 AA 1.5 V，1 节)',
        description: '通用性最强的 1.5 V 一次电源，密封储存期长达 7–10 年，适用于手电筒、收音机及医疗仪器。'
      },
      battery_alkaline_lr03_aaa_1_5v_unit: {
        name: '7号碱性锌锰干电池 (IEC LR03 / GB/T 8897.2 AAA 1.5 V，1 节)',
        description: '紧凑型 1.5 V 一次电源，广泛用于头灯、脉搏血氧仪及便携式小型电子设备。'
      },
      battery_lithium_ion_18650_3_7v_3000mah_unit: {
        name: '18650 圆柱形可充电锂离子电池 3.7 V 3000 mAh (带过充过放保护板，1 节)',
        description: '高能量密度二次储能电芯 (~11.1 Wh)，支持配合太阳能板循环充放电 500 次以上。'
      },
      flashlight_led_aluminum_aa_compatible_unit: {
        name: '航空铝合金固态 LED 战术手电筒 (兼容单节 5号/AA 电池，1 支)',
        description: '防摔防泼溅高光效固体光源，仅需一节随处可得的 5号电池即可工作。'
      },
      panel_solar_monocrystalline_usb_5v_10w_unit: {
        name: '折叠式单晶硅光伏太阳能充电板 10 W (带 5 V 稳压 USB 接口，1 块)',
        description: '离网可再生直流发电装置，可持续为 18650 电池盒、LED 照明灯及无线电对讲机补电。'
      },
      radio_transceiver_vhf_uhf_dualband_unit: {
        name: '便携式 VHF/UHF 双频段调频无线电对讲机 (136–174 / 400–520 MHz，1 台)',
        description: '完全脱离基站与互联网运行的视距双向战术通信及应急广播接收终端。'
      },

      // 8. cat_store_of_value (6)
      faraday_bag_shielded_rf_emp_medium_unit: {
        name: '多层复合防射频 / 防电磁脉冲 (EMP) 法拉第屏蔽袋 (中号，1 个)',
        description: '提供 >85 dB 电磁衰减屏蔽，保护对讲机、太阳能控制器及知识存储卡免受核电磁脉冲或太阳风暴损毁。'
      },
      microsd_flash_storage_64gb_offline_wiki_unit: {
        name: '预置离线临床医学、农学与工程百科全书的 64 GB 工业级 MicroSDXC 存储卡 (1 张)',
        description: '浓缩人类核心科技文献（外科手册、中国药典、作物栽培、冶金制造与离线地图）的文明火种库。'
      },
      eyeglasses_reading_convex_diopter_plus_2_0: {
        name: '聚碳酸酯凸透镜老花镜 / 阅读眼镜 (+2.00 D / 200度，1 副)',
        description: '恢复近距离精细视觉以进行伤口缝合、电路维修与文献阅读，镜片还可聚光取火。'
      },
      seeds_open_pollinated_vegetable_mix_50g: {
        name: '非杂交可留种常规蔬菜种子综合储备包 (开放授粉品种，50 g 铝箔密封袋)',
        description: '高发芽率可自留种农作物种质库（四季豆、玉米、南瓜、甘蓝、番茄），保障跨年度粮食自给。'
      },
      silver_bullion_999_fine_1_troy_oz_31_1g: {
        name: 'Ag999 足银投资银币 / 标准银条 (1 金衡盎司 / 31.1035 g)',
        description: '全球公认的中等面额贵金属硬通货，适合秩序重建期大宗交易及银离子微动力抑菌储水。'
      },
      gold_bullion_999_fine_fractional_1g: {
        name: 'Au9999 万足金标准投资金片 / 1 克小金条 (1.0 g 检验证书封装)',
        description: '化学性质永恒稳定、单位毫克价值密度最高的终极财富储藏与跨区域清算媒介。'
      }
    }
  };

  return Object.freeze(ZH_HANS_DICTIONARY);
});
