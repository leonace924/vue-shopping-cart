export const currency = (n, curr = 'EUR', LanguageFormat = 'es') =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr,
  }).format(n);
