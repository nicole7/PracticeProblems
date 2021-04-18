const insertionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                array.splice(j, 0, array.splice(i, 1)[0]);
            };
        };
    };
    return array;
};

/////////////////////////////////////////////
//More readable


const insertionSort = (array) => {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        let currentElement = array[i];
        let prevIndex = i - 1;
        while (prevIndex >= 0 && array[prevIndex] > currentElement) {
            array[prevIndex + 1] = array[prevIndex];
            array[prevIndex] =  array[prevIndex] - 1;
        }
        array[prevIndex + 1] = currentElement;
    }
    console.log(array);
};

