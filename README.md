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
var number = require('string-parser').Number;
var text = 'ten thousand five hundred'
number.getValue(text) //10500
number.getNumbers(text) //'10000500'
```

Date
---------
```
var date = require('string-parser').Date;

date.getDate('It is 12/13/2016') // '12/13/2016'
date.getDate('It is December 13, 2016') // '12/13/2016'
```