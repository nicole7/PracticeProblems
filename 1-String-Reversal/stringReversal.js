//Time complexisty == linear 
//because we have to visit every character once
//Space complexity == constant
//because no separate internal data structure is kept

const reverseString1 = string => {
    string
        .split("")
        .reverse()
        .join("");
}

//keeps adding it to the front
const reverseString2 = (string) => {
    let result = "";
    for (let character of string) {
        result = character + result
    }
    return result;
}

//again, adds the next character to the front of the string
const reverseString3 = (string) => {
    string.split("").reduce((accumulator, currentValue) => accumulator + currentValue)
}

///////////////////








const reverseString = (string) => {
    string.split("").reverse().join("");
};

const reverseString = (string) = {
    
}

