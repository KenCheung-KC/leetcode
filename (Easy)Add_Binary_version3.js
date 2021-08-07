/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
// sum = a + b + carry       0, 1, 2, 3
// result.push(sum%2)   use modulus
// carry = sum/2
    var result = "";
    var carry = 0;
    var aLength = a.length-1
    var bLength = b.length-1

    while(aLength >= 0 || bLength >= 0) {
        const aDigit = a[aLength] ? parseInt(a[aLength]) : 0;
        const bDigit = b[bLength] ? parseInt(b[bLength]): 0;
        console.log('a digit: ', aDigit)
        console.log('b digit: ', bDigit)
        var sum = aDigit + bDigit + carry;
        console.log('sum: ', sum)
        result = parseInt(sum%2) + result
        carry = parseInt(sum/2)
        console.log('result: ', result)
        console.log('carry; ', carry)
        aLength--;
        bLength--;
    }

    if(carry > 0) {
       result = 1 + result
    }

    return result
};