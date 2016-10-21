const chai = require("chai")
const { assert } = chai
const sinon = require("sinon")
const timer = require("./index")

describe("#timer", () => {

  it("typeof function", () => {
    assert.isFunction(timer)
  })

})
