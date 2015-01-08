"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var semesterName = _interopRequire(require("./semesterName"));

var expandYear = _interopRequire(require("./expandYear"));

/**
 * Takes a term and makes it pretty.
 * eg. {in: 20121, out: Fall 2012-13}
 *
 * @param {Number} term - a term identifier.
 * @returns {String}
 */
function toPrettyTerm(term) {
  term = String(term);
  var year = term.substr(0, 4);
  var sem = parseInt(term.substr(4, 1), 10);

  return "" + semesterName(sem) + " " + expandYear(year);
}

module.exports = toPrettyTerm;