# BarterScore Engine (v1.1.0) — Manual de Campo Analógico para Operaciones en Apagón Total

> **Idioma del Manual:**
> [**English (`OFFLINE_MANUAL.md`)**](./OFFLINE_MANUAL.md) · [**Português (`OFFLINE_MANUAL.pt-BR.md`)**](./OFFLINE_MANUAL.pt-BR.md) · [**Español (`OFFLINE_MANUAL.es-ES.md`)**](./OFFLINE_MANUAL.es-ES.md) · [**Français (`OFFLINE_MANUAL.fr-FR.md`)**](./OFFLINE_MANUAL.fr-FR.md) · [**Русский (`OFFLINE_MANUAL.ru-RU.md`)**](./OFFLINE_MANUAL.ru-RU.md) · [**Kiswahili (`OFFLINE_MANUAL.sw-KE.md`)**](./OFFLINE_MANUAL.sw-KE.md) · [**العربية (`OFFLINE_MANUAL.ar-SA.md`)**](./OFFLINE_MANUAL.ar-SA.md) · [**简体中文 (`OFFLINE_MANUAL.zh-Hans.md`)**](./OFFLINE_MANUAL.zh-Hans.md)
>
> **Repositorio Oficial:** [https://github.com/barterscoreengine/library](https://github.com/barterscoreengine/library)
> **Licencia:** [Apache License 2.0](../LICENSE) · **Atribución:** [Erisson Marques](https://github.com/erissontech) ([`NOTICE`](../NOTICE))
> **Documentación Principal:** [**Español (`README.es-ES.md`)**](./README.es-ES.md) · [**English (`README.md`)**](../README.md) · [**Português (`README.pt-BR.md`)**](./README.pt-BR.md) · [**Français (`README.fr-FR.md`)**](./README.fr-FR.md) · [**Русский (`README.ru-RU.md`)**](./README.ru-RU.md) · [**Kiswahili (`README.sw-KE.md`)**](./README.sw-KE.md) · [**العربية (`README.ar-SA.md`)**](./README.ar-SA.md) · [**简体中文 (`README.zh-Hans.md`)**](./README.zh-Hans.md)

---

## 1. Propósito y Doctrina de Operación en Apagón Total

Este documento constituye el **Manual de Operación Analógica en Campo** de **BarterScore Engine**. Ha sido diseñado específicamente para **Escenarios de Apagón Total (*Total Blackout*)** — caídas prolongadas de la red eléctrica, perturbaciones electromagnéticas o despliegues humanitarios aislados donde ordenadores, teléfonos móviles y suministro eléctrico no están disponibles.

Para operar un puesto comunitario de trueque o gestionar intercambios domésticos mediante este sistema, únicamente necesita:
1. **Una Copia Impresa de la Tabla General de Cotizaciones** (generada mediante `manual_generator.html` en formato **A4 Horizontal / Paisaje** de alto contraste);
2. **Una Regla Recta** (para seguir la lectura horizontal de las 10 columnas de cada artículo sin desviación visual);
3. **Una Calculadora de Bolsillo (Solar/Pilas) o Lápiz y Papel** (para la aritmética de liquidación en 3 pasos);
4. **Una Báscula de Cocina Básica (resolución de `1 g`) o Probeta Graduada (`1 ml`)** (para liquidar el cambio fraccionario en artículos divisibles de alta liquidez, como sal refinada yodada, azúcar blanco granulado, arroz crudo o agua potable).

---

## 2. El Protocolo Analógico de Liquidación en 3 Pasos

Cada artículo de la tabla impresa de 10 columnas muestra **simultáneamente los 3 escenarios de crisis en paralelo**, junto con su **Tasa por Subunidad** (`1 g = X pts` o `1 ml = X pts`) en cada columna para los 47 artículos divisibles del catálogo:

> **¿Qué Columna de Escenario Debe Utilizar (Columnas 8, 9 y 10)?**
> - **Columna 8 — `1. Base Pura (1,0x)`:** Puntuación física y nutricional intrínseca (`ScoreBase`) sin multiplicadores externos de crisis.
> - **Columna 9 — `2. Colapso Agudo`:** Fase de supervivencia inmediata; agua potable y potabilización (`hasta 4,32x`), antibióticos sistémicos, control de hemorragias y raciones listas alcanzan su máximo, mientras el oro y la plata caen a `0,01x`.
> - **Columna 10 — `3. Reconstrucción`:** Recuperación poscrisis; herramientas duraderas de acero, semillas de polinización abierta, energía solar/radio y metales preciosos fraccionados (`5,00x`) lideran la paridad.

### Paso 1: Calcule el Valor Total Ofrecido (`Sus Puntos de Crédito`)
Localice el artículo que usted ofrece en la tabla impresa y lea la puntuación en la columna del escenario acordado (`Col 8`, `Col 9` o `Col 10`). Multiplique su puntuación por la cantidad de unidades atómicas enteras que entrega:

$$\text{Total de Puntos Ofrecidos} = \text{Score}_{\text{Artículo Ofrecido}} \times \text{Cantidad}_{\text{Ofrecida}}$$

* **Si ofrece una fracción a granel de un Artículo Divisible (`is_divisible: true`):** Multiplique directamente la **tasa por `1 g` o `1 ml`** impresa en esa misma columna por el peso en gramos o el volumen en mililitros entregado.

### Paso 2: Localice la Puntuación del Artículo Solicitado
Utilice la regla recta en la **misma columna de escenario** para localizar el artículo que desea recibir de la contraparte y lea su puntuación unitaria ($\text{Score}_{\text{Artículo Solicitado}}$), o su tasa por `1 g / 1 ml` si solicita un insumo divisible a granel.

### Paso 3: Divida para Determinar la Cantidad Exacta a Exigir
Divida su **Total de Puntos Ofrecidos** (del Paso 1) entre la **Puntuación del Artículo Solicitado** (del Paso 2):

$$\text{Unidades Exactas a Recibir} = \frac{\text{Total de Puntos Ofrecidos}}{\text{Score}_{\text{Artículo Solicitado}}}$$

---

### Ejemplo Práctico Resuelto (Papel y Calculadora de Bolsillo — Valores 100% Auditados en el Motor)
Supongamos que opera en la **Columna 9 — Colapso Civil Agudo (`acute_collapse`)** y desea intercambiar **50 paquetes de Leche Entera en Polvo Instantánea (`milk_powder_whole_400g`, `400 g` cada uno)** por **Alicate Multiherramienta Plegable de Acero Inoxidable Templado (`multitool_pliers_stainless_folding_unit`, `1 un`, Indivisible)**:

1. **Paso 1 (Su Crédito):**
   - Score impreso en la Columna Colapso Agudo de `milk_powder_whole_400g` (*Leche Entera en Polvo, Paquete 400 g*) = `33.564,72 pts` por paquete (`MEC 2,36x`).
   - Multiplique por `50` paquetes: $33.564,72 \times 50 = \mathbf{1.678.236,00\text{ pts}}$.
2. **Paso 2 (Valor del Artículo Deseado):**
   - Score impreso en la Columna Colapso Agudo de `multitool_pliers_stainless_folding_unit` (*Alicate Multiherramienta Plegable de Acero Inoxidable, 1 un*) = `672.683,44 pts` por unidad (`MEC 1,10x`).
3. **Paso 3 (División y Liquidación con Cambio Exacto):**
   - Divida el Total Ofrecido entre el Score del Alicate: $1.678.236,00 \div 672.683,44 = \mathbf{2,495\text{ unidades}}$.
   - Dado que un alicate de acero es **Indivisible (`Indivisible · 1 un`)**, no es posible fraccionar `0,495` de una herramienta sin destruirla.
   - Usted recibe **2 unidades enteras del Alicate Multiherramienta** ($2 \times 672.683,44 = 1.345.366,88\text{ pts}$).
   - **Saldo de Cambio a Su Favor:** $1.678.236,00 - 1.345.366,88 = \mathbf{332.869,12\text{ pts}}$.
   - Divida `332.869,12 pts` entre la tasa de `1 g` de *Sal Refinada Yodada* en Colapso Agudo (`salt_sodium_chloride_iodized_1000g` = `158,935 pts/g`) para exigir **`2.094 g` de Sal Refinada Yodada** (o divida entre el *Azúcar Cristal* `sugar_sucrose_crystal_1000g` a `15,525 pts/g` = **`21.440 g` de Azúcar Cristal**) como cambio, cerrando el intercambio con **0% de pérdida de valor**.

---

## 3. Reglas de Ajuste Manual por Caducidad Próxima (Cálculo Mental para Perecederos)

En el motor digital, la depreciación en tiempo real según la vida útil restante se rige por el factor logarítmico en base 10:

$$\text{Factor de Depreciación} = \frac{\log_{10}(V_{\text{restante}} + 1)}{\log_{10}(V_{\text{nominal}} + 1)}$$

Durante un apagón sin calculadora científica, no es necesario calcular logaritmos manualmente. Dado que la curva logarítmica es suave en plazos largos y desciende de forma pronunciada al acercarse la fecha de caducidad ($V < 90\text{ días}$), los operadores de campo aplican dos **Protocolos de Depreciación Mental**:

### Protocolo A: Días Absolutos Restantes (Regla de Bolsillo por Caducidad Próxima)
Cuando un alimento o medicamento (DOE/AEMPS) ofrecido se encuentre próximo a su fecha de caducidad física, aplique directamente el siguiente multiplicador sobre la puntuación impresa:

| Vida Útil Física Restante ($V_{\text{restante}}$) | Multiplicador Mental | Atajo de Cálculo Mental | Justificación Operativa y Matemática |
| :--- | :---: | :--- | :--- |
| **Más de 90 Días (`> 90 d`)** | **`100%` (`1,00x`)** | Use la puntuación impresa íntegra | Margen seguro para rotación de inventario comunitario (salvo si resta `< 50%` de su vida nominal; véase Protocolo B). |
| **De 31 a 90 Días (`31–90 d`)** | **`75%` (`0,75x`)** | Reste **1/4 (`-25%`)** a la puntuación impresa | Prioridad de consumo a medio plazo; refleja la razón $\log_{10}(61) / \log_{10}(366) \approx 0,70\text{–}0,75$. |
| **De 8 a 30 Días (`8–30 d`)** | **`50%` (`0,50x`)** | **Reduzca el valor a la mitad (`-50%`)** | **Regla de Oro en Campo:** Si caduca en menos de 30 días, su valor de trueque se reduce a la mitad ($\log_{10}(31)/\log_{10}(1096) \approx 0,49$). |
| **De 1 a 7 Días (`1–7 d`)** | **`25%` (`0,25x`)** | Conserve solo **1/4 (`-75%`)** de la puntuación | Consumo inmediato de emergencia; inviable para almacenamiento o reintercambio. |
| **0 Días / Caducado (`0 d`)** | **`0%` (`0,00x`)** | **0 Puntos — Rechace el Trueque** | Valor de intercambio nulo; alimentos deteriorados o fármacos críticos degradados suponen un riesgo biológico grave. |

### Protocolo B: Regla Proporcional de Vida Útil (Artículos de Larga Duración y Servicios Esenciales)
Para artículos de larga conservación (`1 a 5 años`) que aún superan los 90 días restantes pero han consumido una fracción importante de su vida útil original de fábrica:
- **Mitad de la Vida Útil de Fábrica Restante (`50% de V`):** Descuente **`~10%`** (la pérdida logarítmica exacta se sitúa entre `-8,9%` y `-9,8%`).
- **Un Cuarto de la Vida Útil de Fábrica Restante (`25% de V`):** Descuente **`~20%`** (la pérdida logarítmica exacta se sitúa entre `-17,8%` y `-19,6%`).
- **Servicios Humanos Esenciales (`cat_essential_services`, Artículos `101–128`):** En los servicios humanos, `V` representa la **Durabilidad Nominal del Resultado del Servicio (Días)** (intervalo de cobertura/recurrencia). Utilice siempre el **`100%` (`1,00x`)** de la puntuación impresa para servicios completos estándar; aplique una reducción solo si ambas partes acuerdan una reparación provisional/paliativa de menor durabilidad.

---

## 4. Guía de Referencia de las 9 Categorías Canónicas y Contextos de Crisis (`MEC`)

Los 128 artículos estandarizados en `data/items_core.js` (`100` mercancías físicas + `28` servicios humanos esenciales) se organizan en **9 Categorías Canónicas**. Al cambiar de fase de crisis, puede emplear la hoja impresa correspondiente a dicho escenario o aplicar mentalmente el comportamiento de cada categoría:

| Slug de Categoría | Nombre Oficial de la Categoría (`es-ES`) | Función Física Principal | Comportamiento en las Fases de Crisis (`MEC`) |
| :--- | :--- | :--- | :--- |
| `cat_staple_foods` | **Alimentos Básicos, Cereales, Legumbres y Grasas** | Supervivencia calórica a granel (`kcal`), proteínas vegetales y lípidos de cocción (`1000 g` / `500 ml`). | Demanda elevada y estable (`1,2x–1,35x` en colapso agudo; `1,0x–1,1x` en reconstrucción). |
| `cat_critical_nutrition` | **Nutrición Crítica, Raciones Listas y Soporte Clínico** | Raciones sin cocción (`CP = 1,0`), conservas cárnicas/pescado, fórmula infantil y polivitamínicos. | Prima de `1,4x` en colapso agudo cuando escasea el combustible de cocción o el agua potable. |
| `cat_spices_morale` | **Sales de Conservación, Azúcares, Especias y Moral** | Cloruro de sodio (*sal yodada*), sacarosa, miel, café tostado, té, cacao y etanol destilado. | La sal y el azúcar actúan como **moneda universal de cambio divisible (`g`)**; los bienes de moral suben bajo asedio. |
| `cat_pharma_essential` | **Medicamentos Esenciales (OMS LME / DOE-AEMPS)** | Antibióticos sistémicos, analgésicos, sales de rehidratación oral (SRO), antiparasitarios y crónicos. | Multiplicador máximo de salvamento (`2,0x–2,2x`) durante colapso agudo y brotes infecciosos. |
| `cat_trauma_hygiene` | **Control de Traumatismos, Antisépticos, EPI e Higiene** | Torniquetes tácticos, gasa estéril, etanol 70%/clorhexidina, mascarillas FFP2/N95, jabón e hipoclorito. | Trauma y antisepsia suben a `1,8x–2,2x` en colapso agudo; mantienen `1,2x` en recuperación. |
| `cat_water_fire_shelter` | **Hidratación, Potabilización, Ignición y Refugio** | Agua potable precintada, comprimidos de NaDCC, filtros cerámicos, ferrocerio, gas butano y lonas. | El agua y la potabilización alcanzan el multiplicador vital máximo (`2,5x`) en colapso agudo o sequía. |
| `cat_tools_energy_comms` | **Herramientas Manuales, Cordaje, Energía Off-Grid y Radio** | Cuchillos enterizos, multiherramientas, paracord 550, pilas IEC AA/AAA/18650, paneles solares y radio VHF/UHF. | Esenciales en el colapso (`1,3x–1,5x`) y se revalorizan aún más (`1,6x–1,8x`) en la reconstrucción agraria. |
| `cat_store_of_value` | **Reserva de Valor, Metales Preciosos y Archivo Técnico** | Plata y oro fraccionados (`.999`), semillas de polinización abierta, gafas de lectura y archivos offline. | **Inversión Estricta de Fase:** Los metales preciosos caen a **`0,01x`** en `acute_collapse` (no son comestibles) y ascienden a **`5,00x`** en `economic_reconstruction` al restablecerse el comercio y la siembra. |
| `cat_essential_services` | **Servicios Humanos Esenciales, Procedimientos Clínicos, TI Off-Grid, Instrucción y Mano de Obra** | Cirugía de trauma, odontología, obstetricia, reparación WASH, revisión solar/mecánica, TI off-grid/microelectrónica, instrucción/traducción técnica, metalurgia y vigilancia (`Artículos 101–128`). | Trauma, obstetricia, odontología, WASH y seguridad suben en `acute_collapse` (`hasta 2,21x`); TI off-grid, instrucción técnica, ingeniería eléctrica/mecánica, metalurgia, construcción y veterinaria lideran en `economic_reconstruction` (`hasta 2,32x`). |

---

## 5. Tabla Precalculada de Cambio Fraccionario en los 3 Escenarios (Columnas 8, 9 y 10)

Dado que la **Tabla General de Cotizaciones** impresa muestra los 3 escenarios en paralelo (**Columna 8: Línea Base Pura `1,0x`**, **Columna 9: Colapso Agudo** y **Columna 10: Reconstrucción Económica**), cada celda de la siguiente tabla incluye los puntos precalculados para **`Col 8 Base | Col 9 Colapso | Col 10 Reconstrucción`** en los 7 artículos primarios de cambio:

| Artículo Divisible / Unitario (`id`) | `1 g / 1 ml / 1 un` (**Col 8 \| 9 \| 10**) | `10 g / 10 ml` (**Col 8 \| 9 \| 10**) | `50 g / 50 ml` (**Col 8 \| 9 \| 10**) | `100 g / 100 ml` (**Col 8 \| 9 \| 10**) | `250 g / 250 ml` (**Col 8 \| 9 \| 10**) | `500 g / 500 ml` (**Col 8 \| 9 \| 10**) | `1000 g / 1000 ml` (**Col 8 \| 9 \| 10**) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Sal Refinada Yodada** (`salt_sodium_chloride_iodized_1000g`) | **`39,9 \| 158,9 \| 78,1`** | `399 \| 1589 \| 781` | `1994 \| 7947 \| 3904` | `3989 \| 15893 \| 7808` | `9972 \| 39734 \| 19519` | `19943 \| 79467 \| 39039` | `39886 \| 158935 \| 78077` |
| **Azúcar Blanco Cristal** (`sugar_sucrose_crystal_1000g`) | **`5,6 \| 15,5 \| 14,4`** | `56,4 \| 155 \| 144` | `282 \| 776 \| 718` | `564 \| 1553 \| 1436` | `1411 \| 3881 \| 3590` | `2821 \| 7763 \| 7180` | `5643 \| 15525 \| 14360` |
| **Arroz Blanco Pulido Crudo** (`rice_white_polished_raw_1000g`) | **`5,4 \| 8,8 \| 6,3`** | `54,5 \| 88,5 \| 62,6` | `272 \| 442 \| 313` | `545 \| 885 \| 626` | `1361 \| 2212 \| 1566` | `2723 \| 4425 \| 3131` | `5446 \| 8849 \| 6263` |
| **Agua Potable Precintada** (`water_potable_sealed_1000ml`) | **`5,7 \| 16,5 \| 6,5`** | `56,8 \| 165 \| 65,3` | `284 \| 823 \| 326` | `568 \| 1646 \| 653` | `1419 \| 4115 \| 1632` | `2838 \| 8229 \| 3263` | `5675 \| 16458 \| 6527` |
| **Etanol Antiséptico 70%** (`ethanol_antiseptic_70pct_100ml`) | **`984 \| 5305 \| 1082`** | `9835 \| 53050 \| 10819` | `49175 \| 265250 \| 54093` | `98350 \| 530500 \| 108185` | `245875 \| 1326250 \| 270463` | `491750 \| 2652500 \| 540925` | `983500 \| 5305001 \| 1081850` |
| **Paracetamol 500 mg Comprimido** (`paracetamol_500mg_tablet`) | **`1 un: 108151 \| 204406 \| 129781`** | `2 un: 216302 \| 408811 \| 259563` | `3 un: 324453 \| 613217 \| 389344` | `5 un: 540756 \| 1022028 \| 648907` | `10 un: 1081512 \| 2044057 \| 1297814` | — | — |
| **Comprimido NaDCC 67 mg (Agua)** (`water_purification_nadcc_tablet_unit`) | **`1 un: 199818 \| 863214 \| 219800`** | `2 un: 399636 \| 1726428 \| 439600` | `3 un: 599454 \| 2589642 \| 659400` | `5 un: 999090 \| 4316071 \| 1098999` | `10 un: 1998181 \| 8632141 \| 2197999` | — | — |

---

## 6. Lista de Verificación Operativa para Puestos Comunitarios de Trueque

1. **Verifique Primero la Integridad Física:** Nunca acepte envases al vacío perforados, latas abombadas u oxidadas, polvos húmedos ni blísteres farmacéuticos rotos (`0 pts`).
2. **Confirme la Columna del Escenario de Crisis (Columnas 8, 9 y 10):** Asegúrese de que ambas partes acuerdan cuál de las 3 columnas impresas en paralelo rige el intercambio (`Columna 8: Línea Base Pura 1,0x`, `Columna 9: Colapso Agudo` o `Columna 10: Reconstrucción Económica`).
3. **Compruebe la Fecha de Caducidad (`Paso 4`):** Si el artículo caduca en `< 30 días`, aplique la **regla del `50%` (mitad de valor)** antes de multiplicar por la cantidad.
4. **Pese el Cambio Fraccionario con Exactitud (`Paso 3`):** En intercambios que incluyan herramientas o kits indivisibles, liquide siempre el resto de puntos mediante artículos divisibles de alta liquidez (*sal refinada yodada*, *azúcar blanco cristal*, *arroz crudo*, *agua potable* o comprimidos sueltos de *paracetamol*/*NaDCC*) para que ningún hogar sufra pérdidas por redondeo.

