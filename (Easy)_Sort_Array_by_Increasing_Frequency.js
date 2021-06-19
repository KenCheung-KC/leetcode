/*
Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
*/
var transformHashTableToArray = function(hashTable) {
    const array = []
    for(const item in hashTable) {
        array.push([item, hashTable[item]])
    }
    return array
}

var sortArrayByAmount = function(array) {
    for(let i=0; i<array.length-1; i++) {
        for(let j=0; j<array.length-i-1; j++) {
            if(array[j][1] > array[j+1][1]) {
                const temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
        }
    }
}

const sortArrayByValue = (array) => {
    for(let i=0; i<array.length-1; i++) {
        for(let j=0; j<array.length-i-1; j++) {
            if(parseInt(array[j][0]) < parseInt(array[j+1][0]) && array[j][1] === array[j+1][1]) {
                const temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
        }
    }
}

const generateArray = (array) => {
    const result = []
        for(let i=0; i<array.length; i++) {
            for(let j=0; j<array[i][1]; j++) {
                result.push(array[i][0])
            }
        }
    return result
}

var frequencySort = function(nums) {    
    const hashTable = {}
        for(let i=0; i<nums.length; i++) {
            const currentItem = nums[i]
            if(hashTable.hasOwnProperty(currentItem)) {
                hashTable[currentItem] += 1
                continue;
            }
            hashTable[currentItem] = 1
        }
    const array = transformHashTableToArray(hashTable)
    sortArrayByAmount(array)
    sortArrayByValue(array)
    const result = generateArray(array)
    return result
};

const nums = [8,-8,2,-8,-5,-3]
frequencySort(nums)


/* {
  -1: 1,
  1: 3,
  -6: 2,
  4: 2,
  5: 1,
}

sort two times
[[-1, 1], [1, 3], [-6, 2], [4, 2], [5, 1]]
[[-1, 1], [5, 1], [-6, 2], [4, 2], [1, 3]]
[[5, 1], [-1, 1], [4, 2], [-6, 2], [1, 3]]
[5, -1, 4, 4, -6, -6, 1, 1, 1]
 */