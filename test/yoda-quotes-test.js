const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("chai").assert;
const Helper = require('hubot-test-helper');
const helper  = new Helper("../scripts/yoda-quotes.js");


describe("Yoda Quotes", () => {

  it("Robot should be instatiate",  (done)=> {
    expect(robot).to.be.a('function');
    done();
  });

  it("Robot should listen to 'yoda quote", function (done) {
      expect(robot.hear('yoda quote').to.be(true));
      done();
  });

});
