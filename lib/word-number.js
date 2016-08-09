'use strict';
var numbers = require('./numbers');
var util = require('./util');
var WordsToNumber = {
  getNumbers: (text) => {
    text = util.remove(text, ',');
    var words = text.toLowerCase().split(' ');
    var result = '';
    while (words.length) {
      var word = words.shift().trim();
      var number;
      if (util.isNumber(word)) {
        number = Number(word);
      }
      else {
        number = String(numbers[word] || '');
        if (number.length > 2) {
          number = number.slice(1);
        }
      }
      result += number;
    }
    return result;
  },

  getValue: (text) => {
    text = util.remove(text, ',');
    var words = text.toLowerCase().replace(/(thousand|[mb]illion),?/g, '$1,');
    var result = 0;
    var numberArray = words.split(/,/);
    var sub = 0;
    var temp;
    var segment;
    while (numberArray.length) {
      sub = 0;
      segment = numberArray.shift().match(/([a-z]|\d)+/g) || [];
      segment.forEach(function (word) {
        word = word.trim();
        var temp;
        if (util.isNumber(word)) {
          temp = Number(word);
          sub += temp;
        }
        else {
          temp = numbers[word];
          if (isFinite(temp)) {
            if (temp < 100) sub += temp;
            else sub *= temp;
          }
        }

      });
      result += sub;
    }
    return result;
  }
}

module.exports = WordsToNumber;