const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map( (string) => {
    return string.split(" ").map( (word) => {return word[0].toUpperCase()+word.slice(1,word.length)}).join(" ")
    //take each string
    //use split to get each individual word of string in array ["what"...]
    //use map on the word array to capitalize the first character of each word and then merge that with the rest of the string
  })
}
