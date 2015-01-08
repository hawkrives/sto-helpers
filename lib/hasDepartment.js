"use strict";

var curry = require("lodash").curry;
var contains = require("lodash").contains;
var any = require("lodash").any;
var isArray = require("lodash").isArray;


var checkIfHasDepartment = function (dept, course) {
  return contains(course.depts, dept);
};

var hasDepartment = curry(function (dept, course) {
  if (isArray(dept)) return any(dept, function (d) {
    return checkIfHasDepartment(d, course);
  });
  return checkIfHasDepartment(dept, course);
});

module.exports = hasDepartment;