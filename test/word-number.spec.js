'use strict';
var expect = require('chai').expect;
var wordNumber = require('../lib/word-number');

var thousand = 'One Thousand Five Hundred Ninety Five';
var billion = 'Ninety Nine Billion Five Million Six Hundred Thousand Five';
var total = 'One One One 1 Five Seventeen 1,000.';
var sentence = 'I have ' + thousand + ' things.';
var nonum = 'This does not contain a number.'

describe('word-number', function () {
  it('.getValue should return total number', function () {
    expect(wordNumber.getValue(thousand)).to.equal(1595);
    expect(wordNumber.getValue(billion)).to.equal(99005600005);
    expect(wordNumber.getValue(sentence)).to.equal(1595);
    expect(wordNumber.getValue(total)).to.equal(1026);
    expect(wordNumber.getValue(nonum)).to.be.equal(0);
  })
  it('.getNumbers should combine each number', function () {
    expect(wordNumber.getNumbers(thousand)).to.equal('1000500905');
    expect(wordNumber.getNumbers(billion)).to.equal('90900000000050000006000005');
    expect(wordNumber.getNumbers(sentence)).to.equal('1000500905');
    expect(wordNumber.getNumbers(total)).to.equal('11115171000');
    expect(wordNumber.getNumbers(nonum)).to.be.equal('');
  })
})