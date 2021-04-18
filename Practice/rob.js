function rob(nums) {
    //first check params and edge cases
    if(!nums){
        return nums;
    } 
    
    let moneyEarned = [];
    
    for(let i = 0; i < nums.length; i++){
    		if(i % 2 === 0)
        moneyEarned.push(nums[i]);
       
    }
    let calculatedMoney = moneyEarned.reduce((sum, amount) => sum + amount);
    console.log(calculatedMoney); 
};

rob([1,2,3,1])