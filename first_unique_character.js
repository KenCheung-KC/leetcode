// Better version
var firstUniqChar = function(s) {
    const hashTable = {}
    var index = -1;

    for(let i=0; i<s.length; i++) {
        const currentChar = s[i]
        if(hashTable.hasOwnProperty(currentChar)) {
            hashTable[currentChar] += 1
        } else {
            hashTable[currentChar] = 1
        }
    }

    for(const property in hashTable){
        const amount = hashTable[property]
        if(amount > 1) {
            continue
        }
        if(index == -1) {
            index = s.indexOf(property)
        }
        if(index > -1 && s.indexOf(property) < index) {
            index = s.indexOf(property)
        }
    }

    return index
};

/*
My first version

var firstUniqChar = function(s) {
    var isUnique = true
    var index = -1
    var nonUniqueChar = []
    for(let i=0; i<s.length; i++) {
        const currentChar = s[i]
        isUnique = true
        if(nonUniqueChar.includes(currentChar)) {
            continue
        }
        console.log('current char: ', currentChar)
        for(let j=i+1; j<s.length; j++) {
            const newChar = s[j]
            console.log('new char: ', newChar)
            if(currentChar === newChar) {
                isUnique = false
                nonUniqueChar.push(currentChar)
                break;
            }
        }
        if(isUnique){
            index = s.indexOf(currentChar)
            return index
        }
    }
    return index
};
*/
