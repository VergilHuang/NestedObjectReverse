import { arrayToNestedObject } from "../utils";

const arr = ["You", "have", "to", "hire", "me"];

const input = arrayToNestedObject(arr);
const output = arrayToNestedObject(arr.reverse())


export default [input, output];