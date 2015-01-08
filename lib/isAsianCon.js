"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var all = require("lodash").all;
var contains = require("lodash").contains;
var hasDepartment = _interopRequire(require("./hasDepartment"));

/**
 * Returns true if a course is part of the AsianCon sequence.
 *
 * @param {String} course
 * @returns {Boolean}
 */
function isAsianCon(course) {
  return all([hasDepartment("ASIAN", course), contains([210, 215, 216, 220], course.num)]);
}

module.exports = isAsianCon;
// these are the asiancon course numbers