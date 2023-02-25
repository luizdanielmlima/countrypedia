export const formatNumber = (population: number) => {
  if (population.toString().length <= 3) {
    return population;
  }

  const strPop = population.toString().split('').reverse();

  let count = 0;
  strPop.forEach((item: string, index: number) => {
    count++;
    if (count === 3 && index !== strPop.length - 1) {
      strPop[index] = `.${item}`;
      count = 0;
    }
  });

  return strPop.reverse().join('');
};
