"use strict";

var isArray = require("lodash").isArray;
var isObject = require("lodash").isObject;
var merge = require("lodash").merge;


function concatAndMerge(a, b) {
  if (isArray(a)) return a.concat(b);else if (isObject(a)) return merge(a, b, concatAndMerge);

  return b;
}

module.exports = concatAndMerge;