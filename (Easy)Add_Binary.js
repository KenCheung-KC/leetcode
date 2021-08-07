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

    var result = "";
    var carry = 0;
    for(let j = longerLength - 1; j>=0; j--) {
        const aDigit = parseInt(a[j]);
        const bDigit = parseInt(b[j]);
        var sum = aDigit + bDigit;

        if(sum + carry == 3) {
           sum = 1;
           carry = 1;
           result = sum + result
           continue;
        }
        if(sum + carry == 2) {
           sum = 0
           carry = 1
           result = sum + result
           continue;
        }
        result = (sum+carry) + result
        carry = 0
    }
    if(carry == 1) {
       result = 1 + result
    }

    return result
};