// import { WSAECONNREFUSED } from "constants";

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

function titleCased() {
  // console.log(tutorials)
   return tutorials.map(function(tutorial){
    // console.log(tutorial)
    let words = tutorial.split(' ');
    let newWords = words.map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    // console.log(newWords)
    return newWords.join(' ')
    // console.log(words.join(" "))
  });
}

titleCased();
