const reverseArray = (array) => {
    for (let i = 0; i < array.length / 2; i++) {
        //element 1 swaps with element 4, 2 with 3 - thats why you only traverse half the length time (swap outer elements and work your way in)
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - i] = temp;
    };
    //permanent change
    return array;
};

const _reverseArray = (array) => {
    for (let i = 0; i < array.length / 2; i++){
        //array[i] = [array[array.length - 1 - i] and array[array.length - 1 - i] = array[i]
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
    };
    return array;
};