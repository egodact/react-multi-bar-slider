const getSliderElement = (e) => {
  const sliderEl = e.target;

  // Make sure we select the slider element
  if (sliderEl.classList[1] === 'icon') {
    return sliderEl.parentNode.parentNode;
  }
  if (sliderEl.classList[1] === 'dot' || sliderEl.classList[1] === 'progress') {
    return sliderEl.parentNode;
  }
  return sliderEl;
};

export default getSliderElement;
