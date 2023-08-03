/**
 * Function to format the given value to a currency
 *
 * @param {number} value - The value to format
 * @param {string} currency - The code corresponding to the targetted currency
 * @param {string} locale - The local code which will be used to format the date
 *
 * @returns {string} formmattedCurrency
 */
export function formatCurrency(value: number, currency: string, locale: string = 'fr-FR'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value);
}
