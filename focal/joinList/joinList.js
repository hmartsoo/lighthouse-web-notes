/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 * Note: We can NOT use the built-in Array join function.
 */

// Create a joinList function which will take in an array of strings
const joinList = (conceptList) => {
  let result = "";
  for (let i = 0; i < conceptList.length; i++) {
    if (i !== conceptList.length - 1) {
      //return a string with commas separating each item
      result += conceptList[i] + ', ';
    } else {
      result += conceptList[i];
    }
  }
  return result;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
