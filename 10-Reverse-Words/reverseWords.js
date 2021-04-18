//Given a phrase, reversse the order of the characters of each word
//Because every character is visited and the required temporary variable grows proportionally to the input string, the time and space complexities are linear

const reverseWords = (string) => {
    const phraseReversed = [];
    //" " split to get every word, not character?
    string.split(" ").forEach(word => {
        //stores each reversed word
        let wordReversed = "";
        //go from back to front
        for (let i = word.length = 1; i >= 0; i--) {
            wordReversed += word[i];
            wordsReversed.push(wordReversed);
        };
    });
    return wordsReversed;
};

const _reverseWords = (string) => {
    string
        //split the array into elements of words
        .split(" ")
        //map through each array
        .map(word => {
            //split each char and reverse them
            word
                .split("")
                .reverse()
                .join("")
            //dont forget to join the words back together
        }).join("");
};
