const getHalf = (number) => {
  if (typeof number !== 'string') return number / 2;
  const asNumber = Number(number.slice(0, number.length - 1));
  return `${asNumber / 2}%`;
};

export default getHalf;
