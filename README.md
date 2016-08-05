#string-parser

Needed to parse numbers and other things

Installation
----------
```
npm install string-parser
```
Number
---------
```
var numberParser = require('string-parser').Number;
var text = 'ten thousand five hundred'
number.getValue(text) //1500
number.getNumbers(text) //'10000500'
```