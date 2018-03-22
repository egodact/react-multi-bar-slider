const getSliderElement = (e) => {
  const sliderElement = e.target;
  const elementClass = sliderElement.classList[1];

  if (elementClass === 'icon') {
    return sliderElement.parentNode.parentNode;
  }

  if (elementClass === 'dot' || elementClass === 'progress') {
    return sliderElement.parentNode;
  }

  return sliderElement;
};

export default getSliderElement;
