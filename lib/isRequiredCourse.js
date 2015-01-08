"use strict";

var curry = require("lodash").curry;
var find = require("lodash").find;
var contains = require("lodash").contains;
var all = require("lodash").all;


/**
 * Takes a list of required courses and checks if a course matches.
 *
 * @param {Array<Course>} requiredCourses - the required courses.
 * @param {Course} checkAgainst - the course to check.
 * @returns {Boolean} - is the course in the list.
 */
var isRequiredCourse = curry(function (requiredCourses, checkAgainst) {
  // Takes in a list of required course info, as objects that only have the
  // info needed to match.

  // Find if the current course exists in requiredCourses
  var matchedCourse = find(requiredCourses, { deptnum: checkAgainst.deptnum });

  if (!matchedCourse) {
    return false;
  }

  // Begin the array of results!
  var results = [matchedCourse ? true : false];

  if (matchedCourse.name) {
    results.push(contains(checkAgainst.name, matchedCourse.name));
  }

  if (matchedCourse.title) {
    results.push(contains(checkAgainst.title, matchedCourse.title));
  }

  // Only return true if *all* of the checks returned true.
  return all(results);
});

module.exports = isRequiredCourse;