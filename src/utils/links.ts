interface Title {
  en: string,
  es: string,
}

interface Link {
  title: Title,
  href: string,
}

export const links: Link[] = [
  {
    title: { en: "The best approach to Vim", es: "La mejor manera de utilizar Vim" },
    href: "https://neovim.io",
  },
  {
    title: { en: "Polish your JavaScript toolbelt", es: "Sacale punta a tu lapiz de JavaScript" },
    href: "https://justjavascript.com",
  },
];
