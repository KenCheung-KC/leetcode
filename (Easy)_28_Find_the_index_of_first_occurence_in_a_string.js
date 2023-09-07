/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length == 1) {
        return 0
    }

    const needleLen = needle.length

    for(let i=0; i<= haystack.length - needleLen; i++) {
        if(haystack.substring(i, needleLen+i) == needle) {
            return i
        }
    }

    return -1
};