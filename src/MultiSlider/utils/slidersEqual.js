const slidersEqual = (sliders) =>
  sliders.reduce((acc, slider, i) => {
    if (!acc) return acc;
    if (!sliders[i - 1]) return true;
    if (slider.progress === sliders[i - 1].progress) return true;
    return false;
  }, true);

export default slidersEqual;
