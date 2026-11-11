# BarterScore Engine (v1.1.0) — Manuel de Terrain Analogique pour Opérations en Blackout Total

> **Langue du Manuel :**
> [**English (`OFFLINE_MANUAL.md`)**](./OFFLINE_MANUAL.md) · [**Português (`OFFLINE_MANUAL.pt-BR.md`)**](./OFFLINE_MANUAL.pt-BR.md) · [**Español (`OFFLINE_MANUAL.es-ES.md`)**](./OFFLINE_MANUAL.es-ES.md) · [**Français (`OFFLINE_MANUAL.fr-FR.md`)**](./OFFLINE_MANUAL.fr-FR.md) · [**Русский (`OFFLINE_MANUAL.ru-RU.md`)**](./OFFLINE_MANUAL.ru-RU.md) · [**Kiswahili (`OFFLINE_MANUAL.sw-KE.md`)**](./OFFLINE_MANUAL.sw-KE.md) · [**العربية (`OFFLINE_MANUAL.ar-SA.md`)**](./OFFLINE_MANUAL.ar-SA.md) · [**简体中文 (`OFFLINE_MANUAL.zh-Hans.md`)**](./OFFLINE_MANUAL.zh-Hans.md)
>
> **Dépôt Officiel :** [https://github.com/barterscoreengine/library](https://github.com/barterscoreengine/library)
> **Licence :** [Apache License 2.0](../LICENSE) · **Attribution :** [Erisson Marques](https://github.com/erissontech) ([`NOTICE`](../NOTICE))
> **Documentation Principale :** [**Français (`README.fr-FR.md`)**](./README.fr-FR.md) · [**English (`README.md`)**](../README.md) · [**Português (`README.pt-BR.md`)**](./README.pt-BR.md) · [**Español (`README.es-ES.md`)**](./README.es-ES.md) · [**Русский (`README.ru-RU.md`)**](./README.ru-RU.md) · [**Kiswahili (`README.sw-KE.md`)**](./README.sw-KE.md) · [**العربية (`README.ar-SA.md`)**](./README.ar-SA.md) · [**简体中文 (`README.zh-Hans.md`)**](./README.zh-Hans.md)

---

## 1. Objectif et Doctrine d'Opération en Blackout Total

Ce document constitue le **Manuel d'Opérations Analogiques sur le Terrain** autonome du **BarterScore Engine**. Il est conçu pour les **Scénarios de Blackout Total** — pannes prolongées du réseau électrique, perturbations électromagnétiques ou déploiements humanitaires isolés où ordinateurs, smartphones et alimentation électrique sont indisponibles.

Pour exploiter un comptoir communautaire de troc physique ou tenir un registre d'échanges domestiques avec ce système, vous avez uniquement besoin de :
1. **Un Exemplaire Imprimé de la Grille Générale de Cotation** (généré via `manual_generator.html` au format **A4 Paysage** à fort contraste) ;
2. **Une Règle Plate** (pour suivre horizontalement les 10 colonnes de chaque article sans décalage visuel) ;
3. **Une Calculatrice de Poche Solaire/à Pile ou un Crayon et du Papier** (pour l'arithmétique de règlement en 3 étapes) ;
4. **Une Balance de Cuisine Simple (précision `1 g`) ou une Éprouvette Graduée (`1 ml`)** (pour régler l'appoint fractionnaire en denrées divisibles à forte liquidité telles que le sel iodé, le sucre cristallisé, le riz cru ou l'eau potable).

---

## 2. Le Protocole Analogique de Règlement de Troc en 3 Étapes

Chaque article de la table de cotation imprimée à 10 colonnes affiche simultanément **les 3 scénarios de crise côte à côte**, ainsi que son **Taux par Sous-Unité** (`1 g = X pts` ou `1 ml = X pts`) dans chaque colonne pour les 47 articles divisibles :

> **Quelle Colonne de Scénario Devez-Vous Utiliser (Colonnes 8, 9 et 10) ?**
> - **Colonne 8 — `1. Base Physique Pure (1.0x)` :** Score physique et nutritionnel intrinsèque (`ScoreBase`) sans multiplicateur externe de crise.
> - **Colonne 9 — `2. Effondrement Aigu` :** Phase de survie immédiate ; l'eau potable et la purification (`jusqu'à 4,32x`), les antibiotiques systémiques, les soins de traumatologie et les calories prêtes à consommer atteignent leur pic, tandis que les métaux précieux chutent à `0,01x`.
> - **Colonne 10 — `3. Reconstruction` :** Relance post-crise ; l'outillage durable en acier, les semences reproductibles, les équipements solaires/radio et les métaux précieux fractionnaires (`5,00x`) dominent la parité d'échange.

### Étape 1 : Calculer Votre Valeur Totale Offerte (`Points de Crédit`)
Repérez l'article que vous offrez dans la table imprimée et lisez son score dans la colonne de scénario convenue (`Col 8`, `Col 9` ou `Col 10`). Multipliez ce score par le nombre d'unités atomiques entières que vous livrez :

$$\text{Total des Points Offerts} = \text{Score}_{\text{Article Offert}} \times \text{Quantité}_{\text{Offerte}}$$

* **Si vous offrez une portion en vrac/partielle d'un Article Divisible (`is_divisible: true`) :** Multipliez directement le **taux imprimé pour `1 g` ou `1 ml`** dans cette colonne par le poids en grammes ou le volume en millilitres livré.

### Étape 2 : Repérer le Score de l'Article Demandé
Utilisez votre règle plate dans la **même colonne de scénario** pour localiser l'article que vous souhaitez recevoir de votre contrepartie et lisez son score unitaire ($\text{Score}_{\text{Article Demandé}}$), ou son taux par sous-unité `1 g / 1 ml` si vous demandez une denrée en vrac.

### Étape 3 : Diviser pour Déterminer la Quantité Exacte à Exiger
Divisez votre **Total des Points Offerts** (de l'Étape 1) par le **Score de l'Article Demandé** (de l'Étape 2) :

$$\text{Unités Exactes à Recevoir} = \frac{\text{Total des Points Offerts}}{\text{Score}_{\text{Article Demandé}}}$$

---

### Exemple Pratique de Terrain (Papier et Calculatrice de Poche — Valeurs 100 % Auditées)
Supposons que vous opériez dans la **Colonne 9 — Effondrement Civil Aigu (`acute_collapse`)** et souhaitiez échanger **50 sachets de Lait Entier en Poudre (`milk_powder_whole_400g`, `400 g` chacun)** contre des **Pinces Multifonctions Pliables en Acier Inoxydable (`multitool_pliers_stainless_folding_unit`, `1 un`, Indivisible)** :

1. **Étape 1 (Votre Crédit) :**
   - Score imprimé en Effondrement Aigu de `milk_powder_whole_400g` = `33 564,72 pts` par sachet (`MEC 2,36x`).
   - Multipliez par `50` sachets : $33\,564,72 \times 50 = \mathbf{1\,678\,236,00\text{ pts}}$.
2. **Étape 2 (Valeur Cible) :**
   - Score imprimé en Effondrement Aigu de `multitool_pliers_stainless_folding_unit` = `672 683,44 pts` par unité (`MEC 1,10x`).
3. **Étape 3 (Division et Règlement) :**
   - Divisez le Total des Points Offerts par le Score Cible : $1\,678\,236,00 \div 672\,683,44 = \mathbf{2,495\text{ unités}}$.
   - Comme une pince en acier est **Indivisible (`Indivisible · 1 un`)**, il est impossible de couper `0,495` d'un outil.
   - Vous recevez **2 Pinces Multifonctions entières** ($2 \times 672\,683,44 = 1\,345\,366,88\text{ pts}$).
   - **Monnaie (Appoint) qui Vous Est Due :** $1\,678\,236,00 - 1\,345\,366,88 = \mathbf{332\,869,12\text{ pts}}$.
   - Divisez `332 869,12 pts` par le taux à `1 g` en Effondrement Aigu du Sel Raffiné Iodé (`salt_sodium_chloride_iodized_1000g` = `158,935 pts/g`) pour exiger **`2 094 g` de Sel Iodé** (ou divisez par le Sucre Cristallisé `sugar_sucrose_crystal_1000g` à `15,525 pts/g` = **`21 440 g` de Sucre Cristallisé**) afin de clôturer l'échange avec **0 % de perte de valeur**.

---

## 3. Règles Manuelles de Dépréciation de Péremption (Calcul Mental pour Denrées Périssables)

Dans le moteur numérique, la dépréciation de durée de conservation en temps réel est régie par le facteur logarithmique en base 10 :

$$\text{Facteur de Dépréciation} = \frac{\log_{10}(V_{\text{restante}} + 1)}{\log_{10}(V_{\text{nominale}} + 1)}$$

Lors d'un blackout sans calculatrice scientifique, il est inutile de calculer $\log_{10}$ à la main. Comme les courbes logarithmiques restent relativement plates aux nombres de jours élevés et chutent fortement à l'approche de l'expiration ($V < 90\text{ jours}$), les opérateurs de terrain appliquent deux **Protocoles Mentaux de Dépréciation** simples :

### Protocole A : Jours Absolus Restants (Règle de Terrain Proche de l'Expiration)
Lorsqu'un aliment ou un produit pharmaceutique offert est proche de sa date de péremption physique, appliquez le multiplicateur direct suivant à son score imprimé :

| Durée de Conservation Physique Restante ($V_{\text{restante}}$) | Multiplicateur Mental de Score | Raccourci Arithmétique Mental | Justification Opérationnelle |
| :--- | :---: | :--- | :--- |
| **Plus de 90 Jours (`> 90 j`)** | **`100 %` (`1,00x`)** | Utiliser le score imprimé complet | Horizon de stockage suffisant pour la rotation communautaire (sauf si `< 50 %` de la durée nominale ; voir Protocole B). |
| **31 à 90 Jours (`31–90 j`)** | **`75 %` (`0,75x`)** | Soustraire **1/4 (`-25 %`)** du score imprimé | Priorité de consommation à moyen terme ; correspond à $\log_{10}(61) / \log_{10}(366) \approx 0,70\text{–}0,75$. |
| **8 à 30 Jours (`8–30 j`)** | **`50 %` (`0,50x`)** | **Réduire la valeur de moitié (`-50 %`)** | **Règle d'Or de Terrain :** Une péremption à moins de 30 jours divise la valeur d'échange par deux ($\log_{10}(31)/\log_{10}(1096) \approx 0,49$). |
| **1 à 7 Jours (`1–7 j`)** | **`25 %` (`0,25x`)** | Conserver seulement **1/4 (`-75 %`)** du score | Consommation immédiate uniquement ; ne peut être ni stocké ni ré-échangé. |
| **0 Jour / Avarié (`0 j`)** | **`0 %` (`0,00x`)** | **0 Point — Refuser l'Échange** | Valeur d'échange nulle ; les aliments avariés ou médicaments critiques dégradés présentent un risque biologique. |

### Protocole B : Règle Proportionnelle de Durée de Vie (Biens de Longue Conservation et Services Essentiels)
Pour les biens à longue durée de conservation (`1 à 5 ans`) disposant encore de plus de 90 jours mais ayant perdu une fraction importante de leur durée initiale d'usine :
- **Moitié de la Durée de Vie d'Usine Restante (`50 % de V`) :** Déduire **`~10 %`** (la perte logarithmique exacte est de `-8,9 %` à `-9,8 %`).
- **Un Quart de la Durée de Vie d'Usine Restante (`25 % de V`) :** Déduire **`~20 %`** (la perte logarithmique exacte est de `-17,8 %` à `-19,6 %`).
- **Services Humains Essentiels (`cat_essential_services`, Articles `101–128`) :** Pour les services humains, `V` représente la **Durabilité Nominale du Résultat du Service (Jours)** (intervalle de récurrence/garantie). Utilisez toujours **`100 %` (`1,00x`)** du score imprimé pour un service standard complet ; n'appliquez une réduction que si les deux parties conviennent d'une réparation temporaire/palliative de moindre durabilité.

---

## 4. Guide de Référence des 9 Catégories Canoniques et Contextes de Crise (`MEC`)

Les 128 articles standardisés dans `data/items_core.js` (`100` biens matériels + `28` services humains essentiels) sont organisés en **9 Catégories Canoniques** :

| Identifiant de Catégorie | Nom de la Catégorie | Rôle Physique Fondamental | Comportement selon les Phases de Crise (`MEC`) |
| :--- | :--- | :--- | :--- |
| `cat_staple_foods` | **Aliments Caloriques de Base et Protéines** | Survie calorique de masse (`kcal`), protéines végétales et lipides de cuisson (unités `1000 g` / `500 ml`). | Demande soutenue élevée (`1,2x–1,35x` en effondrement aigu ; `1,0x–1,1x` en reconstruction). |
| `cat_critical_nutrition` | **Nutrition Critique et Clinique** | Rations sans préparation (`CP = 1,0`), conserves de viande/poisson, préparations pour nourrissons et multivitamines. | Prime de `1,4x` en effondrement aigu lorsque le combustible de cuisson ou l'eau salubre manque. |
| `cat_spices_morale` | **Électrolytes, Condiments et Confort Moral** | Chlorure de sodium (`sel`), saccharose, miel, café, thé, cacao et éthanol distillé. | Le sel et le sucre servent de **monnaie d'appoint universelle divisible (`g`)** ; les biens de moral augmentent en état de siège. |
| `cat_pharma_essential` | **Médicaments Essentiels (DCI / OMS / ANSM)** | Antibiotiques systémiques, analgésiques, sels de réhydratation orale (SRO), traitements chroniques et antiparasitaires. | Multiplicateur vital maximal (`2,0x–2,2x`) en effondrement aigu et lors d'épidémies infectieuses. |
| `cat_trauma_hygiene` | **Soins de Traumatologie, Antiseptiques et Assainissement** | Garrots, compresses stériles, éthanol 70 % / chlorhexidine, masques FFP2/N95, savon et eau de Javel. | La traumatologie et l'antisepsie bondissent à `1,8x–2,2x` en effondrement aigu ; stables à `1,2x` en reconstruction. |
| `cat_water_fire_shelter` | **Purification de l'Eau, Allumage et Abri Thermique** | Eau potable scellée, comprimés NaDCC, filtres céramiques, tiges de ferrocérium, butane et bâches. | L'eau et la purification atteignent le multiplicateur de survie le plus élevé (`2,5x`) en effondrement aigu ou sécheresse. |
| `cat_tools_energy_comms` | **Outillage de Terrain, Énergie Hors-Réseau et Comms** | Acier carbone pleine soie, pinces multifonctions, paracorde, cellules IEC AA/AAA/18650, panneaux solaires, radios VHF/UHF. | Essentiels en effondrement (`1,3x–1,5x`) et progressent encore (`1,6x–1,8x`) lors de la reconstruction agraire/infrastructures. |
| `cat_store_of_value` | **Réserve de Valeur, Métaux Précieux et Archives** | Argent/or fractionnaire `.999`, semences reproductibles non hybrides, lunettes de lecture et archives hors-ligne. | **Inversion Stricte de Phase :** Les métaux précieux tombent à **`0,01x`** en `acute_collapse` (on ne mange pas d'or/argent) et bondissent à **`5,00x`** en `economic_reconstruction`. |
| `cat_essential_services` | **Services Humains Essentiels, Actes Cliniques, IT Hors-Réseau et Travail Technique** | Chirurgie de traumatologie, soins dentaires, obstétrique, réparation WASH, révision solaire/mécanique, IT hors-réseau/microélectronique, enseignement technique et garde tactique (`Articles 101–128`). | La traumatologie, l'obstétrique, la dentisterie, le WASH et la sécurité bondissent en `acute_collapse` (`jusqu'à 2,21x`) ; l'IT hors-réseau, l'enseignement, l'ingénierie, la métallurgie et l'agronomie bondissent en `economic_reconstruction` (`jusqu'à 2,32x`). |

---

## 5. Table de Correspondance Pré-Calculée de Monnaie Fractionnaire Multi-Scénarios (Colonnes 8, 9 et 10)

Comme la **Grille Générale de Cotation** imprimée affiche les 3 scénarios de crise côte à côte (**Col 8 : Base Pure `1,0x`**, **Col 9 : Effondrement Aigu** et **Col 10 : Reconstruction Économique**), chaque cellule ci-dessous fournit les points exacts pré-calculés pour **`Col 8 Base | Col 9 Aigu | Col 10 Recon`** sur les 7 principaux articles d'appoint :

| Article de Référence Divisible / Unitaire (`id`) | `1 g / 1 ml / 1 un` (**Col 8 \| 9 \| 10**) | `10 g / 10 ml` (**Col 8 \| 9 \| 10**) | `50 g / 50 ml` (**Col 8 \| 9 \| 10**) | `100 g / 100 ml` (**Col 8 \| 9 \| 10**) | `250 g / 250 ml` (**Col 8 \| 9 \| 10**) | `500 g / 500 ml` (**Col 8 \| 9 \| 10**) | `1000 g / 1000 ml` (**Col 8 \| 9 \| 10**) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Sel Raffiné Iodé** (`salt_sodium_chloride_iodized_1000g`) | **`39.9 \| 158.9 \| 78.1`** | `399 \| 1589 \| 781` | `1994 \| 7947 \| 3904` | `3989 \| 15893 \| 7808` | `9972 \| 39734 \| 19519` | `19943 \| 79467 \| 39039` | `39886 \| 158935 \| 78077` |
| **Sucre Blanc Cristallisé** (`sugar_sucrose_crystal_1000g`) | **`5.6 \| 15.5 \| 14.4`** | `56.4 \| 155 \| 144` | `282 \| 776 \| 718` | `564 \| 1553 \| 1436` | `1411 \| 3881 \| 3590` | `2821 \| 7763 \| 7180` | `5643 \| 15525 \| 14360` |
| **Riz Blanc Poli Cru** (`rice_white_polished_raw_1000g`) | **`5.4 \| 8.8 \| 6.3`** | `54.5 \| 88.5 \| 62.6` | `272 \| 442 \| 313` | `545 \| 885 \| 626` | `1361 \| 2212 \| 1566` | `2723 \| 4425 \| 3131` | `5446 \| 8849 \| 6263` |
| **Eau Potable Scellée** (`water_potable_sealed_1000ml`) | **`5.7 \| 16.5 \| 6.5`** | `56.8 \| 165 \| 65.3` | `284 \| 823 \| 326` | `568 \| 1646 \| 653` | `1419 \| 4115 \| 1632` | `2838 \| 8229 \| 3263` | `5675 \| 16458 \| 6527` |
| **Éthanol Antiseptique 70 %** (`ethanol_antiseptic_70pct_100ml`) | **`984 \| 5305 \| 1082`** | `9835 \| 53050 \| 10819` | `49175 \| 265250 \| 54093` | `98350 \| 530500 \| 108185` | `245875 \| 1326250 \| 270463` | `491750 \| 2652500 \| 540925` | `983500 \| 5305001 \| 1081850` |
| **Comprimé Paracétamol 500 mg** (`paracetamol_500mg_tablet`) | **`1 un: 108151 \| 204406 \| 129781`** | `2 un: 216302 \| 408811 \| 259563` | `3 un: 324453 \| 613217 \| 389344` | `5 un: 540756 \| 1022028 \| 648907` | `10 un: 1081512 \| 2044057 \| 1297814` | — | — |
| **Comprimé Purification Eau NaDCC 67 mg** (`water_purification_nadcc_tablet_unit`) | **`1 un: 199818 \| 863214 \| 219800`** | `2 un: 399636 \| 1726428 \| 439600` | `3 un: 599454 \| 2589642 \| 659400` | `5 un: 999090 \| 4316071 \| 1098999` | `10 un: 1998181 \| 8632141 \| 2197999` | — | — |

---

## 6. Liste de Contrôle Opérationnelle Standard pour les Comptoirs Communautaires de Troc

1. **Vérifier d'Abord l'Intégrité Physique :** N'acceptez jamais de sachets sous vide percés, de boîtes de conserve bombées/rouillées, de sachets de poudre humides ou de blisters pharmaceutiques perforés (`0 pt`).
2. **Confirmer la Colonne de Scénario de Crise (Colonnes 8, 9 et 10) :** Assurez-vous que les deux parties s'accordent sur celle des 3 colonnes côte à côte qui régit l'échange (`Col 8 : Base Pure 1,0x`, `Col 9 : Effondrement Aigu` ou `Col 10 : Reconstruction Économique`).
3. **Vérifier les Dates de Péremption (`Étape 4`) :** Si un article expire dans `< 30 jours`, appliquez la règle des **`50 %` (demi-valeur)** avant de multiplier par la quantité.
4. **Peser Exactement la Monnaie Fractionnaire (`Étape 3`) :** Lors de l'échange de matériel indivisible ou de trousses médicales scellées, réglez toujours le reliquat de points à l'aide d'articles divisibles à forte liquidité (`sel`, `sucre`, `riz`, `eau potable`, ou comprimés unitaires de `paracétamol`/`NaDCC`) afin qu'aucun foyer ne subisse de perte d'arrondi.
