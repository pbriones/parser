'use strict';
var expect = require('chai').expect;
var parser = require('../');

describe('parser', function(){
  it('should have .Number exposed', function(){
    expect(parser.Number).to.be.an('object');
    expect(parser.Number).to.have.keys('getNumbers', 'getValue');
  })
  it('should have .Date exposed', function(){
    expect(parser.Date).to.be.an('object');
  })
})