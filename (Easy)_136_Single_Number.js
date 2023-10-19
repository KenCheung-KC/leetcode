/**
 * @param {number[]} nums
 * @return {number}
 */

// bit operation - XOR
/*
    truth table
    00 - 0
    01 - 1
    10 - 1
    11 - 0
*/

var singleNumber = function(nums) {
    let result = 0
    for(let i=0; i<nums.length; i++) {
        result = result ^ nums[i]
    }

    return result
};