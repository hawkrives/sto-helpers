"use strict";

var curry = require("lodash").curry;



/**
 * Checks if a schedule is in a certain year and semester.
 *
 * @param {Number} year
 * @param {Number} semester
 * @param {Schedule} schedule
 * @returns {Boolean}
 */
var isCurrentSemester = curry(function (year, semester, schedule) {
  var year = arguments[0] === undefined ? 0 : arguments[0];
  var semester = arguments[1] === undefined ? 0 : arguments[1];
  year = parseInt(year, 10);
  semester = parseInt(semester, 10);

  return schedule.year === year && schedule.semester === semester;
});


/**
 * Checks if a schedule is in a certain year.
 *
 * @param {Number} year
 * @param {Schedule} schedule
 * @returns {Boolean}
 */
var isCurrentYear = curry(function (year, schedule) {
  var year = arguments[0] === undefined ? 0 : arguments[0];
  year = parseInt(year, 10);
  return schedule.year === year;
});


exports.isCurrentYear = isCurrentYear;
exports.isCurrentSemester = isCurrentSemester;