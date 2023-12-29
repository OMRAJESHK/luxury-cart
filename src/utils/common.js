export const formatNumber = (number) => {
  return number.toLocaleString("en-IN", { minimumFractionDigits: 2 });
};

export function fillArrayUpTo(limit) {
  const resultArray = [];
  for (let i = 1; i <= limit; i++) {
    resultArray.push(i);
  }
  return resultArray;
}
