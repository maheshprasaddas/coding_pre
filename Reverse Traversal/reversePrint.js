/** Q1. Reverse Print
Print array in reverse order.

---
 */

// Two pointers
function reverseTheObject(array){
   let left = 0;
   let right = array.length-1;

   
    while(left < right){
        [array[left],array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
    return array;
}

console.log(reverseTheObject([1,2,3,4,5,6,7,8,9,10]));
