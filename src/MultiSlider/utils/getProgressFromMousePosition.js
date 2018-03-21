import getSliderElement from './getSliderElement';
import limitProgress from './limitProgress';

const getProgressFromMousePosition = (e) => {
  const sliderEl = getSliderElement(e);
  const boundingRect = sliderEl.getBoundingClientRect();
  const mouseFromLeft = e.pageX - boundingRect.left;
  const progressFromLeft = mouseFromLeft / boundingRect.width;
  const progress = Math.round((1 - progressFromLeft) * 100);
  return limitProgress(progress);
};

export default getProgressFromMousePosition;
