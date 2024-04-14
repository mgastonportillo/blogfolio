// exclusive for links.ts
interface LinkText {
  en: string;
  es: string;
}

export type UsefulLink = {
  text: LinkText;
  href: string;
};

export type SupportedLocale = "en" | "es";

export type LocalizedAliases = {
  en: string[];
  es: string[];
};
