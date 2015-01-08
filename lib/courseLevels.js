"use strict";

var curry = require("lodash").curry;
var filter = require("lodash").filter;



/**
 * Checks if a course is at or above a given level.
 *
 * @param {Number} level
 * @param {Object} course
 * @returns {Boolean}
 */
var coursesAtOrAboveLevel = curry(function (level, course) {
  return course.level >= level;
});


/**
 * Looks for courses at or above a given level.
 *
 * @param {Number} level
 * @param {Array} courses
 * @returns {Array} - the courses that passed the check.
 */
var onlyCoursesAtOrAboveLevel = curry(function (level, courses) {
  return filter(courses, coursesAtOrAboveLevel(level));
});


/**
 * Checks if a course is at a given level.
 *
 * @param {Number} level
 * @param {Object} course
 * @returns {Boolean}
 */
var coursesAtLevel = curry(function (level, course) {
  return course.level === level;
});


/**
 * Looks for courses at a given level.
 *
 * @param {Number} level
 * @param {Array} courses
 * @returns {Array} - the courses that passed the check.
 */
var onlyCoursesAtLevel = curry(function (level, courses) {
  return filter(courses, coursesAtLevel(level));
});


/**
 * Checks if a course is above a given level.
 *
 * @param {Number} level
 * @param {Object} course
 * @returns {Boolean}
 */
var coursesAboveNumber = curry(function (number, course) {
  return course.num > number;
});


/**
 * Looks for courses above a given level.
 *
 * @param {Number} level
 * @param {Array} courses
 * @returns {Array} - the courses that passed the check.
 */
var onlyCoursesAboveNumber = curry(function (level, courses) {
  return filter(courses, coursesAboveNumber(level));
});


exports.coursesAtOrAboveLevel = coursesAtOrAboveLevel;
exports.onlyCoursesAtOrAboveLevel = onlyCoursesAtOrAboveLevel;
exports.coursesAtLevel = coursesAtLevel;
exports.onlyCoursesAtLevel = onlyCoursesAtLevel;
exports.coursesAboveNumber = coursesAboveNumber;
exports.onlyCoursesAboveNumber = onlyCoursesAboveNumber;