//
// helpers.regex
//
'use strict';

RegExp.escape = function(text) {
  const regex = /[\-\[\]\{\}\(\)\*\+\?\.\,\\\^\$|#\s]/g;
  return text.replace(regex, '\\$&');
};

module.exports = RegExp;
