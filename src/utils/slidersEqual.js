const slidersEqual = (sliders) =>
  sliders.reduce((acc, slider, i) => {
    if (!acc) return acc;
    if (!sliders[i - 1]) return true;
    return slider.progress === sliders[i - 1].progress;
  }, true);

export default slidersEqual;
