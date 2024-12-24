import logo from './logo.svg';
import styles from './App.module.css';
import { useState } from 'react';

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

export const App = () => {
    const [operand1, setOperand1] = useState('');
    const [operator, setOperator] = useState('');
    const [operand2, setOperand2] = useState('');
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
        setOperator(element);

        if (element === 'C') {
            clearCalculate();
        }
        if (element === '=') {
            calculate();
        }
        if (result !== '' && element !== 'C') {
            setOperand1(result);
            setResult('');
            setOperand2('');
        }
    };

    const clickOnOperand = (element) => {
        if (operator === '') {
            setOperand1(operand1 + element);
        }
        if (operator !== '') {
            setOperand2(operand2 + element);
        }
    };

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
