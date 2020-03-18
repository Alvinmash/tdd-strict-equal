const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../function')


describe('function', () => {
  describe('strictEqual', () => {
    it('returns true when given two parameters of the same type of value', () => {
      // create test data 
      const boolean = strictEqual(50, 50)
      expect(boolean).to.equal(true)
    })

    it('returns false when given two parameters of the different type of value', () => {
      //call the function with the test data 
      const boolean = strictEqual('50', 50)
      expect(boolean).to.equal(false)
    })

    it('returns false when given two parameters of the different type of value', () => {
      //make assertions about what should be true 
      const boolean = strictEqual(50, '3')
      expect(boolean).to.equal(false)
    })
  })
})








