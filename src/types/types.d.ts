interface LinkText {
  en: string;
  es: string;
}

export type Link = {
  text: LinkText;
  href: string;
};

export type SupportedLocale = "en" | "es";

export type LocalizedAliases = {
  en: string[];
  es: string[];
};
