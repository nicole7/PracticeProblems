//Dynamic programming utilizes chaching

//Momoization --- Caching
//Caching is a way to store values so you can use them later on - a backpack you take with you with things you need
//Memoization is a specific type of caching

function addTo80(n) {
    return n + 80;
};

addTo80(5);
addTo80(5);
addTo80(5);
//same calculation three times

//basically create a hash/object that stores the param as a key and the output as the value you can pull from
//caching the return values based on the parameters
//the second time around that value is memoized
let cache = {};
function memoizedAddTo80(n) {
    //similar to cache.n to check if its there
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = n + 80;
    };
};

memoizedAddTo80(5)
memoizedAddTo80(5)

/////////////////////////////////////////////////////////////

//A better way is to use a closure

function memoizedAddTo80(n) {
    let cache = {};
    //the closure - we can access the cache but this way we avoid the global scope
    return function (n) {
         //similar to cache.n to check if its there
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = n + 80;
        };
    }
   
};

//memoized = the return value of the function
const memoized = memmizedAddTo80();


