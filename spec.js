const chai = require("chai")
const { assert } = chai
const sinon = require("sinon")
const timer = require("./index")

describe("#timer", () => {

  describe("when everything is alright", () => {

    before(function() {
      this.timer = timer({
        callback: sinon.stub(),
        args: [1, "second"],
        interval: 100
      })
    })

    it("should return object", function() {
      assert.isObject(this.timer)
    })

    it("callback should be called", function() {
      assert.isTrue(this.timer.callback.called)
    })

    it("args should be passed", function() {
      assert.isTrue(this.timer.callback.calledWithExactly(1, "second"))
    })

  })

})
