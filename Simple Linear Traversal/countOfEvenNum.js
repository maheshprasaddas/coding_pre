/*
Q2. Count Even Numbers
Return count of even numbers.

```js
Input: [1,2,3,4,5,6]
Output: 3
```
 */

function countEven(array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 == 0) {
            count++;
        }
    }

    return count;
}

console.log(countEven([1,2,3,4,5,6]));
