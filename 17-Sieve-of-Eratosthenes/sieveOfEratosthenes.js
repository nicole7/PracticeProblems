//For a given number, find all the **prime numbers** from zero to that number.

//By sacrificing space efficiency to maintain an internal “hash table”, 
//this sieve of Eratosthenes has a time complexity better than quadratic, or O(n * log(log n))

//THERES A BETTER WAY TO DO THIS


const primes = number => {
    const numbers = new Array(number + 1);
    numbers.fill(true);
    //numbers[0] = numbers[1]
    //numbers[1] = false
    //0 and 1 cant be false
    numbers[0] = numbers[1] = false;

    for (let i = 2; i <= Math.sqrt(number); i++){
        for (let j = 2; i * j <= number; i++){
            numbers[i * j] = false;
        };
    };
    return numbers.reduce(
        //accumulator, currentValue, currentIndex?
        //isPrime would be false if it has a false value from above
        (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
        []
    );
}