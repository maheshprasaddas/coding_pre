/*
Q3. Find Second Largest
Return second largest element without sorting.

```js
Input: [10, 5, 8, 20]
Output: 10
```
 */

const findSecondLarg = (array)=>{
    let firstLarge = 0;
    let secondLarg = 0;
    for (let i = 0; i < array.length; i++) {
       if(array[i] > firstLarge){
        secondLarg = firstLarge;
        firstLarge = array[i];
       }
       else{
        if (array[i] < firstLarge && array[i] > secondLarg) {
            secondLarg = array[i];
        }
       }
    }

    return secondLarg;
}

console.log(findSecondLarg([10, 5, 8, 20, 15]));
