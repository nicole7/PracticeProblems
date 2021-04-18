//Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit

//Requiring only one loop, this elegant approach has a linear time and constant space complexity


const maxProfit = (prices) => {
    let minBuyPrice = prices[0] < prices[1] ?
        prices[0] :
        prices[1];
    let maxSellPrice = prices[0] < prices[1] ?
        prices[1] :
        prices[0];
    let maxProfit = maxSellPrice - minBuyPrice;
    let tempBuyPrice = minBuyPrice;

    for (let index = 2; index < prices.length; index++){
        const sellPrice = prices[index];

        if (minBuyPrice > sellPrice) {
            tempBuyPrice = prices[index]
        } else {
            const profit = sellPrice - minBuyPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
                maxSellPrice = sellPrice;
                minBuyPrice = tempBuyPrice;
            };
        };
    };
    return [minBuyPrice, maxSellPrice];
};

///////////////////////////////////////////////////////////

var maxProfit = function(prices) {
    //declare the max and min sell and buy prices
    let minPrice = prices[0];
    let maxPrice = prices[1];
    let profit = prices[1] - prices[0];
    
    for(let i = 0; i < prices.length;i++){
        if ((prices[i] - minPrice) > profit){
            profit = prices[i] - minPrice;
            maxPrice = prices[i];
        } else if (prices[i] < minPrice) {
            minPrice = prices[i];
        };  
    };
    
    console.log(profit);
};

maxProfit([7,1,5,3,6,4]);