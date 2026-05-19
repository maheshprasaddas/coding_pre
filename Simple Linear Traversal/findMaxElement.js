/**
Q1. Find Maximum
Given an array, return the maximum element.

```js
Input: [2, 8, 1, 9, 4]
Output: 9
```

---
 */

function findMax(array){
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return `The max is ${max}`
}

console.log(findMax([2, 8, 1, 9, 4]));