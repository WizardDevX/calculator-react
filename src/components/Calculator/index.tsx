import React, { useState } from "react";
import { Box, ResultBox, Result, ContainerButtons, Button } from "./styled";

function isOperator(operator: string) {
	return ["*", "/", "+", "-"].includes(operator);
}

function isOperand(operand: string) {
	return operand.match(/[0-9]/g) !== null;
}

function isHigherPrecedence(operator1: string, operator2: string) {
	let operators: { [k: string]: number } = {
		"*": 2,
		"/": 2,
		"+": 1,
		"-": 1,
	};

	return operators[operator1] > operators[operator2];
}

function infixToPostfix(infix: string) {
	let postfix = "";
	let stack: string[] = [];
	let prevNumbers = "";

	for (let i = 0; i < infix.length; i++) {
		if (isOperand(infix[i])) {
			if (infix[i + 1] != null && isOperand(infix[i + 1])) {
				prevNumbers += infix[i];
			} else {
				postfix += `${prevNumbers}${infix[i]},`;
				prevNumbers = "";
			}
		} else if (isOperator(infix[i])) {
			if (
				stack.length !== 0 &&
				isHigherPrecedence(stack[stack.length - 1], infix[i])
			) {
				while (stack.length !== 0) postfix += stack.pop();
			} else {
				stack.push(infix[i]);
			}
		}
	}

	while (stack.length !== 0) postfix += stack.pop();

	return postfix;
}

function makeOperations(opr1: number, opr2: number, opt: string) {
	switch (opt) {
		case "*":
			return opr1 * opr2;
		case "/":
			if (opr2 === 0) {
				console.log("Cannot divide by Zero");
				return 0;
			}
			return opr1 / opr2;
		case "+":
			return opr1 + opr2;
		case "-":
			return opr1 - opr2;
	}

	return 0;
}

function evaluate(exp: string) {
	let postfix = infixToPostfix(exp);
	let stack: any[] = [];
	let prevNumbers = "";
	for (let i = 0; i < postfix.length; i++) {
		if (isOperand(postfix[i])) {
			if (postfix[i + 1] != null && isOperand(postfix[i + 1])) {
				prevNumbers += postfix[i];
			} else {
				stack.push(parseInt(`${prevNumbers}${postfix[i]}`));
				prevNumbers = "";
			}
		} else if (isOperator(postfix[i])) {
			let n2 = stack.pop(),
				n1 = stack.pop();
			let result = makeOperations(n1, n2, postfix[i]);
			stack.push(result);
		}
	}

	return stack.pop();
}

const Calculator: React.FC<{}> = () => {
	const [input, setInput] = useState<string>("");

	const reset = (_: React.MouseEvent<HTMLButtonElement>) => {
		setInput("");
	};

	const del = (_: React.MouseEvent<HTMLButtonElement>) => {
		setInput(prevState => prevState.substring(0, prevState.length - 1));
	};

	const getResult = (_: React.MouseEvent<HTMLButtonElement>) => {
		setInput(evaluate(input));
	};

	const Buttons = [
		{ value: "C", event: reset },
		{ value: "+/-" },
		{ value: "%" },
		{ value: "/" },
		{ value: "7" },
		{ value: "8" },
		{ value: "9" },
		{ value: "*" },
		{ value: "4" },
		{ value: "5" },
		{ value: "6" },
		{ value: "-" },
		{ value: "1" },
		{ value: "2" },
		{ value: "3" },
		{ value: "+" },
		{ value: "0" },
		{ value: "." },
		{ value: "del", event: del },
		{ value: "=", event: getResult },
	];

	const addValue = (
		_: React.MouseEvent<HTMLButtonElement>,
		value: string
	) => {
		setInput(prevState => `${prevState}${value}`);
	};

	return (
		<Box>
			<ResultBox>
				<Result>{input}</Result>
			</ResultBox>
			<ContainerButtons>
				{Buttons &&
					Buttons.map(({ value, event }, idx) => {
						return (
							<Button
								key={idx}
								value={value}
								onClick={
									event ? event : e => addValue(e, value)
								}>
								{value}
							</Button>
						);
					})}
			</ContainerButtons>
		</Box>
	);
};

export default Calculator;
