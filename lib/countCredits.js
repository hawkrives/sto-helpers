"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var _ = _interopRequire(require("lodash"));

var add = _interopRequire(require("./add"));




/**
 * Counts credits in a list of courses.
 * @param {Array} courses
 * @returns {Number} - the sum of the credits.
 */
function countCredits(courses) {
  return _(courses).compact().pluck("credits").reduce(add, 0);
}

module.exports = countCredits;