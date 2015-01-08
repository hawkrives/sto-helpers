"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var any = require("lodash").any;
var all = require("lodash").all;
var curry = require("lodash").curry;
var isUndefined = require("lodash").isUndefined;
var hasDepartment = _interopRequire(require("./hasDepartment"));

var hasDeptNumBetween = curry(function (args, course) {
  var dept = args.dept;
  var start = args.start;
  var end = args.end;


  if (any([dept, start, end], isUndefined)) {
    return false;
  }

  return all([hasDepartment(dept, course), course.num >= start, course.num <= end]);
});

module.exports = hasDeptNumBetween;