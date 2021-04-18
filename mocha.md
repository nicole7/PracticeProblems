assert.equal = Checks if two values are equal, using the equal operator (==)

assert.deepEqual = The assert.deepEqual() method tests if two objects, and their child objects, are equal, using the == operator.


assert.equal = It actually fails if the arguments are !=. Thus it fails for your arrays of numbers string because although they are essentially equivalent, they are not the same object.

Deep (aka structural) equality, on the other hand, does not test whether the operands are the same object, but rather that they're equivalent. In a sense, you could say it forces objects to be compared as though they're values.


var a = [1,2,3]  
var b = a              // As a and b both refer to the same object
a == b                 // this is true
a === b                // and this is also true

a = [1,2,3]            // here a and b have equivalent contents, but do not
b = [1,2,3]            // refer to the same Array object.
a == b                 // Thus this is false.

assert.deepEqual(a, b) // However this passes, as while a and b are not the 
                       // same object, they are still arrays containing 1, 2, 3