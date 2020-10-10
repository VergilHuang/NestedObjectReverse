import { arrayToNestedObject } from "."

test(`test case generator: []`, () => {
    const arr = ["here", "you", "are"];
    const output = {
        here: {
            you: "are"
        }
    }
    expect(arrayToNestedObject(arr)).toEqual(output)
})
