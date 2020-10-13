/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

//This file contains 2 methods to do the task


// my method, 2 for loops
var wordPattern = function(pattern, s) {
    const newPattern = pattern.split("")
    const newS = s.split(" ")
    
    console.log("new pattern: ", newPattern)
    console.log("new s: ", newS)
    console.log("new pattern length: ", newPattern.length)
    
    if(newPattern.length !== newS.length){
       return false
    }
    
    for(i=0; i<newPattern.length; i++) {
       console.log('running i: ', i);
        
       for(j=i+1; j<newPattern.length; j++) {
            console.log('running j', j);
            const newPatternCheck = newPattern[i] == newPattern[j];
            const newSCheck = newS[i] == newS[j];
            console.log('check result: ', newPatternCheck !== newSCheck);
            if(newPatternCheck !== newSCheck) {
                return false;
            }       
       } 
    }
    
    return true
};


// refer to leetcode solution
var wordPattern = function(pattern, s) {
    
    var sObject = {}
    var patternObject = {}

    const sArr = s.split(' ')
    const patternArr = pattern.split('')

    if(patternArr.length !== sArr.length) {
       return false
    }
    
    for(i=0; i<sArr.length; i++) {
        const currentS = sArr[i]
        const currentPattern = patternArr[i]

        if (sObject[currentS] == undefined && patternObject[currentPattern] == undefined) {
          sObject[currentS] = patternArr[i]
          patternObject[currentPattern] = sArr[i]
        } else if(sObject[currentS] !== currentPattern || patternObject[currentPattern] !== currentS) {
          return false
        }
      }
      return true
}
