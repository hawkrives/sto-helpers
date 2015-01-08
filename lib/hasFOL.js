"use strict";

var any = require("lodash").any;


/**
 * Checks if a course has an FOL gened.
 *
 * @param {String} gened
 * @param {Course} course
 * @returns {Boolean}
 */
var hasFOL = function (course) {
  return any(course.gereqs, function (req) {
    return req.substr(0, 3) === "FOL";
  });
};

module.exports = hasFOL;