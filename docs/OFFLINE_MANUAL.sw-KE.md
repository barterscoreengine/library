# BarterScore Engine (v1.1.0) — Mwongozo wa Uwandani wa Karatasi kwa Operesheni za Kukatika Kabisa kwa Umeme

> **Lugha ya Mwongozo:**
> [**English (`OFFLINE_MANUAL.md`)**](./OFFLINE_MANUAL.md) · [**Português (`OFFLINE_MANUAL.pt-BR.md`)**](./OFFLINE_MANUAL.pt-BR.md) · [**Español (`OFFLINE_MANUAL.es-ES.md`)**](./OFFLINE_MANUAL.es-ES.md) · [**Français (`OFFLINE_MANUAL.fr-FR.md`)**](./OFFLINE_MANUAL.fr-FR.md) · [**Русский (`OFFLINE_MANUAL.ru-RU.md`)**](./OFFLINE_MANUAL.ru-RU.md) · [**Kiswahili (`OFFLINE_MANUAL.sw-KE.md`)**](./OFFLINE_MANUAL.sw-KE.md) · [**العربية (`OFFLINE_MANUAL.ar-SA.md`)**](./OFFLINE_MANUAL.ar-SA.md) · [**简体中文 (`OFFLINE_MANUAL.zh-Hans.md`)**](./OFFLINE_MANUAL.zh-Hans.md)
>
> **Hifadhi Rasmi:** [https://github.com/barterscoreengine/library](https://github.com/barterscoreengine/library)
> **Leseni:** [Apache License 2.0](../LICENSE) · **Utambuzi wa Mwandishi:** [Erisson Marques](https://github.com/erissontech) ([`NOTICE`](../NOTICE))
> **Nyaraka Kuu:** [**Kiswahili (`README.sw-KE.md`)**](./README.sw-KE.md) · [**English (`README.md`)**](../README.md) · [**Português (`README.pt-BR.md`)**](./README.pt-BR.md) · [**Español (`README.es-ES.md`)**](./README.es-ES.md) · [**Français (`README.fr-FR.md`)**](./README.fr-FR.md) · [**Русский (`README.ru-RU.md`)**](./README.ru-RU.md) · [**العربية (`README.ar-SA.md`)**](./README.ar-SA.md) · [**简体中文 (`README.zh-Hans.md`)**](./README.zh-Hans.md)

---

## 1. Madhumuni na Kanuni za Uendeshaji Wakati wa Kukatika Kabisa kwa Umeme (Total Blackout)

Waraka huu ni **Mwongozo wa Uendeshaji wa Karatasi Uwandani** unaojitegemea wa **BarterScore Engine**. Umeundwa mahususi kwa ajili ya **Mazingira ya Kukatika Kabisa kwa Umeme na Mawasiliano** — kuharibika kwa muda mrefu kwa gridi ya taifa, dharura za sumaku-umeme, au operesheni za kibinadamu katika maeneo ya mbali ambapo kompyuta, simu janja na umeme havipatikani.

Ili kuendesha kituo cha mbadilishano wa bidhaa cha jamii au daftari la biashara ya kaya kwa kutumia mfumo huu, unahitaji tu:
1. **Nakala Iliyochapishwa ya Jedwali Kuu la Thamani za Mbadilishano** (inayotolewa kupitia `manual_generator.html` katika umbizo la **A4 Mlalo / Landscape** lenye maandishi yanayoonekana vizuri);
2. **Rula Iliyonyooka** (ili kufuatilia kwa usawa safu wima 10 za kila bidhaa bila kukosea mstari);
3. **Kikokotoo cha Mfukoni (cha Mwanga wa Jua/Betri) au Kalamu na Karatasi** (kwa ajili ya mahesabu ya hatua 3 ya makabidhiano);
4. **Mizani Rahisi ya Jikoni (usahihi wa `1 g`) au Kipimo cha Ujazo (`1 ml`)** (kwa ajili ya kupima chenji ndogondogo kwa bidhaa zinazogawanyika zenye mzunguko wa haraka kama vile chumvi yenye madini joto, sukari ya fuwele, mchele mbichi au maji safi ya kunywa).

---

## 2. Itifaki ya Hatua 3 ya Makabidhiano ya Mbadilishano kwa Karatasi

Kila bidhaa katika jedwali lililochapishwa lenye safu wima 10 inaonyesha kwa wakati mmoja **miktadha yote 3 ya dharura sambamba**, pamoja na **Kiwango chake cha Kipimo Kidogo** (`1 g = X pts` au `1 ml = X pts`) katika kila safu wima kwa bidhaa zote 47 zinazogawanyika:

> **Unapaswa Kutumia Safu Wima Ipi ya Muktadha (Safu 8, 9 na 10)?**
> - **Safu 8 — `1. Msingi Halisi (1.0x)`:** Thamani ya ndani ya kifizikia na lishe (`ScoreBase`) bila vizidisho vya nje vya dharura.
> - **Safu 9 — `2. Mporomoko Mkali`:** Awamu ya kuokoa maisha ya papo hapo; maji safi ya kunywa na usafishaji wake (`hadi 4.32x`), antibiotiki za mwili mzima, huduma ya majeraha na vyakula vilivyo tayari kuliwa vinapanda hadi kileleni, huku madini ya thamani yakishuka hadi `0.01x`.
> - **Safu 10 — `3. Ujenzi Mpya`:** Awamu ya kufufua uchumi baada ya dharura; zana imara za chuma, mbegu za asili zinazoota tena, vifaa vya umeme wa jua/redio na madini ya thamani (`5.00x`) vinaongoza katika ubadilishanaji.

### Hatua ya 1: Kokotoa Thamani ya Jumla Unayotoa (`Alama za Salio Lako`)
Tafuta bidhaa unayotoa kwenye jedwali lililochapishwa na usome alama yake katika safu wima ya muktadha mliokubaliana (`Safu 8`, `Safu 9` au `Safu 10`). Zidisha alama hiyo kwa idadi ya vipimo kamili unavyokabidhi:

$$\text{Jumla ya Alama Unazotoa} = \text{Alama}_{\text{Bidhaa Unayotoa}} \times \text{Idadi}_{\text{Inayotolewa}}$$

* **Ikiwa unatoa kiasi kidogo cha kupima cha Bidhaa Inayogawanyika (`is_divisible: true`):** Zidisha **kiwango kilichochapishwa cha `1 g` au `1 ml`** katika safu hiyo moja kwa moja kwa uzito wa gramu au ujazo wa mililita unaokabidhiwa.

### Hatua ya 2: Soma Alama ya Bidhaa Unayoomba
Tumia rula yako iliyonyooka katika **safu wima hiyohiyo ya muktadha** ili kupata bidhaa unayotaka kupokea kutoka kwa upande wa pili na usome alama yake ya kipimo kimoja ($\text{Alama}_{\text{Bidhaa Unayoomba}}$), au kiwango chake cha `1 g / 1 ml` ikiwa unaomba bidhaa ya kupima kwa uzito/ujazo.

### Hatua ya 3: Gawanya ili Kupata Kiasi Halisi cha Kudai
Gawanya **Jumla ya Alama Unazotoa** (kutoka Hatua ya 1) kwa **Alama ya Bidhaa Unayoomba** (kutoka Hatua ya 2):

$$\text{Vipimo Halisi vya Kupokea} = \frac{\text{Jumla ya Alama Unazotoa}}{\text{Alama}_{\text{Bidhaa Unayoomba}}}$$

---

### Mfano Halisi wa Mahesabu ya Uwandani (Karatasi na Kikokotoo cha Mfukoni — Thamani Zilizohakikiwa 100%)
Tuseme unafanya mbadilishano katika **Safu 9 — Mporomoko Mkali wa Kijamii (`acute_collapse`)** na unataka kubadilisha **pakiti 50 za Maziwa ya Unga Kamili (`milk_powder_whole_400g`, `400 g` kila moja)** ili upate **Koleo la Kukunja la Chuma cha Pua (`multitool_pliers_stainless_folding_unit`, `kipimo 1`, Haigawanyiki)**:

1. **Hatua ya 1 (Salio Lako):**
   - Alama iliyochapishwa ya Mporomoko Mkali kwa `milk_powder_whole_400g` = `33,564.72 pts` kwa pakiti (`MEC 2.36x`).
   - Zidisha kwa pakiti `50`: $33,564.72 \times 50 = \mathbf{1,678,236.00\text{ pts}}$.
2. **Hatua ya 2 (Thamani Lengwa):**
   - Alama iliyochapishwa ya Mporomoko Mkali kwa `multitool_pliers_stainless_folding_unit` = `672,683.44 pts` kwa kipimo (`MEC 1.10x`).
3. **Hatua ya 3 (Mgawanyo na Makabidhiano ya Chenji):**
   - Gawanya Jumla ya Alama Unazotoa kwa Alama Lengwa: $1,678,236.00 \div 672,683.44 = \mathbf{2.495\text{ vipimo}}$.
   - Kwa kuwa koleo la chuma **Haligawanyiki (`Haigawanyiki · kipimo 1`)**, huwezi kukata `0.495` ya chombo.
   - Unapokea **Koleo 2 kamili** ($2 \times 672,683.44 = 1,345,366.88\text{ pts}$).
   - **Chenji Unayodai:** $1,678,236.00 - 1,345,366.88 = \mathbf{332,869.12\text{ pts}}$.
   - Gawanya `332,869.12 pts` kwa kiwango cha `1 g` cha Mporomoko Mkali cha Chumvi yenye Madini Joto (`salt_sodium_chloride_iodized_1000g` = `158.935 pts/g`) ili kudai **`2,094 g` ya Chumvi yenye Madini Joto** (au gawanya kwa Sukari ya Fuwele `sugar_sucrose_crystal_1000g` kwa `15.525 pts/g` = **`21,440 g` ya Sukari ya Fuwele**) ili kukamilisha mbadilishano bila **hasara yoyote ya thamani (0%)**.

---

## 3. Kanuni za Kupunguza Thamani kwa Muda wa Matumizi (Hesabu za Kichwani kwa Bidhaa Zinazoharibika)

Katika mfumo wa kidijitali, upungufu wa thamani kutokana na muda wa kuhifadhi uliosalia huhesabiwa kwa fomula ya kilogarithimu ya msingi 10:

$$\text{Kipimo cha Uchakavu} = \frac{\log_{10}(V_{\text{iliyosalia}} + 1)}{\log_{10}(V_{\text{rasmi}} + 1)}$$

Wakati umeme umekatika bila kikokotoo cha kisayansi, hakuna haja ya kukokotoa $\log_{10}$ kwa mkono. Kwa sababu mikondo ya kilogarithimu hubaki karibu tambarare wakati siku ni nyingi na hushuka kwa kasi tarehe ya kuisha inapokaribia ($V < 90\text{ siku}$), waendeshaji wa uwandani hutumia **Itifaki Mbili Rahisi za Hesabu za Kichwani**:

### Itifaki A: Siku Halisi Zilizosalia (Kanuni ya Bidhaa Zinazokaribia Kuisha Muda)
Wakati chakula au dawa inayotolewa inakaribia tarehe yake ya mwisho ya matumizi, tumia kizidisho cha moja kwa moja kifuatacho kwenye alama yake iliyochapishwa:

| Muda wa Kuhifadhi Uliosalia ($V_{\text{iliyosalia}}$) | Kizidisho cha Alama | Njia ya Mkato ya Hesabu | Sababu ya Kiutendaji |
| :--- | :---: | :--- | :--- |
| **Zaidi ya Siku 90 (`> siku 90`)** | **`100%` (`1.00x`)** | Tumia alama kamili iliyochapishwa | Muda wa kutosha wa kuhifadhi na kuzungusha kwenye jamii (isipokuwa `< 50%` ya muda wa kiwandani; angalia Itifaki B). |
| **Siku 31 hadi 90 (`siku 31–90`)** | **`75%` (`0.75x`)** | Toa **1/4 (`-25%`)** kwenye alama iliyochapishwa | Kipaumbele cha matumizi ya muda wa kati; inalingana na $\log_{10}(61) / \log_{10}(366) \approx 0.70\text{–}0.75$. |
| **Siku 8 hadi 30 (`siku 8–30`)** | **`50%` (`0.50x`)** | **Punguza thamani nusu (`-50%`)** | **Kanuni Kuu ya Uwandani:** Kuisha muda chini ya siku 30 kunapunguza thamani ya mbadilishano nusu ($\log_{10}(31)/\log_{10}(1096) \approx 0.49$). |
| **Siku 1 hadi 7 (`siku 1–7`)** | **`25%` (`0.25x`)** | Bakiza **1/4 (`-75%`)** tu ya alama | Kwa matumizi ya papo hapo tu; haiwezi kuhifadhiwa wala kubadilishwa tena. |
| **Siku 0 / Imeharibika (`siku 0`)** | **`0%` (`0.00x`)** | **Alama 0 — Kataa Mbadilishano** | haina thamani ya mbadilishano; chakula kilichoharibika au dawa zilizokwisha muda zina hatari ya kiafya. |

### Itifaki B: Kanuni ya Uwiano wa Muda wa Kuhifadhi (Bidhaa za Muda Mrefu na Huduma Muhimu)
Kwa bidhaa za muda mrefu wa kuhifadhi (`mwaka 1 hadi 5`) ambazo bado zina zaidi ya siku 90 lakini zimepoteza sehemu kubwa ya muda wake wa awali wa kiwandani:
- **Nusu ya Muda wa Kiwandani Uliosalia (`50% ya V`):** Punguza **`~10%`** (upungufu halisi wa kilogarithimu ni `-8.9%` hadi `-9.8%`).
- **Robo ya Muda wa Kiwandani Uliosalia (`25% ya V`):** Punguza **`~20%`** (upungufu halisi wa kilogarithimu ni `-17.8%` hadi `-19.6%`).
- **Huduma Muhimu za Kibinadamu (`cat_essential_services`, Bidhaa `101–128`):** Kwa huduma za kibinadamu, `V` inawakilisha **Uimara Rasmi wa Matokeo ya Huduma (Siku)** (muda kabla ya kuhitaji matengenezo tena). Daima tumia **`100%` (`1.00x`)** ya alama iliyochapishwa kwa huduma kamili ya kiwango cha kawaida; punguza tu ikiwa pande zote mbili zimekubaliana kufanya matengenezo ya muda mfupi/dharura.

---

## 4. Mwongozo wa Marejeo wa Makundi 9 Rasmi na Miktadha ya Dharura (`MEC`)

Bidhaa na huduma 128 zilizoainishwa katika `data/items_core.js` (bidhaa halisi `100` + huduma muhimu za kibinadamu `28`) zimepangwa katika **Makundi 9 Rasmi**:

| Kitambulisho cha Kundi | Jina la Kundi | Jukumu Kuu la Kifizikia | Mabadiliko Katika Awamu za Dharura (`MEC`) |
| :--- | :--- | :--- | :--- |
| `cat_staple_foods` | **Vyakula Vikuu vya Kalori na Protini** | Kuokoa maisha kwa kalori za jumla (`kcal`), protini za mimea na mafuta ya kupikia (vipimo vya `1000 g` / `500 ml`). | Mahitaji ya juu na thabiti (`1.2x–1.35x` wakati wa mporomoko mkali; `1.0x–1.1x` wakati wa ujenzi mpya). |
| `cat_critical_nutrition` | **Lishe Maalum na ya Kimatibabu** | Vyakula visivyohitaji kupikwa (`CP = 1.0`), nyama/samaki wa makopo, maziwa ya watoto wachanga na vitamini. | Hupata nyongeza ya `1.4x` wakati wa mporomoko mkali nishati ya kupikia au maji salama yanapoadimika. |
| `cat_spices_morale` | **Madini ya Chumvi, Viungo na Bidhaa za Faraja** | Kloridi ya sodiamu (`chumvi`), sukari, asali, kahawa, chai, kakao na ethanoli iliyosafishwa. | Chumvi na sukari hutumika kama **chenji ndogondogo ya ulimwengu wote (`g`)**; bidhaa za faraja hupanda wakati wa msongo. |
| `cat_pharma_essential` | **Dawa Muhimu (WHO EML / INN / KEML)** | Antibiotiki za mwili mzima, dawa za maumivu/homa, chumvi za ORS, dawa za magonjwa sugu na minyoo. | Kizidisho cha juu zaidi cha kuokoa maisha (`2.0x–2.2x`) wakati wa mporomoko mkali na milipuko ya magonjwa. |
| `cat_trauma_hygiene` | **Huduma ya Majeraha, Dawa za Viini na Usafi** | Mikanda ya kufunga damu (tourniquets), bandeji tasa, ethanoli 70% / klorheksidini, barakoa za N95, sabuni na klorini. | Vifaa vya majeraha na usafi hupanda hadi `1.8x–2.2x` katika mporomoko mkali; hubaki `1.2x` katika ujenzi mpya. |
| `cat_water_fire_shelter` | **Usafishaji wa Maji, Moto na Makazi ya Joto** | Maji safi yaliyofungwa, vidonge vya NaDCC, vichujio vya udongo, vijiti vya kuwashia moto, gesi ya butani na maturubai. | Maji na usafishaji wake vina kizidisho cha juu zaidi cha uhai (`2.5x`) wakati wa mporomoko mkali au ukame. |
| `cat_tools_energy_comms` | **Zana za Mkono, Nishati Bila Gridi na Mawasiliano** | Visu na shoka za chuma cha kaboni, koleo, kamba za parakodi, betri za AA/AAA/18650, paneli za jua, redio za VHF/UHF. | Muhimu wakati wa mporomoko (`1.3x–1.5x`) na huongezeka zaidi (`1.6x–1.8x`) wakati wa ujenzi mpya wa kilimo na miundombinu. |
| `cat_store_of_value` | **Hifadhi ya Thamani, Madini ya Thamani na Kumbukumbu** | Fedha na dhahabu safi `.999`, mbegu za asili zisizo chotara, miwani ya kusomea na maktaba za kidijitali bila mtandao. | **Mabadiliko Makali ya Awamu:** Madini ya thamani hushuka hadi **`0.01x`** katika `acute_collapse` (huwezi kula dhahabu/fedha) na hupanda hadi **`5.00x`** katika `economic_reconstruction`. |
| `cat_essential_services` | **Huduma Muhimu za Kibinadamu, Tiba, TEHAMA Bila Mtandao na Ufundi** | Upasuaji wa majeraha, meno, ukunga, ukarabati wa maji (WASH), ufundi wa sola/mitambo, TEHAMA/vifaa vya elektroniki, mafunzo ya kiufundi na ulinzi (`Bidhaa 101–128`). | Upasuaji, ukunga, meno, maji na ulinzi hupanda katika `acute_collapse` (`hadi 2.21x`); TEHAMA bila mtandao, mafunzo, uhandisi, uhunzi, ujenzi na kilimo/mifugo huongoza katika `economic_reconstruction` (`hadi 2.32x`). |

---

## 5. Jedwali la Haraka la Chenji Ndogondogo Lililokokotolewa Awali (Safu 8, 9 na 10)

Kwa sababu **Jedwali Kuu la Thamani za Mbadilishano** lililochapishwa linaonyesha miktadha yote 3 ya dharura sambamba (**Safu 8: Msingi Halisi `1.0x`**, **Safu 9: Mporomoko Mkali** na **Safu 10: Ujenzi Mpya wa Kiuchumi**), kila kisanduku hapa chini kinatoa alama halisi kwa mpangilio wa **`Safu 8 Msingi | Safu 9 Mporomoko | Safu 10 Ujenzi`** kwa bidhaa 7 kuu za chenji:

| Bidhaa ya Marejeo ya Chenji (`id`) | `1 g / 1 ml / 1 un` (**Safu 8 \| 9 \| 10**) | `10 g / 10 ml` (**Safu 8 \| 9 \| 10**) | `50 g / 50 ml` (**Safu 8 \| 9 \| 10**) | `100 g / 100 ml` (**Safu 8 \| 9 \| 10**) | `250 g / 250 ml` (**Safu 8 \| 9 \| 10**) | `500 g / 500 ml` (**Safu 8 \| 9 \| 10**) | `1000 g / 1000 ml` (**Safu 8 \| 9 \| 10**) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Chumvi Safi Yenye Madini Joto** (`salt_sodium_chloride_iodized_1000g`) | **`39.9 \| 158.9 \| 78.1`** | `399 \| 1589 \| 781` | `1994 \| 7947 \| 3904` | `3989 \| 15893 \| 7808` | `9972 \| 39734 \| 19519` | `19943 \| 79467 \| 39039` | `39886 \| 158935 \| 78077` |
| **Sukari Nyeupe ya Fuwele** (`sugar_sucrose_crystal_1000g`) | **`5.6 \| 15.5 \| 14.4`** | `56.4 \| 155 \| 144` | `282 \| 776 \| 718` | `564 \| 1553 \| 1436` | `1411 \| 3881 \| 3590` | `2821 \| 7763 \| 7180` | `5643 \| 15525 \| 14360` |
| **Mchele Mweupe Uliokobolewa** (`rice_white_polished_raw_1000g`) | **`5.4 \| 8.8 \| 6.3`** | `54.5 \| 88.5 \| 62.6` | `272 \| 442 \| 313` | `545 \| 885 \| 626` | `1361 \| 2212 \| 1566` | `2723 \| 4425 \| 3131` | `5446 \| 8849 \| 6263` |
| **Maji Safi ya Kunywa Yaliyofungwa** (`water_potable_sealed_1000ml`) | **`5.7 \| 16.5 \| 6.5`** | `56.8 \| 165 \| 65.3` | `284 \| 823 \| 326` | `568 \| 1646 \| 653` | `1419 \| 4115 \| 1632` | `2838 \| 8229 \| 3263` | `5675 \| 16458 \| 6527` |
| **Ethanoli ya Kuua Viini 70%** (`ethanol_antiseptic_70pct_100ml`) | **`984 \| 5305 \| 1082`** | `9835 \| 53050 \| 10819` | `49175 \| 265250 \| 54093` | `98350 \| 530500 \| 108185` | `245875 \| 1326250 \| 270463` | `491750 \| 2652500 \| 540925` | `983500 \| 5305001 \| 1081850` |
| **Kidonge cha Parasetamoli 500 mg** (`paracetamol_500mg_tablet`) | **`1 un: 108151 \| 204406 \| 129781`** | `2 un: 216302 \| 408811 \| 259563` | `3 un: 324453 \| 613217 \| 389344` | `5 un: 540756 \| 1022028 \| 648907` | `10 un: 1081512 \| 2044057 \| 1297814` | — | — |
| **Kidonge cha Kusafisha Maji NaDCC 67 mg** (`water_purification_nadcc_tablet_unit`) | **`1 un: 199818 \| 863214 \| 219800`** | `2 un: 399636 \| 1726428 \| 439600` | `3 un: 599454 \| 2589642 \| 659400` | `5 un: 999090 \| 4316071 \| 1098999` | `10 un: 1998181 \| 8632141 \| 2197999` | — | — |

---

## 6. Orodha ya Ukaguzi wa Kiwango kwa Vituo vya Mbadilishano vya Jamii

1. **Kagua Usalama na Uimara wa Bidhaa Kwanza:** Usikubali kamwe mifuko isiyofungwa vizuri, makopo yenye kutu au yaliyovimba, pakiti za unga zilizolowa, au vifungashio vya dawa vilivyotoboka (`0 pts`).
2. **Thibitisha Safu Wima ya Muktadha wa Dharura (Safu 8, 9 na 10):** Hakikisha pande zote mbili zimekubaliana ni safu wima ipi kati ya 3 zinazokaa sambamba inayoongoza mbadilishano (`Safu 8: Msingi Halisi 1.0x`, `Safu 9: Mporomoko Mkali` au `Safu 10: Ujenzi Mpya wa Kiuchumi`).
3. **Kagua Tarehe za Mwisho wa Matumizi (`Hatua ya 4`):** Ikiwa bidhaa inaisha muda wake ndani ya `< siku 30`, tumia kanuni ya **`50%` (nusu ya thamani)** kabla ya kuzidisha kwa idadi.
4. **Pima Chenji Ndogondogo kwa Usahihi (`Hatua ya 3`):** Unapobadilisha zana zisizogawanyika au vifurushi vya matibabu vilivyofungwa, daima fidia salio la alama kwa kutumia bidhaa zinazogawanyika zenye mzunguko wa haraka (`chumvi`, `sukari`, `mchele`, `maji safi ya kunywa`, au vidonge kimojakimoja vya `parasetamoli`/`NaDCC`) ili kaya yoyote isipate hasara ya makadirio.
