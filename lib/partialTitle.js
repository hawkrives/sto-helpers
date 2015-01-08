"use strict";

var curry = require("lodash").curry;
var any = require("lodash").any;
var isArray = require("lodash").isArray;
var contains = require("lodash").contains;


/**
 * Checks if a course has a string in its title property.
 *
 * @param {String} partial - the partial string.
 * @param {Course} course
 * @returns {Boolean}
 */
var partialTitle = curry(function (partial, course) {
  return contains(course.title, partial);
});


/**
 * Checks if a course has a string in its name property.
 *
 * @param {String} partial - the partial string.
 * @param {Course} course
 * @returns {Boolean}
 */
var partialName = curry(function (partial, course) {
  return contains(course.name, partial);
});


/**
 * Checks if a course has a string in either the name or title property.
 *
 * @param {String} partial - the partial string.
 * @param {Course} course
 * @returns {Boolean}
 */
var checkPartialNameOrTitle = curry(function (partial, course) {
  return any([partialTitle(partial, course), partialName(partial, course)]);
});


/**
 * Checks if a course has a string or list of strings in either the name or title property.
 *
 * @param {String|Array<String>} partial - the partial string, or an array of partial strings.
 * @param {Course} course
 * @returns {Boolean}
 */
var partialNameOrTitle = curry(function (partial, course) {
  if (isArray(partial)) return any(partial, function (p) {
    return checkPartialNameOrTitle(p, course);
  });
  return checkPartialNameOrTitle(partial, course);
});

exports.partialTitle = partialTitle;
exports.partialName = partialName;
exports.partialNameOrTitle = partialNameOrTitle;