/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 1
var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] == nums[j]) {
                return true
            }
        }
    }

    return false
};

// Solution 2
var containsDuplicate = function(nums) {
    const hash_map = {}

    for(let i=0; i<nums.length; i++) {
        const elem = nums[i]
        if(hash_map[elem] == undefined) {
            hash_map[elem] = elem
        } else {
            return true
        }
    }

    return false
};