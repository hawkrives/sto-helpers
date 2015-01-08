"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var _ = _interopRequire(require("lodash"));

var hasGenEd = _interopRequire(require("./hasGenEd"));

var hasFOL = _interopRequire(require("./hasFOL"));

/**
 * Counts the number of occurrences of a gened in a list of courses.
 *
 * @param {Array} courses - the list of courses.
 * @param {Array} gened - the gened to look for.
 * @returns {Number} - the number of occurrences.
 */
function countGeneds(courses, gened) {
  var uniqed = _.uniq(courses, "crsid");

  if (gened === "FOL") return _(uniqed).filter(hasFOL).size();

  return _(uniqed).filter(hasGenEd(gened)).size();
}

module.exports = countGeneds;