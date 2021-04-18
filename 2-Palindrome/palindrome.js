//Time complexity == linear
//will check two times more than reverseString but it still stays the same
//Space complexity == constant
//because no internal data structure is kept

const isPalindrome1 = (string) => {
    //valid characters
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    //assign variable to modified string 
    const stringCharacters = string.toLowerCase().split("").reduce((accumulator, currentValue) =>
        //it would return -1 if it wasnt in the alphabet AKA a white space or non-alphabraic char
        alphabet.indexOf(currentValue) > -1 ?
            //so true if its greater than -1, the letter is added
            accumulator.concat(currentValue) :
            //this keeps* it an array otherwise it would come out a string!
            accumulator, []
    );

    return stringCharacters.join("") === string.reverse().join("");
};

const isPalindrome2 = (string) => {
    //essentially one starts at the front and the other from the back
    //you subtract the index on top of -1 so you can get the next one (second and second to last, third and third to last iteration!)
    string.split("").every((character, index) => character === string[string.length - 1 - index]);
}

//using regex
const isPalindrome3 = (string) => {
    const newString = string.replace(/\W/g, "").toLowerCase();
    return string === newString.split("").reverse().join("")
};