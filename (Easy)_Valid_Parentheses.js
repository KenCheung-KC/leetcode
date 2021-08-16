/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const hashMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    var stack = []
    const keys = Object.keys(hashMap)
    for(let i=0; i<s.length; i++) {
        const currentChar = s[i]
        if(keys.includes(currentChar)) {
           if(stack.length>0 && stack[stack.length-1] == hashMap[currentChar]) {
              stack.pop();
           } else {
               return false
           }
        } else {
           stack.push(currentChar)    
        }
    }

    return stack.length == 0;
};