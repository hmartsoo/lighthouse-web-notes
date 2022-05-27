var originalWords = process.argv.slice(2);
//Initialize an empty array where we want to store the translated words
var pigLatinWords = [];
// console.log("originalWords is", originalWords);
// console.log("pigLatinWords is", pigLatinWords);

//Iterate over the original words, translate each one, and push the result into pigLatinWords
for (var i = 0; i < originalWords.length; i++) {
  //console.log(originalWords[i]);
  //console.log(translateToPigLatin(originalWords[i]));
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

//Join the contents in pigLatinWords, which we expect to be strings, and output the final result to the console
console.log(pigLatinWords.join(' '));

//Create a function that takes a word and applies the pig latin translation algorithm to it
function translateToPigLatin(word) {
  // console.log("Word", word);
  // console.log("First letter", word[0]);
  // console.log("Rest of word", word.slice(1, word.length));
  return word.slice(1, word.length) + word[0] + "ay";
}