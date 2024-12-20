import logo from './logo.svg';
import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const OPERATORS = [
		{ id: 1, value: '+' },
		{ id: 2, value: '-' },
		{ id: 3, value: '=' },
		{ id: 4, value: 'C' },
	];

	const NUMS = [
		{ id: 1, value: '0' },
		{ id: 2, value: '1' },
		{ id: 3, value: '2' },
		{ id: 4, value: '3' },
		{ id: 5, value: '4' },
		{ id: 6, value: '5' },
		{ id: 7, value: '6' },
		{ id: 8, value: '7' },
		{ id: 9, value: '8' },
		{ id: 10, value: '9' },
	];

	let [operand1, setOperand1] = useState('');
	let [operator, setOperator] = useState('');
	let [operand2, setOperand2] = useState('');
	let [isOperator, setIsOperator] = useState(false);
	const [result, setResult] = useState('');

	const renderButtonsOfNums = NUMS.map((element) => {
		return (
			<div
				className={styles.nums}
				key={element.id}
				onClick={() => {
					clickOnOperand(element.value);
				}}
			>
				{element.value}
			</div>
		);
	});

	const renderButtonsOfOperators = OPERATORS.map((element) => {
		return (
			<div
				className={styles.operator}
				key={element.id}
				onClick={() => {
					clickOnOperator(element.value);
				}}
			>
				{element.value}
			</div>
		);
	});

	const clearCalculate = () => {
		setOperand1('');
		setOperator('');
		setOperand2('');
		setResult('');
		setIsOperator(false);
	};

	const calculate = () => {
		if (operator === '+') {
			const res = parseFloat(operand1) + parseFloat(operand2);
			setResult(res.toString());
		}
		if (operator === '-') {
			const res = parseFloat(operand1) - parseFloat(operand2);
			setResult(res.toString());
		}
	};

	const clickOnOperator = (element) => {
		setIsOperator(true);
		setOperator(element);

		if (element === 'C') {
			clearCalculate();
		}
		if (element === '=') {
			calculate();
		}
	};

	const clickOnOperand = (element) => {
		if (isOperator === false) {
			setOperand1(operand1 + element);
		}
		if (isOperator === true) {
			setOperand2(operand2 + element);
		}
	};

	if (result) {
		if (operator === '+' || operator === '-') {
			const operand3 = result;

			console.log(operand3);
			clearCalculate();

			setOperand1(operand3);
			setOperator(operator);
			setIsOperator(true);

			const operand4 = operand2;
			console.log(operand4);
		}
	}

	return (
		<div className={styles.App}>
			<header className={styles.header}>
				<div className={result ? styles.resultInput : styles.input}>
					<div className={styles.value}>
						{result || operand1 + operator + operand2}
					</div>
				</div>
				<div className={styles.buttonsContainer}>
					<div className={styles.buttonsOfNums}>{renderButtonsOfNums}</div>
					<div className={styles.buttonsOfOperators}>
						{renderButtonsOfOperators}
					</div>
				</div>
				<img src={logo} className={styles.AppLogo} alt="logo" />
			</header>
		</div>
	);
};
