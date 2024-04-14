import type { SupportedLocale, LocalizedAliases } from "../types/types";

export const userAliasesByLocale: LocalizedAliases = {
  en: ["sojourner", "traveller", "stargazer", "space cowboy"],
  es: ["jinete espacial", "navegante", "viajante"],
};

export const getRandomUserAliasByLocale = (locale: SupportedLocale): string => {
  const aliases = userAliasesByLocale[locale];
  const randomAlias = aliases[Math.floor(Math.random() * aliases.length)];
  return randomAlias;
};
