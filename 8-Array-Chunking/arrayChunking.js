//Given an array size, split the array items into a list of arrays of a *given size*


//obvious solution is to keep a reference to the last "chunk" and check its size as we loop through the array items
const chunk = (array, size) => {
    const chunks = [];

    for (let element of array) {
        const lastChunk = chunks[chunks.length - 1];
        //if chunks is empty or is the length of size already, push that element to chunks
        //once it hits the right size it will go on to the next element and check if lastChunk is the right size
        if (!lastChunk || lastChunk.length === size) {
            chunks.push([element])
        };
    };
    return chunks;
};


//a more elegant approach is to use the *slice* method
const _chunk = (array, size) => {
    const chunks = [];
    let index = 0;

    while (index < array.length) {
        chunks.push(
            array.slice(
                //start at the index and end right before index + size (since you want 1,2 not 0,1,2)
                index, index + size
            )
        );
        //start the next chunk *2* (or whatever the size is) elements ahead for the next chunk
        index += size;
    };

    return chunks;
};