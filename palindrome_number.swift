class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        var reverse : Int = 0
        var num: Int = x
        var arr: [Int] = []

        if(x < 0) {
            return false
        }

        if(x <= 9) {
            return true
        }

        while(num > 0){
            let digit = num % 10
            num /= 10
            arr.append(digit)
        }

        let length = arr.count
        let loopTimes = (length / 2)

        for index in 0...loopTimes {
            if (arr[index] != arr[length-index-1]) {
                return false
            }
        }
        return true
    }
}