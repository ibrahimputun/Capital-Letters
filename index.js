//* Capital Letters: 
//* The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.


//?1. First, determine the parameters.
//?2. Then decide which method you will use to generate the code.
//?3.Define the function
//?4. Define and print array
//?5. Create the array by converting the first letter of each element in the array to uppercase and leaving the rest as is.
//?6. Concatenate and return the contents of the resulting array


const capitalLetters = (text) => {
  const myArray = text.split(" ");
  console.log(myArray);
  let newArray = myArray.map((item) => item[0].toUpperCase() + item.slice(1));
  return newArray.join(" ");
};
const text = `There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration in some form, by injected humour, or randomised words
which don't look even slightly believable. If you are going to use a passage of
Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
predefined chunks as necessary, making this the first true generator on the
Internet. It uses a dictionary of over 200 Latin words, combined with a handful of
model sentence structures, to generate Lorem Ipsum which looks reasonable. The
generated Lorem Ipsum is therefore always free from repetition, injected humour, ornon-characteristic words etc.
`;
console.log(capitalLetters(text));


