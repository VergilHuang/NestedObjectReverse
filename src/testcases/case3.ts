import { arrayToNestedObject } from "../utils";

const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const input = arrayToNestedObject(arr);
const output = arrayToNestedObject(arr.reverse());


export default [input, output];