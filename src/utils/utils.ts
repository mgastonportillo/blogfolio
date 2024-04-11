export type UILocale = "en" | "es";

export const formatDate = (locale: UILocale, date: Date) => {
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
