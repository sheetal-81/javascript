// script.js

let questions = [
	{
		prompt: `What is JavaScript?`,
		options: [
		    "A programming language",
		    "A markup language",
		    "A database system",
		    "A web browser",
		],
		answer: "A programming language",
	    },
	    {
		prompt: `What is the correct way to declare a variable in JavaScript?`,
		options: [
		    "var variableName;",
		    "variableName = value;",
		    "variableName;",
		    "variableName =;",
		],
		answer: "var variableName;",
	    },
	    {
		prompt: `What is the purpose of the "let" keyword in JavaScript?`,
		options: [
		    "To declare function-scoped variables",
		    "To declare global variables",
		    "To declare block-scoped variables",
		    "To declare constant variables",
		],
		answer: "To declare block-scoped variables",
	    },
	    {
		prompt: `What is the purpose of the "const" keyword in JavaScript?`,
		options: [
		    
		    "To declare block-scoped variables",
		    "To declare function-scoped variables",
		    "To declare global variables",
		    "To declare constant variables",
		],
		answer: "To declare constant variables",
	    },
	    {
		prompt: `Which data type is used to represent floating-point numbers in JavaScript?`,
		options: [
		    "number",
		    "string",
		    "boolean",
		    "undefined",
		],
		answer: "number",
	    },
	    {
		prompt: `What is the purpose of the "typeof" operator in JavaScript?`,
		options: [
		    "To determine the type of a value",
		    "To convert a value to a string",
		    "To convert a value to a number",
		    "To convert a value to a boolean",
		],
		answer: "To determine the type of a value",
	    },
	    {
		prompt: `What is the correct way to write a comment in JavaScript?`,
		options: [
		   
		    "/* This is a comment */",
		    "<!-- This is a comment -->",
		    "// This is a comment",
		    "# This is a comment",
		],
		answer: "// This is a comment",
	    },
	    {
		prompt: `What is the purpose of the "===" operator in JavaScript?`,
		options: [
		    "To check for strict equality",
		    "To check for loose equality",
		    "To assign a value",
		    "To compare two values",
		],
		answer: "To check for strict equality",
	    },
	    {
		prompt: `What is the purpose of the "==" operator in JavaScript?`,
		options: [ 
		    "To check for strict equality",
		    "To check for loose equality",
		    "To assign a value",
		    "To compare two values",
		],
		answer: "To check for loose equality",
	    },
	    {
		prompt: `What is the purpose of the "typeof" operator in JavaScript?`,
		options: [
		    "To determine the type of a value",
		    "To convert a value to a string",
		    "To convert a value to a number",
		    "To convert a value to a boolean",
		],
		answer: "To determine the type of a value",
	    },
	    {
		prompt: `Which keyword is used to define a function in JavaScript?`,
		options: [
		    "function",
		    "func",
		    "def",
		    "define",
		],
		answer: "function",
	    },
	    {
		prompt: `What is the purpose of the "return" keyword in JavaScript functions?`,
		options: [    
		    "To exit the function and return control to the caller",
		    "To declare a new variable",
		    "To define a function",
		    "To specify the value to be returned by the function",
		],
		answer: "To specify the value to be returned by the function",
	    },
	    {
		prompt: `What is the purpose of the "console.log()" function in JavaScript?`,
		options: [
		    "To log messages to the console",
		    "To display messages in an alert dialog",
		    "To print messages to the screen",
		    "To execute a block of code repeatedly",
		],
		answer: "To log messages to the console",
	    },
	    {
		prompt: `What is the purpose of the "NaN" value in JavaScript?`,
		options: [    
		    "To represent infinity",
		    "To represent an empty value",
		    "To represent the result of an invalid arithmetic operation",
		    "To represent not a number",
		],
		answer: "To represent the result of an invalid arithmetic operation",
	    },
	    {
		prompt: `What is the purpose of the "null" value in JavaScript?`,
		options: [    
		    "To represent infinity",
		    "To represent an empty value",
		    "To represent not a number",
		    "To represent the absence of a value",
		],
		answer: "To represent the absence of a value",
	    },
	    {
		prompt: `What is the purpose of the "undefined" value in JavaScript?`,
		options: [
		    "To represent the absence of a value",
		    "To represent infinity",
		    "To represent an empty value",
		    "To represent not a number",
		],
		answer: "To represent the absence of a value",
	    },
	    {
		prompt: `What is the purpose of the "Array" object in JavaScript?`,
		options: [		    
		    "To represent a single value",
		    "To represent a string of characters",
		    "To store a collection of elements",
		    "To represent a date and time",
		],
		answer: "To store a collection of elements",
	    },
	    {
		prompt: `What is the purpose of the "length" property of an array in JavaScript?`,
		options: [
		    "To determine the number of elements in the array",
		    "To access the last element of the array",
		    "To add elements to the array",
		    "To remove elements from the array",
		],
		answer: "To determine the number of elements in the array",
	    },
	    {
		prompt: `What is the purpose of the "forEach()" method in JavaScript arrays?`,
		options: [
		    
		    "To add elements to the array",
		    "To execute a function for each element in the array",
		    "To remove elements from the array",
		    "To sort the elements of the array",
		],
		answer: "To execute a function for each element in the array",
	    },
	    {
		prompt: `What is the purpose of the "push()" method in JavaScript arrays?`,
		options: [
		    "To remove elements from the end of the array",
		    "To add elements to the beginning of the array",
		    "To remove elements from the beginning of the array",
		    "To add elements to the end of the array",
		],
		answer: "To add elements to the end of the array",
	    },
	    {
		prompt: `What is the purpose of the "pop()" method in JavaScript arrays?`,
		options: [
		    "To add elements to the end of the array",
		    "To remove the first element from the array",
		    "To remove the last element from the array",
		    "To add elements to the beginning of the array",
		],
		answer: "To remove the last element from the array",
	    },
	    {
		prompt: `What is the purpose of the "splice()" method in JavaScript arrays?`,
		options: [ 
		    "To add elements to an array",
		    "To remove elements from an array",
		    "To sort the elements of an array",
		    "To remove or replace elements in an array",
		],
		answer: "To remove or replace elements in an array",
	    },
	    {
		prompt: `What is the purpose of the "indexOf()" method in JavaScript arrays?`,
		options: [
		    "To add elements to an array",
		    "To remove elements from an array",
		    "To find the index of a specified value in an array",
		    "To sort the elements of an array",
		],
		answer: "To find the index of a specified value in an array",
	    },
	    {
		prompt: `What is the purpose of the "toUpperCase()" method in JavaScript?`,
		options: [	   
		    "To convert a string to lowercase",
		    "To trim whitespace from a string",
		    "To convert a string to uppercase",
		    "To reverse a string",
		],
		answer: "To convert a string to uppercase",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
