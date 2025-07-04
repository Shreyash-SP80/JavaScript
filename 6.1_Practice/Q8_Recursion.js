// Recursion
// Q8. Write a recursive function factorial(n) that returns the factorial of a number.

const factorial = (num) => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5));    // 120
console.log(factorial(4));    // 4