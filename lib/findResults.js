"use strict";

var chain = require("lodash").chain;
var isArray = require("lodash").isArray;
var isObject = require("lodash").isObject;
var isBoolean = require("lodash").isBoolean;
var isUndefined = require("lodash").isUndefined;


function findResults(obj) {
  if (isArray(obj)) {
    return chain(obj).map(function (val) {
      return findResults(val);
    }).flatten().reject(isUndefined).value();
  } else if (isObject(obj)) {
    return chain(obj).map(function (val, key, coll) {
      if (key === "result" && !coll.hasOwnProperty("details")) {
        return val;
      } else if (key !== "matches") {
        return findResults(val);
      }
    }).flatten().reject(isUndefined).value();
  } else if (isBoolean(obj)) {
    return obj // not an obj, don't process me
    ;
  }
}

module.exports = findResults;