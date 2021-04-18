const fizzBuzz = (number) => {
    let output = [];
    for (let i = 1; i <= number; i++) {
        if (number % 6 === 0) {
            output.push("Fizz Buzz")
        } else if (number % 2 === 0) {
            output.push("Fizz")
        } else if (number % 3 === 0) {
            output.push("Buzz")
        } else {
            output.push(i)
        };
    };
    return output;
};