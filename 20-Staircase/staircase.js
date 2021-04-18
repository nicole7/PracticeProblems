//For a given number of steps, print out a “staircase” using hashes and spaces

//The number of hashes increments while the number of spaces decrements. If we have n steps, 
//the overall dimension is n by n. This means the runtime complexity is quadratic for both time and space.

//A recursive approach is also possible using this insight. 
//Except, we need to pass along additional parameters in place of the necessary temporary variables.

const steps = (number) => {
    let stairs = "";
    for (let row = 0; row < number; row++) {
        let stair = "";

        for (let column = 0; column < number; column++) {
            stair += column <= row ? "#" : " ";
        };

        stairs += stair + "\n";
    };
    return stairs;
};

//gross
const _steps = (number, row = 0, stair = "", stairs = "") => {
    if (row === number) {
        return stairs;
    };

    if (stair.length === number) {
        return _steps(number, row + 1, "", stairs + stair + "\n")
    };

    return _steps(number, row, stair + (stair.length <= row ? "#" : " "), stairs);
};