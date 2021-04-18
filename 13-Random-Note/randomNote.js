//Given a magazine of words and a ransom note, determine if its possible to "cut out" and create the ransom note from the magazine words
//To compare the magazine words against the word in the ransom note would give quadratic time which is not performant
//We should create a table of magazine words first and check the ransom note we can acheive linear time

//This actually did not work in JSFiddle

const ransomNote = (note, magazine) => {
    const magazineWords = magazine.split(" ");
    const magazineHash = {};

    magazineWords.forEach(word => {
        if (!magazineHash[word]) magazineHash[word] = 0;
            magazineHash[word]++;
       
    });

    const noteWords = note.split(" ");
    let isMatch = true;

    noteWords.forEach(word => {
        if (magazineHash[word]) {
            magazineHash[word]--;
            if (magazineHash[word] < 0) {
                isMatch = false;
            };
        } else isMatch = false;
    });
    return isMatch;
};

