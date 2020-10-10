import { arrayToNestedObject } from "."

const arr = ["here", "you", "are"];
const output = {
    here: {
        you: "are"
    }
}
test(`test case generator, parse ${JSON.stringify(arr)} to output: ${JSON.stringify(output)}`, () => {

    expect(arrayToNestedObject(arr)).toEqual(output)
})
