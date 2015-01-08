"use strict";

/**
 * Takes a year and expands it.
 * eg. {in: 2012, out: 2012-13}
 *
 * @param {Number} year
 * @returns {String}
 */
function expandYear(year) {
  var thisYear = String(year);
  var nextYear = parseInt(year, 10);
  return "" + thisYear + "—" + (nextYear + 1);
}

module.exports = expandYear;