"use strict";

/**
 * A function to return a random character, modified from
 * <stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript>
 *
 * @returns {String}
 */

module.exports = function () {
  return Math.random().toString(36).slice(2, 3);
};