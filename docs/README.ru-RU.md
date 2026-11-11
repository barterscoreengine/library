# BarterScore Engine (v1.1.0)

**A Local-First library for Collapse Informatics and Off-Grid Economics.**
*(Локально-ориентированная библиотека для информатики коллапса и автономной офлайн-экономики.)*

> **Язык:**
> [**English (en-US)**](../README.md) · [**Português (pt-BR)**](./README.pt-BR.md) · [**Español (es-ES)**](./README.es-ES.md) · [**Français (fr-FR)**](./README.fr-FR.md) · [**Русский (ru-RU)**](./README.ru-RU.md) · [**Kiswahili (sw-KE)**](./README.sw-KE.md) · [**العربية (ar-SA)**](./README.ar-SA.md) · [**简体中文 (zh-Hans)**](./README.zh-Hans.md) · [**Аналоговое полевое руководство (`OFFLINE_MANUAL.ru-RU.md`)**](./OFFLINE_MANUAL.ru-RU.md)

---

**BarterScore Engine** — это детерминированное, кроссплатформенное математическое ядро без внешних зависимостей (100% *offline-first*) и эталонный каталог из 128 позиций, разработанные для научно обоснованной оценки физической, нутритивной и функциональной меновой ценности товаров первой необходимости и специализированных человеческих услуг при разрушении цепочек поставок, гуманитарных кризисах и гражданском коллапсе.

Проект распространяется под лицензией [**Apache License 2.0**](https://www.apache.org/licenses/LICENSE-2.0). Вся архитектура написана на чистом **Vanilla JavaScript (ES6+ UMD)** и нативных **HTML5/CSS3**, идентично функционируя по локальному протоколу `file://` (запуск двойным щелчком без Node.js, веб-серверов и интернета), в среде CommonJS (`module.exports`) и ES Modules.

---

## Содержание

1. [Фундаментальные архитектурные принципы](#1-фундаментальные-архитектурные-принципы)
2. [Официальная математическая формула](#2-официальная-математическая-формула)
3. [Научная методология, шкала калибровки и официальные источники (1 клик + офлайн-аудит)](#3-научная методология-шкала-калибровки-и-официальные-источники-1-клик--офлайн-аудит)
4. [Контракт схемы данных и научная стандартизация](#4-контракт-схемы-данных-и-научная-стандартизация)
5. [Офлайн-запуск в 1 клик, печать бумажного руководства и структура репозитория](#5-офлайн-запуск-в-1-клик-печать-бумажного-руководства-и-структура-репозитория)
6. [Руководство по интеграции для разработчиков и справочник API](#6-руководство-по-интеграции-для-разработчиков-и-справочник-api)
7. [Как добавить Позицию 129+ или новый языковой пакет](#7-как-добавить-позицию-129-или-новый-языковой-пакет)
8. [Лицензия и управление проектом](#8-лицензия-и-управление-проектом)

---

## 1. Фундаментальные архитектурные принципы

- **Ноль внешних зависимостей (`file://` First):** Все модули в `src/`, `data/` и `locales/` используют гибридный шаблон UMD, регистрирующий глобальное пространство имен `window.BarterCore` для локального выполнения в браузере без ошибок CORS, а также поддерживающий `module.exports`.
- **Полное разделение физики и локализации:** Физические и нутритивные параметры хранятся исключительно в `data/items_core.js` под семантическими идентификаторами в формате `snake_case`. Переводы вынесены в `locales/[lang].js` в соответствии со стандартом [**IETF BCP 47 / RFC 5646**](https://www.rfc-editor.org/info/bcp47) (`en-US`, `pt-BR`, `es-ES`, `fr-FR`, `ru-RU`, `sw-KE`, `ar-SA`, `zh-Hans`) с автоматической трехуровневой цепочкой резервного возврата (*Fallback*):
  ```text
  Выбранный язык  ───►  en-US (Каноническая база)  ───►  Технический семантический ID
  ```
- **Ноль коммерческих брендов:** Использование торговых марок строго запрещено. Все позиции нормированы по **Атомарной единице потребления** (`1 таблетка`, `1 элемент питания`, `1 рулон`, `1 флакон 100 мл`, `1 упаковка 1000 г`) с использованием [**МНН ВОЗ (INN)**](https://www.who.int/teams/health-product-and-policy-standards/inn) ([**ГРЛС Минздрава РФ и Государственная фармакопея РФ XV**](https://grls.rosminzdrav.ru/) для `ru-RU`) для лекарственных средств, [**ГОСТ / МЭК 60086 и 61960**](https://webstore.iec.ch/en/publication/603) для элементов питания и [**Codex Alimentarius (ФАО/ВОЗ)**](https://www.fao.org/fao-who-codexalimentarius/) / [**ГОСТ и таблиц ФИЦ питания и биотехнологии**](https://protect.gost.ru/) для пищевых продуктов.

---

## 2. Официальная математическая формула

### 2.1. Нутритивный индекс (`IN`)
Для непищевых позиций (`is_food: false`) `IN = 1.0`. Для калорийных продуктов питания (`is_food: true`) индекс оценивает долю калорийности макронутриентов и плотность критических микронутриентов, жестко ограничиваясь функцией `Clamp` в интервале `[0.5, 2.5]`:

```text
MacroFactor = (pct_kcal_protein × 1.5) + (pct_kcal_fat × 1.0) - (pct_kcal_added_sugar × 1.2)
MicroFactor = (+0.3 если high_vit_c) + (+0.2 если high_sodium_potassium) + (+0.2 если high_calcium_iron)
IN          = Clamp(1.0 + MacroFactor + MicroFactor, 0.5, 2.5)
```

### 2.2. Базовый балл (`ScoreBase`) и амортизация срока годности в реальном времени
Сопоставляет калорийность или Эквивалентную энергетическую базу (`E`) с гравиметрическим и объемным транспортным бременем (`P + Vol + 0.1`), десятичным логарифмом срока хранения (`log₁₀(V + 1)`), коэффициентом готовности к употреблению (`CP`), психологическим фактором спроса (`FP`) и физической прочностью упаковки (`Frag`):

```text
ScoreBase = ( (E × IN) / (P + Vol + 0.1) ) × log₁₀(V + 1) × CP × FP × Frag
```

- **Амортизация в реальном времени:** При передаче фактического остатка срока годности `current_lifecycle_remaining` (или `offerRemainingDays`) он заменяет номинальный срок `lifecycle_units` (`V`). Если `V ≤ 0`, товар считается просроченным и `ScoreBase = 0`.

### 2.3. Модификатор внешнего контекста (`MEC`) и Итоговый балл

```text
ScoreFinal = ScoreBase × MEC
```

- **`acute_collapse` (Острый коллапс):** Категория `cat_store_of_value` (драгоценные металлы) пенализируется множителем **`0.01x`**, тогда как питьевая вода, гемостатики, системные антибиотики и готовые рационы получают повышающие множители острого дефицита.
- **`economic_reconstruction` (Экономическая реконструкция):** Категория `cat_store_of_value` переоценивается до **`5.0x`** наряду с долговечным ручным инструментом, сортовыми семенами, солнечными панелями и УКВ/ДМВ радиостанциями.

### 2.4. Двусторонний паритет обмена и предупреждение о неделимости (`calculateTrade`)
Для предлагаемой позиции `A` (количество `Q_A`) и запрашиваемой позиции `B`:

```text
Q_B_точное = ( ScoreFinal(A) × Q_A ) / ScoreFinal(B)
```

Если позиция `B` неделима (`is_divisible: false`), ядро округляет рекомендуемое количество до ближайшего целого (`Q_B_рек = max(1, round(Q_B_точное))`) и формирует структурированный отчет `trade_imbalance` / `tradeImbalanceWarning`, явно указывающий, **кто кому должен сдачу** (`ВЫ ДОЛЖНЫ СДАЧУ КОНТРАГЕНТУ` или `КОНТРАГЕНТ ДОЛЖЕН СДАЧУ ВАМ`), точный процент дисбаланса и готовые варианты расчета сдачей делимыми товарами (`г`, `мл`, `ед.`).

---

## 3. Научная методология, шкала калибровки и официальные источники (1 клик + офлайн-аудит)

Почему каждая позиция каталога получает именно такой балл, что физически означает **`1 балл BarterScore (1 pt)`** и почему Позиция B оценивается ровно вдвое (`2x`) выше Позиции A? Поскольку ни одно государственное ведомство не публикует единого уравнения, напрямую сопоставляющего *1 кг риса* с *1 капсулой амоксициллина* или *1 аккумулятором 18650*, **BarterScore Engine** объединяет **проверенные официальные эмпирические записи** (сохраненные локально для офлайн-аудита в [`audit_sources/`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) и по прямым ссылкам ниже) с **явно обоснованной инженерной шкалой десятичных ступеней**.

### 3.0. Физический смысл `1 балла BarterScore (1 pt)` и почему Позиция B стоит `2x` Позиции A
По анализу размерности формулы `ScoreBase = ((E × IN) / (P + Vol + 0.1)) × log₁₀(V + 1) × CP × FP × Frag`:
- **Физическое определение `1.0000 pt`:** **`1 балл BarterScore`** равен ровно **1 эффективной килокалории выживания (`E × IN = 1`) на единицу гравиметрически-объемной транспортной нагрузки (`P + Vol + 0.1 = 1.0`), сохраняемой в течение 1 логарифмической декады срока годности (`V = 9 дней` → `log₁₀(10) = 1.0`) при нейтральной операционной готовности (`CP = 1.0`, `FP = 1.0`, `Frag = 1.0`)**.
- **Почему Позиция B получает `2.0x` баллов Позиции A:** При прочих равных условиях балл удваивается, когда: **(1)** позиция дает вдвое (`2×`) больше метаболизируемых `ккал` или экономии метаболических потерь `EEB` (`E`); **(2)** концентрирует ту же полезность в половине суммарной массы и объема (`P + Vol + 0.1`); **(3)** ее срок хранения возводится в квадрат по логарифмической шкале с основанием 10 (например, `1.000 дней` [`log₁₀ ≈ 3,0`] против `31 дня` [`log₁₀ ≈ 1,5`]); или **(4)** ее операционное произведение (`CP × FP × Frag`) в два раза выше.

### 3.1. Официальные научные, регуляторные и гуманитарные источники (Офлайн-снимок в `audit_sources/` + Ссылки в 1 клик)
> **100% офлайн-аудируемость (`audit_sources/`):** Все выборки из баз данных, коды **USDA FDC ID**, коды **АТХ ВОЗ**, ссылки на **МНН/ГРЛС Минздрава РФ и ГОСТ** сохранены локально в [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) и UMD-модуле [`audit_sources/offline_sources_registry.js`](../audit_sources/offline_sources_registry.js) (`window.BarterCore.AuditSources`), что позволяет верифицировать всю базу по протоколу `file://` без доступа к интернету.
>
> **Примечание об охвате (Репрезентативные примеры против полной матрицы из 128 позиций):** Чтобы сохранить данный `README` компактным и удобным для чтения, ниже приведены **репрезентативные примеры** для каждой научной области. Полная пообъектная матрица прослеживаемости для всех **128 позиций каталога (`001`–`128`: 100 физических товаров + 28 критически важных человеческих услуг)** полностью документирована в [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md).

1. **Калорийность и соотношение макронутриентов (`E_food`, `IN`) — Коды записей USDA FDC / ФИЦ питания / ГОСТ:**
   - Извлечены из [**USDA FoodData Central (SR Legacy)**](https://fdc.nal.usda.gov/), таблиц [**ФИЦ питания и биотехнологии / ГОСТ**](https://protect.gost.ru/), [**TBCA — USP/FoRC**](https://www.tbca.net.br/), [**TACO 4-е изд. — UNICAMP (PDF)**](https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf) и [**Codex Alimentarius (ФАО/ВОЗ)**](https://www.fao.org/fao-who-codexalimentarius/). Проверенные записи:
     - **Рис белый шлифованный сырой (`rice_white_polished_raw_1000g`):** [**USDA FDC ID 169756 / NDB 20444**](https://fdc.nal.usda.gov/food-details/169756/nutrients) (`365 ккал/100 г` → `3.650 ккал/1000 г`, белки `7,13 г/100 г`, жиры `0,66 г/100 г`).
     - **Фасоль продовольственная сухая (`beans_common_dry_1000g`):** [**USDA FDC ID 173734 / NDB 16014**](https://fdc.nal.usda.gov/food-details/173734/nutrients) и [**TBCA C0113A**](https://www.tbca.net.br/) (`329 ккал/100 г` → `3.290 ккал/1000 г`, белки `24,5% ккал`, высокое содержание Fe и K).
     - **Мед натуральный, сахар-песок и масло растительное:** [**FDC ID 169640**](https://fdc.nal.usda.gov/food-details/169640/nutrients) (`304 ккал/100 г`), [**FDC ID 169655**](https://fdc.nal.usda.gov/food-details/169655/nutrients) (`387 ккал/100 г`) и [**FDC ID 171411**](https://fdc.nal.usda.gov/food-details/171411/nutrients) (`884 ккал/100 г`).
2. **Фармакологический отбор, коды АТХ, ОРС и травматология (`cat_pharma_essential`, `cat_trauma_hygiene`):**
   - Основаны на [**23-м Примерном перечне ВОЗ основных лекарственных средств (`WHO/MHP/HPS/EML/2023.02`)**](https://iris.who.int/handle/10665/371090) (Амоксициллин 500 мг `ATC: J01CA04` группа Access; Ципрофлоксацин 500 мг `ATC: J01MA02` группа Watch; Азитромицин 500 мг `ATC: J01FA10` группа Watch; Парацетамол 500 мг `ATC: N02BE01`), спецификации [**Низкоосмолярных оральных регидратационных солей ВОЗ/ЮНИСЕФ (`Документ WHO/FCH/CAH/06.1`: `20,5 г/л`, `245 мОсм/л`)**](https://iris.who.int/handle/10665/69227), [**WHO IEHK 2017**](https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017), протоколах [**CoTCCC / TCCC**](https://deployedmedicine.com/market/31) и [**Руководстве FDA США (декабрь 2001 г.) по калия йодиду (`130 мг` для блокады щитовидной железы у взрослых)**](https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki).
3. **Обеззараживание воды, стандарт «Сфера» WASH 2.1 и затраты топлива на варку (`CP`, `cat_water_fire_shelter`):**
   - Основаны на [**Руководстве «Сфера» (изд. 2018 г., стандарт WASH 2.1: `15 л/чел./день` общая базовая потребность; `2,5–3,0 л/день` питьевое выживание; `3–6 л/день` приготовление пищи)**](https://spherestandards.org/handbook/editions/) и [**Руководстве ВОЗ по контролю качества питьевой воды (`ISBN 978-92-4-154995-0`: 1 таблетка `67 мг` NaDCC обеззараживает `20 литров` прозрачной воды за `30 мин`)**](https://www.who.int/publications/i/item/9789241549950).
4. **Срок хранения в герметичной упаковке (`V`) и ударопрочность тары (`Frag`):**
   - Основаны на исследованиях [**US Army DEVCOM Soldier Center (Natick)**](https://www.army.mil/devcom-sc), директивах [**USDA FSIS Shelf-Stable Food Safety**](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food), руководствах [**FEMA / Ready.gov**](https://www.ready.gov/food) и программе [**FDA / DoD Shelf-Life Extension Program (SLEP)**](https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/expiration-dating-extension).
5. **Критические услуги, клинические процедуры, автономные ИТ, обучение и квалифицированный труд (`cat_essential_services`, Позиции `101–128`):**
   - Основаны на [**Руководстве ВОЗ IMEESC (Неотложная и базовая хирургическая помощь)**](https://www.who.int/Specify/emergencies/surgical-care), [**Руководстве ВОЗ/ЮНФПА/ЮНИСЕФ IMPAC (*Оказание помощи при осложненном течении беременности и родов*, ISBN 978-92-4-156549-3)**](https://www.who.int/publications/i/item/9789241565493), [**Международной стандартной классификации занятий МОТ ISCO-08 и стандарте ISO 8996**](https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/), [**Ветеринарных и семеноводческих руководствах ФАО**](https://www.fao.org/agriculture/crops/thematic-sitemap/theme/seeds-pgr/seed-sys/security/en/), [**Полевых стандартах технического обслуживания IEEE / IEC / ETSI**](https://www.itu.int/en/ITU-D/Emergency-Telecommunications/), стандартах [**IEEE 802.11s / ISO/IEC 27037 / IPC-7711/7721 / IEC 61131-3 (Автономные ИТ и микроэлектроника)**](https://standards.ieee.org/ieee/802.11s/4570/) и стандартах [**UNESCO ISCED / ВОЗ-МККК BEC / ISO 17100 (Техническое обучение и перевод)**](https://uis.unesco.org/en/topic/international-standard-classification-education-isced).
   - *Физическое прокси-моделирование нематериальных услуг:* Все 28 услуг (`is_food: false`, `is_divisible: false`, `sub_units: 1`, `unit_measure: 'un'`) сопоставляют `weight_kg (P)` (`0,08–0,30 кг`) и `volume_liters (Vol)` (`0,10–0,35 л`) с **Предельным расходом материалов и амортизацией инструмента на одну процедуру** (учитывая только расходные материалы и пропорциональный износ инструмента за одно вмешательство, поскольку врач или техник сохраняет свой постоянный инструментальный ящик; это исключает как чрезмерное занижение балла из-за веса всего чемодана, так и искусственное завышение при `0,001 кг`), `lifecycle_units (V)` (`7–3.650 дней`) — с **Эффективной долговечностью результата / интервалом до рецидива**, а `energy_or_utility_base (E)` (`5.200–38.000 EEB`) — с **Предотвращенной биологической потерей калорий + сэкономленными трудозатратами**. По умолчанию `calculateChangeOptions()` исключает `cat_essential_services` из автоматических рекомендаций разменной сдачи.

#### Полный справочник проверки в 1 клик (С точными кодами документов и идентификаторами записей)

| Область / Охват | Ведомство и точный код документа / записи | Прямая ссылка для проверки в 1 клик |
| :--- | :--- | :--- |
| **Локальное офлайн-досье аудита** | Папка офлайн-реестра (`audit_sources/`) | [`../audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) |
| **Питание: Рис белый (`365 ккал/100 г`)** | USDA FoodData Central — `FDC ID: 169756` (`NDB 20444`) | [https://fdc.nal.usda.gov/food-details/169756/nutrients](https://fdc.nal.usda.gov/food-details/169756/nutrients) |
| **Питание: Фасоль сухая (`329–341 ккал/100 г`)** | USDA FoodData Central — `FDC ID: 173734` (`NDB 16014`) & TBCA `C0113A` | [https://fdc.nal.usda.gov/food-details/173734/nutrients](https://fdc.nal.usda.gov/food-details/173734/nutrients) |
| **Питание: Мед, Сахар и Масло** | USDA FDC IDs `169640`, `169655` и `171411` | [https://fdc.nal.usda.gov/food-details/169640/nutrients](https://fdc.nal.usda.gov/food-details/169640/nutrients) |
| **Питание: Национальные таблицы** | ФИЦ питания / ГОСТ, ANSES Ciqual, TBCA (USP) & TACO 4-е изд. | [https://protect.gost.ru/](https://protect.gost.ru/) · [https://ciqual.anses.fr/](https://ciqual.anses.fr/) · [https://www.tbca.net.br/](https://www.tbca.net.br/) |
| **Международные пищевые стандарты** | Комиссия ФАО/ВОЗ Codex Alimentarius | [https://www.fao.org/fao-who-codexalimentarius/](https://www.fao.org/fao-who-codexalimentarius/) |
| **Основные лекарственные средства (`J01CA04`)** | 23-й Примерный перечень ВОЗ (`WHO/MHP/HPS/EML/2023.02`) | [https://iris.who.int/handle/10665/371090](https://iris.who.int/handle/10665/371090) |
| **Оральные регидратационные соли (`20,5 г/л`)** | ВОЗ / ЮНИСЕФ низкоосмолярные ОРС (`WHO/FCH/CAH/06.1`) | [https://iris.who.int/handle/10665/69227](https://iris.who.int/handle/10665/69227) |
| **Фармацевтические субстанции** | ВОЗ — Международные непатентованные наименования (МНН / INN) | [https://www.who.int/teams/health-product-and-policy-standards/inn](https://www.who.int/teams/health-product-and-policy-standards/inn) |
| **Гуманитарные экстренные аптечки** | ВОЗ / УВКБ ООН / ЮНИСЕФ — IEHK 2017 | [https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017](https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017) |
| **Догоспитальная артериальная травма** | CoTCCC / US DoD — Руководства TCCC | [https://deployedmedicine.com/market/31](https://deployedmedicine.com/market/31) |
| **Радиационная защита щитовидной железы** | Руководство FDA США (дек. 2001) — Калия йодид (`130 мг`) | [https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki](https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki) |
| **Номенклатура локали `en-US`** | Фармакопея США (USP) & FDA Orange Book | [https://www.usp.org/](https://www.usp.org/) · [https://www.accessdata.fda.gov/scripts/cder/ob/](https://www.accessdata.fda.gov/scripts/cder/ob/) |
| **Номенклатура локали `pt-BR`** | DCB / ANVISA (Бразильское общее наименование) | [https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/dcb](https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/dcb) |
| **Номенклатура локали `es-ES`** | DOE / CIMA AEMPS & BOE `BOE-A-1967-16485` (CAE) | [https://cima.aemps.es/](https://cima.aemps.es/) · [https://www.boe.es/buscar/act.php?id=BOE-A-1967-16485](https://www.boe.es/buscar/act.php?id=BOE-A-1967-16485) |
| **Номенклатура локали `fr-FR`** | DCI / ANSM (Pharmacopée Française) & ANSES Table Ciqual | [https://ansm.sante.fr/documents/reference/pharmacopee](https://ansm.sante.fr/documents/reference/pharmacopee) · [https://ciqual.anses.fr/](https://ciqual.anses.fr/) |
| **Номенклатура локали `ru-RU`** | МНН / ГРЛС Минздрава РФ (ГФ РФ XV) & Росстандарт (ГОСТ) | [https://grls.rosminzdrav.ru/](https://grls.rosminzdrav.ru/) · [https://protect.gost.ru/](https://protect.gost.ru/) |
| **Номенклатура локали `sw-KE`** | KEML / PPB Kenya (Pharmacy and Poisons Board) & KEBS / KFCT | [https://web.pharmacyboardkenya.org/](https://web.pharmacyboardkenya.org/) · [https://www.kebs.org/](https://www.kebs.org/) |
| **Номенклатура локали `ar-SA`** | SFDA (Saudi Food & Drug Authority) & Стандарты SASO / GSO | [https://www.sfda.gov.sa/](https://www.sfda.gov.sa/) · [https://www.saso.gov.sa/](https://www.saso.gov.sa/) |
| **Номенклатура локали `zh-Hans`** | Фармакопея КНР (ChP) & Национальные стандарты GB (SAMR) | [https://www.chp.org.cn/](https://www.chp.org.cn/) · [https://openstd.samr.gov.cn/](https://openstd.samr.gov.cn/) |
| **Вода и дезинфекция NaDCC (`67 мг/20 л`)** | «Сфера» WASH Std 2.1 (`15 л/день`) & ВОЗ GDWQ `978-92-4-154995-0` | [https://spherestandards.org/handbook/editions/](https://spherestandards.org/handbook/editions/) · [https://www.who.int/publications/i/item/9789241549950](https://www.who.int/publications/i/item/9789241549950) |
| **Срок хранения (`V`) и тара (`Frag`)** | USDA FSIS Shelf-Stable, FEMA Ready.gov & FDA SLEP | [https://www.fsis.usda.gov/.../shelf-stable-food](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food) · [https://www.fda.gov/.../expiration-dating-extension](https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/expiration-dating-extension) |
| **Элементы питания (`LR6`, `LR03`, `INR18650`)** | ГОСТ / МЭК 60086-2 (Первичные) & МЭК 61960-3 (Литиевые) | [https://webstore.iec.ch/en/publication/603](https://webstore.iec.ch/en/publication/603) |
| **Противоаэрозольные респираторы (`N95 / FFP2`)** | ГОСТ 12.4.294-2013 (FFP2) & CDC / NIOSH `42 CFR Part 84` | [https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html](https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html) |
| **Драгоценные металлы (`Проба 999,0`)** | Спецификации LBMA Good Delivery | [https://www.lbma.org.uk/good-delivery/about-good-delivery](https://www.lbma.org.uk/good-delivery/about-good-delivery) |
| **Экстренная хирургия и акушерство** | ВОЗ IMEESC & ВОЗ/ЮНФПА/ЮНИСЕФ IMPAC (`978-92-4-156549-3`) | [https://www.who.int/publications/i/item/9789241565493](https://www.who.int/publications/i/item/9789241565493) |
| **Квалифицированный труд и эргономика** | МОТ ISCO-08 & ISO 8996 (Метаболическая энергоемкость труда) | [https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/](https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/) · [https://www.iso.org/standard/74443.html](https://www.iso.org/standard/74443.html) |
| **Автономные ИТ, восстановление данных и пайка** | IEEE 802.11s, ISO/IEC 27037, IPC-7711/7721 & IEC 61131-3 | [https://standards.ieee.org/ieee/802.11s/4570/](https://standards.ieee.org/ieee/802.11s/4570/) · [https://www.iso.org/standard/44381.html](https://www.iso.org/standard/44381.html) |
| **Техническое обучение, педагогика и перевод** | UNESCO ISCED, ВОЗ/МККК BEC & ISO 17100:2015 | [https://uis.unesco.org/en/topic/international-standard-classification-education-isced](https://uis.unesco.org/en/topic/international-standard-classification-education-isced) · [https://www.iso.org/standard/59149.html](https://www.iso.org/standard/59149.html) |
| **Отчеты о городских осадах и конфликтах** | Публикация МККК `4249` & отчеты ВОЗ по чрезвычайным ситуациям | [https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict](https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict) · [https://www.who.int/emergencies/situations/ukraine-emergency](https://www.who.int/emergencies/situations/ukraine-emergency) |

---

## 4. Контракт схемы данных и научная стандартизация

Каждый объект в `data/items_core.js` или зарегистрированный через `BarterEngine.registerCustomItems([item])` проверяется валидатором `window.BarterCore.Validator.validateItem(item)`:

| Свойство | Тип | Ограничение / Допустимые значения |
| :--- | :--- | :--- |
| `id` | `string` | Строчный `snake_case` (`/^[a-z][a-z0-9_]{2,120}$/`), нечисловой, без коммерческих брендов |
| `category` | `string` | `cat_staple_foods`, `cat_critical_nutrition`, `cat_spices_morale`, `cat_pharma_essential`, `cat_trauma_hygiene`, `cat_water_fire_shelter`, `cat_tools_energy_comms`, `cat_store_of_value`, `cat_essential_services` |
| `is_food` | `boolean` | `true` для калорийных продуктов питания; `false` для непищевых позиций, медикаментов, инструментов и услуг |
| `is_divisible` | `boolean` | `true`, если делится на `sub_units`; `false`, если обменивается только целыми единицами |
| `sub_units` | `number` | Целое число `≥ 1` (`1` для неделимых; общее число `г`, `мл` или субъединиц для делимых) |
| `unit_measure` | `string` | `"g"` \| `"ml"` \| `"un"` |
| `energy_or_utility_base` | `number` | `> 0` (Реальные `ккал` для продуктов питания; `EEB` в диапазоне `[500, 50000]` для непищевых позиций) |
| `weight_kg` | `number` | Физическая масса в килограммах (`> 0`) |
| `volume_liters` | `number` | Физический вытесняемый объем в литрах (`≥ 0`) |
| `lifecycle_units` | `number` | Номинальный срок годности в герметичной таре или долговечность результата услуги в днях (`> 0`) |
| `cost_of_prep` | `number` | Коэффициент простоты приготовления в диапазоне `[0.5, 1.0]` |
| `psychological_factor` | `number` | Коэффициент психологического и морального спроса в диапазоне `[1.0, 2.5]` |
| `fragility_index` | `number` | Коэффициент физической прочности упаковки в диапазоне `[0.7, 1.2]` |
| `tags` | `string[]` | Непустой массив функциональных тегов в формате `snake_case` |

---

## 5. Офлайн-запуск в 1 клик, печать бумажного руководства и структура репозитория

Для работы в автономном режиме не требуются компиляторы, локальные веб-серверы или подключение к интернету:

- **Windows (7 / 10 / 11):** Дважды щелкните по `start_windows.bat` в корне проекта.
- **Linux / macOS / FreeBSD / OpenBSD:** Запустите `./start_unix.sh` (или `sh ./start_unix.sh`).
- **Прямое открытие в браузере:** Дважды щелкните по `manual_generator.html` в любом настольном или мобильном файловом менеджере.
- **Двусторонний симулятор бартера и прямая сводка расчета:** В `manual_generator.html` выберите **Предлагаемую позицию (Вы отдаете)** и **Запрашиваемую позицию (Вы получаете)** (или нажмите `⇄` для мгновенной смены сторон) и укажите остаточный срок годности в днях (`V`). Симулятор отобразит **Прямую сводку расчета обмена** (`Вы отдаете ➔ Вы получаете`), 6 именованных показателей KPI, а также переведенные предупреждения о неделимости с четким указанием того, кто кому должен сдачу, и вариантами доплаты в граммах, миллилитрах или штуках.
- **Печать бумажного полевого руководства (Страница 1 — инструкция + все 3 сценария рядом):** В `manual_generator.html` выберите язык **`Русский (ru-RU)`** и нажмите **«Печать бумажного руководства»** (или `Ctrl+P` / `Cmd+P`). Встроенная таблица стилей `@media print` (`A4 landscape`) скроет интерактивные элементы и сформирует высококонтрастное черно-белое издание: на **Странице 1** печатается полное **Аналоговое полевое руководство** (4-шаговый протокол, гид по 3 колонкам сценариев, решенный полевой пример, Протоколы срока годности А и Б, санитарный чек-лист и **Предварительно рассчитанная таблица дробной сдачи по 3 сценариям**), а на **Страницах 2+** — полный каталог из 128 позиций с **одновременным отображением всех 3 кризисных сценариев рядом** в **Колонках 8 (`1. Чистая база 1,0x`), 9 (`2. Острый коллапс`) и 10 (`3. Реконструкция`)**.

### 5.1. Архитектура репозитория

```text
library/
├── .gitattributes                      # Принудительно задает LF для .sh, CRLF для .bat и правила GitHub Linguist
├── .gitignore                          # Защита от кэшей ОС, состояния IDE и lock-файлов
├── LICENSE                             # Официальная лицензия Apache License 2.0
├── NOTICE                              # Обязательное уведомление об авторстве (Раздел 4d — Erisson Marques)
├── README.md                           # Каноническая документация на английском языке и справочник SDK
├── CHANGELOG.md                        # История релизов по стандарту Keep a Changelog v1.1.0
├── CONTRIBUTING.md                     # Правило Inbound=Outbound и 100% принадлежность спонсорской поддержки
├── package.json                        # Манифест npm-пакета без зависимостей и метаданные
├── server.js                           # Нативный HTTP-сервер Node.js (ноль зависимостей) для локального обзора
├── index.js                            # Единая корневая UMD-точка входа пакета (@barterscoreengine/library)
├── index.d.ts                          # Официальные декларации типов TypeScript для IDE и внешних проектов
├── start_windows.bat                   # Лаунчер Windows в 1 клик (протокол file://)
├── start_unix.sh                       # POSIX-лаунчер в 1 клик (Linux, macOS, BSD)
├── manual_generator.html               # Автономный GUI без зависимостей, симулятор и генератор руководства A4
├── data/
│   └── items_core.js                   # 128 стандартизированных позиций (9 категорий: 100 товаров + 28 услуг) + шаблон Позиции 129+
├── audit_sources/
│   ├── OFFLINE_AUDIT_DOSSIER.md        # Офлайн-досье научных источников и десятичных ступеней калибровки
│   └── offline_sources_registry.js     # Офлайн-снимок эмпирических записей UMD (window.BarterCore.AuditSources)
├── locales/
│   ├── en-US.js                        # Английский (WHO INN / USP / Codex Alimentarius)
│   ├── pt-BR.js                        # Португальский (DCB-ANVISA / TBCA-TACO)
│   ├── es-ES.js                        # Испанский (DOE-AEMPS / Código Alimentario Español)
│   ├── fr-FR.js                        # Французский (DCI-ANSM / Pharmacopée Française / ANSES-Ciqual)
│   ├── ru-RU.js                        # Русский (МНН-ГРЛС Минздрава РФ / ГФ РФ XV / ГОСТ)
│   ├── sw-KE.js                        # Суахили (WHO INN / KEML-PPB Kenya / KEBS-KFCT)
│   ├── ar-SA.js                        # Арабский (WHO INN / SFDA / SASO-GSO / Codex Alimentarius)
│   └── zh-Hans.js                      # Упрощенный китайский (Фармакопея КНР ChP / GB)
├── docs/
│   ├── OFFLINE_MANUAL.md               # Автономное аналоговое полевое руководство на английском (en-US)
│   ├── OFFLINE_MANUAL.pt-BR.md         # Автономное аналоговое полевое руководство на португальском (pt-BR)
│   ├── OFFLINE_MANUAL.es-ES.md         # Автономное аналоговое полевое руководство на испанском (es-ES)
│   ├── OFFLINE_MANUAL.fr-FR.md         # Автономное аналоговое полевое руководство на французском (fr-FR)
│   ├── OFFLINE_MANUAL.ru-RU.md         # Автономное аналоговое полевое руководство на русском (ru-RU)
│   ├── OFFLINE_MANUAL.sw-KE.md         # Автономное аналоговое полевое руководство на суахили (sw-KE)
│   ├── OFFLINE_MANUAL.ar-SA.md         # Автономное аналоговое полевое руководство на арабском (ar-SA)
│   ├── OFFLINE_MANUAL.zh-Hans.md       # Автономное аналоговое полевое руководство на китайском (zh-Hans)
│   ├── README.pt-BR.md                 # Зеркальная документация на бразильском португальском
│   ├── README.es-ES.md                 # Зеркальная документация на испанском
│   ├── README.fr-FR.md                 # Зеркальная документация на французском
│   ├── README.ru-RU.md                 # Зеркальная документация на русском
│   ├── README.sw-KE.md                 # Зеркальная документация на суахили
│   ├── README.ar-SA.md                 # Зеркальная документация на арабском
│   └── README.zh-Hans.md               # Зеркальная документация на упрощенном китайском
└── src/
    ├── barter_engine.js                # Математическое и бартерное UMD-ядро без зависимостей
    └── validator.js                    # UMD-валидатор и аудитор схемы данных, каталога и локалей
```

---

## 6. Руководство по интеграции для разработчиков и справочник API

`BarterEngine` имеет гибридную архитектуру SDK с полными блоками **JSDoc** (`@param`, `@returns`, `@example`) для автодополнения (IntelliSense) в любой IDE. Вы можете создавать изолированные экземпляры через `new BarterEngine(options)` или вызывать статические методы напрямую у `BarterEngine`.

### 6.1. Сценарий А: Браузер / Офлайн HTML / Mobile WebView через `<script>`
Подключите UMD-файлы в указанном порядке. Все модули автоматически привязываются к глобальному объекту `window.BarterCore`, работая без блокировок CORS по локальному протоколу `file://`:

```html
<script src="src/validator.js"></script>
<script src="data/items_core.js"></script>
<script src="audit_sources/offline_sources_registry.js"></script>
<script src="locales/en-US.js"></script>
<script src="locales/ru-RU.js"></script>
<script src="src/barter_engine.js"></script>
<script src="index.js"></script>

<script>
  const { BarterEngine, Validator, ItemsCore, AuditSources } = window.BarterCore;

  const engine = new BarterEngine({
    items: ItemsCore,
    locale: 'ru-RU',
    crisisPhase: 'acute_collapse'
  });

  const itemScore = engine.evaluateItem('water_potable_sealed_1000ml');
  console.log('Наименование:', engine.translate('water_potable_sealed_1000ml', 'name', 'ru-RU'));
  console.log('Итоговый балл:', itemScore.final_score); // 16458.3288
</script>
```

### 6.2. Сценарий Б: ES Modules (`import`) и Node.js / CommonJS (`require`)
Установите пакет напрямую из официального репозитория GitHub ([`https://github.com/barterscoreengine/library`](https://github.com/barterscoreengine/library)) или импортируйте локальные файлы без транспиляции:

```bash
npm install github:barterscoreengine/library
# Или для автономного использования: git clone https://github.com/barterscoreengine/library.git
```

```javascript
// 1. ES Modules через пакет (@barterscoreengine/library) — React, Vue, Vite, Next.js, TypeScript, Node.js
import { BarterEngine, Validator, ItemsCore, Locales, AuditSources } from '@barterscoreengine/library';

const engine = new BarterEngine({
  items: ItemsCore,
  locales: Locales,
  locale: 'ru-RU',
  crisisPhase: 'acute_collapse'
});

engine.setLocale('ru-RU');
engine.setCrisisPhase('acute_collapse');
```

### 6.3. Практический пример 1: Двусторонняя симуляция обмена (`calculateTrade`)
Симуляция обмена **2 упаковок белого шлифованного риса (1000 г)** с учетом реального остатка срока годности (`offerRemainingDays: 730` вместо номинальных `1825` дней) на **капсулы Амоксициллина 500 мг** во время инфекционной вспышки и засухи (`contextModifiers`):

```javascript
const tradeResult = engine.calculateTrade(
  'rice_white_polished_raw_1000g', // Семантический ID предлагаемой позиции
  2,                               // offerQuantity (2 упаковки по 1000 г)
  'amoxicillin_500mg_capsule',     // Семантический ID запрашиваемой позиции
  {
    scenario: 'acute_collapse',
    offerRemainingDays: 730,       // Амортизация срока годности (осталось 730 дней)
    requestRemainingDays: 1095,    // Номинальный срок годности запрашиваемой позиции
    contextModifiers: {
      antibiotic_systemic: 2.2,    // Множитель инфекционной вспышки
      hydration: 2.5               // Множитель экстремальной засухи
    }
  }
);

console.log(JSON.stringify(tradeResult, null, 2));
```

### 6.4. Практический пример 2: Программное добавление Позиции 129+ (`registerCustomItems` и `AuditSources`)
При интеграции SDK во внешнее приложение вы можете расширить канонический каталог из 128 позиций (`001–128`) региональными товарами (`Позиция 129+`) с помощью `mode: 'merge'` и `strict: true`, одновременно регистрируя источник аудита Уровня 2 (`Tier 2`) через `AuditSources.registerCustomAuditSource`:

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

const mergeReport = engine.registerCustomItems(regionalDataset, {
  mode: 'merge',
  strict: true
});

AuditSources.registerCustomAuditSource({
  index: 129,
  id: 'doxycycline_hyclate_100mg_capsule',
  category: 'cat_pharma_essential',
  source_code: 'WHO_EML_23',
  baseline_note: 'WHO EML 23rd List ATC J01AA02 (Doxycycline 100mg capsule); EEB = 4,600'
});
```

### 6.5. Юридическое уведомление об авторстве (Apache License 2.0 — Раздел 4d)
> **Обязательное примечание для внешних разработчиков и дистрибьюторов:**
> В строгом соответствии с [**Разделом 4 лицензии Apache License, Version 2.0**](https://www.apache.org/licenses/LICENSE-2.0), любое внешнее приложение, мобильное приложение, настольное ПО, прошивка или производное печатное руководство, распространяющее или включающее **BarterScore Engine** (полностью или частично, в виде исходного кода или в скомпилированной/упакованной форме), **ОБЯЗАНО** сохранять и включать неизмененные копии корневых файлов [`LICENSE`](../LICENSE) и [`NOTICE`](../NOTICE), сохраняя явное указание авторства оригинального проекта **BarterScore Engine** и его автора/мейнтейнера **Erisson Marques ([`https://github.com/erissontech`](https://github.com/erissontech))**.

---

## 7. Как добавить Позицию 129+ или новый языковой пакет

### Добавление Позиции 129+
1. Откройте `data/items_core.js` и скопируйте закомментированный шаблон в конце массива `ITEMS_CORE`.
2. Задайте семантический `id` в формате `snake_case` на английском языке (без торговых марок) и заполните физические и нутритивные параметры согласно шкале калибровки из Раздела 3.
3. Проверьте через `window.BarterCore.Validator.validateDataset(window.BarterCore.ItemsCore)` отсутствие ошибок и предупреждений (`0 errors, 0 warnings`).
4. **Зарегистрируйте источник аудита (Двухуровневое разделение):** Сохраните неизменной каноническую матрицу `001–128` и запишите нормативный источник вашей `Позиции 129+` в **Раздел 4 (`Custom & Regional User Audit Ledger`)** файла [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) и/или программно через `window.BarterCore.AuditSources.registerCustomAuditSource({ index: 129, id, category, source_code, baseline_note })`.

### Добавление нового языкового пакета (`locales/[lang].js`)
1. Скопируйте `locales/en-US.js` под именем `locales/<код-BCP47>.js` (например, `locales/de-DE.js` по стандарту [IETF BCP 47](https://www.rfc-editor.org/info/bcp47)).
2. Переведите разделы `categories`, `scenarios`, `ui` и `items`, используя официальную фармакопейную и пищевую номенклатуру соответствующей юрисдикции.
3. Зарегистрируйте словарь вызовом `window.BarterCore.BarterEngine.registerLocale('de-DE', dictionary)` и добавьте `<script src="locales/de-DE.js"></script>` в `manual_generator.html`. Любой отсутствующий ключ автоматически вернется к `en-US`, а затем к техническому `id`.

---

## 8. Лицензия и управление проектом

- **Лицензия:** Распространяется под лицензией [Apache License, Version 2.0](../LICENSE) ([Официальный текст ASF](https://www.apache.org/licenses/LICENSE-2.0)).
- **Уведомление об авторстве:** Регулируется корневым файлом [NOTICE](../NOTICE) (Раздел 4(d) Apache 2.0), закрепляющим авторство за **Erisson Marques ([`https://github.com/erissontech`](https://github.com/erissontech))**.
- **Журнал изменений:** Ведется в файле [CHANGELOG.md](../CHANGELOG.md) в соответствии со стандартом [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/).
- **Вклад в проект:** Регулируется файлом [CONTRIBUTING.md](../CONTRIBUTING.md), включая правило **Inbound = Outbound** и 100% исключительное право основного мейнтейнера на получение спонсорской поддержки и пожертвований.
