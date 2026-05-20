/**
 *  Palindrome Array
Check whether array reads same forward/backward.

```js
Input: [1,2,3,2,1]
Output: true
```

---
 */

function palindromCheck(array){
   
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        if( array[left] !== array[right]){
            return false;
        }
        left++;
        right--;
    }

    return true
}

console.log(palindromCheck([1,2,3,2,1]));

