/*
Return sum of positive elements only.

```js
Input: [-2, 5, 3, -1]
Output: 8
```
 */

function findSumOfPositive(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
        
    }
    return sum;
}

console.log(findSumOfPositive([-2, 5, 3, -1,0,18]));
