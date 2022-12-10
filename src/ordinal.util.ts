const ENGLISH_ORDINAL_RULES = new Intl.PluralRules("en", { type: "ordinal" });
const ORDINAL_SUFFIXES: Partial<Record<Intl.LDMLPluralRule, string>> = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};
export function ordinal(number: number): string {
  const category = ENGLISH_ORDINAL_RULES.select(number);
  const suffix = ORDINAL_SUFFIXES[category];
  if (!suffix) {
    throw new Error("Missing suffix");
  }
  return number + suffix;
}
