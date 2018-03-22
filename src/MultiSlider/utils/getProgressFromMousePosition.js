import getSliderElement from './getSliderElement';
import limitProgress from './limitProgress';

const getProgressFromMousePosition = (e, reversed) => {
  const sliderElement = getSliderElement(e);
  const boundingRect = sliderElement.getBoundingClientRect();
  const mouseFromLeft = e.pageX - boundingRect.left;
  const progressFromLeft = mouseFromLeft / boundingRect.width;
  const progress = Math.round(progressFromLeft * 100);
  if (reversed) return limitProgress(100 - progress);
  return limitProgress(progress);
};

export default getProgressFromMousePosition;
