"use strict";

/**
 *
 * @param {Course} course
 * @param {Boolean}
 */

function onlyQuarterCreditCoursesCanBePassFail(course) {
  // NOTE: Because we can't check this (don't know p/f data), we return true
  // for everything.
  return true;
}

module.exports = onlyQuarterCreditCoursesCanBePassFail;