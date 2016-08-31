'use strict';
var months = require('./months');
var numbers = require('./numbers');
var util = require('./util');

module.exports.getDate = function (text) {
    var date = util.hasShortDate(text.trim());
    if (date !== '') return date;
    text = text.toLowerCase();
    text = util.remove(text, ',');
    var words = text.split(' ');
    var value;
    while (words.length) {
      var word = words.shift().trim();
      if (util.isNumber(word)) value = word;
      else if (months[word]) value = String(months[word]);
      else value = String(numbers[word] || '');
      if (value !== '') {
        if (value.length < 2) {
          value = '0' + value;
        }
        date += value;
        if(date.lastIndexOf('/') !== 5){
          date += '/'
        }
      }

    }
    if(date.split('/').length !== 3) date = '';
    if(date.length !== 10) date = '';
    return date;
  }