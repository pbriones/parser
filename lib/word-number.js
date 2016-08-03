'use strict';
var numbers = require('./numbers');
var date = require('./date');
var WordsToNumber = {
  getNumbers: (text) => {
    return text.match(
      /(\b(?:(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?: +|$)))/
    );
  },
  toNumber:(text) => {
    var words= text.toLowerCase().replace(/(thousand|[mbr]illion),?/g, '$1,');
    var result= 0;
    var numberArray= words.split(/,/); 
    var sub= 0;
    var temp;
    var segment;
    while(numberArray.length){
        sub= 0;
        segment= numberArray.shift().match(/[a-z]+/g) || [];
        segment.forEach(function(w2){
            temp= numbers[w2.trim()];
            if(isFinite(temp)){
                if(temp<100) sub+= temp;
                else sub*= temp;
            }
        });
        result+= sub;
    }
    return result;
  }
}

module.exports = WordsToNumber;