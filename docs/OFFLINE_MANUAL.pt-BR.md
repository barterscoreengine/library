# BarterScore Engine (v1.1.0) — Manual de Campo Analógico para Operações em Blackout Total

> **Idioma do Manual:**
> [**English (`OFFLINE_MANUAL.md`)**](./OFFLINE_MANUAL.md) · [**Português (`OFFLINE_MANUAL.pt-BR.md`)**](./OFFLINE_MANUAL.pt-BR.md) · [**Español (`OFFLINE_MANUAL.es-ES.md`)**](./OFFLINE_MANUAL.es-ES.md) · [**简体中文 (`OFFLINE_MANUAL.zh-Hans.md`)**](./OFFLINE_MANUAL.zh-Hans.md)
>
> **Repositório Oficial:** [https://github.com/barterscoreengine/library](https://github.com/barterscoreengine/library)
> **Licença:** [Apache License 2.0](../LICENSE) · **Atribuição:** [Erisson Marques](https://github.com/erissontech) ([`NOTICE`](../NOTICE))
> **Documentação Principal:** [**Português (`README.pt-BR.md`)**](./README.pt-BR.md) · [**English (`README.md`)**](../README.md) · [**Español (`README.es-ES.md`)**](./README.es-ES.md) · [**简体中文 (`README.zh-Hans.md`)**](./README.zh-Hans.md)

---

## 1. Propósito e Doutrina de Operação em Blackout Total

Este documento é o **Manual de Operação Analógica em Campo** do **BarterScore Engine**. Ele foi projetado especificamente para **Cenários de Blackout Total** — colapsos prolongados da rede elétrica, distúrbios eletromagnéticos ou operações humanitárias em áreas isoladas onde computadores, smartphones e energia elétrica estão indisponíveis.

Para operar um posto comunitário de escambo ou gerenciar trocas domésticas utilizando este sistema, você precisa apenas de:
1. **Uma Cópia Impressa da Tabela Geral de Cotações** (gerada pelo arquivo `manual_generator.html` em formato **A4 Paisagem** de alto contraste);
2. **Uma Régua Reta** (para acompanhar a leitura horizontal das 10 colunas de cada item sem desvio visual);
3. **Uma Calculadora de Bolso (Solar/Pilha) ou Lápis e Papel** (para a aritmética de liquidação em 3 passos);
4. **Uma Balança de Cozinha Simples (resolução de `1 g`) ou Copo Graduado (`1 ml`)** (para liquidar o troco fracionário em itens divisíveis de alta liquidez, como sal refinado iodado, açúcar cristal, arroz cru ou água potável).

---

## 2. O Protocolo Analógico de Liquidação em 3 Passos

Cada item na tabela impressa de 10 colunas apresenta **simultaneamente as 3 situações de crise lado a lado**, além da **Taxa por Subunidade** (`1 g = X pts` ou `1 ml = X pts`) em cada coluna para os 47 itens divisíveis do catálogo:

> **Qual Coluna de Situação Você Deve Usar (Colunas 8, 9 e 10)?**
> - **Coluna 8 — `1. Base Pura (1,0x)`:** Pontuação física e nutricional intrínseca (`ScoreBase`) sem multiplicadores externos de crise.
> - **Coluna 9 — `2. Colapso Agudo`:** Fase de sobrevivência imediata; água potável e purificação (`até 4,32x`), antibióticos sistêmicos, controle de hemorragia e rações prontas atingem valor máximo, enquanto ouro/prata caem para `0,01x`.
> - **Coluna 10 — `3. Reconstrução`:** Retomada pós-crise; ferramentas duráveis de aço, sementes crioulas, energia solar/rádio e metais preciosos fracionados (`5,00x`) lideram a paridade.

### Passo 1: Calcule o Valor Total Ofertado (`Seus Pontos de Crédito`)
Localize o item que você está oferecendo na tabela impressa e leia o score na coluna da situação acordada (`Col 8`, `Col 9` ou `Col 10`). Multiplique a pontuação pela quantidade de unidades atômicas inteiras entregues:

$$\text{Total de Pontos Ofertados} = \text{Score}_{\text{Item Ofertado}} \times \text{Quantidade}_{\text{Ofertada}}$$

* **Se estiver oferecendo uma fração a granel de um Item Divisível (`is_divisible: true`):** Multiplique diretamente a **taxa por `1 g` ou `1 ml`** impressa naquela mesma coluna pelo peso em gramas ou volume em mililitros entregue.

### Passo 2: Localize a Pontuação do Item Solicitado
Use a régua na **mesma coluna de situação** para localizar o item que você deseja receber da contraparte e leia a pontuação unitária dele ($\text{Score}_{\text{Item Solicitado}}$), ou a taxa por `1 g / 1 ml` caso esteja solicitando um insumo divisível a granel.

### Passo 3: Divida para Determinar a Quantidade Exata a Exigir
Divida o seu **Total de Pontos Ofertados** (do Passo 1) pela **Pontuação do Item Solicitado** (do Passo 2):

$$\text{Unidades Exatas a Receber} = \frac{\text{Total de Pontos Ofertados}}{\text{Score}_{\text{Item Solicitado}}}$$

---

### Exemplo Prático Resolvido (Papel e Calculadora de Bolso — Valores 100% Auditados no Motor)
Suponha que você esteja operando na **Coluna 9 — Colapso Civil Agudo (`acute_collapse`)** e deseje trocar **50 pacotes de Leite em Pó Integral Instantâneo (`milk_powder_whole_400g`, `400 g` cada)** por **Alicate Multiferramenta Dobrável em Aço Inoxidável Temperado (`multitool_pliers_stainless_folding_unit`, `1 un`, Indivisível)**:

1. **Passo 1 (Seu Crédito):**
   - Score impresso na Coluna Colapso Agudo de `milk_powder_whole_400g` (*Leite em Pó Integral, Pacote 400 g*) = `33.564,72 pts` por pacote (`MEC 2,36x`).
   - Multiplique por `50` pacotes: $33.564,72 \times 50 = \mathbf{1.678.236,00\text{ pts}}$.
2. **Passo 2 (Valor do Item Desejado):**
   - Score impresso na Coluna Colapso Agudo de `multitool_pliers_stainless_folding_unit` (*Alicate Multiferramenta Dobrável em Aço Inox, 1 un*) = `672.683,44 pts` por unidade (`MEC 1,10x`).
3. **Passo 3 (Divisão e Liquidação com Troco Exato):**
   - Divida o Total Ofertado pelo Score do Alicate: $1.678.236,00 \div 672.683,44 = \mathbf{2,495\text{ unidades}}$.
   - Como um alicate de aço é **Indivisível (`Indivisível · 1 un`)**, não é possível fraccionar `0,495` de uma ferramenta sem destruí-la.
   - Você recebe **2 unidades inteiras do Alicate Multiferramenta** ($2 \times 672.683,44 = 1.345.366,88\text{ pts}$).
   - **Saldo de Troco Devido a Você:** $1.678.236,00 - 1.345.366,88 = \mathbf{332.869,12\text{ pts}}$.
   - Divida `332.869,12 pts` pela taxa de `1 g` do *Sal Refinado Iodado* no Colapso Agudo (`salt_sodium_chloride_iodized_1000g` = `158,935 pts/g`) para exigir **`2.094 g` de Sal Refinado Iodado** (ou divida pelo *Açúcar Cristal* `sugar_sucrose_crystal_1000g` a `15,525 pts/g` = **`21.440 g` de Açúcar Cristal**) como troco, fechando a operação com **0% de perda financeira**.

---

## 3. Regras de Desconto Manual por Validade Próxima (Cálculo Mental para Perecíveis)

No motor digital, a depreciação em tempo real pela vida útil restante é governada pelo fator logarítmico na base 10:

$$\text{Fator de Depreciação} = \frac{\log_{10}(V_{\text{restante}} + 1)}{\log_{10}(V_{\text{nominal}} + 1)}$$

Durante um blackout sem calculadora científica, não é necessário calcular logaritmos manualmente. Como a curva logarítmica é suave em prazos longos e cai de forma acentuada quando o vencimento se aproxima ($V < 90\text{ dias}$), o operador em campo utiliza dois **Protocolos de Desconto Mental**:

### Protocolo A: Dias Absolutos Restantes (Regra de Bolso para Vencimento Próximo)
Quando um alimento ou medicamento (DCB/ANVISA) ofertado estiver próximo da data de validade física, aplique diretamente o multiplicador abaixo sobre o score impresso:

| Validade Física Restante ($V_{\text{restante}}$) | Multiplicador Mental | Atalho de Matemática Mental | Justificativa Operacional e Matemática |
| :--- | :---: | :--- | :--- |
| **Mais de 90 Dias (`> 90 d`)** | **`100%` (`1,00x`)** | Use o score integral impresso | Horizonte seguro para giro de estoque comunitário (salvo se `< 50%` da validade de fábrica; ver Protocolo B). |
| **De 31 a 90 Dias (`31–90 d`)** | **`75%` (`0,75x`)** | Desconte **1/4 (`-25%`)** do score impresso | Prioridade de consumo em médio prazo; reflete a razão $\log_{10}(61) / \log_{10}(366) \approx 0,70\text{–}0,75$. |
| **De 8 a 30 Dias (`8–30 d`)** | **`50%` (`0,50x`)** | **Reduza o valor pela metade (`-50%`)** | **Regra de Ouro em Campo:** Vencimento em menos de 30 dias corta o valor de escambo pela metade ($\log_{10}(31)/\log_{10}(1096) \approx 0,49$). |
| **De 1 a 7 Dias (`1–7 d`)** | **`25%` (`0,25x`)** | Mantenha apenas **1/4 (`-75%`)** do score | Consumo emergencial imediato; inviável para estocagem ou repasse futuro. |
| **0 Dias / Vencido (`0 d`)** | **`0%` (`0,00x`)** | **0 Pontos — Recuse a Troca** | Valor de escambo nulo; alimentos deteriorados ou fármacos críticos degradados oferecem risco biológico severo. |

### Protocolo B: Regra Proporcional de Validade (Itens de Longa Duração e Serviços Essenciais)
Para itens de longa vida útil (`1 a 5 anos`) que ainda possuem mais de 90 dias restantes, mas já consumiram grande parte da validade original de fábrica:
- **Metade da Validade de Fábrica Restante (`50% de V`):** Desconte **`~10%`** (a perda logarítmica exata fica entre `-8,9%` e `-9,8%`).
- **Um Quarto da Validade de Fábrica Restante (`25% de V`):** Desconte **`~20%`** (a perda logarítmica exata fica entre `-17,8%` e `-19,6%`).
- **Serviços Humanos Essenciais (`cat_essential_services`, Itens `101–128`):** Nos serviços humanos, `V` representa a **Durabilidade Nominal do Desfecho do Serviço (Dias)** (intervalo de cobertura/recorrência). Utilize sempre **`100%` (`1,00x`)** do score impresso para serviços completos padronizados; aplique redução apenas se ambas as partes acordarem um reparo provisório/paliativo de menor durabilidade.

---

## 4. Guia de Referência das 9 Categorias Canônicas e Contextos de Crise (`MEC`)

Os 128 itens padronizados em `data/items_core.js` (`100` mercadorias físicas + `28` serviços humanos essenciais) estão estruturados em **9 Categorias Canônicas**. Ao transitar entre fases de crise, você pode utilizar a folha impressa específica daquele cenário ou aplicar mentalmente o comportamento de cada grupo:

| Slug da Categoria | Nome Oficial da Categoria (`pt-BR`) | Papel Físico e Funcional | Comportamento nas Fases de Crise (`MEC`) |
| :--- | :--- | :--- | :--- |
| `cat_staple_foods` | **Alimentos de Base, Grãos, Leguminosas e Gorduras** | Base calórica de sobrevivência (`kcal`), proteínas vegetais e lipídios de cocção (`1000 g` / `500 ml`). | Demanda elevada e constante (`1,2x–1,35x` no colapso agudo; `1,0x–1,1x` na reconstrução). |
| `cat_critical_nutrition` | **Nutrição Crítica, Prontos para Consumo e Suporte Clínico** | Rações de preparo zero (`CP = 1,0`), proteínas enlatadas, fórmula infantil e polivitamínicos. | Prêmio de `1,4x` no colapso agudo quando há escassez de combustível ou água para cozinhar. |
| `cat_spices_morale` | **Conservantes, Açúcares, Especiarias e Moral** | Cloreto de sódio (*sal iodado*), sacarose, mel, café torrado, chá, cacau e destilados. | Sal e açúcar atuam como **moeda universal de troco divisível (`g`)**; itens de moral sobem sob estresse de cerco. |
| `cat_pharma_essential` | **Fármacos Essenciais (OMS EML / DCB-ANVISA)** | Antibióticos sistêmicos, analgésicos, sais de reidratação oral (SRO), antiparasitários e uso contínuo. | Multiplicador máximo de preservação da vida (`2,0x–2,2x`) no colapso agudo e em surtos infecciosos. |
| `cat_trauma_hygiene` | **Controle de Trauma, Antissepsia, EPI e Higiene** | Torniquetes táticos, gaze estéril, álcool 70%/clorexidina, respiradores PFF2/N95, sabão e hipoclorito. | Itens de trauma e antissepsia saltam para `1,8x–2,2x` no colapso agudo; mantêm `1,2x` na recuperação. |
| `cat_water_fire_shelter` | **Água, Purificação, Fogo, Iluminação e Abrigo** | Água potável lacrada, pastilhas de NaDCC, velas filtrantes, pederneiras de ferrocério, gás butano e lonas. | Água e purificação atingem o maior multiplicador vital (`2,5x`) em colapso agudo ou seca severa. |
| `cat_tools_energy_comms` | **Ferramentas, Cordame, Energia Off-Grid e Comunicações** | Facas full-tang, alicates multiferramenta, paracord 550, pilhas IEC AA/AAA/18650, painel solar e rádio VHF/UHF. | Essenciais no colapso (`1,3x–1,5x`) e valorizam ainda mais (`1,6x–1,8x`) na reconstrução agrária e técnica. |
| `cat_store_of_value` | **Reserva de Valor, Metais de Escambo e Acervo Técnico** | Prata e ouro fracionados (`.999`), sementes crioulas de polinização aberta, óculos de leitura e arquivos offline. | **Inversão Estrita de Fase:** Metais preciosos caem para **`0,01x`** em `acute_collapse` (não são comestíveis) e saltam para **`5,00x`** em `economic_reconstruction` com a retomada cambial e agrícola. |
| `cat_essential_services` | **Serviços Humanos Essenciais, Procedimentos Clínicos, TI Off-Grid, Instrução e Mão de Obra Técnica** | Cirurgia de trauma, odontologia, obstetrícia, reparo WASH, revisão solar/mecânica, TI off-grid/microeletrônica, instrução/tradução técnica, metalurgia e vigilância (`Itens 101–128`). | Trauma, obstetrícia, odontologia, WASH e segurança saltam em `acute_collapse` (`até 2,21x`); TI off-grid, instrução técnica, engenharia elétrica/mecânica, metalurgia, construção e veterinária lideram em `economic_reconstruction` (`até 2,32x`). |

---

## 5. Tabela Pré-Calculada de Troco Fracionário nos 3 Cenários (Colunas 8, 9 e 10)

Como a **Tabela Geral de Cotações** impressa exibe os 3 cenários lado a lado (**Coluna 8: Linha de Base Pura `1,0x`**, **Coluna 9: Colapso Agudo** e **Coluna 10: Reconstrução Econômica**), todas as células da tabela abaixo trazem os pontos pré-calculados para **`Col 8 Base | Col 9 Colapso | Col 10 Reconstrução`** nos 7 itens primários de troco:

| Item Divisível / Unitário de Troco (`id`) | `1 g / 1 ml / 1 un` (**Col 8 \| 9 \| 10**) | `10 g / 10 ml` (**Col 8 \| 9 \| 10**) | `50 g / 50 ml` (**Col 8 \| 9 \| 10**) | `100 g / 100 ml` (**Col 8 \| 9 \| 10**) | `250 g / 250 ml` (**Col 8 \| 9 \| 10**) | `500 g / 500 ml` (**Col 8 \| 9 \| 10**) | `1000 g / 1000 ml` (**Col 8 \| 9 \| 10**) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Sal Refinado Iodado** (`salt_sodium_chloride_iodized_1000g`) | **`39,9 \| 158,9 \| 78,1`** | `399 \| 1589 \| 781` | `1994 \| 7947 \| 3904` | `3989 \| 15893 \| 7808` | `9972 \| 39734 \| 19519` | `19943 \| 79467 \| 39039` | `39886 \| 158935 \| 78077` |
| **Açúcar Cristal Branco** (`sugar_sucrose_crystal_1000g`) | **`5,6 \| 15,5 \| 14,4`** | `56,4 \| 155 \| 144` | `282 \| 776 \| 718` | `564 \| 1553 \| 1436` | `1411 \| 3881 \| 3590` | `2821 \| 7763 \| 7180` | `5643 \| 15525 \| 14360` |
| **Arroz Branco Polido Cru** (`rice_white_polished_raw_1000g`) | **`5,4 \| 8,8 \| 6,3`** | `54,5 \| 88,5 \| 62,6` | `272 \| 442 \| 313` | `545 \| 885 \| 626` | `1361 \| 2212 \| 1566` | `2723 \| 4425 \| 3131` | `5446 \| 8849 \| 6263` |
| **Água Potável Selada** (`water_potable_sealed_1000ml`) | **`5,7 \| 16,5 \| 6,5`** | `56,8 \| 165 \| 65,3` | `284 \| 823 \| 326` | `568 \| 1646 \| 653` | `1419 \| 4115 \| 1632` | `2838 \| 8229 \| 3263` | `5675 \| 16458 \| 6527` |
| **Álcool Etílico 70% Antisséptico** (`ethanol_antiseptic_70pct_100ml`) | **`984 \| 5305 \| 1082`** | `9835 \| 53050 \| 10819` | `49175 \| 265250 \| 54093` | `98350 \| 530500 \| 108185` | `245875 \| 1326250 \| 270463` | `491750 \| 2652500 \| 540925` | `983500 \| 5305001 \| 1081850` |
| **Paracetamol 500 mg Comprimido** (`paracetamol_500mg_tablet`) | **`1 un: 108151 \| 204406 \| 129781`** | `2 un: 216302 \| 408811 \| 259563` | `3 un: 324453 \| 613217 \| 389344` | `5 un: 540756 \| 1022028 \| 648907` | `10 un: 1081512 \| 2044057 \| 1297814` | — | — |
| **Pastilha NaDCC 67 mg (Água)** (`water_purification_nadcc_tablet_unit`) | **`1 un: 199818 \| 863214 \| 219800`** | `2 un: 399636 \| 1726428 \| 439600` | `3 un: 599454 \| 2589642 \| 659400` | `5 un: 999090 \| 4316071 \| 1098999` | `10 un: 1998181 \| 8632141 \| 2197999` | — | — |

---

## 6. Checklist Operacional Padrão para Postos Comunitários de Escambo

1. **Inspecione a Integridade Física Primeiro:** Nunca aceite embalagens a vácuo violadas, latas estufadas/enferrujadas, pós úmidos ou blísteres farmacêuticos rompidos (`0 pts`).
2. **Confirme a Coluna do Cenário de Crise (Colunas 8, 9 e 10):** Certifique-se de que ambas as partes concordaram sobre qual das 3 colunas impressas lado a lado rege a negociação (`Coluna 8: Linha de Base Pura 1,0x`, `Coluna 9: Colapso Agudo` ou `Coluna 10: Reconstrução Econômica`).
3. **Verifique a Data de Validade (`Passo 4`):** Se o item vencer em `< 30 dias`, aplique a **regra de `50%` (metade do valor)** antes de multiplicar pela quantidade.
4. **Pese o Troco Fracionário com Exatidão (`Passo 3`):** Em trocas envolvendo ferramentas ou kits indivisíveis, sempre liquide a sobra de pontos usando itens divisíveis de alta liquidez (*sal refinado iodado*, *açúcar cristal*, *arroz cru*, *água potável* ou comprimidos avulsos de *paracetamol*/*NaDCC*) para que nenhuma família sofra perda por arredondamento.

