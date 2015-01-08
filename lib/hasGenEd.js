"use strict";

var curry = require("lodash").curry;
var contains = require("lodash").contains;


/**
 * Checks if a course has a gened.
 *
 * @param {String} gened
 * @param {Course} course
 * @returns {Boolean}
 */
var hasGenEd = curry(function (gened, course) {
  return contains(course.gereqs, gened);
});

module.exports = hasGenEd;