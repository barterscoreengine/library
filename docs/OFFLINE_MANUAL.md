# BarterScore Engine (v1.1.0) — Analog Field Manual for Total Blackout Operations

> **Manual Language:**
> [**English (`OFFLINE_MANUAL.md`)**](./OFFLINE_MANUAL.md) · [**Português (`OFFLINE_MANUAL.pt-BR.md`)**](./OFFLINE_MANUAL.pt-BR.md) · [**Español (`OFFLINE_MANUAL.es-ES.md`)**](./OFFLINE_MANUAL.es-ES.md) · [**简体中文 (`OFFLINE_MANUAL.zh-Hans.md`)**](./OFFLINE_MANUAL.zh-Hans.md)
>
> **Official Repository:** [https://github.com/barterscoreengine/library](https://github.com/barterscoreengine/library)
> **License:** [Apache License 2.0](../LICENSE) · **Attribution:** [Erisson Marques](https://github.com/erissontech) ([`NOTICE`](../NOTICE))
> **Primary Documentation:** [**English (`README.md`)**](../README.md) · [**Português (`README.pt-BR.md`)**](./README.pt-BR.md) · [**Español (`README.es-ES.md`)**](./README.es-ES.md) · [**简体中文 (`README.zh-Hans.md`)**](./README.zh-Hans.md)

---

## 1. Purpose & Total Blackout Operating Doctrine

This document is the standalone **Analog Field Operations Manual** for the **BarterScore Engine**. It is engineered for **Total Blackout Scenarios**—prolonged grid failures, electromagnetic disruptions, or remote field deployments where computers, smartphones, and electrical power are unavailable.

To operate a physical barter exchange post or household trade ledger using this system, you need only:
1. **A Printed Copy of the Quotation Schedule** (generated via `manual_generator.html` in high-contrast A4 Landscape format);
2. **A Straightedge Ruler** (to track across the 10-column item rows without visual drift);
3. **A Solar/Battery Pocket Calculator or Pencil & Paper** (for 3-step settlement arithmetic);
4. **A Basic Kitchen Scale (`1 g` resolution) or Graduated Cylinder (`1 ml` resolution)** (for settling fractional change in divisible commodities such as iodized salt, granulated sugar, raw rice, or potable water).

---

## 2. The 3-Step Analog Trade Settlement Protocol

Every item in the printed 10-column quotation table simultaneously displays **all 3 crisis scenarios side-by-side**, along with its **Sub-Unit Rate** (`1 g = X pts` or `1 ml = X pts`) in each column for all 47 divisible items:

> **Which Scenario Column Should You Use (Columns 8, 9 & 10)?**
> - **Column 8 — `1. Pure Baseline (1.0x)`:** Intrinsic physical and nutritional score (`ScoreBase`) without external crisis multipliers.
> - **Column 9 — `2. Acute Collapse`:** Immediate survival phase; potable water and purification (`up to 4.32x`), systemic antibiotics, trauma care, and ready-to-eat calories peak, while precious metals drop to `0.01x`.
> - **Column 10 — `3. Reconstruction`:** Post-crisis recovery; durable steel tools, open-pollinated seeds, solar/radio equipment, and fractional bullion (`5.00x`) lead exchange parity.

### Step 1: Calculate Your Total Offered Value (`Credit Points`)
Locate the item you are offering in the printed table and read the score in the agreed scenario column (`Col 8`, `Col 9`, or `Col 10`). Multiply its score by the number of whole atomic units you are delivering:

$$\text{Total Offered Points} = \text{Score}_{\text{Offered Item}} \times \text{Quantity}_{\text{Offered}}$$

* **If offering a loose/partial portion of a Divisible Item (`is_divisible: true`):** Multiply the item's printed **`1 g` or `1 ml` sub-unit rate** in that column directly by the weight in grams or volume in milliliters being delivered.

### Step 2: Locate the Score of the Requested Item
Use your straightedge ruler in the **same scenario column** to locate the item you wish to receive from your counterparty and read its single-unit score ($\text{Score}_{\text{Requested Item}}$), or its `1 g / 1 ml` sub-unit rate if you are requesting a loose bulk commodity.

### Step 3: Divide to Determine the Exact Quantity to Demand
Divide your **Total Offered Points** (from Step 1) by the **Requested Item Score** (from Step 2):

$$\text{Exact Units to Receive} = \frac{\text{Total Offered Points}}{\text{Score}_{\text{Requested Item}}}$$

---

### Worked Field Example (Paper & Pocket Calculator — 100% Audited Engine Values)
Suppose you are operating in **Column 9 — Acute Civil Collapse (`acute_collapse`)** and want to trade **50 packs of Whole Milk Powder (`milk_powder_whole_400g`, `400 g` each)** for **Foldable Stainless-Steel Multitool Pliers (`multitool_pliers_stainless_folding_unit`, `1 un`, Indivisible)**:

1. **Step 1 (Your Credit):**
   - Printed Acute Collapse Score of `milk_powder_whole_400g` = `33,564.72 pts` per pack (`MEC 2.36x`).
   - Multiply by `50` packs: $33,564.72 \times 50 = \mathbf{1,678,236.00\text{ pts}}$.
2. **Step 2 (Target Value):**
   - Printed Acute Collapse Score of `multitool_pliers_stainless_folding_unit` = `672,683.44 pts` per unit (`MEC 1.10x`).
3. **Step 3 (Division & Settlement):**
   - Divide Total Offered Points by Target Score: $1,678,236.00 \div 672,683.44 = \mathbf{2.495\text{ units}}$.
   - Because steel pliers are **Indivisible (`Indivisible · 1 un`)**, you cannot cut `0.495` of a tool.
   - You receive **2 whole Multitool Pliers** ($2 \times 672,683.44 = 1,345,366.88\text{ pts}$).
   - **Remaining Change Owed to You:** $1,678,236.00 - 1,345,366.88 = \mathbf{332,869.12\text{ pts}}$.
   - Divide `332,869.12 pts` by the `1 g` Acute Collapse rate of Iodized Salt (`salt_sodium_chloride_iodized_1000g` = `158.935 pts/g`) to demand **`2,094 g` of Iodized Salt** (or divide by Crystal Sugar `sugar_sucrose_crystal_1000g` at `15.525 pts/g` = **`21,440 g` of Crystal Sugar**) to close the trade with **0% value loss**.

---

## 3. Manual Shelf-Life Depreciation Rules (Mental Math for Expiring Goods)

In the digital engine, real-time shelf-life depreciation is governed by the base-10 logarithmic factor:

$$\text{Depreciation Factor} = \frac{\log_{10}(V_{\text{remaining}} + 1)}{\log_{10}(V_{\text{nominal}} + 1)}$$

During a blackout without a scientific calculator, computing $\log_{10}$ by hand is unnecessary. Because logarithmic curves remain relatively flat at high day counts and drop steeply as expiration approaches ($V < 90\text{ days}$), field operators use two simple **Mental Depreciation Protocols**:

### Protocol A: Absolute Days Remaining (Near-Expiration Field Rule)
When an offered food or pharmaceutical item is close to its physical expiration date, apply the following direct multiplier to its printed score:

| Remaining Physical Shelf Life ($V_{\text{remaining}}$) | Mental Score Multiplier | Mental Arithmetic Shortcut | Operational Rationale |
| :--- | :---: | :--- | :--- |
| **More than 90 Days (`> 90 d`)** | **`100%` (`1.00x`)** | Use full printed score | Sufficient storage horizon for community rotation (unless `< 50%` of nominal life; see Protocol B). |
| **31 to 90 Days (`31–90 d`)** | **`75%` (`0.75x`)** | Subtract **1/4 (`-25%`)** from printed score | Medium-term consumption priority; matches $\log_{10}(61) / \log_{10}(366) \approx 0.70\text{–}0.75$. |
| **8 to 30 Days (`8–30 d`)** | **`50%` (`0.50x`)** | **Reduce value by half (`-50%`)** | **Golden Field Rule:** Expiring in under 30 days cuts trade value in half ($\log_{10}(31)/\log_{10}(1096) \approx 0.49$). |
| **1 to 7 Days (`1–7 d`)** | **`25%` (`0.25x`)** | Keep only **1/4 (`-75%`)** of printed score | Immediate consumption only; cannot be stockpiled or re-traded. |
| **0 Days / Spoiled (`0 d`)** | **`0%` (`0.00x`)** | **0 Points — Reject Trade** | Zero exchange value; spoiled food or degraded critical pharmaceuticals pose biological hazards. |

### Protocol B: Proportional Shelf-Life Rule (Long-Life Goods & Essential Services)
For long-shelf-life goods (`1 to 5 years`) that still have more than 90 days remaining but have lost a major fraction of their original factory seal life:
- **Half of Factory Shelf Life Remaining (`50% of V`):** Deduct **`~10%`** (exact logarithmic loss is `-8.9%` to `-9.8%`).
- **One-Quarter of Factory Shelf Life Remaining (`25% of V`):** Deduct **`~20%`** (exact logarithmic loss is `-17.8%` to `-19.6%`).
- **Essential Human Services (`cat_essential_services`, Items `101–128`):** For human services, `V` represents the **Nominal Service Outcome Durability (Days)** (recurrence/warranty interval). Always use **`100%` (`1.00x`)** of the printed score for a complete standard service; apply a reduction only if both parties agree on a temporary/palliative repair of shorter durability.

---

## 4. Reference Guide to the 9 Canonical Categories & Crisis Contexts (`MEC`)

The 128 standardized items in `data/items_core.js` (`100` physical commodities + `28` essential human services) are organized into **9 Canonical Categories**. When transitioning between crisis phases, you can either print a dedicated sheet for that scenario or apply the category/tag multipliers mentally:

| Category Slug | Category Name | Core Physical Role | Behavior Across Crisis Phases (`MEC`) |
| :--- | :--- | :--- | :--- |
| `cat_staple_foods` | **Caloric Staples, Grains, Pulses & Cooking Fats** | Bulk caloric survival (`kcal`), plant proteins, and cooking lipids (`1000 g` / `500 ml` units). | High steady demand (`1.2x–1.35x` in acute collapse; `1.0x–1.1x` in reconstruction). |
| `cat_critical_nutrition` | **Ready-to-Eat, High-Density & Clinical Nutrition** | Zero-prep rations (`CP = 1.0`), canned meats/fish, infant formula, and multivitamins. | Commands a `1.4x` premium during acute collapse when cooking fuel or safe water is scarce. |
| `cat_spices_morale` | **Preservation Salts, Sweeteners, Spices & Morale** | Sodium chloride (`salt`), sucrose, honey, coffee, tea, cocoa, and distilled ethanol. | Salt and sugar serve as universal **divisible fractional change (`g`)**; morale goods surge under siege stress. |
| `cat_pharma_essential` | **Essential Pharmaceuticals (WHO EML / INN)** | Systemic antibiotics, analgesics, oral rehydration salts (ORS), chronic & antiparasitic drugs. | Peak life-saving multiplier (`2.0x–2.2x`) during acute collapse and infectious outbreaks. |
| `cat_trauma_hygiene` | **Trauma Control, Antiseptics, PPE & Field Hygiene** | Tourniquets, sterile gauze, 70% ethanol/chlorhexidine, N95 respirators, soap, and bleach. | Trauma and antisepsis surge to `1.8x–2.2x` during acute collapse; steady `1.2x` in recovery. |
| `cat_water_fire_shelter` | **Hydration, Water Purification, Ignition & Shelter** | Sealed potable water, NaDCC tablets, ceramic filters, ferrocerium rods, butane, and tarps. | Water and purification command the highest survival multiplier (`2.5x`) in acute collapse or drought. |
| `cat_tools_energy_comms` | **Hand Tools, Cordage, Off-Grid Energy & Comms** | Full-tang carbon steel, multitools, paracord, IEC AA/AAA/18650 cells, solar panels, VHF/UHF radios. | Essential in collapse (`1.3x–1.5x`) and increases further (`1.6x–1.8x`) during agrarian/infrastructure reconstruction. |
| `cat_store_of_value` | **Store of Value, Bullion & Knowledge Archives** | Fractional `.999` silver/gold, open-pollinated heirloom seeds, reading glasses, and offline archives. | **Strict Phase Inversion:** Bullion drops to **`0.01x`** in `acute_collapse` (you cannot eat gold/silver) and surges to **`5.00x`** in `economic_reconstruction` as coinage and seed capital return. |
| `cat_essential_services` | **Essential Human Services, Clinical Procedures, Off-Grid IT, Instruction & Labor** | Standardized trauma surgery, dental, obstetrics, WASH repair, solar/mechanical overhaul, off-grid IT/microelectronics, technical instruction/translation, and tactical watch (`Items 101–128`). | Trauma, obstetrics, dental, WASH, and security surge in `acute_collapse` (`up to 2.21x`); off-grid IT, technical instruction, engineering, metallurgy, construction, and agrarian/vet services surge in `economic_reconstruction` (`up to 2.32x`). |

---

## 5. Pre-Calculated Multi-Scenario Fractional Change Lookup Table (Columns 8, 9 & 10)

Because the printed **General Quotation Schedule** displays all 3 crisis scenarios side-by-side (**Col 8: Pure Baseline `1.0x`**, **Col 9: Acute Collapse**, and **Col 10: Economic Reconstruction**), every cell in the table below provides the exact pre-calculated points for **`Col 8 Base | Col 9 Acute | Col 10 Recon`** across all 7 primary change items:

| Divisible / Unit Reference Item (`id`) | `1 g / 1 ml / 1 un` (**Col 8 \| 9 \| 10**) | `10 g / 10 ml` (**Col 8 \| 9 \| 10**) | `50 g / 50 ml` (**Col 8 \| 9 \| 10**) | `100 g / 100 ml` (**Col 8 \| 9 \| 10**) | `250 g / 250 ml` (**Col 8 \| 9 \| 10**) | `500 g / 500 ml` (**Col 8 \| 9 \| 10**) | `1000 g / 1000 ml` (**Col 8 \| 9 \| 10**) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Refined Iodized Salt** (`salt_sodium_chloride_iodized_1000g`) | **`39.9 \| 158.9 \| 78.1`** | `399 \| 1589 \| 781` | `1994 \| 7947 \| 3904` | `3989 \| 15893 \| 7808` | `9972 \| 39734 \| 19519` | `19943 \| 79467 \| 39039` | `39886 \| 158935 \| 78077` |
| **White Crystal Sugar** (`sugar_sucrose_crystal_1000g`) | **`5.6 \| 15.5 \| 14.4`** | `56.4 \| 155 \| 144` | `282 \| 776 \| 718` | `564 \| 1553 \| 1436` | `1411 \| 3881 \| 3590` | `2821 \| 7763 \| 7180` | `5643 \| 15525 \| 14360` |
| **Polished White Rice** (`rice_white_polished_raw_1000g`) | **`5.4 \| 8.8 \| 6.3`** | `54.5 \| 88.5 \| 62.6` | `272 \| 442 \| 313` | `545 \| 885 \| 626` | `1361 \| 2212 \| 1566` | `2723 \| 4425 \| 3131` | `5446 \| 8849 \| 6263` |
| **Sealed Potable Water** (`water_potable_sealed_1000ml`) | **`5.7 \| 16.5 \| 6.5`** | `56.8 \| 165 \| 65.3` | `284 \| 823 \| 326` | `568 \| 1646 \| 653` | `1419 \| 4115 \| 1632` | `2838 \| 8229 \| 3263` | `5675 \| 16458 \| 6527` |
| **Antiseptic Ethanol 70%** (`ethanol_antiseptic_70pct_100ml`) | **`984 \| 5305 \| 1082`** | `9835 \| 53050 \| 10819` | `49175 \| 265250 \| 54093` | `98350 \| 530500 \| 108185` | `245875 \| 1326250 \| 270463` | `491750 \| 2652500 \| 540925` | `983500 \| 5305001 \| 1081850` |
| **Paracetamol 500 mg Tablet** (`paracetamol_500mg_tablet`) | **`1 un: 108151 \| 204406 \| 129781`** | `2 un: 216302 \| 408811 \| 259563` | `3 un: 324453 \| 613217 \| 389344` | `5 un: 540756 \| 1022028 \| 648907` | `10 un: 1081512 \| 2044057 \| 1297814` | — | — |
| **NaDCC 67 mg Water Tab** (`water_purification_nadcc_tablet_unit`) | **`1 un: 199818 \| 863214 \| 219800`** | `2 un: 399636 \| 1726428 \| 439600` | `3 un: 599454 \| 2589642 \| 659400` | `5 un: 999090 \| 4316071 \| 1098999` | `10 un: 1998181 \| 8632141 \| 2197999` | — | — |

---

## 6. Standard Operating Checklist for Community Trade Posts

1. **Verify Physical Integrity First:** Never accept broken vacuum seals, rusted/bloated cans, wet powder packets, or punctured pharmaceutical blisters (`0 pts`).
2. **Confirm Crisis Scenario Column (Cols 8, 9 & 10):** Ensure both parties agree on which of the 3 side-by-side columns governs the trade (`Col 8: Pure Baseline 1.0x`, `Col 9: Acute Collapse`, or `Col 10: Economic Reconstruction`).
3. **Check Expiration Dates (`Step 4`):** If an item expires in `< 30 days`, apply the **`50%` (half-value)** rule before multiplying quantity.
4. **Weigh Fractional Change Exactly (`Step 3`):** When trading indivisible hardware or sealed medical kits, always settle the point remainder using high-liquidity divisible items (`salt`, `sugar`, `rice`, `potable water`, or single `paracetamol`/`NaDCC` tablets) so neither household suffers rounding loss.

