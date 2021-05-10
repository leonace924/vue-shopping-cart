export const currency = (n, curr = 'EUR', LanguageFormat = 'es') =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr,
    minimumFractionDigits: 0,
  }).format(n);
