/***** HACKERRANK PROBLEM SOLVING QUESTION *****/

// This function takes a string 's' and an array of words 'dictionary' as input.
function getValidWord(s, dictionary) {
  // Initialize a variable to store the smallest valid word found so far.
  let smallestWord = "-1";

  // Loop through each word in the dictionary array.
  for (const word of dictionary) {
    // Initialize two pointers, 'i' for the current character in the word,
    // and 'j' for the current character in the input string 's'.
    let i = 0, j = 0;

    // Use a while loop to compare characters of 'word' and 's'.
    while (i < word.length && j < s.length) {
      // If the characters at the current positions match, move to the next character in 'word'.
      if (word[i] === s[j]) {
        i++;
      }
      // Move to the next character in 's'.
      j++;
    }
    // If 'i' becomes equal to the length of 'word', it means the entire 'word' is a subsequence of 's'.
    if (i === word.length && (smallestWord === "-1" || word < smallestWord)) {
      // If the current 'word' is smaller than the previously found smallest word,
      // update the 'smallestWord' variable.
      smallestWord = word;
    }
  }
  // Return the smallest valid word found in 'dictionary' that is a subsequence of 's'.
  return smallestWord;
}
