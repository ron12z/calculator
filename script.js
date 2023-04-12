// Operations
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
	return a / b;
};
const operate = function (a, operator, b) {
	switch (operator) {
		case "+":
			return add(+a, +b);
		case "-":
			return subtract(+a, +b);
		case "*":
			return multiply(+a, +b);
		case "/":
			return divide(+a, +b);
	}
};

// Variables
const currentInput = document.querySelector(".current");
const enteredInput = document.querySelector(".entered");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
