let request = require("request"),
  express = require('express'),
  app = express(),
  assert = require('assert'),
  base_url = "http://localhost:3000/",
  authService = require("../routes/auth"),
  chai = require('chai'),
expect = chai.expect;

/*describe("Server GET /", function() {
  it("returns status code 404", function(done) {
    request.get(base_url, function(error, response, body) {
      console.log(response);
      expect(response.statusCode).to.equal(404);
      //assert.equal(200, response.statusCode);
      done();
    });
  });
});*/

describe('getTokenFromHeader', function () {
  describe('should return a Token', function () {
    it('return token is 1234567893743764385FDHGGFDHFEVYSGZIJJF84', function (done) {
      let req = {
        headers: {
          authorization: "Token 1234567893743764385FDHGGFDHFEVYSGZIJJF84"
        }
      };
      expect(authService.getTokenFromHeader(req)).to.equal("1234567893743764385FDHGGFDHFEVYSGZIJJF84");
      done();
    });
  });
  describe('should return a Bearer', function () {
    it('return Bearer is fdddfuizeifzjfiehfifjo59646444czf64efc', function (done) {
      let req = {
        headers: {
          authorization: "Bearer fdddfuizeifzjfiehfifjo59646444czf64efc"
        }
      };
      expect(authService.getTokenFromHeader(req)).to.equal("fdddfuizeifzjfiehfifjo59646444czf64efc");
      done();
    });
  });
  describe('should return null', function () {
    it('return null because it is neather a bearer nor a token', function (done) {
      let req = {
        headers: {
          authorization: "Alfred skjfzeggzezeg54vzer6g4v6v"
        }
      };
      expect(authService.getTokenFromHeader(req)).to.equal(null);
      done();
    });
  });
  describe('should return null', function () {
    it('should not return a token because authorisation doesnt exist', function (done) {
      let req = {
        headers: {
        }
      };
      expect(authService.getTokenFromHeader(req)).to.equal(null);
      done();
    });
  });
});