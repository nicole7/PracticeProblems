//With enough entries, you run into collision in the same memory space and slows down ability to access or add info

class HashTable {
    constructor(size) {
        this.data = new Array(size);
        //[['grapes',10000]];
    };

    //private property, cant access outside of class
    //O(1)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            //generate a made up memory space/hash table so there are no collisions
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        };
        return hash;
    };

    //O(1)
    set(key, value) {
        //store this data into this address space
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
        };
        this.data[address].push([key, value]);
        return this.data;
    };
    //O(1) if no collisions
    get(key) {
        let address = this._hash(key);
        //check the array for the address
        const currentBucket = this.data[address];
        //if this bucket has something in it
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key) {
                    return current[i][1];
                };
            };
        };
        return undefined;
    };
};

//50 shelves of memory
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 10000);
myHashTable.get('grapes');