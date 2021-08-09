/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {  // sometimes the parameter can be used and returned directly
    var addedOne = false
    var carry = 0;
    var digitsLength = digits.length

    while(digitsLength > 0) {
        if(!addedOne) {
           addedOne = true;
           if(digits[digitsLength-1] + 1 >= 10) {
              digits[digitsLength-1] = 0
              carry ++;
           } else {
               digits[digitsLength-1]++;
               return digits;
           }
        } else {
            if(carry > 0) {
               digits[digitsLength-1]++;
               carry = 0;
            }
            if(digits[digitsLength-1] >= 10) {
               digits[digitsLength-1] = 10 % digits[digitsLength-1]
               carry ++;
           }
        }
        digitsLength--;
    }
    if(carry > 0) {
        digits.unshift(1)      
    }
    
    return digits;
};