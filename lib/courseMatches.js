"use strict";

var any = require("lodash").any;
var curry = require("lodash").curry;


/**
 * Checks if a course matches any qualifiers in a list of qualifiers.
 *
 * @param {Array} coursesToMatchAgainst - the list of qualifiers.
 * @param {Object.<Course>} course - the course to check.
 * @returns {Boolean} - does the course match?
 */
var courseMatches = curry(function (coursesToMatchAgainst, course) {
  // _.any takes an array of things to evaulate as the first param,
  // and an object to check each element of said array against as the second.
  return any(coursesToMatchAgainst, course);
});

module.exports = courseMatches;