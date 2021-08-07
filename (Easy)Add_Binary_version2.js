/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    if(a == null || a == undefined){
       return b
    }
    if(b == null || b == undefined){
       return a
    }
    var longerLength = a.length > b.length ? a.length : b.length;
    var different = Math.abs(a.length - b.length)  // here use different because the length of string a, b will be changed
    if(a.length > b.length) { // a longer than b
       for(let i=0; i<different; i++){
          b = '0' + b // length of b will be increased 1 after adding '0'
       }
    }
    if(a.length < b.length) { // a shorter than b
       for(let i=0; i<different; i++){
          a = '0' + a // length of 1 will be increased 1 after adding '0'
       }
    }

// sum = a + b + carry       0, 1, 2, 3
// result.push(sum%2)   use modulus
// carry = sum/2

    var result = "";
    var carry = 0;
    for(let j = longerLength - 1; j>=0; j--) {
        const aDigit = parseInt(a[j]);
        const bDigit = parseInt(b[j]);
        var sum = aDigit + bDigit + carry;
        result = parseInt(sum%2) + result
        carry = parseInt(sum/2)
    }
    if(carry > 0) {
       result = 1 + result
    }

    return result
};