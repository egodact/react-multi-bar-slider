import React from 'react';
import PropTypes from 'prop-types';
import sliderPropType from '../utils/sliderPropType';
import Dot from './Dot';
import processStyle from '../utils/processStyle';
import StyledProgress from './StyledProgress';

const Progress = ({
  slider,
  height,
  slidersEqual,
  equalColor,
  roundedCorners,
  mouseDown,
  zIndex
}) => (
  <StyledProgress
    className="progress"
    color={slider.color}
    progress={slider.progress}
    height={height}
    equal={slidersEqual}
    equalColor={equalColor}
    roundedCorners={roundedCorners}
    noTransition={mouseDown}
    zIndex={zIndex}
    css={processStyle(slider.style, {
      slider,
      height,
      slidersEqual,
      equalColor,
      roundedCorners,
      mouseDown,
      zIndex
    })}
  >
    {slider.dot && (
      <Dot
        dot={slider.dot}
        sliderColor={slider.color}
        mouseDown={mouseDown}
      />
    )}
  </StyledProgress>
);

Progress.propTypes = {
  slider: sliderPropType,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  slidersEqual: PropTypes.bool.isRequired,
  equalColor: PropTypes.string,
  roundedCorners: PropTypes.bool.isRequired,
  mouseDown: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired
};

export default Progress;
