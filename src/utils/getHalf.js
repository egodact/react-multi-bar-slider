const getHalf = (value) => {
  if (typeof value === 'number') return value / 2;
  const asNumber = parseFloat(value);
  const unit = value.slice(asNumber.toString().length, value.length);
  return `${asNumber / 2}${unit}`;
};

export default getHalf;
