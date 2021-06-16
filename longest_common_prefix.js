var longestCommonPrefix = function(strs) {
    var result = ""
    var isCommonChar = true

    for(let i=0; i<strs[0].length; i++) {
        const char = strs[0][i]
        for(let j=0; j<strs.length; j++) {
            if (strs[j][i] !== char) {
                isCommonChar = false
                break;
            }
        }
        if(isCommonChar) {
            result += char
        }
    }

    return result
};

var strs = ["flower","flow","flight"]

console.log('result: ', longestCommonPrefix(strs))