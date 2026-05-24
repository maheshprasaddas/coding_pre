/**
Remove duplicates from sorted array in-place.
---
 */

// Modifing original
function removeDuplicate(array){
    let recoreds = {}
    for (let i = 0; i < array.length; i++) {
       if (array[i] in recoreds) {
            array.splice(i,1);
            i--;
       }else{
        recoreds[array[i]] = 1;
       }
    }
    console.log(recoreds);
    
    return array;
}

console.log(removeDuplicate([1,2,2,3,3,4,5,5,6]));

//Retuning new

function uniqueArray(array){
    let records = {};
    let result = [];
    for (let num of array) {
        if(!(num in records)){
            result.push(num);
            records[num] = 1;
        }
    }

    return result;
}

console.log(uniqueArray([1,2,2,3,3,4,5,5,6]));


