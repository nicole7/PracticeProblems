//Native array methods that iterate through all its items are: indexOf, 
//lastIndexOf, includes, fill, and join. Additionally, we can provide a 
//callback function to the following methods: findIndex, find, filter, 
//forEach, map, some, every, and reduce.

let array1 = [1, 2, 3, 4, 5];
let array2 = [a, b, c, d, e, f];
let array3 = [a, 2, b, 1, c, 3];
let array4 = [1, a, b, b, c, b];
let string4 = 'b, 2, b, 1, b, 3';



///////////////////////////////////////////////////////////////////////

//INDEX OF

array1.indexOf('2')
//expected output: 3

array2.indexOf('e')
//expected output: 4

//start from index 1
array2.indexOf('c',1)
//expected output: 2

array3.indexOf('d')
//expected output: -1

///////////////////////////////////////////////////////////////////////

//LAST INDEX OF

//must be a string NOT array
const letter = 'b'
array4.lastIndexOf(letter)
//expected output: 12..?


///////////////////////////////////////////////////////////////////////

//INCLUDES

array1.includes(2)
//expected output: true

array2.includes('a')
//expected output: true

array3.includes('z')
//expected output: false

///////////////////////////////////////////////////////////////////////

//FILL

// fill with 0 from position 2 until position 4
array1.fill(0, 2, 4);
//expected out: [1, 2, 0, 0]

// fill with 5 from position 1
array1.fill(5, 1);
// expected output: [1, 5, 5, 5]

///////////////////////////////////////////////////////////////////////

//JOIN

array2.join()
//expected output: [abcdef]

///////////////////////////////////////////////////////////////////////

//FIND INDEX

//returns the index of the first element that satisfies
const isLargeNumber = array1 = (element) => element > 3
array1.findIndex(isLargeNumber)
//expected output: 3

///////////////////////////////////////////////////////////////////////

//FIND

//also returns the value of the first element that satisfies 
array1.find(element => element > 2)
//expected output: 2

///////////////////////////////////////////////////////////////////////

//FILTER

//Creates NEW array with elements that satisfy 
array4.filter(element => element === 'b')
//expected output: [b,b,b]

array1.filter(element => element > 2)
//expected output: [3,4,5]

///////////////////////////////////////////////////////////////////////

//FOR EACH

//executes a provides function once for each array element
array1.forEach(element => console.log(element))
//exected output: "1"
//exected output: "2"
//exected output: "3"
//exected output: "4"
//exected output: "5"

///////////////////////////////////////////////////////////////////////

//MAP

//Creates a NEW array populated with the results of calling the function on every element
const newArray = array1.map(element => element * 2)
console.log(newArray)
//expected output: [2,4,6,8,10]

///////////////////////////////////////////////////////////////////////

//SOME

//Tests whether at least one element in the array passes the test implemented by the provided function
//if it returns true, it finds an element for which the provides function returns true otherwise, false
const even = (element) => element % 2 === 0
array1.some(even)
//expected output: true (stops at 2)

///////////////////////////////////////////////////////////////////////

//EVERY

//tests whether aLL elements in the array pass the test and return boolean
let array1 = [1, 2, 5, 4, 2];
const isTrue = element => element > 4
array1.every(isTrue)
//expected results: true 

///////////////////////////////////////////////////////////////////////

//REDUCE

array1.reduce((accumulator, current) => accumulator + current)
//expected output: 15

///////////////////////////////////////////////////////////////////////