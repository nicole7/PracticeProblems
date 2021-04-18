//use string reversal logic
//use parseInt to turn into number again
//use Math.sign to adjust sign polarity!

const reverseInteger = (integer) => {
    parseInt(
        integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer);
};

//Math.sign
//function return 1 or -1 
//if 0 is passed in it will return 0

console.log(Math.sign(3))
//expected output: 1

console.log(Math.sign(-3))
//expected output: -1

console.log(Math.sign(0))
//expected output: 0