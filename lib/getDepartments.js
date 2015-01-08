"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var _ = _interopRequire(require("lodash"));

/**
 * It plucks the departments from a list of courses, and returns the uniq'd list.
 *
 * @param {Array<Course>} courses - the list of courses
 * @returns {Array<String>}
 */
function getDepartments(courses) {
  return _(courses).pluck("depts").flatten().uniq().value();
}

module.exports = getDepartments;