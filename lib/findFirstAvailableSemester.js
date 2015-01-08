"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var _ = _interopRequire(require("lodash"));

var findMissingNumberBinarySearch = _interopRequire(require("./findMissingNumberBinarySearch"));

/**
 * Takes a list of schedules and finds the first open semester.
 * If they go [1, 2, 4] findFirstAvailableSemester will
 * return 3. If it goes [1, 2, 3] findFirstAvailableSemester
 * will return 4. Etc.
 *
 * @param {Array|Immutable.List} schedules - the list of schedules
 * @param {Number} forYear - the year to look within
 * @returns {Number} - the first available semester slot
 */
function findFirstAvailableSemester(schedules, forYear) {
  var semesters = _(schedules.toJS ? schedules.toJS() : schedules).filter(function (sch) {
    return sch.year === forYear;
  }).map(function (sch) {
    return sch.semester;
  }).uniq()
  // stick a 0 at the front so findBinary will start from 1
  .unshift(0).sortBy().value();

  var missingNo = findMissingNumberBinarySearch(semesters);
  if (missingNo !== null) {
    return missingNo;
  }

  return _.max(semesters) + 1;
}

module.exports = findFirstAvailableSemester;