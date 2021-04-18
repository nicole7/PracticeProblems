
//recursive - not the most efficiant because it requires exponential memory on the call stack and will wuickly break

const fibonaci = (number) => {
    //if (element < 0) throw new Error("Index cannot be negative");
    number < 3 ? 1 : fibonaci(number - 1) + fibonaci(number - 2);
};

//iterative is best and has a linear time and space complexity 

const _fibonacci = (number) => {
    const series = [1, 1];

    for (let i = 2; i < number; i++){
        const a = series[i - 1];
        const b = series[i - 2];
        series.push(a + b);
    };
    //series is the series of fibonaci numbers
    //number - 1 is the index of the last number in the sequence - the answer for what the number's fibonaci's number is
    return series[number - 1]
};


////////////////////////////////////////////

var climbStairs = function(n) {
    if(n <= 0){
        return 0;
    };
    if(n === 1){
        return 1;
    };
    let firstStep = 1;
    let secondStep = 2;
    let tempStep = 0;
    
    for (let i = 0; i < n; i++){
        tempStep = firstStep + secondStep;
        firstStep = secondStep;
        secondStep = tempStep;
    };
    return secondStep;
    
};