import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const game = (rules, data) => {
  console.log(`Welcome to the Brain Games!\n${rules}\n`);

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!\n`);

  const iter = (count = 3) => {
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const initData = data();
    const expression = car(initData);
    const correctAnswer = cdr(initData);

    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!\n');
      iter(count - 1);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". 
      Let's try again, ${name}!\n`);
      iter();
    }
  };
  return iter();
};

export default game;
