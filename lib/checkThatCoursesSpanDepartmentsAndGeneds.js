"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var filter = require("lodash").filter;
var uniq = require("lodash").uniq;
var all = require("lodash").all;
var size = require("lodash").size;
var isUndefined = require("lodash").isUndefined;
var acrossAtLeastTwoDepartments = _interopRequire(require("./acrossAtLeastTwoDepartments"));

var countGeneds = _interopRequire(require("./countGeneds"));

var hasGenEd = _interopRequire(require("./hasGenEd"));

/**
 * Checks that a list of courses spans at least two departments, but also
 * checks to make sure that it's not one course that's spanning both.
 *
 * @param {Array.<Course>} courses - the list of courses.
 * @param {Array.<String>} geneds - The list of geneds.
 * @param {Object} options
 *   - options.courseCount defaults to 2;
 *   - options.gened is the gened we're looking for.
 * @returns {Boolean}
 */
function checkThatCoursesSpanDepartmentsAndGeneds(courses, geneds) {
  var options = arguments[2] === undefined ? {} : arguments[2];
  if (isUndefined(options.courseCount)) options.courseCount = 2;
  if (isUndefined(options.gened)) options.gened = geneds[0];

  var coursesOne = filter(courses, hasGenEd(geneds[0]));
  var coursesTwo = geneds[1] ? filter(courses, hasGenEd(geneds[1])) : [];

  var allCourses = uniq(coursesOne.concat(coursesTwo), "crsid");
  var coversTwoDepartments = acrossAtLeastTwoDepartments(allCourses);

  return all([countGeneds(courses, options.gened) >= 1, size(allCourses) >= options.courseCount, coversTwoDepartments]);
}

module.exports = checkThatCoursesSpanDepartmentsAndGeneds;