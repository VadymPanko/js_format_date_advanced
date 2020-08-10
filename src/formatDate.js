'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */

function formatDate(date, fromFormat, toFormat) {
  const dateArray = date.split(fromFormat[3]);
  const dateNew = [];
  let year, month, day;

  for (let i = 0; i < fromFormat.length - 1; i++) {
    switch (fromFormat[i]) {
      case 'YYYY':
      case 'YY':
        year = dateArray[i];
        break;

      case 'DD':
        day = dateArray[i];
        break;

      case 'MM':
        month = dateArray[i];
    }
  }

  for (let i = 0; i < fromFormat.length; i++) {
    for (let n = 0; n < toFormat.length; n++) {
      if (fromFormat[i] === 'YYYY' && toFormat[n] === 'YY') {
        year = year.split('').splice(2, 2).join('');
      }

      if (fromFormat[i] === 'YY' && toFormat[n] === 'YYYY') {
        if (year > 21) {
          year = `19${year}`;
        } else if (year < 22) {
          year = `20${year}`;
        }
      }
    }
  }

  for (let i = 0; i < dateArray.length; i++) {
    switch (toFormat[i]) {
      case 'YYYY':
      case 'YY':
        dateNew.push(year);
        break;

      case 'DD':
        dateNew.push(day);
        break;

      case 'MM':
        dateNew.push(month);
    }
  }

  return dateNew.join(toFormat[3]);
}

module.exports = formatDate;
