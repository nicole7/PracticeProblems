##Big O##
To assist in the calculus of runtime complexities, we approximate the scalability of an algorithm by extrapolating its input sizes toward infinity before counting the number of operations required. At this worst-case runtime upper bound, we can drop coefficients and additive terms, retaining only factors that dominate the function. Consequently, just a few categories can describe the scalability of almost any algorithm.
The most optimum algorithm scales in constant time and space. This means it does not care at all about the growth of its inputs. Next best is logarithmic time or space, then linear, linearithmic, quadratic, and exponential. The worst is factorial time or space. In Big-O notation:
Constant: O(1)
Logarithmic: O(log n)
Linear: O(n)
Linearithmic: O(n log n)
Quadratic: O(n²)
Expontential: O(2^n)
Factorial: O(n!)

Big-O asymptotic analysis is an indispensable tool as we consider the tradeoff between time and space complexities of an algorithm. However, Big O ignores constant factors when in actual practice may matter. Moreover, optimizing for time and space may increase implementation time or negatively impact code readability. When designing the structure and logic of an algorithm, the intuitive feel for what is truly negligible is as important.

#
#

##Arrays##
The cleanest algorithm usually takes advantage of standard objects inherent in the language. Arguably the most important in computer science is Arrays. In JavaScript, no other object has more utility methods than arrays. Array methods worth remembering are: sort, reverse, slice, and splice. Array elements are inserted beginning at the 0th index. This means the last element is at array.length — 1. Arrays are the most optimal for indexing (pushing), but can be terrible at inserting, deleting (not popping), and searching. In JavaScript, arrays can grow dynamically.
In Big O:
Indexing: O(1)
Inserting: O(n)
Deleting: O(n)
Brute-Force Searching: O(n)
Optimized Searching: O(log n)

#
#

##Iterations##
Intimately associated with Arrays is iterating through them using loops. In JavaScript, we can use five different control structures for iterations. The most customizable is the for loop, which we can use to iterate through array indexes in almost any order. If the number of iterations cannot be determined, we can use while and do while loops until a certain condition is met. For any object, we can use the for in and for of loops to iterate through its keys and values, respectively. To get both simultaneously, we can loop through its entries(). We can also break out of a loop at any time using a break statement, or skip ahead to the next iteration using a continue statement. For the most control, iterating through generator functions is the best.
Native array methods that iterate through all its items are: indexOf, lastIndexOf, includes, fill, and join. Additionally, we can provide a callback function to the following methods: findIndex, find, filter, forEach, map, some, every, and reduce.

#
#

##Recursions##
In a seminal paper, the Church-Turing Thesis proves that any iterative function can be reproduced with a recursive one, and vice versa. Sometimes, a recursive approach is cleaner, clearer, and more elegant. Take this iterative factorial function for example:
const factorial = number => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};
Expressed as a recursive function, only one line of code is needed!
const factorial = number => {
  return number < 2 ? 1 : number * factorial(number - 1);
};
All recursive functions share a common pattern. They are made from creating a recursive part that calls itself, and a base case that does not. Whenever a function calls itself, it pushes a new execution context to the execution stack. This continues until the base case is met, then the stack unwinds as contexts are popped off one by one. For this reason, careless dependence on recursion can lead to the dreaded stack overflow runtime error.

#
#

