export const getRandomInt = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const isEven = num => num % 2 === 0;

export const sum = (num1, num2) => num1 + num2;
export const subtraction = (num1, num2) => num1 - num2;
export const multiplication = (num1, num2) => num1 * num2;

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

export const balanceSort = (arr) => {
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);

  const delta = Math.floor((max - min) / 2);

  if (delta > 0) {
    const iMin = arr.lastIndexOf(min);
    const iMax = arr.indexOf(max);

    const newArr = arr;

    newArr[iMin] += delta;
    newArr[iMax] -= delta;

    balanceSort(newArr);
  }
  return arr.sort((a, b) => a - b);
};

export const makeProgression = (firstMember, difference) => {
  const arr = [];

  let nextMember = firstMember;

  for (let i = 1; i <= 10; i += 1) {
    arr.push(nextMember);
    nextMember += difference;
  }
  return arr;
};
