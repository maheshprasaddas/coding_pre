/**
 * Reverse Words
Reverse array of words.

```js
Input: ["I","love","JS"]
Output: ["JS","love","I"]
 */

function reversWords(array){
    let left = 0, right = array.length-1;
    while (left < right) {
        [array[left],array[right]] = [array[right],array[left]]
        left++;
        right--;
    }
    return array
}

console.log(reversWords(["I","love","JS"]));
