# BarterScore Engine (v1.1.0)

**A Local-First library for Collapse Informatics and Off-Grid Economics.**
*（面向崩溃信息学与离网经济学的本地优先开源计算库。）*

> **语言:**
> [**English (en-US)**](../README.md) · [**Português (pt-BR)**](./README.pt-BR.md) · [**Español (es-ES)**](./README.es-ES.md) · [**Français (fr-FR)**](./README.fr-FR.md) · [**Русский (ru-RU)**](./README.ru-RU.md) · [**Kiswahili (sw-KE)**](./README.sw-KE.md) · [**العربية (ar-SA)**](./README.ar-SA.md) · [**简体中文 (zh-Hans)**](./README.zh-Hans.md) · [**纸质离线操作手册 (`OFFLINE_MANUAL.zh-Hans.md`)**](./OFFLINE_MANUAL.zh-Hans.md)

---

**BarterScore Engine** 是一套确定性、跨平台、零外部依赖、100% 离线优先（Offline-First）的实物与基础专业技术服务易货数学估值引擎及 128 项标准参考目录，专为供应链中断、人道主义危机及社会秩序崩溃场景下的实用价值评估与双边交换比价而设计。

本项目采用 [**Apache License 2.0**](https://www.apache.org/licenses/LICENSE-2.0) 开源许可，全部核心代码均使用纯原生 **Vanilla JavaScript (ES6+ UMD)** 与 **HTML5/CSS3** 编写，无需 Node.js、无需本地 Web 服务器或互联网连接，支持直接通过本地 `file://` 协议双击运行，同时兼容 CommonJS (`module.exports`) 与 ES Module 环境。

---

## 目录

1. [核心架构与工程原则](#1-核心架构与工程原则)
2. [官方数学估值公式](#2-官方数学估值公式)
3. [科学方法论、权重标定标尺与权威数据源（一键核验 + 离线审计档案）](#3-科学方法论权重标定标尺与权威数据源一键核验--离线审计档案)
4. [数据模型契约 (Schema Contract) 与科学标准化](#4-数据模型契约-schema-contract-与科学标准化)
5. [一键离线启动、纸质速查手册打印与仓库结构](#5-一键离线启动纸质速查手册打印与仓库结构)
6. [开发者集成指南与 API 参考手册](#6-开发者集成指南与-api-参考手册)
7. [如何扩展第 129+ 号物资或新增语言包](#7-如何扩展第-129-号物资或新增语言包)
8. [开源许可与治理条款](#8-开源许可与治理条款)

---

## 1. 核心架构与工程原则

- **零运行时依赖 (`file://` 协议原生兼容)：** `src/`、`data/` 与 `locales/` 下的所有模块均采用通用模块定义（UMD）模式，既能安全挂载到全局命名空间 `window.BarterCore` 以规避浏览器本地 `file://` 的 CORS 跨域拦截，又支持 `module.exports`。
- **物理属性与多语言完全解耦：** 物资的物理与营养参数严格独立存储于 `data/items_core.js`，并采用全英文小写 `snake_case` 语义化 ID。多语言字典独立存储于 `locales/[lang].js`（遵循 [**IETF BCP 47 / RFC 5646**](https://www.rfc-editor.org/info/bcp47) 标准：`en-US`、`pt-BR`、`es-ES`、`fr-FR`、`ru-RU`、`sw-KE`、`ar-SA`、`zh-Hans`），具备三级自动回退机制（Fallback）：
  ```text
  当前所选语言  ───►  en-US (英文基准字典)  ───►  技术语义 ID
  ```
- **严禁商业品牌与最小消费原子单位：** 严禁使用任何商业商标。所有物资均按**最小消费原子单位**（`1 片/粒药`、`1 节电池`、`1 卷胶带`、`1 瓶 100mL 溶液`、`1 袋 1000g 原粮`）标准化，药品严格遵循[**世界卫生组织国际非专利名称 (WHO/INN)**](https://www.who.int/teams/health-product-and-policy-standards/inn) 与 [**《中华人民共和国药典》(ChP)**](https://www.chp.org.cn/)，电池遵循 [**IEC 60086 / IEC 61960**](https://webstore.iec.ch/en/publication/603) 标准，食品遵循 [**Codex Alimentarius (国际食品法典)**](https://www.fao.org/fao-who-codexalimentarius/) / [**GB 国家标准**](https://openstd.samr.gov.cn/)。

---

## 2. 官方数学估值公式

### 2.1. 营养指数 (`IN`)
对于非食品物资（`is_food: false`），固定 `IN = 1.0`。对于食品物资（`is_food: true`），综合计算蛋白质与脂肪供能占比、添加糖扣分及关键微量营养素加成，并严格限制（`Clamp`）在 `[0.5, 2.5]` 区间内：

```text
MacroFactor = (pct_kcal_protein × 1.5) + (pct_kcal_fat × 1.0) - (pct_kcal_added_sugar × 1.2)
MicroFactor = (+0.3 若 high_vit_c) + (+0.2 若 high_sodium_potassium) + (+0.2 若 high_calcium_iron)
IN          = Clamp(1.0 + MacroFactor + MicroFactor, 0.5, 2.5)
```

### 2.2. 基础分 (`ScoreBase`) 与实时剩余保质期折旧
将总热量或等效功用基数（`E`）与携行重量体积惩罚（`P + Vol + 0.1`）、以 10 为底的对数保质期因子（`log₁₀(V + 1)`）、制备简易度（`CP`）、心理士气系数（`FP`）及包装抗损度（`Frag`）相结合：

```text
ScoreBase = ( (E × IN) / (P + Vol + 0.1) ) × log₁₀(V + 1) × CP × FP × Frag
```

- **实时保质期折旧：** 当传入实时剩余保质期天数 `current_lifecycle_remaining`（或 `offerRemainingDays`）时，将动态替换标称保质期 `V`。若 `V ≤ 0`，则判定物资已过期失效，`ScoreBase = 0`。

### 2.3. 外部环境修正系数 (`MEC`) 与最终易货分

```text
ScoreFinal = ScoreBase × MEC
```

- **`acute_collapse` (急性社会崩溃期)：** 价值储藏类 `cat_store_of_value`（金银硬通货等）权重骤降至 **`0.01x`**；饮用水净化、动脉止血、全身性抗生素及即食口粮获得生存紧缺加成。
- **`economic_reconstruction` (秩序重建期)：** 价值储藏类 `cat_store_of_value` 升值至 **`5.0x`**，耐用手工具、可留种农作物种子、太阳能板及无线电对讲机同步获得生产力加成。

### 2.4. 双边易货汇率与不可分割找零预警 (`calculateTrade`)
设己方出让物资为 `A`（数量 `Q_A`），对方目标物资为 `B`：

```text
Q_B_精确 = ( ScoreFinal(A) × Q_A ) / ScoreFinal(B)
```

若物资 `B` 为整件不可拆分物资（`is_divisible: false`），引擎自动四舍五入至最近的整数单位（`Q_B_建议 = max(1, round(Q_B_精确))`），并在 `trade_imbalance` / `tradeImbalanceWarning` 中精确输出溢价或折损百分比，提示交易双方使用高流动性可拆分物资（如按克计量的加碘盐、白砂糖或单粒药片）补齐差价。

---

## 3. 科学方法论、权重标定标尺与权威数据源（一键核验 + 离线审计档案）

为什么目录中的每一项物资会得出该特定分值？**`1 易货基准点 (1 pt)`** 的物理意义是什么？为什么物资 B 的分值会恰好是物资 A 的 2 倍（`2x`）？由于全球没有任何单一政府机构发布过能直接将“1 千克大米”、“1 粒阿莫西林胶囊”与“1 节 18650 锂离子电池”放在同一数学尺度上比价的易货公式，**BarterScore Engine** 将**经核实的官方实证记录**（已保存在本地离线审计目录 [`audit_sources/`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) 中供断网核查，并在下方提供一键直达链接）与**经过严密论证的小数阶梯工程标尺**进行了融合。

### 3.0. `1 易货基准点 (1 pt)` 的物理定义及物资分值翻倍 (`2x`) 的数学条件
通过对公式 `ScoreBase = ((E × IN) / (P + Vol + 0.1)) × log₁₀(V + 1) × CP × FP × Frag` 进行量纲分析：
- **`1.0000 pt` 的物理定义：** **`1 易货基准点 (1 pt)`** 精确对应于：**在标准中性可用度（`CP = 1.0`, `FP = 1.0`, `Frag = 1.0`）下，每单位重量-体积运输负荷（`P + Vol + 0.1 = 1.0`）跨越 1 个对数十进位保质期（`V = 9 天` → `log₁₀(10) = 1.0`）所提供的 1 千卡有效生存效用（`E × IN = 1`）**。
- **为什么物资 B 的得分是物资 A 的 `2.0x`：** 在其余变量不变时，满足以下任一客观条件即可使分值翻倍：**（1）** 提供的可代谢热量（`kcal`）或节省的人体代谢损耗（`EEB`）翻倍（`2×`）；**（2）** 相同效用下的质量与体积综合运输负荷减半（`P + Vol + 0.1`）；**（3）** 保质期在以 10 为底的对数尺度上翻倍（例如 `1,000 天` [`log₁₀ ≈ 3.0`] 对比 `31 天` [`log₁₀ ≈ 1.5`]）；或 **（4）** 操作可用性乘积（`CP × FP × Frag`）高出 1 倍。

### 3.1. 官方科学、监管与人道主义权威数据源（`audit_sources/` 本地离线快照 + 一键核验链接）
> **100% 离线可审计性 (`audit_sources/`)：** 所有外部数据源查询快照、**USDA FDC ID** 编号、**WHO ATC 药物编码**及官方配方均已保存在本地 [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) 与 UMD 模块 [`audit_sources/offline_sources_registry.js`](../audit_sources/offline_sources_registry.js)（`window.BarterCore.AuditSources`）中，无需互联网即可通过 `file://` 离线核验全部依据。
>
> **范围说明（领域代表性示例 vs. 128 项完整审计矩阵）：** 为保持本 `README` 简明易读，下文列举的物资为各科学领域的**代表性示例**。涵盖目录全部 **128 项标准条目（`001` 至 `128`：100 项实体物资 + 28 项基础专业技术服务）** 的逐项溯源与完整审计矩阵均完整记录于 [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md)。

1. **食品热量密度与宏量营养素供能比 (`E_food`, `IN`) — 精确 USDA FDC 记录编号：**
   - 直接引自 [**美国农业部食品数据库 (USDA FoodData Central — SR Legacy)**](https://fdc.nal.usda.gov/)、[**TBCA — USP/FoRC**](https://www.tbca.net.br/)、[**TACO 第 4 版 PDF (UNICAMP)**](https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf) 及 [**FAO/WHO 国际食品法典 (Codex Alimentarius)**](https://www.fao.org/fao-who-codexalimentarius/)。已归档的核心记录包括：
     - **生精白长粒大米 (`rice_white_polished_raw_1000g`)：** [**USDA FDC ID 169756 / NDB 20444**](https://fdc.nal.usda.gov/food-details/169756/nutrients)（`365 kcal/100g` → `3,650 kcal/1000g`，蛋白质 `7.13 g/100g`，脂肪 `0.66 g/100g`）。
     - **生干菜豆/黑豆 (`beans_common_dry_1000g`)：** [**USDA FDC ID 173734 / NDB 16014**](https://fdc.nal.usda.gov/food-details/173734/nutrients) 与 [**TBCA C0113A**](https://www.tbca.net.br/)（`329 kcal/100g` 综合基准值 → `3,290 kcal/1000g`，蛋白质供能比 `24.5%`，富含铁与钾）。
     - **纯蜂蜜、白砂糖与精炼植物油：** [**FDC ID 169640**](https://fdc.nal.usda.gov/food-details/169640/nutrients)（`304 kcal/100g`）、[**FDC ID 169655**](https://fdc.nal.usda.gov/food-details/169655/nutrients)（`387 kcal/100g`）与 [**FDC ID 171411**](https://fdc.nal.usda.gov/food-details/171411/nutrients)（`884 kcal/100g`）。
2. **基础药物遴选、WHO ATC 编码、口服补液盐与战伤急救 (`cat_pharma_essential`, `cat_trauma_hygiene`)：**
   - 严格依据 [**《世界卫生组织基本药物标准清单》第 23 版 (`WHO/MHP/HPS/EML/2023.02`)**](https://iris.who.int/handle/10665/371090)（阿莫西林 500mg `ATC: J01CA04` Access 级；环丙沙星 500mg `ATC: J01MA02` Watch 级；阿奇霉素 500mg `ATC: J01FA10` Watch 级；对乙酰氨基酚 500mg `ATC: N02BE01`）、[**WHO/UNICEF 低渗口服补液盐技术规范 (`文献号 WHO/FCH/CAH/06.1`: `20.5 g/L`, `245 mOsm/L`)**](https://iris.who.int/handle/10665/69227)、[**WHO IEHK 2017**](https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017)、[**美国国防部 CoTCCC 战术战伤救治指南**](https://deployedmedicine.com/market/31) 以及 [**美国 FDA 2001 年 12 月碘化钾指南（成人甲状腺阻断标准剂量 `130 mg`）**](https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki)。
3. **饮用水净化、Sphere WASH 2.1 标准与炊事燃料损耗 (`CP`, `cat_water_fire_shelter`)：**
   - 依据 [**《环球计划手册》(2018 版，WASH 标准 2.1：每人每天基本总需水量 `15 升`；生存饮水与食物 `2.5–3.0 升/天`；基础炊事 `3–6 升/天`)**](https://spherestandards.org/handbook/editions/) 与 [**WHO《饮用水水质准则》(`ISBN 978-92-4-154995-0`：1 片 `67 mg` NaDCC 净水片可在 `30 分钟`内消毒 `20 升`清澈饮用水)**](https://www.who.int/publications/i/item/9789241549950)。
4. **密封保质期 (`V`) 与包装抗损度 (`Frag`)：**
   - 依据 [**美国陆军士兵研发中心 (US Army DEVCOM / Natick)**](https://www.army.mil/devcom-sc)、[**USDA FSIS 耐储食品安全指南**](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food)、[**FEMA / Ready.gov**](https://www.ready.gov/food) 及 [**美国 FDA / 国防部药品保质期延长计划 (SLEP)**](https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/expiration-dating-extension)。
5. **基础人类技术服务、临床医疗操作、离网信息技术、技术教学与专业劳务 (`cat_essential_services`, 第 `101–128` 项)：**
   - 依据 [**WHO 应急与基本外科医疗综合管理指南 (IMEESC)**](https://www.who.int/Specify/emergencies/surgical-care)、[**WHO/UNFPA/UNICEF 妊娠与分娩并发症管理手册 (IMPAC, ISBN 978-92-4-156549-3)**](https://www.who.int/publications/i/item/9789241565493)、[**国际劳工组织国际标准职业分类 (ILO ISCO-08) 与 ISO 8996 职业代谢率标准**](https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/)、[**联合国粮农组织 (FAO) 畜牧兽医与留种安全指南**](https://www.fao.org/agriculture/crops/thematic-sitemap/theme/seeds-pgr/seed-sys/security/en/)、[**IEEE / IEC / ETSI 野战工程抢修标准**](https://www.itu.int/en/ITU-D/Emergency-Telecommunications/)、[**IEEE 802.11s / ISO/IEC 27037 / IPC-7711/7721 / IEC 61131-3（离网信息技术与微电子返修标准）**](https://standards.ieee.org/ieee/802.11s/4570/) 及 [**UNESCO ISCED / WHO-ICRC BEC / ISO 17100（技术识字教学与翻译标准）**](https://uis.unesco.org/en/topic/international-standard-classification-education-isced)。
   - *无形技术劳务的物理代理映射规则：* 全部 28 项服务（`is_food: false`, `is_divisible: false`, `sub_units: 1`, `unit_measure: 'un'`）将 `weight_kg (P)`（`0.08–0.30 kg`）与 `volume_liters (Vol)`（`0.10–0.35 L`）映射为**单次操作的边际耗材消耗与工具折旧物理负荷**（因为技术人员/医生在服务后仍保留其全套常备工具箱，仅计算单次作业实际损耗的边际物料与折旧，既避免整套工具箱全重在分母中造成不合理贬值，也防止将质量设为 `0.001 kg` 导致失真膨胀），将 `lifecycle_units (V)`（`7–3,650 天`）映射为**服务成果的有效持续期/复发间隔**，并将 `energy_or_utility_base (E)`（`5,200–38,000 EEB`）映射为**避免的生理热量损耗 + 节省的专业体力劳务消耗**。默认情况下，`calculateChangeOptions()` 自动排除 `cat_essential_services`，确保仅推荐实体物资（`g`、`ml`、`un`）用于小额找零。

#### 全库官方权威标准与精确文献编号一键核验名录

| 涉及领域 / 参数范围 | 官方权威机构与精确文献 / 记录编号 | 一键直达官方核验链接 |
| :--- | :--- | :--- |
| **本地离线审计档案库** | 仓库离线数据快照目录 (`audit_sources/`) | [`../audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) |
| **营养记录：精白大米 (`365 kcal/100g`)** | USDA FoodData Central — `FDC ID: 169756` (`NDB 20444`) | [https://fdc.nal.usda.gov/food-details/169756/nutrients](https://fdc.nal.usda.gov/food-details/169756/nutrients) |
| **营养记录：干豆 (`329–341 kcal/100g`)** | USDA FoodData Central — `FDC ID: 173734` (`NDB 16014`) & TBCA `C0113A` | [https://fdc.nal.usda.gov/food-details/173734/nutrients](https://fdc.nal.usda.gov/food-details/173734/nutrients) |
| **营养记录：蜂蜜、白糖与植物油** | USDA FDC IDs `169640`、`169655` 与 `171411` | [https://fdc.nal.usda.gov/food-details/169640/nutrients](https://fdc.nal.usda.gov/food-details/169640/nutrients) |
| **食品成分表（巴西权威库）** | TBCA (USP/FoRC) & TACO 第 4 版 PDF (UNICAMP) | [https://www.tbca.net.br/](https://www.tbca.net.br/) · [https://www.cfn.org.br/.../taco_4_edicao_ampliada_e_revisada.pdf](https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf) |
| **国际食品质量与法典** | FAO/WHO Codex Alimentarius Commission | [https://www.fao.org/fao-who-codexalimentarius/](https://www.fao.org/fao-who-codexalimentarius/) |
| **基本救命药物 (`J01CA04` 等)** | WHO 基本药物清单第 23 版 (`WHO/MHP/HPS/EML/2023.02`) | [https://iris.who.int/handle/10665/371090](https://iris.who.int/handle/10665/371090) |
| **低渗口服补液盐 (`20.5 g/L`)** | WHO / UNICEF 口服补液盐规范 (`WHO/FCH/CAH/06.1`) | [https://iris.who.int/handle/10665/69227](https://iris.who.int/handle/10665/69227) |
| **药物活性成分命名** | WHO 国际非专利药品名称 (INN) | [https://www.who.int/teams/health-product-and-policy-standards/inn](https://www.who.int/teams/health-product-and-policy-standards/inn) |
| **人道主义应急医疗包** | WHO / UNHCR / UNICEF 机构间应急卫生包 (IEHK 2017) | [https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017](https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017) |
| **院前动脉止血与创伤** | CoTCCC / 美国国防部 TCCC 战伤救治指南 | [https://deployedmedicine.com/market/31](https://deployedmedicine.com/market/31) |
| **核辐射甲状腺阻断防护** | 美国 FDA 2001 年 12 月碘化钾指南（`130 mg` 成人剂量） | [https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki](https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki) |
| **`en-US` 语言包法定标准** | 美国药典 (USP) 与 FDA 橙皮书 (Orange Book) | [https://www.usp.org/](https://www.usp.org/) · [https://www.accessdata.fda.gov/scripts/cder/ob/](https://www.accessdata.fda.gov/scripts/cder/ob/) |
| **`pt-BR` 语言包法定标准** | 巴西国家卫生监督局通用药品名称 (DCB / ANVISA) | [https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/dcb](https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/dcb) |
| **`es-ES` 语言包法定标准** | 西班牙药监局 (DOE / AEMPS) 与 `BOE-A-1967-16485` | [https://cima.aemps.es/](https://cima.aemps.es/) · [https://www.boe.es/buscar/act.php?id=BOE-A-1967-16485](https://www.boe.es/buscar/act.php?id=BOE-A-1967-16485) |
| **`fr-FR` 语言包法定标准** | 法国药典 (DCI / ANSM Pharmacopée Française) 与 ANSES Ciqual | [https://ansm.sante.fr/documents/reference/pharmacopee](https://ansm.sante.fr/documents/reference/pharmacopee) · [https://ciqual.anses.fr/](https://ciqual.anses.fr/) |
| **`ru-RU` 语言包法定标准** | 俄罗斯卫生部国家药品注册目录 (МНН / ГРЛС Минздрава РФ) 与 ГОСТ 国家标准 | [https://grls.rosminzdrav.ru/](https://grls.rosminzdrav.ru/) · [https://protect.gost.ru/](https://protect.gost.ru/) |
| **`sw-KE` 语言包法定标准** | 肯尼亚国家基本药物清单与药监局 (KEML / PPB Kenya) 及肯尼亚标准局 (KEBS / KFCT) | [https://web.pharmacyboardkenya.org/](https://web.pharmacyboardkenya.org/) · [https://www.kebs.org/](https://www.kebs.org/) |
| **`ar-SA` 语言包法定标准** | 沙特食品药品监督管理局 (SFDA) 与沙特及海湾标准局 (SASO / GSO) | [https://www.sfda.gov.sa/](https://www.sfda.gov.sa/) · [https://www.saso.gov.sa/](https://www.saso.gov.sa/) |
| **`zh-Hans` 语言包法定标准** | 《中华人民共和国药典》(ChP) 与国家标准全文公开系统 (GB) | [https://www.chp.org.cn/](https://www.chp.org.cn/) · [https://openstd.samr.gov.cn/](https://openstd.samr.gov.cn/) |
| **饮水与 NaDCC 净水片 (`67mg/20L`)** | Sphere WASH Std 2.1 (`15L/天`) & WHO GDWQ `978-92-4-154995-0` | [https://spherestandards.org/handbook/editions/](https://spherestandards.org/handbook/editions/) · [https://www.who.int/publications/i/item/9789241549950](https://www.who.int/publications/i/item/9789241549950) |
| **密封保质期 (`V`) 与包装抗损 (`Frag`)** | USDA FSIS 耐储食品、FEMA Ready.gov 与 FDA SLEP | [https://www.fsis.usda.gov/.../shelf-stable-food](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food) · [https://www.fda.gov/.../expiration-dating-extension](https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/expiration-dating-extension) |
| **电池与储能电芯 (`LR6`, `LR03`, `INR18650`)** | IEC 60086-2 原电池标准与 IEC 61960-3 锂蓄电池标准 | [https://webstore.iec.ch/en/publication/603](https://webstore.iec.ch/en/publication/603) |
| **防颗粒物呼吸器 (`N95 / PFF2`)** | CDC / NIOSH `42 CFR Part 84` 认证标准 | [https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html](https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html) |
| **贵金属硬通货 (`999.0 Fine` 金银)** | 伦敦金银市场协会 (LBMA) 交割纯度标准 | [https://www.lbma.org.uk/good-delivery/about-good-delivery](https://www.lbma.org.uk/good-delivery/about-good-delivery) |
| **应急外科与产科救治规范** | WHO IMEESC 与 WHO/UNFPA/UNICEF IMPAC (`978-92-4-156549-3`) | [https://www.who.int/publications/i/item/9789241565493](https://www.who.int/publications/i/item/9789241565493) |
| **职业工种分类与人体代谢工效学** | 国际劳工组织 ILO ISCO-08 与 ISO 8996 职业代谢率标准 | [https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/](https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/) · [https://www.iso.org/standard/74443.html](https://www.iso.org/standard/74443.html) |
| **离网局域网、数据恢复与电路板微焊** | IEEE 802.11s、ISO/IEC 27037、IPC-7711/7721 与 IEC 61131-3 | [https://standards.ieee.org/ieee/802.11s/4570/](https://standards.ieee.org/ieee/802.11s/4570/) · [https://www.iso.org/standard/44381.html](https://www.iso.org/standard/44381.html) |
| **技术识字、实用几何教学与技术翻译** | UNESCO ISCED、WHO/ICRC BEC 与 ISO 17100:2015 | [https://uis.unesco.org/en/topic/international-standard-classification-education-isced](https://uis.unesco.org/en/topic/international-standard-classification-education-isced) · [https://www.iso.org/standard/59149.html](https://www.iso.org/standard/59149.html) |
| **现代城市围困与武装冲突报告** | ICRC 出版物 `4249` 与 WHO 乌克兰应急报告 | [https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict](https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict) · [https://www.who.int/emergencies/situations/ukraine-emergency](https://www.who.int/emergencies/situations/ukraine-emergency) |

### 3.2. 本模型独创的工程启发式标尺与小数阶梯细则（无外部政府现成表 — 附设计合理性论证）
为打破营养学（`kcal`）、临床医学（救治存活率）与后勤学（`kg/L`）之间的量纲壁垒，本引擎建立了四项原创工程桥接标尺，并作如下设计论证：

1. **非食品物资的等效功用基数（`EEB` 位于 `[500, 50000]` 区间）：**
   - *创建理由与物理依据：* 药品或工具无法直接测量卡路里。本引擎基于热力学中的**“节省的人体代谢消耗 / 避免的生理能量流失”**概念定义了 `EEB`（以等效 `kcal` 计）。例如：一次未受控制的全身细菌感染（持续 7 天 **39.5 °C** 高热）或急性脱水腹泻会消耗人体 **3,500 至 15,000+ kcal** 的基础储备并危及生命；在没有工具或火源的情况下徒手伐木、滤水或取火，同样会额外消耗 **500 至 3,000+ kcal** 的体力与热暴露损失。
2. **零热量代谢与功能性消耗品规则（饮用水、食盐、咖啡、茶叶、食醋、碳酸氢钠、香烟与饮用乙醇设定为 `is_food: false`）：**
   - *创建理由与数学依据：* 目录中 `cat_staple_foods` 与 `cat_spices_morale` 类别下的 9 项人类消耗品（`water_potable_sealed_1000ml`、`salt_sodium_chloride_iodized_1000g`、`coffee_roasted_ground_vacuum_500g`、`coffee_instant_soluble_granules_50g`、`vinegar_acetic_acid_4pct_750ml`、`sodium_bicarbonate_pure_100g`、`tea_camellia_sinensis_dry_50g`、`tobacco_cigarette_filtered_unit` 与 `alcohol_ethanol_potable_40pct_500ml`）被刻意设定为 **`is_food: false`**（`IN = 1.0`）并通过 **`EEB`** 而非膳食 `kcal` 计分。在 USDA/TACO 成分表中，纯净水、食盐与碳酸氢钠热量为 **`0 kcal`**，咖啡、茶叶与食醋热量极低（`< 20 kcal/100g`）；若按热量食品计算将导致饮用水与核心电解质得分为 `0 pts`。此外，40% 蒸馏乙醇含有具肝毒性的非营养性酒精热量，其真实危机价值在于伤口消毒、溶剂萃取与围城高流动性易货。
3. **重量-体积分母阻尼常数（`P + Vol + 0.1` 中的 `ε = 0.1`）、`IN` 营养权重与对数保质期（`log₁₀(V + 1)`）：**
   - *创建理由与数学依据：* 引入 `ε = 0.1` 可防止当微型物资质量 `P` 趋近于 `0.001 kg`（如 1 粒胶囊或 1 片 NaDCC 净水片）时分母趋近于零导致分值无穷大发散，将微型物资的最大便携度加成合理限制在 `~9.8×` 以内。`IN` 权重（蛋白质 `+1.5`、脂肪 `+1.0`、添加糖 `-1.2`，截断于 `[0.5, 2.5]`）区分了修复组织的塑形营养与空洞升糖热量；而 `log₁₀(V + 1)` 将 100 年贵金属与 1 年期口粮的保质期差距压缩为合理的 `1.78×` 耐久溢价（而非 `100×` 线性失真）。
4. **精细小数阶梯标定标尺（`CP`、`FP`、`Frag` 与 `MEC`）：**
   - *创建理由：* 参数区间内的每一个小数档位均对应明确的物理或操作阈值（完整离线核查表见 [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md)）：

| 参数字段 | 取值区间 | 精细小数阶梯标定标尺（为何赋予该精确小数值） |
| :--- | :---: | :--- |
| **`energy_or_utility_base` (`E`)** | `> 0` | **食品：** 整包原子单位的真实总热量 `kcal`（`FDC-169756` 大米 `3,650 kcal`，`FDC-173734`/`TBCA` 干豆 `3,290 kcal`）。<br>**非食品 (`EEB`)：**<br>• `500 – 3,000`：单次消耗品（`tobacco_cigarette_filtered_unit` `650`、`paracetamol_500mg_tablet` `1,600`、`gauze_sterile_compress_7_5cm_unit` `2,200`、`water_purification_nadcc_tablet_unit` `2,600`）。<br>• `3,000 – 10,000`：全身性抗生素单粒（`amoxicillin_500mg_capsule` `4,200`、`ciprofloxacin_500mg_tablet` `5,000`）、缝合线（`8,200`）、丁烷打火机（`7,500`）。<br>• `10,000 – 25,000`：战术动脉止血带（`tourniquet_tactical_arterial_unit` `18,500`）、`INR18650` 锂电池（`12,500`）、打火镁棒（`16,000`）、1 L 次氯酸钠溶液（`14,500`）。<br>• `25,000 – 50,000`：跨年度耐用资本品（`filter_water_hollow_fiber_0_1micron_unit` `32,000`、`knife_fixed_blade_carbon_steel_fulltang` `28,000`、`panel_solar_monocrystalline_usb_5v_10w_unit` `38,000`、`radio_transceiver_vhf_uhf_dualband_unit` `42,000`、`gold_bullion_999_fine_fractional_1g` `50,000`）。 |
| **`cost_of_prep` (`CP`)** | `0.50 – 1.00` | • **`1.00`**：零制备损耗（肉类罐头、口服药片、密封饮用水、即用工具）。<br>• **`0.90 – 0.96`**：冷水快速冲溶（**少于 2 分钟**），零燃料（`oral_rehydration_salts_who_sachet_27_9g`、`milk_powder_whole_400g`）。<br>• **`0.80 – 0.88`**：快速浸泡或 **2 至 5 分钟**短时加热（`oats_rolled_whole_500g`、`coffee_roasted_ground_vacuum_500g`）。<br>• **`0.72 – 0.78`**：短时加热/煮制 **8 至 12 分钟**（`lentils_dry_raw_500g`、`pasta_wheat_dry_500g`）。<br>• **`0.65 – 0.68`**：标准沸水蒸煮 **15 至 20 分钟** + **2:1** 净水比例（`rice_white_polished_raw_1000g`、`meat_bovine_cured_salted_500g`）。<br>• **`0.50 – 0.58`**：重度沸水炖煮 **45 至 60 分钟** + **3:1** 净水比例（`beans_common_dry_1000g`、`chickpeas_dry_raw_500g`）。 |
| **`psychological_factor` (`FP`)** | `1.00 – 2.50` | • **`1.20 – 1.30`**：基础加工原料（`gelatin_unflavored_powder_50g`、`flour_wheat_enriched_1000g`）。<br>• **`1.35 – 1.45`**：家庭核心饱腹主食（`rice_white_polished_raw_1000g`、`beans_common_dry_1000g`）。<br>• **`1.50 – 1.85`**：卫生尊严、基础镇痛与心理慰藉（`fish_sardine_canned_oil_125g`、`honey_bee_pure_500g`）。<br>• **`1.90 – 2.25`**：高神经化学戒断缓解与高围城流动性物资（`coffee_roasted_ground_vacuum_500g`、`chocolate_dark_cocoa_60pct_100g`）。<br>• **`2.30 – 2.40`**：急性救命抗感染与饮水消毒（`amoxicillin_500mg_capsule`、`water_purification_nadcc_tablet_unit`）。<br>• **`2.45 – 2.50`**：绝对生存极限刚需（`tourniquet_tactical_arterial_unit`、`infant_formula_powder_stage1_400g`、`filter_water_hollow_fiber_0_1micron_unit`）。 |
| **`fragility_index` (`Frag`)** | `0.70 – 1.20` | • **`0.75 – 0.80`**：易受潮破损的裸露纸品或易碎光学件（`paper_toilet_cellulose_roll_30m`、`biscuit_wheat_salted_dry_400g`）。<br>• **`0.85 – 0.90`**：柔性塑料袋或液体瓶（`pasta_wheat_dry_500g`、`oil_vegetable_refined_900ml`）。<br>• **`0.95 – 1.05`**：加厚密封袋、HDPE 塑料瓶或药用铝塑泡罩（`rice_white_polished_raw_1000g`、`amoxicillin_500mg_capsule` `1.05`）。<br>• **`1.10 – 1.18`**：马口铁罐头、复合铝箔泡罩或全钢多功能钳（`fish_sardine_canned_oil_125g` `1.15`）。<br>• **`1.20`**：不可损毁的实心合金或高纯贵金属块/币（`tourniquet_tactical_arterial_unit`、`gold_bullion_999_fine_fractional_1g`、`silver_bullion_999_fine_1_troy_oz_31_1g`）。 |

### 3.3. 现代战争与城市围困的实证经验总结
本目录的 128 项物资与服务及外部环境修正系数（`MEC`）直接吸纳了现代武装冲突与人道主义围困的实证教训：
- **萨拉热窝围城战（1992–1996，波黑战争）：** 证实了在封闭城市围困初期，黄金与珠宝会出现急性去货币化（`cat_store_of_value` 在 `acute_collapse` 下跌至 **`0.01x`**，仅在外部贸易恢复的 `economic_reconstruction` 阶段回升至 **`5.0x`**）；相反，**丁烷打火机**、**单支香烟**、**咖啡**、**食盐**与**医用酒精**成为了流动性最高的“零钱”硬通货。
- **俄乌冲突（2022 至今 — 马里乌波尔、巴赫穆特及冬季电网瘫痪 — [WHO 乌克兰应急报告](https://www.who.int/emergencies/situations/ukraine-emergency)）：** 证明在现代炮火封锁与长期断电（*Grid-Down*）环境下，平民生存高度依赖 **直流微能源与去中心化通信**（**18650 锂离子电池**、**5V 10W 折叠太阳能板**、**VHF/UHF 双频对讲机**）、**平民化战术止血急救 (TCCC)**（**战术动脉止血带**、**3-0 尼龙带针缝合线**）以及 **核辐射甲状腺防护**（**碘化钾片 130mg**）。
- **现代断水危机与霍乱疫情（叙利亚、也门、加沙、苏丹 — [ICRC 城市围困报告](https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict) 与 [WHO 饮水消毒准则](https://www.who.int/publications/i/item/9789241549950)）：** 证明当市政水泵断电且缺乏燃料烧水时，**冷化学饮水消毒**（**NaDCC 净水片**、**2.5% 次氯酸钠溶液**）、**0.1 微米中空纤维滤水器**、**口服补液盐 (ORS)** 以及 **肠道致病菌抗生素**（**环丙沙星**、**甲硝唑**、**阿奇霉素**）在危机首月具备最高的每克生存价值。

### 3.4. 分步数学推演实例（与 `data/items_core.js` 严格核对一致）

#### 分步推演实例 A：基础热量主食 (`rice_white_polished_raw_1000g`)
- **输入参数 (`data/items_core.js`)：**
  - `is_food`: `true`, `energy_or_utility_base (E)`: `3650` kcal, `weight_kg (P)`: `1.0` kg, `volume_liters (Vol)`: `1.18` L, `lifecycle_units (V)`: `1825` 天。
  - `cost_of_prep (CP)`: `0.65`, `psychological_factor (FP)`: `1.35`, `fragility_index (Frag)`: `1.05`。
  - 宏量营养素：`pct_kcal_protein = 0.078`, `pct_kcal_fat = 0.015`, `pct_kcal_added_sugar = 0.0`，微量营养素标志均为 `false`。
- **第 1 步 — 计算营养指数 (`IN`)：**
  ```text
  MacroFactor = (0.078 × 1.5) + (0.015 × 1.0) - (0 × 1.2) = 0.117 + 0.015 = 0.132
  IN          = Clamp(1.0 + 0.132 + 0, 0.5, 2.5) = 1.132
  ```
- **第 2 步 — 计算基础分 (`ScoreBase`)：**
  ```text
  密度项       = (3650 × 1.132) / (1.0 + 1.18 + 0.1) = 4131.8 / 2.28 = 1812.192982
  寿命项       = log₁₀(1825 + 1) = log₁₀(1826) = 3.26150077
  ScoreBase   = 1812.192982 × 3.26150077 × 0.65 × 1.35 × 1.05 = 5445.7582 pts
  ```
- **第 3 步 — 计算 `acute_collapse` 阶段最终易货分 (`MEC`)：**
  - 分类乘数 `cat_staple_foods`（`1.25×`）× 标签乘数 `high_calorie_density`（`1.30×`）→ **`MEC = 1.625`**。
  ```text
  ScoreFinal  = 5445.7582 × 1.625 = 8849.3571 pts
  ```

#### 分步推演实例 B：非食品基础救命药物 (`amoxicillin_500mg_capsule`)
- **输入参数 (`data/items_core.js`)：**
  - `is_food`: `false`（→ **`IN = 1.0`**）, `energy_or_utility_base (E)`: `4200` EEB, `weight_kg (P)`: `0.001` kg, `volume_liters (Vol)`: `0.002` L, `lifecycle_units (V)`: `1095` 天。
  - `cost_of_prep (CP)`: `1.0`, `psychological_factor (FP)`: `2.35`, `fragility_index (Frag)`: `1.05`。
- **第 1 步 — 计算基础分 (`ScoreBase`)：**
  ```text
  密度项       = (4200 × 1.0) / (0.001 + 0.002 + 0.1) = 4200 / 0.103 = 40776.699029
  寿命项       = log₁₀(1095 + 1) = log₁₀(1096) = 3.03981055
  ScoreBase   = 40776.699029 × 3.03981055 × 1.0 × 2.35 × 1.05 = 305855.1134 pts
  ```
- **第 2 步 — 计算 `acute_collapse` 阶段最终易货分 (`MEC`)：**
  - 分类乘数 `cat_pharma_essential`（`1.40×`）× 标签乘数 `antibiotic_systemic`（`1.70×`）→ **`MEC = 2.38`**。
  ```text
  ScoreFinal  = 305855.1134 × 2.38 = 727935.1699 pts
  ```

---

## 4. 数据模型契约 (Schema Contract) 与科学标准化

`data/items_core.js` 及通过 `BarterEngine.registerCustomItems([item])` 注册的任何扩展物资均由 `window.BarterCore.Validator.validateItem(item)` 进行严格校验：

| 字段名 | 类型 | 约束条件与合法取值范围 |
| :--- | :--- | :--- |
| `id` | `string` | 全英文小写 `snake_case` (`/^[a-z][a-z0-9_]{2,120}$/`)，严禁纯数字编号与商业商标 |
| `category` | `string` | `cat_staple_foods`, `cat_critical_nutrition`, `cat_spices_morale`, `cat_pharma_essential`, `cat_trauma_hygiene`, `cat_water_fire_shelter`, `cat_tools_energy_comms`, `cat_store_of_value`, `cat_essential_services` |
| `is_food` | `boolean` | 热量食品为 `true`；非食品、药品、工具与技术服务为 `false` |
| `is_divisible` | `boolean` | 可按子单位拆分为 `true`；仅能整件交易为 `false` |
| `sub_units` | `number` | 正整数 `≥ 1`（不可拆物资为 `1`；可拆物资为总克数 `g`、毫升数 `ml` 或子件数） |
| `unit_measure` | `string` | `"g"` \| `"ml"` \| `"un"` |
| `energy_or_utility_base` | `number` | `> 0`（食品为真实总千卡 `kcal`；非食品为 `[500, 50000]` 区间内的等效功用基数 `EEB`） |
| `weight_kg` | `number` | 单件物理质量，单位千克（`> 0`） |
| `volume_liters` | `number` | 单件物理体积，单位升（`≥ 0`） |
| `lifecycle_units` | `number` | 未拆封状态下的标称保质期天数（`> 0`） |
| `cost_of_prep` | `number` | 制备简易度系数，位于 `[0.5, 1.0]` 区间（开袋即用为 `1.0`） |
| `psychological_factor` | `number` | 心理士气与刚需系数，位于 `[1.0, 2.5]` 区间 |
| `fragility_index` | `number` | 包装物理抗损系数，位于 `[0.7, 1.2]` 区间 |
| `tags` | `string[]` | 非空数组，元素为小写 `snake_case` 功能标签 |

---

## 5. 一键离线启动、纸质速查手册打印与仓库结构

离线使用无需安装任何编译工具、包管理器或本地服务器：

- **Windows (7 / 10 / 11)：** 直接双击项目根目录下的 `start_windows.bat`。
- **Linux / macOS / FreeBSD / OpenBSD：** 在终端执行 `./start_unix.sh`（或 `sh ./start_unix.sh`）。
- **直接打开：** 在桌面或手机文件管理器中直接双击 `manual_generator.html`。
- **双边易货模拟器与直接交割结算摘要：** 在 `manual_generator.html` 界面中选择 **己方出让物资（您交付）** 与 **对方请求物资（待接收）**（或点击 `⇄` 一键互换双方物资）及实时剩余保质期天数（`V`）。模拟器将实时生成 **直接易货交割结算摘要**（`您交付 ➔ 您接收`）、6 项明确标注所属物资名称的核心指标（单位交换比、出让物资总分、请求物资单件分值、理论精确换算量、建议实际交割的请求物资数量及折合最小物理计量单位），以及本地化语言的不可拆分找零预警。
- **打印纸质应急易货手册与断电纯纸质作业（第 1 页完整手册 + 三大危机场景并列）：** 在 `manual_generator.html` 界面中选择目标语言（如 `zh-Hans`）后，点击右上角 **“打印纸质速查手册”**（或按 `Ctrl+P` / `Cmd+P`）。内置的 `@media print`（`A4 landscape` 横向）打印样式表将自动隐藏交互按钮，输出黑白高对比度纸质手册：**第 1 页** 自动完整打印 **《纯纸质易货操作手册》（`OFFLINE_MANUAL`）**（4 步结算规程、三大场景列选择说明、完整实战演算示例、保质期折旧准则 A 与 B、交割站卫生核验清单，以及包含三大场景单价率的 **预计算零钱速查表**），**第 2 页起** 打印 128 项物资与服务总表并在 **第 8 列（`1. 纯物理基准 1.0x`）、第 9 列（`2. 急性社会崩溃期`）与第 10 列（`3. 经济重建期`）** 并列印出三大场景分值与可拆分物资的 `1 g / 1 ml` 单价率。另请参阅简体中文版独立纸质操作手册 [**`docs/OFFLINE_MANUAL.zh-Hans.md`**](./OFFLINE_MANUAL.zh-Hans.md)。

### 5.1. 仓库目录架构

```text
library/
├── .gitattributes                      # 强制 .sh 使用 LF 换行、.bat 使用 CRLF 换行及 GitHub Linguist 统计规则
├── .gitignore                          # 屏蔽操作系统临时缓存、编辑器状态与 lock 锁定文件
├── LICENSE                             # Apache License 2.0 官方开源许可证
├── NOTICE                              # 强制署名声明文件（第 4d 条款 — Erisson Marques）
├── README.md                           # 英文主文档与 SDK 接口参考手册
├── CHANGELOG.md                        # 遵循 Keep a Changelog v1.1.0 规范的版本变更记录
├── CONTRIBUTING.md                     # Inbound=Outbound 协议与项目维护者 100% 赞助所有权声明
├── package.json                        # 零依赖 npm 包元数据与规范清单
├── server.js                           # 原生 Node.js 本地极简 HTTP 服务器（零外部依赖）
├── index.js                            # 统一根目录 UMD 模块包入口 (@barterscoreengine/library)
├── index.d.ts                          # 官方 TypeScript 类型声明文件（支持外部 TS 项目与 IDE 智能补全）
├── start_windows.bat                   # Windows 一键离线启动脚本 (file:// 协议)
├── start_unix.sh                       # POSIX 跨平台一键启动脚本 (Linux, macOS, BSD)
├── manual_generator.html               # 零依赖离线 GUI、易货模拟器与纸质速查手册生成器
├── data/
│   └── items_core.js                   # 128 项标准化物资与服务数据集（9 大分类：100 项物资 + 28 项服务）+ 第 129+ 项模板
├── audit_sources/
│   ├── OFFLINE_AUDIT_DOSSIER.md        # 离线权威科学数据源记录与小数阶梯标定档案
│   └── offline_sources_registry.js     # UMD 离线实证数据快照模块 (window.BarterCore.AuditSources)
├── locales/
│   ├── en-US.js                        # 英语语言包 (WHO INN / USP / Codex Alimentarius)
│   ├── pt-BR.js                        # 巴西葡萄牙语语言包 (DCB-ANVISA / TBCA-TACO)
│   ├── es-ES.js                        # 西班牙语语言包 (DOE-AEMPS / 西班牙食品法典)
│   ├── fr-FR.js                        # 法语语言包 (DCI-ANSM / 法国药典 / ANSES-Ciqual)
│   ├── ru-RU.js                        # 俄语语言包 (МНН-ГРЛС 俄罗斯国家药典 XV / ГОСТ 标准)
│   ├── sw-KE.js                        # 斯瓦希里语语言包 (WHO INN / KEML-PPB Kenya / KEBS-KFCT)
│   ├── ar-SA.js                        # 阿拉伯语语言包 (WHO INN / SFDA / SASO-GSO / Codex Alimentarius)
│   └── zh-Hans.js                      # 简体中文语言包 (《中华人民共和国药典》ChP / GB 国家标准)
├── docs/
│   ├── OFFLINE_MANUAL.md               # 全面断电场景下的纸质速查与心算操作手册 (English)
│   ├── OFFLINE_MANUAL.pt-BR.md         # 全面断电场景下的纸质速查与心算操作手册 (巴西葡萄牙语)
│   ├── OFFLINE_MANUAL.es-ES.md         # 全面断电场景下的纸质速查与心算操作手册 (西班牙语)
│   ├── OFFLINE_MANUAL.fr-FR.md         # 全面断电场景下的纸质速查与心算操作手册 (法语)
│   ├── OFFLINE_MANUAL.ru-RU.md         # 全面断电场景下的纸质速查与心算操作手册 (俄语)
│   ├── OFFLINE_MANUAL.sw-KE.md         # 全面断电场景下的纸质速查与心算操作手册 (斯瓦希里语)
│   ├── OFFLINE_MANUAL.ar-SA.md         # 全面断电场景下的纸质速查与心算操作手册 (阿拉伯语)
│   ├── OFFLINE_MANUAL.zh-Hans.md       # 全面断电场景下的纸质速查与心算操作手册 (简体中文)
│   ├── README.pt-BR.md                 # 巴西葡萄牙语完整镜像技术文档
│   ├── README.es-ES.md                 # 西班牙语完整镜像技术文档
│   ├── README.fr-FR.md                 # 法语完整镜像技术文档
│   ├── README.ru-RU.md                 # 俄语完整镜像技术文档
│   ├── README.sw-KE.md                 # 斯瓦希里语完整镜像技术文档
│   ├── README.ar-SA.md                 # 阿拉伯语完整镜像技术文档
│   └── README.zh-Hans.md               # 简体中文完整镜像技术文档
└── src/
    ├── barter_engine.js                # 零依赖 UMD 核心数学估值与易货交易引擎
    └── validator.js                    # 零依赖 UMD 数据结构、数据集与语言包校验器
```

---

## 6. 开发者集成指南与 API 参考手册

`BarterEngine` 采用混合式 SDK 架构，所有公共类与方法均配备完整的英文 **JSDoc** 注释（`@param`、`@returns`、`@example`），可在 VS Code、WebStorm 等主流 IDE 中直接提供智能代码补全（IntelliSense）。开发者既可通过 `new BarterEngine(options)` 实例化独立引擎对象，也可直接调用 `BarterEngine` 静态方法。

### 6.1. 场景 A：浏览器 / 离线 HTML / 移动端 WebView（通过 `<script>` 标签加载）
按顺序引入 UMD 脚本文件。所有模块会自动挂载至全局命名空间 `window.BarterCore`，在本地 `file://` 协议下运行时不会触发 CORS 跨域拦截：

```html
<!-- 依次加载校验器、核心物资数据集、离线审计注册表、语言包、易货数学引擎与统一聚合入口 -->
<script src="src/validator.js"></script>
<script src="data/items_core.js"></script>
<script src="audit_sources/offline_sources_registry.js"></script>
<script src="locales/en-US.js"></script>
<script src="locales/zh-Hans.js"></script>
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
  console.log('Item Name:', engine.translate('water_potable_sealed_1000ml', 'name', 'zh-Hans'));
  console.log('Final Score:', itemScore.final_score); // 16458.3288
</script>
```

### 6.2. 场景 B：ES Modules (`import`) 与 Node.js / CommonJS (`require`)
直接从官方 GitHub 仓库（[`https://github.com/barterscoreengine/library`](https://github.com/barterscoreengine/library)）安装或克隆，无需任何额外转译即可通过 ES Modules（`import`）或 CommonJS（`require`）方式导入：

```bash
npm install github:barterscoreengine/library
# 或克隆至本地用于离线/嵌入式集成：git clone https://github.com/barterscoreengine/library.git
```

```javascript
// 1. ES Modules 模块包导入 (@barterscoreengine/library) —— 适用于 React、Vue、Vite、Next.js、TypeScript 与 Node.js
import { BarterEngine, Validator, ItemsCore, Locales, AuditSources } from '@barterscoreengine/library';

// 备选方式 A（本地相对路径 ES Modules 导入）：
// import { BarterEngine } from './src/barter_engine.js';

// 备选方式 B（传统 Node.js / CLI / Electron CommonJS 导入）：
// const { BarterEngine, Validator, ItemsCore, Locales, AuditSources } = require('@barterscoreengine/library');

const engine = new BarterEngine({
  items: ItemsCore,
  locales: Locales,
  locale: 'zh-Hans',
  crisisPhase: 'acute_collapse'
});

engine.setLocale('zh-Hans');
engine.setCrisisPhase('acute_collapse');
```

### 6.3. 实战示例 1：双边易货交易推演 (`calculateTrade`)
模拟在“急性社会崩溃期”叠加极端干旱与感染疫情（`contextModifiers`）的背景下，使用 **2 袋精制白大米 (1000g)**（实时剩余保质期 `offerRemainingDays: 730` 天，低于标称 `1825` 天）交换 **阿莫西林胶囊 500mg**：

```javascript
const tradeResult = engine.calculateTrade(
  'rice_white_polished_raw_1000g', // 己方出让物资语义 ID
  2,                               // offerQuantity（2 袋 1000g 包装）
  'amoxicillin_500mg_capsule',     // 对方请求物资语义 ID
  {
    scenario: 'acute_collapse',
    offerRemainingDays: 730,       // 实时剩余保质期折旧（剩余 730 天）
    requestRemainingDays: 1095,    // 对方物资剩余保质期（1095 天）
    contextModifiers: {
      antibiotic_systemic: 2.2,    // 感染暴发导致全身性抗生素紧缺倍率
      hydration: 2.5               // 极端干旱导致饮水补液物资紧缺倍率
    }
  }
);

console.log(JSON.stringify(tradeResult, null, 2));
```

**经引擎实测核对的 `calculateTrade` 完整 JSON 返回结构：**
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

### 6.4. 实战示例 2：通过 SDK 编程扩展第 129+ 号物资 (`registerCustomItems` & `AuditSources`)
当外部应用集成 SDK 时，可通过 `mode: 'merge'` 与 `strict: true` 在保留官方 `001–128` 标准目录的前提下追加区域性新物资（`第 129+ 号物资`），并通过 `AuditSources.registerCustomAuditSource` 登记独立的第二层（Tier 2）审计溯源记录：

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

// 1. 严格校验并将第 129+ 号物资合并至官方 128 项标准目录中
const mergeReport = engine.registerCustomItems(regionalDataset, {
  mode: 'merge',
  strict: true
});
console.log('新增载入物资数:', mergeReport.registered_count, '当前内存物资总数:', mergeReport.total_registry_size);

// 2. 在第二层（Tier 2）登记独立审计溯源记录（保持 001–128 官方核心账本原封不动）
AuditSources.registerCustomAuditSource({
  index: 129,
  id: 'doxycycline_hyclate_100mg_capsule',
  category: 'cat_pharma_essential',
  source_code: 'WHO_EML_23',
  baseline_note: 'WHO EML 23rd List ATC J01AA02 (Doxycycline 100mg capsule); EEB = 4,600'
});
```

### 6.5. 法定署名与版权归属声明（Apache License 2.0 第 4(d) 条）
> **面向外部开发者与分发者的强制性合规提示：**
> 根据 [**Apache License 2.0 第 4 条（Section 4）**](https://www.apache.org/licenses/LICENSE-2.0) 之规定，任何集成了 **BarterScore Engine**（无论是全部或部分源码、数学模型、物资参数库，也无论是以源代码形式还是编译/打包后的二进制、移动端 WebView、桌面软件或纸质手册形式分发）的第三方衍生软件或发行版，**必须（MUST）** 在其分发包中完整保留项目根目录下的 [`LICENSE`](../LICENSE) 与 [`NOTICE`](../NOTICE) 文件副本，并明确标示对原项目 **BarterScore Engine** 及其作者/维护者 **Erisson Marques ([`https://github.com/erissontech`](https://github.com/erissontech))** 的署名归属。

---

## 7. 如何扩展第 129+ 号物资或新增语言包

### 扩展第 129+ 号物资
1. 打开 `data/items_core.js`，复制文件末尾注释块中的标准物资模板。
2. 遵循第 3 节的权重标定标尺，填写符合 WHO/INN、IEC 或国际食品法典的无商标英文 `snake_case` 语义 `id` 及完整物理、营养参数。
3. 运行 `window.BarterCore.Validator.validateDataset(window.BarterCore.ItemsCore)` 确保 0 错误、0 警告。
4. **登记新增物资的独立审计溯源记录（双层隔离机制）：** 保持官方 `001–128` 核心审计矩阵原封不动，在 [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) 的 **第 4 节（`Custom & Regional User Audit Ledger`）** 中记录您新增 `第 129+ 号物资` 的药典、国标或实测依据，和/或通过代码调用 `window.BarterCore.AuditSources.registerCustomAuditSource({ index: 129, id, category, source_code, baseline_note })` 进行动态注册。

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│                扩展工作流：新增第 129+ 号自定义物资                             │
└───────────────────────────────────────────────────────────────────────────────┘

  [ 1. 物理与营养数学参数 ]               [ 2. 多语言词典映射 ]
  📄 data/items_core.js                   📄 locales/[lang].js（或内存动态注册）
  ├─ 复制文件末尾的标准注释模板           ├─ 在 `items` 下添加相同 `id`
  ├─ 定义无商标英文 snake_case `id`       │  并填写 `name` 与 `description`
  └─ 填写 E, P, Vol, V, CP, FP, Frag      └─（若未提供，引擎自动回退至技术 id）
                 │                                       │
                 └───────────────────┬───────────────────┘
                                     ▼
                     [ 3. 结构与数值边界强校验 ]
                     ⚙️ src/validator.js
                     └─ 运行 `Validator.validateDataset(ItemsCore)`
                        ├─ ❌ 存在错误/警告 ──► 修正越界参数或标签格式
                        └─ ✅ 0 错误 / 0 警告（100% 确定性通过）
                                     │
                                     ▼
               [ 4. 双层审计溯源登记（第 2 层：129+ 扩展台账） ]
               📋 audit_sources/OFFLINE_AUDIT_DOSSIER.md（第 4 节）
               ⚙️ audit_sources/offline_sources_registry.js
               ├─ 第 1 层（001–128 核心目录）：保持绝对不可篡改
               └─ 第 2 层（129+ 扩展物资）：在第 4 节表格或通过
                  `registerCustomAuditSource(...)` 登记区域法典/实测来源
```

### 新增语言包 (`locales/[lang].js`)
1. 复制 `locales/en-US.js` 并重命名为 `locales/<BCP47语言代码>.js`（例如遵循 [IETF BCP 47](https://www.rfc-editor.org/info/bcp47) 的 `locales/fr-FR.js`）。
2. 使用目标国家/地区的法定药典与商业标准术语翻译 `categories`、`scenarios`、`ui` 与 `items`。
3. 调用 `window.BarterCore.BarterEngine.registerLocale('fr-FR', dictionary)` 并在 `manual_generator.html` 中引入 `<script src="locales/fr-FR.js"></script>`。任何未翻译条目将自动回退至 `en-US` 乃至技术 `id`。

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│           本地化工作流：新增语言包与三级自动回退机制                            │
└───────────────────────────────────────────────────────────────────────────────┘

  [ 1. 复制基准模板 ]           [ 2. 法定专业术语翻译 ]      [ 3. 引擎注册挂载 ]
  📄 locales/en-US.js    ──►    📄 locales/fr-FR.js   ──►    ⚙️ BarterEngine
  (基于英文标准模板复制)        (遵循 IETF BCP 47 规范：     ├─ `registerLocale('fr-FR', dict)`
                                 采用当地药典/INN 标准翻译   └─ 在 `manual_generator.html`
                                 `categories`、`ui`、`items`)   中引入 `<script>` 标签
                                             │
                                             ▼
  ┌─────────────────────────────────────────────────────────────────────────┐
  │       三级自动回退链（确保界面与纸质手册永不崩溃或出现空白）            │
  │                                                                         │
  │   当前激活语言 (`fr-FR`) ──► 默认英文 (`en-US`) ──► 底层技术 ID         │
  │     (若词条存在则直接返回)     (若缺失当前语言翻译)    (`snake_case`)   │
  └─────────────────────────────────────────────────────────────────────────┘
```

---

## 8. 开源许可与治理条款

- **开源许可：** 本项目基于 [Apache License, Version 2.0](../LICENSE)（[ASF 官方文本](https://www.apache.org/licenses/LICENSE-2.0)）授权发布。
- **法定署名通知：** 遵循项目根目录下的 [NOTICE](../NOTICE) 文件（Apache 2.0 第 4(d) 条），署名归属于作者兼维护者 **Erisson Marques ([`https://github.com/erissontech`](https://github.com/erissontech))**。
- **变更日志规范：** 维护于 [CHANGELOG.md](../CHANGELOG.md)，遵循 [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/) 标准。
- **贡献者准则：** 详见 [CONTRIBUTING.md](../CONTRIBUTING.md)，包含明确的 **Inbound = Outbound（入站即出站）** 授权条款，以及项目所有赞助与捐赠收入 100% 归核心维护者独立所有的免责声明。
