//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once
//Nested loops would give you a quadratic time complexity

//Instead, maintain an array that contains the “counterpart” of each number as we iterate through the input array, 
//while simultaneously checking for the existence of each number’s counterpart to get linear time complexity 

const twoSum = (array, sum) => {
    //all the pairs that equal the sum
    const pairs = [];
    //stores the values to compare with other values in array (instead of another nested looping in array)
    const store = [];

    for (let part1 of array) {
        //the difference 
        const part2 = sum - part1;
        //find the difference (the other number to add) in the store array
        //it will return 0 - array.length-1 if it's in the array otherwise -1
        if (store.indexOf(part2) !== -1) {
            pairs.push([part1, part2]);
        };
        store.push(part1);
    };
    return pairs;
};


