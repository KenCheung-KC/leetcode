var majorityElement = function(nums) {
    const hashTable = {}

    for(let i=0; i<nums.length; i++) {
        const currentItem = nums[i]
        if(hashTable.hasOwnProperty(currentItem)) {
            hashTable[currentItem] += 1
            continue;      
        }
        hashTable[currentItem] = 1
    }

    var majorityAmount = 0
    var majorityKey = 0

    for(const key in hashTable) {
        const amount = hashTable[key]
        if(amount > majorityAmount) {
            majorityKey = key
            majorityAmount = amount
        }
    }
    
    return majorityKey
};


const nums = [3, 2, 3]
majorityElement(nums)