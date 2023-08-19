/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0
    let sell = 1
    let max_profit = 0

    while(sell < prices.length) {
        if(prices[buy] < prices[sell]) {
            const profit = prices[sell] - prices[buy]
            max_profit = profit > max_profit ? profit : max_profit
        } else {
            buy = sell
        }
        sell++
    }

    return max_profit
};