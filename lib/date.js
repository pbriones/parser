'use strict';
var Date = {
  getDay: (text) =>{
    return text.match(
      /(?:ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|one|two|three|four|five|six|seven|eight|nine)|(?:(?:twenty|thirty)(?:\s)(?:one|two|three|four|five|six|seven|eight|nine))/ig
    );
  },
  getMonth: (text) =>{
    return text.match(
      /(?:ten|eleven|twelve|one|two|three|four|five|six|seven|eight|nine)/ig
    );
  },
  getYear: (text) => {
    return text.match(
      /(?:twenty|nineteen|two thousand)(?:\s)(((?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?:\s)(?:one|two|three|four|five|six|seven|eight|nine))|(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)|(?:fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen))/ig
    );
  }
}

module.exports = Date;