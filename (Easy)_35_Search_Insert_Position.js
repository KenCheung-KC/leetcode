/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    const numsLength = nums.length
    for(let i=0; i<numsLength; i++) {
        if(i==0 && target < nums[i]) {
            return 0
        }

        if(i==numsLength - 1 && target < nums[i]) {
            return numsLength-1
        }

        if(target == nums[i]) {
            return i
        }

        if(nums[i-1] < target && nums[i] > target) {
            return i
        }
    }

    return numsLength
};
