const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++){
        let indexOfMin = i;
        for (let j = 1; j < array.length; j++){
            if (array[j] < array[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            let less = array[indeOfMin];
            array[indexOfMin] = array[i];
            array[i] = less;
        }
    }

    return array;
}

//Another way

const selectionSort = (array) => {
    let length = array.length;
    for (let i = 0; i < length; i++){
        let min = i;
        for (let j = i + 1; j < length; j++){
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}
