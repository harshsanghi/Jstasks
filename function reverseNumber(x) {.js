function reverseNumber(x) {
  // Convert the number to a string
  const numString = x.toString();

  // Reverse the string
  const reversedString = numString.split('').reverse().join('');

  // Convert the reversed string back to a number
  const reversedNumber = parseInt(reversedString);

  return reversedNumber;
}

// Sample usage
const x = 32243;
const reversed = reverseNumber(x);
console.log(reversed); // Output: 34223
