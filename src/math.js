export const getRandomInt = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const isEven = num => num % 2 === 0;

export const sum = (num1, num2) => num1 + num2;
export const subtrac = (num1, num2) => num1 - num2;
export const multi = (num1, num2) => num1 * num2;

export const getRandomOper = () => {
  const arr = ['+', '-', '*'];
  const index = getRandomInt(0, 3);
  return arr[index];
};

export const GCD = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return GCD(num2, num1 % num2);
};

export const Balance = (arr) => {
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);

  const delta = Math.floor((max - min) / 2);

  if (delta > 0) {
    const iMin = arr.lastIndexOf(min);
    const iMax = arr.indexOf(max);

    const newArr = arr;

    newArr[iMin] += delta;
    newArr[iMax] -= delta;

    Balance(newArr);
  }
  return arr.sort((a, b) => a - b);
};
