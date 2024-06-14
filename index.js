function fibonacci(n) {
    // Handle base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Initialize the first two Fibonacci numbers
    let a = 0, b = 1, next;

    // Iterate to calculate the n-th Fibonacci number
    for (let i = 2; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;
    }

    // Return the n-th Fibonacci number
    return b;
}

// Example usage:
const result = fibonacci(10);
console.log(result);  // Output: 55