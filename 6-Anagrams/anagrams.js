//anagrams are words or phrases that have the *same number of characters* and returns a table of the numbers
//Again, character maps have linear time complexity and constant space complexity

const charCount = (string) => {
    const table = {};

    //for...of is used by arrays and strings
    //use regex
    for (let char of string.replace(/\W/g, "").toLowerCase()) {
        //checking to see if same character or not, count them or check as one
        table[char] = table[char] + 1 || 1
    };
    //returns an object
    return table;
};

//then compare the new string table 
const isAnagram = (string1, string2) => {
    const charCount1 = charCount(string1);
    const charCount2 = charCount(string2);

    if (Object.keys(charCount1).length !== Object.keys(charCount2)) {
        return false;
    };
    // for...in used for objects
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        };
    };
    return true;
};


//more elegrant approach using sort
const charSort = (string) => {
    const newString = string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
};

const isSortedString = (string1, string2) => {
    return charSort(string1) === charSort(string2);
}