"use strict";
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
var path = require('path');
chai.use(spies);

var loadJS = require(path.join(process.env.TUTORIAL_DIR, 'loadJS')).default;

if (!global.data) {
  let data = require(path.join(process.env.TUTORIAL_DIR, 'data', 'students.json'));
  global.data = JSON.parse(JSON.stringify(data));
}

var spy = chai.spy.on(console, 'log');
loadJS('00-setup.js');

describe('01 first', function () {

  it('should exist', function () {
    expect(first).to.be.defined;
  });

  it('should be an object', function () {
    expect(first).to.be.an('object');
  });

  it('should take have property title', function () {
    expect(first).to.have.property('title');
  });

  it('should have the correct value', function () {
    var result = {
      "title": "Relational Databases",
      "instructor": "Sean Quentin Lewis",
      "name": "Ada Lovelace",
      "score": 91,
      "grade": "A"
    };
    expect(first).to.deep.equal(result);
  });

});
