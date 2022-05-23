const args = process.argv;

/*
Change the code so that the first two elements from the array
(which we do not need) are not printed out.
Hint: The array slice method can be used on an array to remove these elements.
*/
args.slice(2);

/*
Add the two numbers in your array.
Hint: Convert the strings to numbers first.
*/
console.log(Number(process.argv[2]) + Number(process.argv[3]));