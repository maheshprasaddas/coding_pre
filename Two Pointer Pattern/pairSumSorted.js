/**
 * Pair Sum Sorted
Find if pair exists with target sum.

```js
Input: [1,2,3,4,6], target=6
Output: true
```
 */


function findPaire(array,target){
    let paires = [];
    
    let left = 0;
    let right = array.length -1;

    while (left < right) {
    //     if(array[left]+array[right] == target){
    //         paires.push([array[left],array[right]]);
    //     }
    //     if(array[left] !== array[right]){
    //             right--;
    //     }else{
    //         left++;
    //         right = array.length -1;
    //     }
    // }
    // return paires

    let sum = array[left]+array[right];
    if(sum == target){
        paires.push(array[left], array[right]);
        left++;
        right--;
    }
    else if(sum > target){
        right--;
    }else if(sum < target){
        left++;
    }
    }
    return paires;
}

console.log(findPaire([1,2,3,4,6],6));
