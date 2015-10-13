var getISOYear = require('./get_iso_year')
var setISOYear = require('./set_iso_year')

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of ISO week-numbering years to be added
 * @returns {Date} new date with the ISO week-numbering years added
 */
var addISOYears = function(dirtyDate, amount) {
  return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount)
}

module.exports = addISOYears
