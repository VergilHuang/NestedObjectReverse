/**
 * playground, excute 'yarn start' and watch the browser console to test the result.
 */

import { InputValueInterface } from "./interfaces";
import case1 from "./testcases/case1";
import { arrayToNestedObject } from "./utils";


function objectReverse(input: InputValueInterface) {
    let _input = input;
    let inputStruct: string[] = [];
    let outputValue: InputValueInterface = {};

    // Dismance the inputValue.
    // This is not a pure function,
    // it will calculate a array structure and change the inputStruct parameter.
    // recursiveDismance(_input, inputStruct);
    calcStruct(_input, inputStruct)

    inputStruct.reverse()

    // We have the structure of inputValue,
    // and so we can resynthesis the outputValue.
    // recursiveSynthesis(outputValue, inputStruct);

    // Also can use the funtion arrayToNestedObject from utils to rebuild the object
    outputValue = arrayToNestedObject(inputStruct);

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

console.log("input: ", JSON.stringify(case1[0]))

console.log("output: ", JSON.stringify(objectReverse(case1[0])))