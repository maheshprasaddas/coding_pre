/*
Q4. Check Array Sorted
Return true if array is sorted ascending.

```js
Input: [1,2,3,4]
Output: true
```
 */

function checkOrder(array){
    let result = "";
    for(let i = 0; i < array.length-1; i++){
        if (array[i] <= array [i+1]) {
            result = true;
        }
        else{
            result = false;
            break;
        }
    }
    return result
}

console.log(checkOrder([1,2,2,3,4]));
