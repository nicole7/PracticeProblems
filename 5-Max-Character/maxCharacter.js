const max = (string) => {
    const characters = {};

    //for..in used with arrays and strings
    for (let character of string) {
        //make a key(character) value(counters) pair / character map 
        //if it exists, +1 if not, 1
        characters[character] = characters[character] + 1 || 1
    };

    let maxCount = 0;
    let maxCharacter = null;

    // for..in used with objects/key value pairs
    for (let character in characters) {
        //find maxCharacter with maxCount
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};
