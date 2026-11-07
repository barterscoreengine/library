/**
 * @fileoverview Official TypeScript Type Declarations for BarterScore Engine (@barterscoreengine/library)
 * @author Erisson Marques (https://github.com/erissontech)
 * @license Apache-2.0
 * @version 1.0.0
 */

export type CategorySlug =
  | 'cat_staple_foods'
  | 'cat_critical_nutrition'
  | 'cat_spices_morale'
  | 'cat_pharma_essential'
  | 'cat_trauma_hygiene'
  | 'cat_water_fire_shelter'
  | 'cat_tools_energy_comms'
  | 'cat_store_of_value';

export type UnitMeasure = 'g' | 'ml' | 'un';

export type CrisisScenarioId = 'baseline' | 'acute_collapse' | 'economic_reconstruction' | (string & {});

export type SupportedLocaleCode = 'en-US' | 'pt-BR' | 'es-ES' | 'zh-Hans' | (string & {});

export interface NutritionProperties {
  pct_kcal_protein: number;
  pct_kcal_fat: number;
  pct_kcal_added_sugar: number;
  high_vit_c: boolean;
  high_sodium_potassium: boolean;
  high_calcium_iron: boolean;
}

export interface BarterItem extends NutritionProperties {
  id: string;
  category: CategorySlug;
  is_food: boolean;
  is_divisible: boolean;
  sub_units: number;
  unit_measure: UnitMeasure;
  energy_or_utility_base: number;
  weight_kg: number;
  volume_liters: number;
  lifecycle_units: number;
  cost_of_prep: number;
  psychological_factor: number;
  fragility_index: number;
  nutrition?: NutritionProperties;
  tags: string[];
}

export interface NutritionalIndexBreakdown {
  nutritional_index: number;
  macro_factor: number;
  micro_factor: number;
  unclamped_value: number;
  is_food: boolean;
}

export interface ContextModifierBreakdown {
  context_modifier: number;
  scenario_id: string;
  category_multiplier: number;
  tag_multiplier: number;
  applied_tags: Array<{ tag: string; multiplier: number }>;
}

export interface EvaluationOptions {
  current_lifecycle_remaining?: number;
  scenario?: CrisisScenarioId;
  crisisPhase?: CrisisScenarioId;
  contextModifiers?: Record<string, number>;
}

export interface EvaluationReport {
  item_id: string;
  category: CategorySlug;
  scenario_id: string;
  nutritional_index: number;
  nutritional_breakdown: NutritionalIndexBreakdown;
  base_score: number;
  context_modifier: number;
  context_breakdown: ContextModifierBreakdown;
  final_score: number;
  lifecycle_nominal: number;
  lifecycle_effective: number;
  depreciation_pct: number;
  is_expired: boolean;
}

export interface CatalogScenarioSnapshot {
  final_score: number;
  context_modifier: number;
  sub_unit_score: number | null;
}

export interface EvaluatedCatalogEntry {
  id: string;
  category: CategorySlug;
  category_name: string;
  name: string;
  description: string;
  is_food: boolean;
  is_divisible: boolean;
  sub_units: number;
  unit_measure: UnitMeasure;
  energy_or_utility_base: number;
  weight_kg: number;
  volume_liters: number;
  lifecycle_units: number;
  cost_of_prep: number;
  psychological_factor: number;
  fragility_index: number;
  nutritional_index: number;
  base_score: number;
  active_scenario: string;
  final_score: number;
  context_modifier: number;
  sub_unit_score: number | null;
  scenarios: {
    baseline: CatalogScenarioSnapshot;
    acute_collapse: CatalogScenarioSnapshot;
    economic_reconstruction: CatalogScenarioSnapshot;
  };
}

export interface TradeOptions {
  scenario?: CrisisScenarioId;
  crisisPhase?: CrisisScenarioId;
  locale?: SupportedLocaleCode;
  localizeWarnings?: boolean;
  offerRemainingDays?: number;
  offer_lifecycle_remaining?: number;
  current_lifecycle_remaining?: number;
  requestRemainingDays?: number;
  request_lifecycle_remaining?: number;
  contextModifiers?: Record<string, number>;
}

export interface TradeImbalanceReport {
  has_imbalance: boolean;
  is_target_indivisible?: boolean;
  exact_quantity?: number;
  rounded_quantity?: number;
  value_delta_points: number;
  imbalance_percentage: number;
  imbalance_direction: 'balanced' | 'surplus' | 'deficit';
  severity: 'none' | 'low' | 'moderate' | 'high';
  message: string;
}

export interface TradeSimulationResult {
  is_executable: boolean;
  reason?: string;
  scenario_id: string;
  exchangeRate: number;
  exactUnitsPossible: number;
  recommendedUnits: number;
  tradeImbalanceWarning: string | null;
  exchange_rate_1_to_x: number;
  offer: {
    item_id: string;
    is_divisible?: boolean;
    requested_input_quantity?: number;
    quantity: number;
    sub_units_total?: number;
    unit_measure?: UnitMeasure;
    unit_score: number;
    total_score: number;
    lifecycle_effective?: number;
    depreciation_pct?: number;
  };
  request: {
    item_id: string;
    is_divisible?: boolean;
    exact_quantity: number;
    recommended_quantity: number;
    recommended_sub_units?: number;
    unit_measure?: UnitMeasure;
    unit_score: number;
    executed_total_score?: number;
    lifecycle_effective?: number;
    depreciation_pct?: number;
  };
  trade_imbalance: TradeImbalanceReport;
}

export interface ChangeOptionEntry {
  item_id: string;
  category: CategorySlug;
  is_divisible: boolean;
  is_primary_currency: boolean;
  unit_measure: UnitMeasure;
  sub_units_per_pack: number;
  unit_score: number;
  exact_units: number;
  recommended_units: number;
  recommended_sub_units: number;
  settled_score: number;
  residual_pct: number;
}

export interface ChangeOptionsReport {
  delta_points: number;
  primary_options: ChangeOptionEntry[];
  all_viable_options: ChangeOptionEntry[];
  divisible_count: number;
  indivisible_unit_count: number;
}

export interface BarterEngineConstructorOptions {
  items?: BarterItem[];
  locales?: Record<string, LocaleDictionary>;
  locale?: SupportedLocaleCode;
  activeLocale?: SupportedLocaleCode;
  crisisPhase?: CrisisScenarioId;
  scenario?: CrisisScenarioId;
}

export interface RegisterCustomItemsOptions {
  mode?: 'merge' | 'replace';
  strict?: boolean;
}

export interface RegisterCustomItemsReport {
  success: boolean;
  mode: 'merge' | 'replace';
  registered_count: number;
  total_registry_size: number;
  validation_errors: string[];
}

export declare class BarterEngine {
  static readonly VERSION: string;
  static readonly MATH_CONSTANTS: Readonly<Record<string, number | string>>;
  static readonly DEFAULT_CONTEXT_SCENARIOS: Readonly<Record<string, unknown>>;

  constructor(options?: BarterEngineConstructorOptions);

  evaluateItem(itemOrId: BarterItem | string, options?: EvaluationOptions): EvaluationReport;
  evaluateCatalog(options?: {
    category?: CategorySlug;
    locale?: SupportedLocaleCode;
    scenario?: CrisisScenarioId;
    contextModifiers?: Record<string, number>;
  }): EvaluatedCatalogEntry[];
  calculateTrade(
    offerItemOrId: BarterItem | string,
    offerQuantity: number,
    requestItemOrId: BarterItem | string,
    options?: TradeOptions
  ): TradeSimulationResult;
  calculateChangeOptions(deltaPoints: number, options?: EvaluationOptions): ChangeOptionsReport;
  registerCustomItems(customItems: BarterItem[], options?: RegisterCustomItemsOptions): RegisterCustomItemsReport;
  registerLocale(localeCode: string, dictionary: LocaleDictionary): boolean;
  registerContextScenario(scenarioId: string, config: Record<string, unknown>): boolean;
  setLocale(localeCode: SupportedLocaleCode): string;
  getLocale(): string;
  setCrisisPhase(phaseId: CrisisScenarioId): string;
  getCrisisPhase(): string;
  translate(slug: string, field?: 'name' | 'description', localeCode?: SupportedLocaleCode): string;
  getItemById(itemId: string): BarterItem | null;
  getItems(category?: CategorySlug): BarterItem[];
  getAvailableScenarios(): string[];
  calculateNutritionalIndex(item: BarterItem): number;
  calculateNutritionalIndexDetailed(item: BarterItem): NutritionalIndexBreakdown;
  calculateBaseScore(item: BarterItem, options?: { current_lifecycle_remaining?: number }): number;
  calculateContextModifier(item: BarterItem, scenarioOrOptions?: CrisisScenarioId | EvaluationOptions): number;
  calculateContextModifierDetailed(
    item: BarterItem,
    scenarioOrOptions?: CrisisScenarioId | EvaluationOptions
  ): ContextModifierBreakdown;

  static clamp(value: number, min: number, max: number): number;
  static calculateNutritionalIndex(item: BarterItem): number;
  static calculateNutritionalIndexDetailed(item: BarterItem): NutritionalIndexBreakdown;
  static calculateBaseScore(item: BarterItem, options?: { current_lifecycle_remaining?: number }): number;
  static calculateContextModifier(item: BarterItem, scenarioOrOptions?: CrisisScenarioId | EvaluationOptions): number;
  static calculateContextModifierDetailed(
    item: BarterItem,
    scenarioOrOptions?: CrisisScenarioId | EvaluationOptions
  ): ContextModifierBreakdown;
  static evaluateItem(itemOrId: BarterItem | string, options?: EvaluationOptions): EvaluationReport;
  static evaluateCatalog(options?: {
    category?: CategorySlug;
    locale?: SupportedLocaleCode;
    scenario?: CrisisScenarioId;
    contextModifiers?: Record<string, number>;
  }): EvaluatedCatalogEntry[];
  static calculateTrade(
    offerItemOrId: BarterItem | string,
    offerQuantity: number,
    requestItemOrId: BarterItem | string,
    options?: TradeOptions
  ): TradeSimulationResult;
  static calculateChangeOptions(deltaPoints: number, options?: EvaluationOptions): ChangeOptionsReport;
  static registerCustomItems(customItems: BarterItem[], options?: RegisterCustomItemsOptions): RegisterCustomItemsReport;
  static registerContextScenario(scenarioId: string, config: Record<string, unknown>): boolean;
  static registerLocale(localeCode: string, dictionary: LocaleDictionary): boolean;
  static setLocale(localeCode: SupportedLocaleCode): string;
  static getLocale(): string;
  static setCrisisPhase(phaseId: CrisisScenarioId): string;
  static getCrisisPhase(): string;
  static translate(slug: string, field?: 'name' | 'description', localeCode?: SupportedLocaleCode): string;
  static getItemById(itemId: string): BarterItem | null;
  static getItems(category?: CategorySlug): BarterItem[];
  static getAvailableScenarios(): string[];
}

export interface ValidationReport {
  is_valid: boolean;
  errors: string[];
  warnings: string[];
  item_count?: number;
}

export interface ValidatorNamespace {
  validateItem(item: unknown): ValidationReport;
  validateDataset(items: unknown[]): ValidationReport;
  validateLocale(localeCode: string, localeObj: unknown, referenceItems?: BarterItem[]): ValidationReport;
}

export interface LocaleDictionary {
  meta?: {
    locale: string;
    language_name: string;
    standard_reference?: string;
  };
  categories: Record<string, { name: string; description: string }>;
  scenarios: Record<string, { name: string; description: string }>;
  ui: Record<string, string>;
  items: Record<string, { name: string; description: string }>;
}

export interface CustomAuditSourceEntry {
  index: number;
  id: string;
  category: CategorySlug;
  source_code: string;
  baseline_note: string;
}

export interface AuditSourcesNamespace {
  REGISTRY_VERSION: string;
  LINK_ROT_PROTOCOL: Readonly<Record<string, unknown>>;
  OFFICIAL_SOURCES: Readonly<Record<string, unknown>>;
  COMPLETE_100_ITEM_TRACEABILITY_MATRIX: ReadonlyArray<Record<string, unknown>>;
  registerCustomAuditSource(entry: CustomAuditSourceEntry): CustomAuditSourceEntry;
  getCustomAuditSources(): CustomAuditSourceEntry[];
  clearCustomAuditSources(): void;
  getAuditRecordByItemId(itemId: string): Record<string, unknown> | null;
}

export declare const VERSION: string;
export declare const Validator: ValidatorNamespace;
export declare const ItemsCore: BarterItem[];
export declare const AuditSources: AuditSourcesNamespace;
export declare const Locales: Readonly<Record<'en-US' | 'pt-BR' | 'es-ES' | 'zh-Hans', LocaleDictionary>>;
