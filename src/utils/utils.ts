import type { SupportedLocale } from "../types/types";

export const formatDate = (locale: SupportedLocale, date: Date) => {
  if (locale === "en") {
    const dayMonth = date.toDateString().slice(4, 10);
    const year = date.toDateString().slice(11, 15);
    const ftDate = `${dayMonth}ᵗʰ, ${year}`;
    return ftDate;
  }

  if (locale === "es") {
    const formatter = new Intl.DateTimeFormat("es-AR", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const esDate = formatter.format(date);
    const ftDate = esDate.slice(8, 27);
    return ftDate;
  }
};
