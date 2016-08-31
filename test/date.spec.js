'use strict';
var expect = require('chai').expect;
var date = require('../lib/date');

describe('date', function () {
  it('.getDate should return dates of format mm/dd/yyyy', function () {
    expect(date.getDate('It is 08-04/2016')).to.equal('08/04/2016');
    expect(date.getDate('It is 08-04/2016')).to.equal('08/04/2016');
    expect(date.getDate('It is August 4, 2016')).to.equal('08/04/2016');
    expect(date.getDate('It is August four nineteen ninety')).to.equal('08/04/1990');
    expect(date.getDate('There is no date here')).to.equal('');
    expect(date.getDate('There is no date here but 12345678')).to.equal('');
    expect(date.getDate('There is no date here but 12345678 12312312 12313')).to.equal('');
  })
})