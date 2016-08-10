const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

if (process.env.TASK_POSITION === '4') {
	myFixed = [];
}
let spy = chai.spy.on(console, 'log');

describe('01 myFixed data', () => {

  const myFixed = require('BASE/data/myFixed.js');

  it('should be loaded in "data/myFixed.js"', () => {
    expect(myFixed).to.not.be.undefined;
  });

});
