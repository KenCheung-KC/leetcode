class Solution {
    var dictionary:[Character: Int] = [
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    ]
    
    var flag: Bool = false
    
    func romanToInt(_ s: String) -> Int {
        var sum:Int = 0
        var stringLen = s.count
        for (index, character) in s.enumerated() {
            if(index < stringLen-1) {
                if(flag == true){
                    flag = false
                    continue
                }
            
                let nextCharIndex = s.index(s.startIndex, offsetBy: index+1)
                let nextChar = s[nextCharIndex]

                if(character == "I") {
                    if(nextChar == "V") {
                        flag = true
                        sum += 4
                    }
                    if(nextChar == "X") {
                        flag = true
                        sum += 9
                    }
                }
            
                if(character == "X") {
                    if(nextChar == "L") {
                        flag = true
                        sum += 40
                    }
                    if(nextChar == "C") {
                        flag = true
                        sum += 90
                    }
                }
            
                if(character == "C") {
                    if(nextChar == "D") {
                        flag = true
                        sum += 400
                    }
                    if(nextChar == "M") {
                        flag = true
                        sum += 900
                    }
                }
            }
        
            if(flag == false) {
                sum += dictionary[character]!
            }
        }
        return sum
    }
}