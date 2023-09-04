/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sHashTable = {}
    const tHashTable = {}

    if(s.length != t.length) {
        return false
    }

    for(let i=0; i<s.length; i++) {
        const currentElem = s[i]
        if(sHashTable[currentElem] == undefined) {
            sHashTable[currentElem] = 1
        } else {
            let numbersOfLetter = sHashTable[currentElem]
            numbersOfLetter += 1
            sHashTable[currentElem] = numbersOfLetter
        }
    }

    for(let i=0; i<s.length; i++) {
        const currentElem = t[i]
        if(tHashTable[currentElem] == undefined) {
            tHashTable[currentElem] = 1
        } else {
            let numbersOfLetter = tHashTable[currentElem]
            numbersOfLetter += 1
            tHashTable[currentElem] = numbersOfLetter
        }
    }

    keys = Object.keys(sHashTable)
    for(const key of keys) {
        if(sHashTable[key] != tHashTable[key]) {
            return false
        }
    }

    return true
};