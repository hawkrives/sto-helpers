"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var size = require("lodash").size;
var getDepartments = _interopRequire(require("./getDepartments"));

/**
 * Checks if a set of courses spans multiple departments.
 *
 * @param {Array} courses - the list of courses.
 * @returns {Boolean}
 */
function acrossAtLeastTwoDepartments(courses) {
  var depts = getDepartments(courses);

  return size(depts) >= 2;
}

module.exports = acrossAtLeastTwoDepartments;