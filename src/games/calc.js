import { cons } from 'hexlet-pairs';
import { getRandomInt, getRandomOper, sum, multiplication, subtraction } from '../math';
import game from '../index';

const rules = 'What is the result of the expression?';

const data = () => {
  const operand1 = getRandomInt(1, 20);
  const operand2 = getRandomInt(1, 20);
  const operation = getRandomOper();

  const expression = `${operand1} ${operation} ${operand2}`;

  const objOper = {
    '+': sum(operand1, operand2),
    '-': subtraction(operand1, operand2),
    '*': multiplication(operand1, operand2),
  };

  const result = objOper[operation];

  return cons(expression, String(result));
};

const calc = () => game(rules, data);

export default calc;
