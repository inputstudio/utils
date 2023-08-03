/**
 * Function to format date using locale parameter
 *
 * @param {string} dateString - The date to format
 * @param {string} locale - The local code which will be used to format the date
 * @param {boolean} displayTime - Boolean to display the time with the new formatted date
 * @param {boolean} inputField - Boolean to check whether the new date will be used as an input for a database (timestamps without timezone)
 *
 * @return {string} formattedDate
 */
export function formatDate(
  dateString: string,
  locale: string = 'fr-FR',
  displayTime: boolean = false,
  inputField: boolean = false
): string {
  if (!dateString) {
    throw new SyntaxError('The date string should be specified');
  }

  let date;
  let time;

  if (inputField) {
    date = new Date(dateString).toLocaleDateString('fr-FR');
    date = date.split('/').reverse().join('-');

    time = new Date(dateString).toLocaleTimeString('fr-FR');
  } else {
    date = new Date(dateString).toLocaleDateString(locale);
    time = new Date(dateString).toLocaleTimeString(locale);
  }

  let formattedDate = displayTime ? `${date} ${time}` : date;

  return formattedDate;
}
