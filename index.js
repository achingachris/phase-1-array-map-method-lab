const tutorials = [
	'what does the this keyword mean?',
	'What is the Constructor OO pattern?',
	'implementing Blockchain Web API',
	'The Test Driven Development Workflow',
	'What is NaN and how Can we Check for it',
	'What is the difference between stopPropagation and preventDefault?',
	'Immutable State and Pure Functions',
	'what is the difference between == and ===?',
	'what is the difference between event capturing and bubbling?',
	'what is JSONP?'
];

// Use the .map method on the tutorials to return a new array
const titleCased = () => {
	return tutorials.map(tutorial => {
		const word = tutorial.split(' '); // Splits the words in the sentence
		const capitalizedWords = word.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Converts first letters (charAt(0)) to uppercase
		const titleCasedTutorial = capitalizedWords.join(' '); // Joins  the split title cased words into once sentence
		return titleCasedTutorial; // Return the full title cased sentence
	})
}
