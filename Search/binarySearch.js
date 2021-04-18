const binarySearch = (array, number) => {
    //check params and if sorted
    if (!array.length) {
        0
    };
    if (array.length === 1) {
        array;
    };

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((end - start) / 2);

        if (array[mid] === number) {
            return array.indexOf(number);
        } else if (array[mid] < number) {
            start = array[mid + 1]
        } else if (array[mid] > number) {
            end = array[mid - 1]
        }
    }
    return false;
}