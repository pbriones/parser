'use strict';
var months = require('./months');
var numbers = require('./numbers');
var util = require('./util');

// var Date = {
//   getShortDate: function (text) {
//     {
//       return (text.match(
//         /\d{2}(?:\-|\/|\.)\d{2}(?:\-|\/|\.)(?:\d{4}|\d{2})/g
//       )[0] || '').replace(/(?:\-|\/|\.)/g, '/');
//     }
//   },
//   getLongDate: function (text) {
//     var date = util.hasShortDate(text);
//     if (date !== '') return date;
//     text = text.toLowerCase();
//     text = util.remove(text, ',');
//     var words = text.split(' ');
//     var value;
//     while (words.length) {
//       var word = words.shift().trim();
//       if (util.isNumber(word)) value = word;
//       else if (months[word]) value = String(months[word]);
//       else value = String(numbers[word] || '');
//       if (value !== '') {
//         if (value.length < 2) {
//           value = '0' + value;
//         }
//         date += value + '/';
//       }

//     }
//     return date.slice(0, -1);
//   }
//   // getDay: (text) =>{
//   //   return text.match(
//   //     /(?:ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|one|two|three|four|five|six|seven|eight|nine)|(?:(?:twenty|thirty)(?:\s)(?:one|two|three|four|five|six|seven|eight|nine))/ig
//   //   );
//   // },
//   // getMonth: (text) =>{
//   //   return text.match(
//   //     /(?:ten|eleven|twelve|one|two|three|four|five|six|seven|eight|nine)/ig
//   //   );
//   // },
//   // getYear: (text) => {
//   //   return text.match(
//   //     /(?:twenty|nineteen|two thousand)(?:\s)(((?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?:\s)(?:one|two|three|four|five|six|seven|eight|nine))|(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)|(?:fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen))/ig
//   //   );
//   // }
// }

// module.exports = Date;

module.exports.getDate = function (text) {
    var date = util.hasShortDate(text);
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
        date += value + '/';
      }

    }
    var final = date.slice(0, -1);
    if(final.split('/').length !== 3) final = '';
    if(final.length !== 10) final = '';
    return final;
  }