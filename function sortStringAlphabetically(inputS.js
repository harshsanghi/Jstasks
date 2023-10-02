function sortStringAlphabetically(inputString) {
  // Convert the string to an array of characters, sort it, and join it back into a string
  const sortedString = inputString.split('').sort().join('');
  return sortedString;
}

// Sample usage
const input = 'webmaster';
const sorted = sortStringAlphabetically(input);
console.log(sorted); // Output: 'abeemrstw'
