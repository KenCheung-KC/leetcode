/**
 * @param {number} n
 * @return {number}
 */

// Solution - memorization, normal recursive approach takes too much time when n becomes bigger

let memo = []

var climbStairs = function(n) {
    if (n < 2) {
        return 1
    }

    if(memo[n]) {
        return memo[n]
    } else {
        memo[n] = climbStairs(n-1) + climbStairs(n-2)
    }
    return memo[n]
};
