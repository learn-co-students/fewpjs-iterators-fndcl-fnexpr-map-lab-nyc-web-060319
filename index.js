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
  let tutorialsCopy = tutorials;
  for (let i = 0; i < tutorialsCopy.length; i++) {
    let splitStr = tutorialsCopy[i].split(' ');
    for (let j = 0; j < splitStr.length; j++) {
      // console.log(splitStr[j]);
      // console.log(splitStr[j][0]);
      // splitStr[j][0] = splitStr[j][0].toUpperCase();
      let newStr = (splitStr[j][0].toUpperCase() + splitStr[j].slice(1));
      splitStr[j] = newStr;
    }
    tutorialsCopy[i] = splitStr.join(' ');
  }
  return tutorialsCopy
}
