// Main Operations
const add = function (a, b) {
	return a + b;
};
const subtract = function (a, b) {
	return a - b;
};
const multiply = function (a, b) {
	return a * b;
};
const divide = function (a, b) {
	return b == 0 || a == 0 ? `LMAO` : a / b;
};
const operate = function (a, operator, b) {
	switch (operator) {
		case "+":
			return add(+a, +b);
		case "-":
			return subtract(+a, +b);
		case "x":
			return multiply(+a, +b);
		case "÷":
			return divide(+a, +b);
	}
};

// Helper functions
const clearInput = function () {
	currentInput.textContent = "0";
};

const numberClick = function (e) {
	if (currentInput.textContent.length == 9) return;
	if (currentInput.textContent != "0") {
		currentInput.textContent += e.target.textContent;
	}
	if (currentInput.textContent == "0") {
		currentInput.textContent = e.target.textContent;
	}
};

const deleteClick = function (e) {
	if (currentInput.textContent == "0") return;
	if (currentInput.textContent.length > 0) {
		currentInput.textContent = currentInput.textContent.slice(0, -1);
	}
	if (currentInput.textContent.length == 0) {
		currentInput.textContent = "0";
	}
};

const pointClick = function (e) {
	if (currentInput.textContent.includes(".")) return;
	if (currentInput.textContent.length >= 9) return;
	currentInput.textContent += e.target.textContent;
};

const equalsClick = function (e) {
	if (!enteredInput.textContent) return;
	result = operate(enteredNumber, enteredOperator, currentInput.textContent);
	currentInput.textContent = result;
	enteredInput.textContent = enteredNumber = enteredOperator = "";
};

const operatorClick = function (e) {
	if (currentInput.textContent == "0") {
		enteredOperator = e.target.textContent;
		enteredInput.textContent = `${enteredNumber} ${e.target.textContent}`;
		return;
	} else {
		equalsClick();
	}

	enteredInput.textContent = `${currentInput.textContent} ${e.target.textContent}`;
	enteredNumber = enteredInput.textContent.split(" ")[0];
	enteredOperator = enteredInput.textContent.split(" ")[1];
	currentInput.textContent = "0";
};

// Variables
// --Screen area
const currentInput = document.querySelector(".current");
const enteredInput = document.querySelector(".entered");
let enteredNumber = enteredInput.textContent.split(" ")[0];
let enteredOperator = enteredInput.textContent.split(" ")[1];

// --Keys and buttons
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const pointBtn = document.querySelector("#pointBtn");
const equalsBtn = document.querySelector("#equalsBtn");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");

// Event Listeners
numbers.forEach((element) => {
	element.addEventListener("click", numberClick);
});

operators.forEach((element) => {
	element.addEventListener("click", operatorClick);
});

clearBtn.addEventListener("click", clearInput);
deleteBtn.addEventListener("click", deleteClick);
pointBtn.addEventListener("click", pointClick);
equalsBtn.addEventListener("click", equalsClick);
