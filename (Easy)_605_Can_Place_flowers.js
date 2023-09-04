/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// Solution 1
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length == 1) {
        if(n==0) {
            return true
        }

        if(n>0 && flowerbed[0] == 1) {
            return false
        } 
        return true
    }

    for(let i=0; i<flowerbed.length; i++) {
        if(i>=1 && i<=flowerbed.length-2) {
            const prev = flowerbed[i-1]
            const next = flowerbed[i+1]
            if(flowerbed[i] == 0 && prev == 0 && next == 0 && n > 0) {
                flowerbed[i] = 1
                n--
            }
        }

        if(i == 0 && flowerbed[i] == 0 && flowerbed[i+1] == 0 && n > 0) {
            flowerbed[i] = 1
            n--
        }

        if(i == flowerbed.length-1) {
            if(flowerbed[i] == 0 && flowerbed[i-1] == 0 && n > 0) {
                console.log('b called')
                flowerbed[i] = 1
                n--
            }
        }
    }

    return n == 0
};

// Solution 2
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.forEach((_, i) => {
        if((!flowerbed[i-1] || flowerbed[i-1] == 0) && flowerbed[i] == 0 && (!flowerbed[i+1] || flowerbed[i+1] == 0) && n>0) {
            flowerbed[i] = 1
            n--
        }
    })

    return n == 0
}