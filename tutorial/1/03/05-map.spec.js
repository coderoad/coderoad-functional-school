var expect = require('chai').expect;

describe('05 function getGrade', function() {

  it('doesn\'t exist', function() {
    expect(getGrade).to.not.be.undefined;
  });

  it('should be a function', function() {
    expect(getGrade).to.be.a('function');
  });

  it('should take a parameter', function() {
    expect(getGrade).to.have.length(1);
  });
});

describe('05 var myFixed', function() {

  it('doesn\'t exist', function() {
    expect(myFixed).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(myFixed).to.be.an('array');
  });

  it('doesn\'t have 10 items', function() {
    expect(myFixed).to.have.length(10);
  });

  it('doesn\'t update grades correctly', function() {
    expect(myFixed).to.deep.equal([{
      "title": "Relational Databases",
      "instructor": "Sean Quentin Lewis",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "title": "3D Computer Graphics",
      "instructor": "G.L. Webb",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "title": "Front End Web Development",
      "instructor": "Moe Zaick",
      "name": "Ada Lovelace",
      "score": 73,
      "grade": "C"
    }, {
      "title": "Web Security",
      "instructor": "Sue Denim",
      "name": "Ada Lovelace",
      "score": 93,
      "grade": "A"
    }, {
      "title": "Javascript Fundamentals",
      "instructor": "Jay Kweerie",
      "name": "Ada Lovelace",
      "score": 85,
      "grade": "B"
    }, {
      "title": "Data Science",
      "instructor": "Ford Fulkerson",
      "name": "Ada Lovelace",
      "score": 70,
      "grade": "C"
    }, {
      "title": "Algorithm Design",
      "instructor": "Gale Shapely",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "title": "Data Abstraction",
      "instructor": "Aster Ricks",
      "name": "Ada Lovelace",
      "score": 94,
      "grade": "A"
    }, {
      "title": "Data Structures",
      "instructor": "Brodal Q.",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "title": "Networks",
      "instructor": "Van Emde Boas",
      "name": "Ada Lovelace",
      "score": 77,
      "grade": "C"
    }]);
  });

});
