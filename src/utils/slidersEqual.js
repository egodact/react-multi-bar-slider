const slidersEqual = sliders =>
  sliders.reduce((acc, slider, i) => {
    if (!acc) return acc;
    if (!sliders[i - 1]) return true;
    return slider.props.progress === sliders[i - 1].props.progress;
  }, true);

export default slidersEqual;
