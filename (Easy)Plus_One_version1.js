/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var addedOne = false
    var carry = 0;
    var digitsLength = digits.length
    const result = [];
    while(digitsLength > 0) {
        const digit = digits[digitsLength - 1]
        var sum = 0;
        if(!addedOne) {
           addedOne = true;
           sum = digit + 1
           if(sum >= 10) {
              sum = sum - 10;
              carry ++;
              result.unshift(sum)   
           } else {
              result.unshift(sum)
           }
        } else {
            sum = digit + carry
            carry = 0;
            if(sum >= 10) {
              sum = sum - 10;
              carry ++;
              result.unshift(sum)
           } else {
              result.unshift(sum)
           }
        }
        digitsLength--;
    }
    if(carry > 0) {
        result.unshift(1)      
    }
    
    return result;
};