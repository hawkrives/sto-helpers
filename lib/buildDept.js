"use strict";

/**
 * Builds a department string from a course.
 *
 * @param {Course} course
 * @returns {String}
 */

function buildDept(course) {
  return course.depts.join("/");
}

module.exports = buildDept;