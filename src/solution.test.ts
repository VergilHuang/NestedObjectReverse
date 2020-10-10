import objectReverse from "./solution";
import case1 from "./testcases/case1";
import case2 from "./testcases/case2";
import case3 from "./testcases/case3";


test(`test1: ${JSON.stringify(case1[0])} reverse to ${JSON.stringify(case1[1])}`, () => {
    expect(objectReverse(case1[0])).toEqual(case1[1]);
})

test(`test2: ${JSON.stringify(case2[0])} reverse to ${JSON.stringify(case2[1])}`, () => {
    expect(objectReverse(case2[0])).toEqual(case2[1]);
}
)
test(`test3: ${JSON.stringify(case3[0])} reverse to ${JSON.stringify(case3[1])}`, () => {
    expect(objectReverse(case3[0])).toEqual(case3[1]);
})