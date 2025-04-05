function sum(numbers) {
  let total = numbers.reduce((acc, curr) => acc + curr, 0);
  return total;
}

console.log(sum([1, 2, 3, 4])); // Output: 10
