/**
 * Assuming the inputValue always be a single-chain structure.
 * and last property always string.
 */

import { InputValueInterface } from "./interfaces";
// import { arrayToNestedObject } from "./utils";


function objectReverse(input: InputValueInterface) {
  let _input = input;
  let inputStruct: string[] = [];
  let outputValue: InputValueInterface = {};

  // Dismance the inputValue into an structure array.
  // This is not a pure function,
  // it will calculate a array structure and change the inputStruct parameter.
  calcStruct(_input, inputStruct)

  inputStruct.reverse()

  // We have the structure of inputValue, and so we can rebuild the outputValue.
  // Also can use the funtion arrayToNestedObject from utils to rebuild the object.
  // use one of recursiveSynthesis or arrayToNestedObject, there are different ways to acheive same result.
  recursiveSynthesis(outputValue, inputStruct);
  // outputValue = arrayToNestedObject(inputStruct);

  return outputValue
}

function calcStruct(input: InputValueInterface, struct: string[]) {
  const keys = Object.keys(input)
  keys.forEach((key) => {
    struct.push(key)
    if (typeof input[key] === "object") {
      calcStruct((input[key] as InputValueInterface), struct)
    }
    else {
      struct.push((input[key] as string))
    }
  })
}

function recursiveSynthesis(outputValue: InputValueInterface, struct: string[]) {

  if (struct.length === 2) {
    outputValue[struct[0]] = struct[1];
  }
  else {
    const key = struct.shift()
    if (typeof key === "string") {
      outputValue[key] = {};
      recursiveSynthesis(outputValue[key] as InputValueInterface, struct)
    }
  }
}

export default objectReverse;