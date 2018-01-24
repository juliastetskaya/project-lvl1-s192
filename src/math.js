export const getRandomInt = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const isEven = num => num % 2;

export const sum = (num1, num2) => num1 + num2;
export const subtrac = (num1, num2) => num1 - num2;
export const multi = (num1, num2) => num1 * num2;

export const getRandomOper = () => {
  const arr = ['+', '-', '*'];
  const index = getRandomInt(0, 3);
  return arr[index];
};

export const NOD = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return NOD(num2, num1 % num2);
};
