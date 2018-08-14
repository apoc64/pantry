import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("is a pantry", () => {
      expect(pantry instanceof Pantry).to.equal(true)
    })

    it("has stock", () => {
      const emptyObject = {}
      expect(pantry.stock).to.deep.equal(emptyObject)
    })
    //
    it("can check stock", () => {
      expect(pantry.stockCheck("Cheese")).to.equal(0)
    })
    //
    // pantry.restock("Cheese", 10)
    //
    // pantry.stock
    // // => { "Cheese": 10 }
    //
    // pantry.stockCheck("Cheese")
    // // => 10
    //
    // pantry.restock("Cheese", 20)
    // pantry.stockCheck("Cheese")
    // // => 30
  })
})
