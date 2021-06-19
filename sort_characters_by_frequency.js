var getObjectArray = function(hashTable) {
    var objArray = []
    for(const property in hashTable) {
        objArray.push([property, hashTable[property]])
    }
    return objArray
}

var sortArray = function(arr) {
    arr.sort(function(a, b) {
        return b[1] - a[1];
    })
    // no need to return the array because array is passed by reference in javascript
    // return arr 

    /* bubble sort
    for(let i=0; i<arr.length - 1; i++) {
        for(let j=0; j<arr.length - 1; j++) {
          if(arr[j][1] < arr[j+1][1]) {
            const temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
          }
        }
      }
    */
}

var frequencySort = function(s) {
    var hashTable = {}
    var result = ""

    for(let i=0; i<s.length; i++) {
        const currentChar = s[i]
        if(hashTable.hasOwnProperty(currentChar)) {
            hashTable[currentChar] += 1
            continue;
        }
        hashTable[currentChar] = 1
    }
    var array = getObjectArray(hashTable)
    const sortedArray = sortArray(array)
    var result = ""
    for(let k=0; k<sortedArray.length; k++) {
        const iterationTime = sortedArray[k][1]
        for(let t=0; t<iterationTime; t++) {
            result += sortedArray[k][0]
        }
    }

    return result
};
const s = "leetcode"

console.log(frequencySort(s))