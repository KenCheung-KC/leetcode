/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let argument = Math.sqrt(x * x);
    let result = 0;
    let quotient = 10;
    let divider = 1;
    let multipler = 1;
    while (quotient > 9) {
        quotient = Math.floor(argument / divider);
        if(quotient > 9){
           divider *= 10;
        }        
    }
    
    let tempDivider = divider;
    
    while(multipler <= divider) {
        result += Math.floor(argument / tempDivider) * multipler;
        argument = argument % tempDivider;
        tempDivider /= 10;
        multipler *= 10;
    }
    
    if(result > Math.pow(2, 31) - 1){
       result = 0;
    }
    
    if(x < 0){
       result = 0 - result;
    }
    
    return result;
    
};