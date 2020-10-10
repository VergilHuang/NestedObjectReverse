```
let inputValue = {
    hired: {
        be: {
            to: {
                deserve: 'I'
            }
        },
    }
};
// Output:
let outputValue = {
    I: {
        deserve: {
            to: {
                be: 'hired'
            }
        }
    }
};
```


### Premise
InputValue always be a single-chain structure,
and last property always string.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

solution.test.ts combined three test cases, including a long chain test.
