//Given a phrase, capitalize every word
//Because string literals are immutable in JavaScript, we will need to rebuild the input string with the appropriate capitalizations

// linear time complexity because every character is visited at least once 
//linear space complexity because a temporary variable is kept which grows proportionally to the input string

const capitalize = (phrase) => {
    const words = [];
    
    //split up each word
    for (let word of phrase.split(" "))
        
    //first letter/element gets capitalized and then you have to add the rest of the array starting from after the capaitalized letter
    words.push(word[0].toUpperCase() + word.slice(1));
    
    //join all the words
    return words.join("");
};