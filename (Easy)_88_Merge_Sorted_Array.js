/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let last = m + n - 1
    let nums1_pointer = m - 1
    let nums2_pointer = n - 1

    while(m > 0 && n > 0) {
        if(nums1[nums1_pointer] < nums2[nums2_pointer]) {
            nums1[last] = nums2[nums2_pointer]
            nums2_pointer--
            n--
        } else {
            nums1[last] = nums1[nums1_pointer]
            nums1_pointer--
            m--
        }
        last--
    }

    while(n > 0) {
        nums1[last] = nums2[nums2_pointer]
        last--
        nums2_pointer--
        n--
    }
};
