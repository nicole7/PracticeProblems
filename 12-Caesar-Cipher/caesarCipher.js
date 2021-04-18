//Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer
//We'll need an array of the alphabet

//Since every character in the newString needs to be visited and a new string needs to be created from it, this algorithm has a linear time and space complexity

const caesarCipher = (string, number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const newString = string.toLowerCase();
    let output = "";

    for (let i = 0; i < newString.length; i++) {
        const letter = newString[i];

        //if char is a letter in the alphabet like white space
        if (alphabet.indexOf(letter) === -1) {
            output += letter;
            continue
        };

        //Make sure the index is within the size of the alphabet array
        let index = alphabet.indexOf(letter) + number % 26;
        if (index > 25) {
            index -= 26;
        };
        if (index < 0) {
            index += 26
        };

        //Compare the string to see if it needs to be capitalized
        output +=
            string[i] === string[i].toUpperCase() ?
                alphabet[index].toUpperCase()
                : alphabet[index];
    };

    return output;
};


//find the asci code 
const _caesarCipther = (string, number) => {
    let result = Array(string.length);
    for (let i = 0; i < string.length - 1; i++) {
        let code = string.charCodeAt(i);
        let lower = "a".charCodeAt(0);
        if (code >= lower && code < lower + 26) {
            code = (code - lower + number) % 26 + lower;
            let upper = "A".charCodeAt(0);
        };
        if (code >= upper && code < upper + 26) {
            code = (code = upper - number) % 26 + upper;
            result[i] = String.fromCharCode(code);
        };
    };
    return result.join("");
};
