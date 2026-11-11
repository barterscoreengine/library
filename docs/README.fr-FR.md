# BarterScore Engine (v1.1.0)

**A Local-First library for Collapse Informatics and Off-Grid Economics.**
*(Une bibliothèque Local-First dédiée à l’Informatique de l’Effondrement et à l’Économie Hors-Réseau.)*

> **Langue :**
> [**English (en-US)**](../README.md) · [**Português (pt-BR)**](./README.pt-BR.md) · [**Español (es-ES)**](./README.es-ES.md) · [**Français (fr-FR)**](./README.fr-FR.md) · [**Русский (ru-RU)**](./README.ru-RU.md) · [**Kiswahili (sw-KE)**](./README.sw-KE.md) · [**العربية (ar-SA)**](./README.ar-SA.md) · [**简体中文 (zh-Hans)**](./README.zh-Hans.md) · [**Manuel Analogique (`OFFLINE_MANUAL.fr-FR.md`)**](./OFFLINE_MANUAL.fr-FR.md)

---

**BarterScore Engine** est un moteur mathématique déterministe, multiplateforme, sans aucune dépendance externe et 100% *offline-first*, conçu pour évaluer scientifiquement la valeur physique, nutritionnelle et fonctionnelle des biens essentiels et des services humains spécialisés destinés au troc lors de ruptures de chaînes d’approvisionnement, de crises humanitaires et d’effondrements civils.

Sous licence [**Apache License 2.0**](https://www.apache.org/licenses/LICENSE-2.0), l’ensemble de l’architecture est écrit en **Vanilla JavaScript pur (ES6+ UMD)** et **HTML5/CSS3** natifs, fonctionnant de manière identique sous le protocole local `file://` (par simple double-clic, sans Node.js, sans serveur web ni connexion Internet), en CommonJS (`module.exports`) et dans les environnements ES Modules.

---

## Sommaire

1. [Principes Architecturaux Fondamentaux](#1-principes-architecturaux-fondamentaux)
2. [La Formule Mathématique Officielle](#2-la-formule-mathématique-officielle)
3. [Méthodologie Scientifique, Grille de Calibration et Sources Officielles (1 Clic + Audit Hors-Ligne)](#3-méthodologie-scientifique-grille-de-calibration-et-sources-officielles-1-clic--audit-hors-ligne)
4. [Contrat de Schéma et Standardisation Scientifique](#4-contrat-de-schéma-et-standardisation-scientifique)
5. [Exécution Hors-Ligne en 1 Clic, Impression Physique et Structure du Dépôt](#5-exécution-hors-ligne-en-1-clic-impression-physique-et-structure-du-dépôt)
6. [Guide d’Intégration pour Développeurs et Référence de l’API](#6-guide-dintégration-pour-développeurs-et-référence-de-lapi)
7. [Comment Ajouter l’Article 129+ ou une Nouvelle Langue](#7-comment-ajouter-larticle-129-ou-une-nouvelle-langue)
8. [Licence et Gouvernance](#8-licence-et-gouvernance)

---

## 1. Principes Architecturaux Fondamentaux

- **Zéro Dépendance à l’Exécution (`file://` First) :** Tous les modules dans `src/`, `data/` et `locales/` utilisent un modèle UMD hybride exposant `window.BarterCore` pour une exécution locale dans le navigateur sans blocage CORS, tout en supportant `module.exports`.
- **Découplage Total (Physique vs. Langue) :** La physique et les mathématiques des articles sont isolées dans `data/items_core.js` via des identifiants sémantiques en `snake_case`. Les traductions techniques sont isolées dans `locales/[lang].js` selon la norme [**IETF BCP 47 / RFC 5646**](https://www.rfc-editor.org/info/bcp47) (`en-US`, `pt-BR`, `es-ES`, `fr-FR`, `ru-RU`, `sw-KE`, `ar-SA`, `zh-Hans`) avec une chaîne de repli (*Fallback*) automatique à trois niveaux :
  ```text
  Langue Sélectionnée  ───►  en-US (Base Canonique)  ───►  ID Technique Sémantique
  ```
- **Zéro Marque Commerciale :** L’utilisation de marques commerciales est strictement interdite. Tous les articles sont normalisés par **Unité Atomique de Consommation** (`1 comprimé`, `1 pile`, `1 rouleau`, `1 flacon 100ml`, `1 sachet 1000g`) en utilisant la nomenclature [**OMS/DCI**](https://www.who.int/teams/health-product-and-policy-standards/inn) ([**DCI/ANSM & Pharmacopée Française**](https://ansm.sante.fr/documents/reference/pharmacopee) en France) pour les médicaments, [**IEC 60086 / IEC 61960**](https://webstore.iec.ch/en/publication/603) pour les piles/accumulateurs et [**Codex Alimentarius (FAO/OMS)**](https://www.fao.org/fao-who-codexalimentarius/) / [**ANSES Table Ciqual**](https://ciqual.anses.fr/) pour les aliments.

---

## 2. La Formule Mathématique Officielle

### 2.1. Indice Nutritionnel (`IN`)
Pour les articles non alimentaires (`is_food: false`), `IN = 1.0`. Pour les aliments caloriques (`is_food: true`), l’indice évalue la part calorique des macronutriments et la densité en micronutriments critiques, borné via `Clamp` à l’intervalle `[0.5, 2.5]` :

```text
MacroFactor = (pct_kcal_protein × 1.5) + (pct_kcal_fat × 1.0) - (pct_kcal_added_sugar × 1.2)
MicroFactor = (+0.3 si high_vit_c) + (+0.2 si high_sodium_potassium) + (+0.2 si high_calcium_iron)
IN          = Clamp(1.0 + MacroFactor + MicroFactor, 0.5, 2.5)
```

### 2.2. Score de Base (`ScoreBase`) et Dépréciation en Temps Réel
Équilibre l’énergie calorique ou la Base d’Énergie Équivalente (`E`) face à la pénalité gravimétrique et volumétrique de transport (`P + Vol + 0.1`), la longévité logarithmique en base 10 (`log₁₀(V + 1)`), le coût de préparation (`CP`), le facteur psychologique (`FP`) et la résistance physique de l’emballage (`Frag`) :

```text
ScoreBase = ( (E × IN) / (P + Vol + 0.1) ) × log₁₀(V + 1) × CP × FP × Frag
```

- **Dépréciation en Temps Réel :** Lorsque `current_lifecycle_remaining` (ou `offerRemainingDays`) est renseigné en temps réel, il remplace la durée de conservation nominale `lifecycle_units` (`V`). Si `V ≤ 0`, l’article est périmé et `ScoreBase = 0`.

### 2.3. Modificateur de Contexte Externe (`MEC`) et Score Final

```text
ScoreFinal = ScoreBase × MEC
```

- **`acute_collapse` (Effondrement Aigu) :** La catégorie `cat_store_of_value` est pénalisée à **`0.01x`**, tandis que l’eau potable, les hémostatiques, les antibiotiques systémiques et les rations prêtes à consommer reçoivent des multiplicateurs de pénurie aiguë.
- **`economic_reconstruction` (Reconstruction Économique) :** La catégorie `cat_store_of_value` est revalorisée à **`5.0x`**, aux côtés de l’outillage durable, des semences à pollinisation libre, des panneaux solaires et des émetteurs-récepteurs VHF/UHF.

### 2.4. Parité Bilatérale de Troc et Alerte d’Indivisibilité (`calculateTrade`)
Soit un article offert `A` (quantité `Q_A`) et un article demandé `B` :

```text
Q_B_exacte = ( ScoreFinal(A) × Q_A ) / ScoreFinal(B)
```

Si l’article `B` est indivisible (`is_divisible: false`), le moteur arrondit la quantité recommandée à l’entier le plus proche (`Q_B_rec = max(1, round(Q_B_exacte))`) et génère le rapport structuré `trade_imbalance` / `tradeImbalanceWarning`, indiquant explicitement **qui doit la monnaie à qui** (`VOUS DEVEZ LA MONNAIE À LA CONTREPARTIE` ou `LA CONTREPARTIE VOUS DOIT LA MONNAIE`), le pourcentage exact d’écart et les options immédiates de règlement en articles divisibles (`g`, `ml`, `un`).

---

## 3. Méthodologie Scientifique, Grille de Calibration et Sources Officielles (1 Clic + Audit Hors-Ligne)

Pourquoi chaque article du catalogue reçoit-il exactement son score, que signifie physiquement **`1 Point BarterScore (1 pt)`** et pourquoi un Article B obtient-il le double (`2x`) de points qu’un Article A ? Puisqu’aucun organisme gouvernemental ne publie d’équation unifiée comparant directement *1 kg de riz* à *1 gélule d’amoxicilline* ou *1 accumulateur rechargeable 18650*, **BarterScore Engine** synthétise des **enregistrements empiriques officiels vérifiés** (archivés localement pour un audit sans Internet dans [`audit_sources/`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) et via les liens directs ci-dessous) avec des **grilles d’ingénierie par paliers décimaux explicitement justifiées**.

### 3.0. Signification Physique de `1 Point BarterScore (1 pt)` et Pourquoi un Article Vaut `2x` un Autre
Par analyse dimensionnelle de `ScoreBase = ((E × IN) / (P + Vol + 0.1)) × log₁₀(V + 1) × CP × FP × Frag` :
- **Définition Physique de `1.0000 pt` :** **`1 Point BarterScore`** équivaut exactement à **1 Kilocalorie Effective de Survie (`E × IN = 1`) par unité de Charge Logistique Gravimétrique-Volumétrique (`P + Vol + 0.1 = 1.0`), maintenue pendant 1 Décennie Logarithmique de Conservation (`V = 9 jours` → `log₁₀(10) = 1.0`) à disponibilité opérationnelle neutre (`CP = 1.0`, `FP = 1.0`, `Frag = 1.0`)**.
- **Pourquoi l’Article B reçoit `2.0x` les points de l’Article A :** Toutes choses égales par ailleurs, le score double lorsque : **(1)** il fournit le double (`2×`) de kilocalories métabolisables (`kcal`) ou d’économie métabolique `EEB` (`E`) ; **(2)** il concentre la même utilité dans la moitié du poids et du volume combinés (`P + Vol + 0.1`) ; **(3)** sa durée de conservation est élevée au carré sur l’échelle logarithmique en base 10 (ex. `1.000 jours` [`log₁₀ ≈ 3,0`] contre `31 jours` [`log₁₀ ≈ 1,5`]) ; ou **(4)** son produit opérationnel (`CP × FP × Frag`) est deux fois supérieur.

### 3.1. Sources Scientifiques, Réglementaires et Gouvernementales Officielles (Snapshot Hors-Ligne dans `audit_sources/` + Liens en 1 Clic)
> **Audit 100% Hors-Ligne (`audit_sources/`) :** Toutes les requêtes sources, codes **USDA FDC ID**, codes **ATC de l’OMS**, références **DCI/ANSM & ANSES-Ciqual** et formules officielles sont enregistrés localement dans [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) et dans le module UMD [`audit_sources/offline_sources_registry.js`](../audit_sources/offline_sources_registry.js) (`window.BarterCore.AuditSources`), permettant de vérifier l’intégralité de la base via le protocole `file://` sans dépendre d’Internet.
>
> **Note de Portée (Exemples Représentatifs vs. Matrice Complète des 128 Articles) :** Pour garder ce `README` concis et didactique, les articles cités ci-dessous sont des **exemples représentatifs** de chaque domaine scientifique. La matrice complète de traçabilité et d’audit individuel des **128 articles du catalogue (`001` à `128` : 100 biens physiques + 28 services humains essentiels)** est intégralement documentée dans [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md).

1. **Densité Calorique et Macronutriments Alimentaires (`E_aliment`, `IN`) — Codes d’Enregistrement USDA FDC / ANSES Ciqual :**
   - Extraits directement de [**USDA FoodData Central (SR Legacy)**](https://fdc.nal.usda.gov/), de la [**Table Ciqual de l’ANSES**](https://ciqual.anses.fr/), de [**TBCA — USP/FoRC**](https://www.tbca.net.br/), de [**TACO 4e Édition — UNICAMP (PDF)**](https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf) et du [**Codex Alimentarius (FAO/OMS)**](https://www.fao.org/fao-who-codexalimentarius/). Enregistrements vérifiés :
     - **Riz Blanc Poli Cru (`rice_white_polished_raw_1000g`) :** [**USDA FDC ID 169756 / NDB 20444**](https://fdc.nal.usda.gov/food-details/169756/nutrients) (`365 kcal/100g` → `3.650 kcal/1000g`, protéines `7,13 g/100g`, lipides `0,66 g/100g`).
     - **Haricots Secs Crus (`beans_common_dry_1000g`) :** [**USDA FDC ID 173734 / NDB 16014**](https://fdc.nal.usda.gov/food-details/173734/nutrients) & [**TBCA C0113A**](https://www.tbca.net.br/) (`329 kcal/100g` moyenne composite → `3.290 kcal/1000g`, protéines `24,5% kcal`, haute teneur en Fe et K).
     - **Miel Pur, Sucre Raffiné et Huile Végétale :** [**FDC ID 169640**](https://fdc.nal.usda.gov/food-details/169640/nutrients) (`304 kcal/100g`), [**FDC ID 169655**](https://fdc.nal.usda.gov/food-details/169655/nutrients) (`387 kcal/100g`) et [**FDC ID 171411**](https://fdc.nal.usda.gov/food-details/171411/nutrients) (`884 kcal/100g`).
2. **Sélection Pharmacologique, Codes ATC, SRO et Traumatologie (`cat_pharma_essential`, `cat_trauma_hygiene`) :**
   - Fondée sur la [**23e Liste Modèle des Médicaments Essentiels de l’OMS (`WHO/MHP/HPS/EML/2023.02`)**](https://iris.who.int/handle/10665/371090) (Amoxicilline 500mg `ATC: J01CA04` Groupe Access ; Ciprofloxacine 500mg `ATC: J01MA02` Groupe Watch ; Azithromycine 500mg `ATC: J01FA10` Groupe Watch ; Paracétamol 500mg `ATC: N02BE01`), la spécification officielle des [**Sels de Réhydratation Orale à Faible Osmolarité OMS/UNICEF (`Document WHO/FCH/CAH/06.1` : `20,5 g/L`, `245 mOsm/L`)**](https://iris.who.int/handle/10665/69227), le [**WHO IEHK 2017**](https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017), les directives [**CoTCCC / US DoD TCCC**](https://deployedmedicine.com/market/31) et le [**Guide Officiel de la FDA (Décembre 2001) sur l’Iodure de Potassium (`130 mg` pour Blocage Thyroïdien Adulte)**](https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki).
3. **Désinfection de l’Eau, Standard Sphère WASH 2.1 et Combustible de Cuisson (`CP`, `cat_water_fire_shelter`) :**
   - Fondés sur le [**Manuel Sphère (Édition 2018, Standard WASH 2.1 : `15 L/personne/jour` besoin de base total ; `2,5–3,0 L/jour` boisson de survie ; `3–6 L/jour` cuisson des aliments)**](https://spherestandards.org/handbook/editions/) et les [**Directives de Qualité pour l’Eau de Boisson de l’OMS (`ISBN 978-92-4-154995-0` : 1 comprimé de `67 mg` de NaDCC traite `20 Litres` d’eau claire en `30 min`)**](https://www.who.int/publications/i/item/9789241549950).
4. **Durée de Conservation Scellée (`V`) et Résistance de l’Emballage (`Frag`) :**
   - Fondées sur les études du [**US Army DEVCOM Soldier Center (Natick)**](https://www.army.mil/devcom-sc), les directives [**USDA FSIS Shelf-Stable Food Safety**](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food), les guides [**FEMA / Ready.gov**](https://www.ready.gov/food) et le programme [**FDA / DoD Shelf-Life Extension Program (SLEP)**](https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/expiration-dating-extension).
5. **Services Humains Essentiels, Actes Cliniques, Informatique Hors-Réseau, Instruction et Main-d’Œuvre Technique (`cat_essential_services`, Articles `101–128`) :**
   - Fondés sur le [**Manuel OMS IMEESC (Soins Chirurgicaux Essentiels et d’Urgence)**](https://www.who.int/Specify/emergencies/surgical-care), le [**Guide OMS/UNFPA/UNICEF IMPAC (*Prise en charge des complications de la grossesse et de l’accouchement*, ISBN 978-92-4-156549-3)**](https://www.who.int/publications/i/item/9789241565493), la [**Classification Internationale Type des Professions OIT CITP-08 (ISCO-08) et Norme ISO 8996**](https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/), les [**Directives Vétérinaires et Semencières de la FAO**](https://www.fao.org/agriculture/crops/thematic-sitemap/theme/seeds-pgr/seed-sys/security/en/), les [**Standards de Maintenance de Terrain IEEE / IEC / ETSI**](https://www.itu.int/en/ITU-D/Emergency-Telecommunications/), les normes [**IEEE 802.11s / ISO/IEC 27037 / IPC-7711/7721 / IEC 61131-3 (Informatique Hors-Réseau et Microélectronique)**](https://standards.ieee.org/ieee/802.11s/4570/) et les normes [**UNESCO ISCED / OMS-CICR BEC / ISO 17100 (Instruction Technique et Traduction)**](https://uis.unesco.org/en/topic/international-standard-classification-education-isced).
   - *Mappage Physique des Services Immatériels :* Les 28 services (`is_food: false`, `is_divisible: false`, `sub_units: 1`, `unit_measure: 'un'`) associent `weight_kg (P)` (`0,08–0,30 kg`) et `volume_liters (Vol)` (`0,10–0,35 L`) à la **Consommation de Consommables et Usure Physique Marginale par Intervention** (représentant uniquement les consommables et l’usure proportionnelle des instruments dépensés par acte individuel, puisque le technicien ou médecin conserve sa mallette permanente, évitant à la fois la pénalisation excessive de la mallette complète et l’inflation artificielle de `0,001 kg`), `lifecycle_units (V)` (`7–3.650 jours`) à la **Durabilité Effective / Intervalle de Récurrence du Service**, et `energy_or_utility_base (E)` (`5.200–38.000 EEB`) à la **Perte Calorique Biologique Évitée + Travail Technique Économisé**. Par défaut, `calculateChangeOptions()` exclut `cat_essential_services` des options automatiques de monnaie fractionnaire.

#### Répertoire Complet de Vérification en 1 Clic (Avec Codes de Document et Identifiants d’Enregistrement Exacts)

| Domaine / Portée | Organisme et Code Exact du Document / Enregistrement | Lien Direct de Vérification en 1 Clic |
| :--- | :--- | :--- |
| **Dossier d’Audit Local Hors-Ligne** | Répertoire de Registre Hors-Ligne (`audit_sources/`) | [`../audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) |
| **Nutrition : Riz Blanc (`365 kcal/100g`)** | USDA FoodData Central — `FDC ID: 169756` (`NDB 20444`) | [https://fdc.nal.usda.gov/food-details/169756/nutrients](https://fdc.nal.usda.gov/food-details/169756/nutrients) |
| **Nutrition : Haricots Secs (`329–341 kcal/100g`)** | USDA FoodData Central — `FDC ID: 173734` (`NDB 16014`) & TBCA `C0113A` | [https://fdc.nal.usda.gov/food-details/173734/nutrients](https://fdc.nal.usda.gov/food-details/173734/nutrients) |
| **Nutrition : Miel, Sucre et Huile** | USDA FDC IDs `169640`, `169655` et `171411` | [https://fdc.nal.usda.gov/food-details/169640/nutrients](https://fdc.nal.usda.gov/food-details/169640/nutrients) |
| **Nutrition : Tables Nationales (France & Brésil)** | ANSES Table Ciqual, TBCA (USP) & TACO 4e Éd. PDF | [https://ciqual.anses.fr/](https://ciqual.anses.fr/) · [https://www.tbca.net.br/](https://www.tbca.net.br/) |
| **Normes Alimentaires Internationales** | FAO/WHO Codex Alimentarius Commission | [https://www.fao.org/fao-who-codexalimentarius/](https://www.fao.org/fao-who-codexalimentarius/) |
| **Médicaments Essentiels (`J01CA04`, etc.)** | OMS 23e Liste EML (`WHO/MHP/HPS/EML/2023.02`) | [https://iris.who.int/handle/10665/371090](https://iris.who.int/handle/10665/371090) |
| **Sels de Réhydratation Orale (`20,5 g/L`)** | OMS / UNICEF SRO Faible Osmolarité (`WHO/FCH/CAH/06.1`) | [https://iris.who.int/handle/10665/69227](https://iris.who.int/handle/10665/69227) |
| **Principes Actifs Pharmaceutiques** | OMS — Dénominations Communes Internationales (DCI/INN) | [https://www.who.int/teams/health-product-and-policy-standards/inn](https://www.who.int/teams/health-product-and-policy-standards/inn) |
| **Kits Sanitaires d’Urgence** | OMS / HCR / UNICEF — IEHK 2017 | [https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017](https://www.who.int/emergencies/emergency-health-kits/interagency-emergency-health-kit-2017) |
| **Traumatologie Artérielle Préhospitalière** | CoTCCC / US DoD — Directives TCCC | [https://deployedmedicine.com/market/31](https://deployedmedicine.com/market/31) |
| **Protection Thyroïdienne Radiologique** | US FDA Guide Déc 2001 — Potassium Iodide (`130 mg`) | [https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki](https://www.fda.gov/drugs/bioterrorism-and-drug-preparedness/frequently-asked-questions-potassium-iodide-ki) |
| **Nomenclature Locale `en-US`** | United States Pharmacopeia (USP) & FDA Orange Book | [https://www.usp.org/](https://www.usp.org/) · [https://www.accessdata.fda.gov/scripts/cder/ob/](https://www.accessdata.fda.gov/scripts/cder/ob/) |
| **Nomenclature Locale `pt-BR`** | DCB / ANVISA (Dénomination Commune Brésilienne) | [https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/dcb](https://www.gov.br/anvisa/pt-br/assuntos/farmacopeia/dcb) |
| **Nomenclature Locale `es-ES`** | DOE / CIMA AEMPS & BOE `BOE-A-1967-16485` (CAE) | [https://cima.aemps.es/](https://cima.aemps.es/) · [https://www.boe.es/buscar/act.php?id=BOE-A-1967-16485](https://www.boe.es/buscar/act.php?id=BOE-A-1967-16485) |
| **Nomenclature Locale `fr-FR`** | DCI / ANSM (Pharmacopée Française) & ANSES Table Ciqual | [https://ansm.sante.fr/documents/reference/pharmacopee](https://ansm.sante.fr/documents/reference/pharmacopee) · [https://ciqual.anses.fr/](https://ciqual.anses.fr/) |
| **Nomenclature Locale `ru-RU`** | МНН / ГРЛС Минздрава РФ (ГФ РФ XV) & Росстандарт (ГОСТ) | [https://grls.rosminzdrav.ru/](https://grls.rosminzdrav.ru/) · [https://protect.gost.ru/](https://protect.gost.ru/) |
| **Nomenclature Locale `sw-KE`** | KEML / PPB Kenya (Pharmacy and Poisons Board) & KEBS / KFCT | [https://web.pharmacyboardkenya.org/](https://web.pharmacyboardkenya.org/) · [https://www.kebs.org/](https://www.kebs.org/) |
| **Nomenclature Locale `ar-SA`** | SFDA (Saudi Food & Drug Authority) & Normes SASO / GSO | [https://www.sfda.gov.sa/](https://www.sfda.gov.sa/) · [https://www.saso.gov.sa/](https://www.saso.gov.sa/) |
| **Nomenclature Locale `zh-Hans`** | Pharmacopée Chinoise (ChP) & Normes Nationales GB (SAMR) | [https://www.chp.org.cn/](https://www.chp.org.cn/) · [https://openstd.samr.gov.cn/](https://openstd.samr.gov.cn/) |
| **Eau et Désinfection NaDCC (`67mg/20L`)** | Sphère WASH Std 2.1 (`15L/jour`) & OMS GDWQ `978-92-4-154995-0` | [https://spherestandards.org/handbook/editions/](https://spherestandards.org/handbook/editions/) · [https://www.who.int/publications/i/item/9789241549950](https://www.who.int/publications/i/item/9789241549950) |
| **Conservation (`V`) et Emballages (`Frag`)** | USDA FSIS Shelf-Stable, FEMA Ready.gov & FDA SLEP | [https://www.fsis.usda.gov/.../shelf-stable-food](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food) · [https://www.fda.gov/.../expiration-dating-extension](https://www.fda.gov/emergency-preparedness-and-response/mcm-legal-regulatory-and-policy-framework/expiration-dating-extension) |
| **Piles et Accumulateurs (`LR6`, `LR03`, `INR18650`)** | IEC 60086-2 (Primaires) & IEC 61960-3 (Lithium Secondaires) | [https://webstore.iec.ch/en/publication/603](https://webstore.iec.ch/en/publication/603) |
| **Masques Filtrants (`N95 / FFP2`)** | AFNOR `NF EN 149` & CDC / NIOSH `42 CFR Part 84` | [https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html](https://www.cdc.gov/niosh/npptl/topics/respirators/disp_part/n95list1.html) |
| **Métaux Précieux (`999.0 Fine` Or/Argent)** | LBMA Good Delivery Assay Specifications | [https://www.lbma.org.uk/good-delivery/about-good-delivery](https://www.lbma.org.uk/good-delivery/about-good-delivery) |
| **Chirurgie d’Urgence et Obstétrique** | OMS IMEESC & OMS/UNFPA/UNICEF IMPAC (`978-92-4-156549-3`) | [https://www.who.int/publications/i/item/9789241565493](https://www.who.int/publications/i/item/9789241565493) |
| **Travail Technique et Ergonomie Métabolique** | OIT CITP-08 (ISCO-08) & ISO 8996 (Taux Métabolique) | [https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/](https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/) · [https://www.iso.org/standard/74443.html](https://www.iso.org/standard/74443.html) |
| **Informatique Hors-Réseau, Récupération et PCB** | IEEE 802.11s, ISO/IEC 27037, IPC-7711/7721 & IEC 61131-3 | [https://standards.ieee.org/ieee/802.11s/4570/](https://standards.ieee.org/ieee/802.11s/4570/) · [https://www.iso.org/standard/44381.html](https://www.iso.org/standard/44381.html) |
| **Instruction Technique, Pédagogie et Traduction** | UNESCO ISCED, OMS/CICR BEC & ISO 17100:2015 | [https://uis.unesco.org/en/topic/international-standard-classification-education-isced](https://uis.unesco.org/en/topic/international-standard-classification-education-isced) · [https://www.iso.org/standard/59149.html](https://www.iso.org/standard/59149.html) |
| **Rapports sur les Sièges Urbains et Conflits** | CICR Publication `4249` & OMS Ukraine | [https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict](https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict) · [https://www.who.int/emergencies/situations/ukraine-emergency](https://www.who.int/emergencies/situations/ukraine-emergency) |

### 3.2. Heuristiques d’Ingénierie et Grille par Paliers Décimaux (Sans Source Externe — Justifiées par Conception)
Là où la littérature officielle sépare la nutrition (`kcal`), la médecine (survie clinique) et la logistique (`kg/L`) en silos incompatibles, ce moteur introduit quatre heuristiques originales formellement justifiées :

1. **Base d’Énergie Équivalente (`EEB` dans l’intervalle `[500, 50000]`) pour les Articles Non Alimentaires :**
   - *Justification de Création :* Il n’existe aucune unité physique directe convertissant un antibiotique ou un outil en calories. L’`EEB` est définie selon le principe thermodynamique de **Dépense Métabolique Économisée / Perte Biologique Évitée** (en équivalents `kcal`). Par exemple : une infection bactérienne systémique (fièvre à **39,5 °C** pendant 7 jours) ou une diarrhée aiguë déshydratante épuise entre **3.500 et 15.000+ kcal** des réserves basales et menace le pronostic vital ; scier du bois, filtrer de l’eau ou allumer un feu manuellement sans outils consomme entre **500 et 3.000+ kcal** supplémentaires d’effort physique et d’exposition thermique.
2. **Règle des Consommables Métaboliques et Fonctionnels Non Caloriques (`is_food: false` pour Eau, Sel, Café, Thé, Vinaigre, Bicarbonate, Tabac et Éthanol Potable) :**
   - *Justification de Création :* Neuf articles consommables des catégories `cat_staple_foods` et `cat_spices_morale` (`water_potable_sealed_1000ml`, `salt_sodium_chloride_iodized_1000g`, `coffee_roasted_ground_vacuum_500g`, `coffee_instant_soluble_granules_50g`, `vinegar_acetic_acid_4pct_750ml`, `sodium_bicarbonate_pure_100g`, `tea_camellia_sinensis_dry_50g`, `tobacco_cigarette_filtered_unit` et `alcohol_ethanol_potable_40pct_500ml`) sont configurés intentionnellement avec **`is_food: false`** (`IN = 1.0`) et évalués via **`EEB`** au lieu de `kcal` alimentaires. Dans les tables USDA/Ciqual, l’eau pure, le sel et le bicarbonate ont **`0 kcal`**, et le café, le thé et le vinaigre ont `< 20 kcal/100g` ; les évaluer comme aliments caloriques attribuerait `ScoreBase = 0 pt` à l’eau potable et aux électrolytes vitaux.
3. **Constante d’Amortissement Gravimétrique-Volumétrique (`ε = 0.1` dans `P + Vol + 0.1`), Poids de l’`IN` et Échelle Logarithmique (`log₁₀(V + 1)`) :**
   - *Justification de Création :* Le terme `ε = 0.1` empêche la division par zéro ou l’explosion asymptotique lorsque la masse `P` tend vers `0,001 kg` (1 gélule ou 1 comprimé NaDCC), bornant l’amplification maximale de portabilité à `~9,8×`. Les poids de l’`IN` (`+1.5` protéines, `+1.0` lipides, `-1.2` sucres ajoutés, bornés à `[0.5, 2.5]`) distinguent la nutrition structurelle réparatrice des calories glycémiques vides, tandis que `log₁₀(V + 1)` comprime l’écart entre 100 ans et 1 an en une prime de durabilité réaliste (`1,78×` au lieu de `100×`).
4. **Grille de Calibration par Paliers Décimaux Exacts (`CP`, `FP`, `Frag` et `MEC`) :**
   - *Justification de Création :* Chaque palier décimal au sein de la plage d’un paramètre répond à un seuil opérationnel explicite (voir le tableau complet dans [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md)) :

| Paramètre | Plage | Grille par Paliers Décimaux (Pourquoi Chaque Valeur Exacte Est Attribuée) |
| :--- | :---: | :--- |
| **`energy_or_utility_base` (`E`)** | `> 0` | **Aliments :** Total exact de `kcal` du conditionnement atomique (`FDC-169756` riz `3.650 kcal`, `FDC-173734`/`TBCA` haricots `3.290 kcal`).<br>**Non-Aliments (`EEB`) :**<br>• `500 – 3.000` : Consommables à usage unique (`tobacco_cigarette_filtered_unit` `650`, `paracetamol_500mg_tablet` `1.600`, `gauze_sterile_compress_7_5cm_unit` `2.200`, `water_purification_nadcc_tablet_unit` `2.600`).<br>• `3.000 – 10.000` : Antibiotiques systémiques par gélule (`amoxicillin_500mg_capsule` `4.200`, `ciprofloxacin_500mg_tablet` `5.000`), sutures (`8.200`), briquet butane (`7.500`).<br>• `10.000 – 25.000` : Garrot artériel (`tourniquet_tactical_arterial_unit` `18.500`), cellule `INR18650` (`12.500`), tige de ferrocérium (`16.000`), 1 L d’hypochlorite (`14.500`).<br>• `25.000 – 50.000` : Biens d’équipement durables pluriannuels (`filter_water_hollow_fiber_0_1micron_unit` `32.000`, `knife_fixed_blade_carbon_steel_fulltang` `28.000`, `panel_solar_monocrystalline_usb_5v_10w_unit` `38.000`, `radio_transceiver_vhf_uhf_dualband_unit` `42.000`, `gold_bullion_999_fine_fractional_1g` `50.000`). |
| **`cost_of_prep` (`CP`)** | `0.50 – 1.00` | • **`1.00`** : Zéro préparation (conserve prête à consommer, comprimé oral, eau potable, outil prêt).<br>• **`0.90 – 0.96`** : Dissolution à froid en **moins de 2 min**, zéro combustible (`oral_rehydration_salts_who_sachet_27_9g`, `milk_powder_whole_400g`).<br>• **`0.80 – 0.88`** : Hydratation rapide ou chauffage léger de **2 à 5 min** (`oats_rolled_whole_500g`, `coffee_roasted_ground_vacuum_500g`).<br>• **`0.72 – 0.78`** : Cuisson brève de **8 à 12 min** (`lentils_dry_raw_500g`, `pasta_wheat_dry_500g`).<br>• **`0.65 – 0.68`** : Ébullition standard de **15 à 20 min** + ratio **2:1** d’eau (`rice_white_polished_raw_1000g`, `meat_bovine_cured_salted_500g`).<br>• **`0.50 – 0.58`** : Ébullition prolongée de **45 à 60 min** + ratio **3:1** d’eau (`beans_common_dry_1000g`, `chickpeas_dry_raw_500g`). |
| **`psychological_factor` (`FP`)** | `1.00 – 2.50` | • **`1.20 – 1.30`** : Intrants utilitaires de base (`gelatin_unflavored_powder_50g`, `flour_wheat_enriched_1000g`).<br>• **`1.35 – 1.45`** : Aliments de base rassasiants (`rice_white_polished_raw_1000g`, `beans_common_dry_1000g`).<br>• **`1.50 – 1.85`** : Dignité hygiénique, antalgie et réconfort moral (`fish_sardine_canned_oil_125g`, `honey_bee_pure_500g`).<br>• **`1.90 – 2.25`** : Atténuation du sevrage neurochimique à forte liquidité en état de siège (`coffee_roasted_ground_vacuum_500g`, `chocolate_dark_cocoa_60pct_100g`).<br>• **`2.30 – 2.40`** : Anti-infectieux critiques et potabilisation de l’eau (`amoxicillin_500mg_capsule`, `water_purification_nadcc_tablet_unit`).<br>• **`2.45 – 2.50`** : Plafond absolu de préservation immédiate de la vie (`tourniquet_tactical_arterial_unit`, `infant_formula_powder_stage1_400g`, `filter_water_hollow_fiber_0_1micron_unit`). |
| **`fragility_index` (`Frag`)** | `0.70 – 1.20` | • **`0.75 – 0.80`** : Papier/carton hydrophile exposé ou optique fragile (`paper_toilet_cellulose_roll_30m`, `biscuit_wheat_salted_dry_400g`).<br>• **`0.85 – 0.90`** : Sachet polymère souple ou bouteille liquide (`pasta_wheat_dry_500g`, `oil_vegetable_refined_900ml`).<br>• **`0.95 – 1.05`** : Emballage scellé épais, flacon PEHD ou blister pharmaceutique (`rice_white_polished_raw_1000g`, `amoxicillin_500mg_capsule` `1.05`).<br>• **`1.10 – 1.18`** : Boîte métallique hermétique, sachet Mylar ou pince multifonction en acier (`fish_sardine_canned_oil_125g` `1.15`).<br>• **`1.20`** : Alliage massif ou métal précieux quasiment indestructible (`tourniquet_tactical_arterial_unit`, `gold_bullion_999_fine_fractional_1g`, `silver_bullion_999_fine_1_troy_oz_31_1g`). |

### 3.3. Enseignements Empiriques des Guerres et Sièges Urbains Récents Modélisés dans le Moteur
Le catalogue de 128 articles et les modificateurs de contexte (`MEC`) intègrent les leçons documentées des conflits contemporains :
- **Siège de Sarajevo (1992–1996, Guerre de Bosnie) :** A démontré la démonétisation aiguë de l’or et des bijoux lors des sièges urbains fermés (`cat_store_of_value` chute à **`0.01x`** en `acute_collapse` et rebondit à **`5.0x`** en `economic_reconstruction`), tandis que les **briquets au butane**, **cigarettes à l’unité**, **café**, **sel** et **alcool antiseptique** ont servi de monnaies fractionnaires de haute liquidité.
- **Guerre en Ukraine (2022–Présent — Marioupol, Bakhmout et Coupures Hivernales — [Rapports d’Urgence de l’OMS](https://www.who.int/emergencies/situations/ukraine-emergency)) :** A confirmé que la survie civile moderne sous bombardements et effondrement du réseau électrique (*grid-down*) dépend de la **micro-énergie CC et des communications décentralisées** (**accumulateurs Li-Ion 18650**, **panneaux solaires USB 5V 10W**, **radios VHF/UHF bibande**), de la **traumatologie tactique civile (TCCC)** (**garrots artériels**, **sutures nylon 3-0**) et du **blocage thyroïdien radiologique** (**iodure de potassium 130mg**).
- **Crises Hydriques et Épidémies de Choléra (Syrie, Yémen, Gaza, Soudan — [Rapports du CICR](https://www.icrc.org/en/publication/4249-urban-services-during-protracted-armed-conflict) et [Directives WASH de l’OMS](https://www.who.int/publications/i/item/9789241549950)) :** Ont prouvé que, lorsque le pompage électrique cesse et que le combustible manque pour faire bouillir l’eau, la **désinfection chimique à froid** (**comprimés NaDCC**, **hypochlorite de sodium à 2,5%**), les **filtres à fibres creuses 0,1 micron**, les **Sels de Réhydratation Orale (SRO)** et les **antibiotiques ciblant les entéropathogènes** (**ciprofloxacine**, **métronidazole**, **azithromycine**) détiennent la plus haute valeur de survie par gramme durant les 30 premiers jours.

### 3.4. Exemples de Calcul Pas à Pas (*Worked Examples* Audités dans `data/items_core.js`)

#### Exemple Pas à Pas A : Aliment de Base (`rice_white_polished_raw_1000g`)
- **Paramètres d’Entrée (`data/items_core.js`) :**
  - `is_food`: `true`, `energy_or_utility_base (E)`: `3650` kcal, `weight_kg (P)`: `1.0` kg, `volume_liters (Vol)`: `1.18` L, `lifecycle_units (V)`: `1825` jours.
  - `cost_of_prep (CP)`: `0.65`, `psychological_factor (FP)`: `1.35`, `fragility_index (Frag)`: `1.05`.
  - Macros : `pct_kcal_protein = 0.078`, `pct_kcal_fat = 0.015`, `pct_kcal_added_sugar = 0.0`, Micros : tous `false`.
- **Étape 1 — Indice Nutritionnel (`IN`) :**
  ```text
  MacroFactor = (0.078 × 1.5) + (0.015 × 1.0) - (0 × 1.2) = 0.117 + 0.015 = 0.132
  IN          = Clamp(1.0 + 0.132 + 0, 0.5, 2.5) = 1.132
  ```
- **Étape 2 — Score de Base (`ScoreBase`) :**
  ```text
  TermeDensité   = (3650 × 1.132) / (1.0 + 1.18 + 0.1) = 4131.8 / 2.28 = 1812.192982
  TermeLongévité = log₁₀(1825 + 1) = log₁₀(1826) = 3.26150077
  ScoreBase      = 1812.192982 × 3.26150077 × 0.65 × 1.35 × 1.05 = 5445.7582 pts
  ```
- **Étape 3 — Score Final en `acute_collapse` (`MEC`) :**
  - Catégorie `cat_staple_foods` (`1.25×`) × étiquette `high_calorie_density` (`1.30×`) → **`MEC = 1.625`**.
  ```text
  ScoreFinal     = 5445.7582 × 1.625 = 8849.3571 pts
  ```

#### Exemple Pas à Pas B : Médicament Essentiel Non Alimentaire (`amoxicillin_500mg_capsule`)
- **Paramètres d’Entrée (`data/items_core.js`) :**
  - `is_food`: `false` (→ **`IN = 1.0`**), `energy_or_utility_base (E)`: `4200` EEB, `weight_kg (P)`: `0.001` kg, `volume_liters (Vol)`: `0.002` L, `lifecycle_units (V)`: `1095` jours.
  - `cost_of_prep (CP)`: `1.0`, `psychological_factor (FP)`: `2.35`, `fragility_index (Frag)`: `1.05`.
- **Étape 1 — Score de Base (`ScoreBase`) :**
  ```text
  TermeDensité   = (4200 × 1.0) / (0.001 + 0.002 + 0.1) = 4200 / 0.103 = 40776.699029
  TermeLongévité = log₁₀(1095 + 1) = log₁₀(1096) = 3.03981055
  ScoreBase      = 40776.699029 × 3.03981055 × 1.0 × 2.35 × 1.05 = 305855.1134 pts
  ```
- **Étape 2 — Score Final en `acute_collapse` (`MEC`) :**
  - Catégorie `cat_pharma_essential` (`1.40×`) × étiquette `antibiotic_systemic` (`1.70×`) → **`MEC = 2.38`**.
  ```text
  ScoreFinal     = 305855.1134 × 2.38 = 727935.1699 pts
  ```

---

## 4. Contrat de Schéma et Standardisation Scientifique

Chaque objet dans `data/items_core.js` ou enregistré via `BarterEngine.registerCustomItems([item])` est audité par `window.BarterCore.Validator.validateItem(item)` :

| Propriété | Type | Contrainte / Valeurs Autorisées |
| :--- | :--- | :--- |
| `id` | `string` | `snake_case` en minuscules (`/^[a-z][a-z0-9_]{2,120}$/`), non numérique, sans marque commerciale |
| `category` | `string` | `cat_staple_foods`, `cat_critical_nutrition`, `cat_spices_morale`, `cat_pharma_essential`, `cat_trauma_hygiene`, `cat_water_fire_shelter`, `cat_tools_energy_comms`, `cat_store_of_value`, `cat_essential_services` |
| `is_food` | `boolean` | `true` pour les aliments caloriques ; `false` pour les articles non alimentaires, médicaments, outils et services |
| `is_divisible` | `boolean` | `true` si fractionnable en `sub_units` ; `false` si échangeable uniquement par unités entières |
| `sub_units` | `number` | Entier `≥ 1` (`1` pour les indivisibles ; total en `g`, `ml` ou sous-unités pour les divisibles) |
| `unit_measure` | `string` | `"g"` \| `"ml"` \| `"un"` |
| `energy_or_utility_base` | `number` | `> 0` (Total réel de `kcal` pour les aliments ; `EEB` dans l’intervalle `[500, 50000]` pour les non-aliments) |
| `weight_kg` | `number` | Masse physique en kilogrammes (`> 0`) |
| `volume_liters` | `number` | Volume physique déplacé en litres (`≥ 0`) |
| `lifecycle_units` | `number` | Durée de conservation nominale scellée ou durabilité du service, en jours (`> 0`) |
| `cost_of_prep` | `number` | Coefficient de facilité de préparation dans l’intervalle `[0.5, 1.0]` |
| `psychological_factor` | `number` | Coefficient d’impact moral et psychologique dans l’intervalle `[1.0, 2.5]` |
| `fragility_index` | `number` | Coefficient de résistance physique du conditionnement dans l’intervalle `[0.7, 1.2]` |
| `tags` | `string[]` | Tableau non vide d’étiquettes fonctionnelles en `snake_case` |

---

## 5. Exécution Hors-Ligne en 1 Clic, Impression Physique et Structure du Dépôt

Aucun compilateur, serveur web local ni connexion Internet n’est requis pour l’utilisation hors-ligne :

- **Windows (7 / 10 / 11) :** Double-cliquez sur `start_windows.bat` à la racine du projet.
- **Linux / macOS / FreeBSD / OpenBSD :** Exécutez `./start_unix.sh` (ou `sh ./start_unix.sh`).
- **Ouverture Directe :** Double-cliquez sur `manual_generator.html` depuis n’importe quel gestionnaire de fichiers de bureau ou mobile.
- **Simulateur Bilatéral de Troc et Résumé Direct du Règlement :** Dans `manual_generator.html`, sélectionnez l’**Article Offert (Vous Remettez)** et l’**Article Demandé (Vous Recevez)** (ou cliquez sur `⇄` pour inverser instantanément les articles) ainsi que leur durée de conservation restante en temps réel (`V`). Le simulateur affiche le **Résumé Direct du Règlement de l’Échange** (`Vous Remettez ➔ Vous Recevez`), 6 indicateurs explicites nommés, ainsi que des alertes traduites d’indivisibilité indiquant clairement qui doit la monnaie à qui et les options de règlement en grammes, millilitres ou unités.
- **Impression du Manuel de Terrain sur Papier et Opération Analogique (Page 1 Complète + 3 Scénarios en Parallèle) :** Dans `manual_generator.html`, sélectionnez la langue **`Français (fr-FR)`** et cliquez sur **« Imprimer le Manuel Physique »** (ou `Ctrl+P` / `Cmd+P`). La feuille de style `@media print` (`A4 landscape`) masque les contrôles interactifs et génère un manuel imprimé noir et blanc à fort contraste : la **Page 1** imprime intégralement le **Manuel de Terrain Analogique** (protocole en 4 étapes, guide des 3 colonnes de scénario, exemple pratique résolu, Protocoles A et B de péremption, liste de contrôle sanitaire et **Table Précalculée de Monnaie Fractionnaire dans les 3 Scénarios**), et les **Pages 2+** impriment le catalogue de 128 articles affichant **simultanément les 3 scénarios de crise en parallèle** dans les **Colonnes 8 (`1. Base Pure 1,0x`), 9 (`2. Effondrement Aigu`) et 10 (`3. Reconstruction`)**.

### 5.1. Architecture du Dépôt

```text
library/
├── .gitattributes                      # Force LF pour .sh, CRLF pour .bat et règles GitHub Linguist
├── .gitignore                          # Protection contre les caches OS, IDE et fichiers lock
├── LICENSE                             # Licence officielle Apache License 2.0
├── NOTICE                              # Avis Obligatoire d’Attribution (Section 4d — Erisson Marques)
├── README.md                           # Documentation canonique en Anglais et Référence du SDK
├── CHANGELOG.md                        # Historique des versions selon Keep a Changelog v1.1.0
├── CONTRIBUTING.md                     # Clause Inbound=Outbound et 100% de titularité des parrainages
├── package.json                        # Manifeste de paquet npm sans dépendances et métadonnées
├── server.js                           # Serveur HTTP natif Node.js (zéro dépendance) pour usage local
├── index.js                            # Point d’entrée UMD unifié du paquet (@barterscoreengine/library)
├── index.d.ts                          # Déclarations officielles TypeScript pour IDE et projets externes
├── start_windows.bat                   # Lanceur Windows en 1 clic (protocole file://)
├── start_unix.sh                       # Lanceur POSIX en 1 clic (Linux, macOS, BSD)
├── manual_generator.html               # Interface hors-ligne sans dépendance, simulateur et générateur A4
├── data/
│   └── items_core.js                   # 128 articles standardisés (9 catégories : 100 biens + 28 services) + modèle Article 129+
├── audit_sources/
│   ├── OFFLINE_AUDIT_DOSSIER.md        # Dossier hors-ligne des sources scientifiques et paliers de calibration
│   └── offline_sources_registry.js     # Snapshot empirique UMD hors-ligne (window.BarterCore.AuditSources)
├── locales/
│   ├── en-US.js                        # Anglais (WHO INN / USP / Codex Alimentarius)
│   ├── pt-BR.js                        # Portugais (DCB-ANVISA / TBCA-TACO)
│   ├── es-ES.js                        # Espagnol (DOE-AEMPS / Código Alimentario Español)
│   ├── fr-FR.js                        # Français (DCI-ANSM / Pharmacopée Française / ANSES-Ciqual)
│   ├── ru-RU.js                        # Russe (MNN-GRLS Minzdrav RF / Pharmacopée d'État XV / GOST)
│   ├── sw-KE.js                        # Swahili (WHO INN / KEML-PPB Kenya / KEBS-KFCT)
│   ├── ar-SA.js                        # Arabe (WHO INN / SFDA / SASO-GSO / Codex Alimentarius)
│   └── zh-Hans.js                      # Chinois Simplifié (Pharmacopée Chinoise ChP / GB)
├── docs/
│   ├── OFFLINE_MANUAL.md               # Manuel d’Opération Analogique en Anglais (en-US)
│   ├── OFFLINE_MANUAL.pt-BR.md         # Manuel d’Opération Analogique en Portugais du Brésil
│   ├── OFFLINE_MANUAL.es-ES.md         # Manuel d’Opération Analogique en Espagnol
│   ├── OFFLINE_MANUAL.fr-FR.md         # Manuel d’Opération Analogique en Français
│   ├── OFFLINE_MANUAL.ru-RU.md         # Manuel d’Opération Analogique en Russe
│   ├── OFFLINE_MANUAL.sw-KE.md         # Manuel d’Opération Analogique en Swahili
│   ├── OFFLINE_MANUAL.ar-SA.md         # Manuel d’Opération Analogique en Arabe
│   ├── OFFLINE_MANUAL.zh-Hans.md       # Manuel d’Opération Analogique en Chinois Simplifié
│   ├── README.pt-BR.md                 # Documentation traduite en Portugais du Brésil
│   ├── README.es-ES.md                 # Documentation traduite en Espagnol
│   ├── README.fr-FR.md                 # Documentation traduite en Français
│   ├── README.ru-RU.md                 # Documentation traduite en Russe
│   ├── README.sw-KE.md                 # Documentation traduite en Swahili
│   ├── README.ar-SA.md                 # Documentation traduite en Arabe
│   └── README.zh-Hans.md               # Documentation traduite en Chinois Simplifié
└── src/
    ├── barter_engine.js                # Moteur Mathématique et de Troc UMD (Zéro Dépendance)
    └── validator.js                    # Validateur et Auditeur de Schéma, Dataset et Locales UMD
```

---

## 6. Guide d’Intégration pour Développeurs et Référence de l’API

`BarterEngine` intègre une architecture SDK hybride avec des blocs **JSDoc** complets (`@param`, `@returns`, `@example`) pour l’autocomplétion (IntelliSense) dans tout IDE. Vous pouvez instancier le moteur via `new BarterEngine(options)` ou appeler ses méthodes statiques directement sur `BarterEngine`.

### 6.1. Scénario A : Navigateur / HTML Hors-Ligne / Mobile WebView via `<script>`
Chargez les fichiers UMD dans l’ordre. Tous les modules s’attachent automatiquement à l’espace de noms global `window.BarterCore`, fonctionnant sans blocage CORS sous le protocole local `file://` :

```html
<script src="src/validator.js"></script>
<script src="data/items_core.js"></script>
<script src="audit_sources/offline_sources_registry.js"></script>
<script src="locales/en-US.js"></script>
<script src="locales/fr-FR.js"></script>
<script src="src/barter_engine.js"></script>
<script src="index.js"></script>

<script>
  const { BarterEngine, Validator, ItemsCore, AuditSources } = window.BarterCore;

  const engine = new BarterEngine({
    items: ItemsCore,
    locale: 'fr-FR',
    crisisPhase: 'acute_collapse'
  });

  const itemScore = engine.evaluateItem('water_potable_sealed_1000ml');
  console.log('Nom de l’article :', engine.translate('water_potable_sealed_1000ml', 'name', 'fr-FR'));
  console.log('Score Final :', itemScore.final_score); // 16458.3288
</script>
```

### 6.2. Scénario B : ES Modules (`import`) et Node.js / CommonJS (`require`)
Installez directement depuis le dépôt officiel sur GitHub ([`https://github.com/barterscoreengine/library`](https://github.com/barterscoreengine/library)) ou importez les fichiers locaux sans transpilation supplémentaire :

```bash
npm install github:barterscoreengine/library
# Ou pour un usage local/embarqué : git clone https://github.com/barterscoreengine/library.git
```

```javascript
// 1. ES Modules via le paquet (@barterscoreengine/library) — React, Vue, Vite, Next.js, TypeScript, Node.js
import { BarterEngine, Validator, ItemsCore, Locales, AuditSources } from '@barterscoreengine/library';

const engine = new BarterEngine({
  items: ItemsCore,
  locales: Locales,
  locale: 'fr-FR',
  crisisPhase: 'acute_collapse'
});

engine.setLocale('fr-FR');
engine.setCrisisPhase('acute_collapse');
```

### 6.3. Exemple Pratique 1 : Simulation Bilatérale de Troc (`calculateTrade`)
Simulez l’échange de **2 sachets de Riz Blanc Poli (1000g)** avec dépréciation de conservation en temps réel (`offerRemainingDays: 730` au lieu des `1825` jours nominaux) contre des **Gélules d’Amoxicilline 500mg** lors d’une épidémie infectieuse et d’une sécheresse extrême (`contextModifiers`) :

```javascript
const tradeResult = engine.calculateTrade(
  'rice_white_polished_raw_1000g', // ID sémantique de l'article offert
  2,                               // offerQuantity (2 sachets de 1000g)
  'amoxicillin_500mg_capsule',     // ID sémantique de l'article demandé
  {
    scenario: 'acute_collapse',
    offerRemainingDays: 730,       // Dépréciation en temps réel (730 jours restants)
    requestRemainingDays: 1095,    // Durée nominale de l'article demandé
    contextModifiers: {
      antibiotic_systemic: 2.2,    // Multiplicateur d'épidémie infectieuse
      hydration: 2.5               // Multiplicateur de sécheresse extrême
    }
  }
);

console.log(JSON.stringify(tradeResult, null, 2));
```

### 6.4. Exemple Pratique 2 : Extension Programmatique de l’Article 129+ (`registerCustomItems` & `AuditSources`)
Lors de l’intégration du SDK dans une application externe, vous pouvez étendre le catalogue canonique de 128 articles (`001–128`) avec de nouveaux articles régionaux (`Article 129+`) via `mode: 'merge'` et `strict: true`, tout en enregistrant leur traçabilité d’audit de Niveau 2 (`Tier 2`) via `AuditSources.registerCustomAuditSource` :

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

### 6.5. Avis Légal d’Attribution (Apache License 2.0 — Section 4d)
> **Note Obligatoire pour les Développeurs Externes et Distributeurs :**
> En stricte conformité avec la [**Section 4 de l’Apache License, Version 2.0**](https://www.apache.org/licenses/LICENSE-2.0), toute application externe, application mobile, logiciel de bureau, firmware ou manuel imprimé dérivé qui distribue ou incorpore **BarterScore Engine** (en tout ou en partie, sous forme de code source ou compilée/empaquetée) **DOIT** conserver et inclure des copies intactes des fichiers [`LICENSE`](../LICENSE) et [`NOTICE`](../NOTICE) de la racine du projet, préservant le crédit explicite au projet original **BarterScore Engine** et à son auteur/mainteneur **Erisson Marques ([`https://github.com/erissontech`](https://github.com/erissontech))**.

---

## 7. Comment Ajouter l’Article 129+ ou une Nouvelle Langue

### Ajouter l’Article 129+
1. Ouvrez `data/items_core.js` et copiez le modèle commenté à la fin du tableau `ITEMS_CORE`.
2. Définissez un `id` sémantique en `snake_case` en anglais (sans marque commerciale) et renseignez tous les paramètres physiques et nutritionnels selon la Grille de Calibration de la Section 3.
3. Vérifiez avec `window.BarterCore.Validator.validateDataset(window.BarterCore.ItemsCore)` qu’il n’y a 0 erreur et 0 avertissement.
4. **Enregistrez la Source d’Audit du Nouvel Article (Séparation à 2 Niveaux) :** Conservez intacte la matrice canonique `001–128` et enregistrez la source normative, pharmacopée régionale ou mesure empirique de votre `Article 129+` dans la **Section 4 (`Custom & Regional User Audit Ledger`)** de [`audit_sources/OFFLINE_AUDIT_DOSSIER.md`](../audit_sources/OFFLINE_AUDIT_DOSSIER.md) et/ou par code via `window.BarterCore.AuditSources.registerCustomAuditSource({ index: 129, id, category, source_code, baseline_note })`.

### Ajouter un Nouveau Pack de Langue (`locales/[lang].js`)
1. Dupliquez `locales/en-US.js` sous le nom `locales/<code-BCP47>.js` (ex. `locales/de-DE.js` conformément à [IETF BCP 47](https://www.rfc-editor.org/info/bcp47)).
2. Traduisez `categories`, `scenarios`, `ui` et `items` en employant la nomenclature commerciale et pharmaceutique officielle de la juridiction concernée.
3. Enregistrez le dictionnaire avec `window.BarterCore.BarterEngine.registerLocale('de-DE', dictionary)` et ajoutez `<script src="locales/de-DE.js"></script>` dans `manual_generator.html`. Toute clé absente utilisera automatiquement le repli vers `en-US`, puis vers l’`id` technique.

---

## 8. Licence et Gouvernance

- **Licence :** Distribué sous [Apache License, Version 2.0](../LICENSE) ([Texte Officiel ASF](https://www.apache.org/licenses/LICENSE-2.0)).
- **Avis d’Attribution :** Régi par le fichier [NOTICE](../NOTICE) à la racine (Section 4(d) d’Apache 2.0), créditant **Erisson Marques ([`https://github.com/erissontech`](https://github.com/erissontech))**.
- **Journal des Modifications :** Maintenu dans [CHANGELOG.md](../CHANGELOG.md) selon le standard [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/).
- **Contributions :** Régies par [CONTRIBUTING.md](../CONTRIBUTING.md), incluant la clause explicite **Inbound = Outbound** et la titularité exclusive (100%) des dons et parrainages au bénéfice du mainteneur principal.
