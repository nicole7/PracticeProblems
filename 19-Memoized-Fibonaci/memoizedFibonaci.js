//Implement a performant recursive function for the fibonacci series

//Memoization: optimization technique used primarily to speed up computer 
//              programs by storing the results of expensive function calls 
//              and returning the cached result when the same inputs occur again

//Top-down approach to solving a problem with dynamic programming. 
//It's called memoization because we will create a memo, or a “note to self”, for the values returned from solving each problem

//we keep a cache of all the inputs and outputs as we call our function, 
//the number of calls will reduce to linear time.Of course, this means we have sacrificed additional memory

//In code, we can implement the memoization technique inside the function itself, 
//or we can abstract it as a higher - order utility function that decorates any function with memoization

const fibonacci = (number, cache = []) => {
    if (cache[number]) {
        return cache[number];
    } else {
        if (number < 3) {
            return 1;
        } else {
            cache[number] = fibonacci(number - 1, cache) + fibonaci(number - 2, cache);
        };
    };
    return cache[number];
};

const _memoize = (fn) => {
    const cache = {};
    return (...args) => {
        if (cache[args]) {
            return cache[args];
        };
        const output = fn.apply(this, args);
        cache[args] = output;
        return output;
    };
};

const _fibonacci = (number) => {
    number < 2 ?
        number :
        _memoized_fibonacci(number - 1) + _memoized_fibonacci(number - 2);
    const _memoized_fibonacci = _memoize(_fibonacci);
};