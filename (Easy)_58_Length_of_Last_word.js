/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    const stringLength = s.length
    let startCounting = false
    let counter = 0
    for(let i=stringLength - 1; i>=0; i--) {
        if(startCounting == true) {
            if(s[i] == ' ') {
                return counter
            }
            counter++
        }

        if(startCounting == false) {
            if(s[i] !== ' ') {
                startCounting = true
                counter++
            }
        }
    }

    return counter
};