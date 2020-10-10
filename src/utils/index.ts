export const arrayToNestedObject = (inputArray: string[]) => {
    const jsonString = inputArray.reduce((acc, cur, index, array) => {
        if (index === 0) {
            acc = `{"${cur}"`;
        }
        else if (index === array.length - 1) {
            acc = `${acc}:"${cur}"`;
            Array(index).fill(null).forEach(() => {
                acc += "}"
            })
        }
        else {
            acc = `${acc}:{"${cur}"`
        }
        return acc
    }, '')

    return JSON.parse(jsonString);
}