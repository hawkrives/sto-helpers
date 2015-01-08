"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var buildDept = _interopRequire(require("./buildDept"));

/**
 * Builds a deptnum string from a course.
 *
 * @param {Course} course
 * @returns {String}
 */
function buildDeptNum(course) {
  var includeSection = arguments[1] === undefined ? false : arguments[1];
  var dept = buildDept(course);
  var num = course.num;

  if (includeSection) {
    var sect = course.sect;
    return "" + dept + " " + num + "" + sect;
  }

  return "" + dept + " " + num;
}

module.exports = buildDeptNum;