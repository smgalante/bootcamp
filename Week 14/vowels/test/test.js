'use strict';

var disemvowel = require('../disemvowel.js');
var should = require('chai').should(); 

describe('remove', function() {
  it('should remove vowels', function() {
    disemvowel('steven').should.equal('stvn')
  })
})
//disemvowel('steven')