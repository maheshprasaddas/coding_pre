/**
 *  Find last occurrence of target.

```js
Input: [1,2,3,2,4], target=2
Output: 3
 */

function lastOccurrence(array, target){
    let lastOccurrence = 0;
    for (let i = array.length -1; i >= 0;  i--) {
       if (array[i] == target) {
         lastOccurrence = i;
         break
       }
    }

    return lastOccurrence;
}

console.log(lastOccurrence([1,2,3,2,4],2));
