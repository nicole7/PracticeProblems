//Given a string of words or phrases, count the number of vowels

const countVowels1 = (string) => {
    let count = 0;
    const vowels = "aeiou"; // or ["a", "e", "i", "o", "u"]

    for (let char in string) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

const countVowels2 = (string) => {
    matchVowels = string.match(/[aeiou]/gi);
    //if matchVowels exists, return the number of them through length, if not return 0
    return matchVowels ? matcheVowels.length : 0;
};