"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var _ = _interopRequire(require("lodash"));

/**
 * Takes a list of schedules and finds the next id number.
 * @param {Array} schedules
 * @returns {Number} - the largest ID in the list.
 */
function calculateNextScheduleId(schedules) {
  var maxId = _(schedules).pluck("id").max();

  return maxId + 1;
}

module.exports = calculateNextScheduleId;