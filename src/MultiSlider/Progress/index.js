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
  reversed,
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
    reversed={reversed}
    noTransition={mouseDown}
    zIndex={zIndex}
    css={processStyle(slider.style, {
      slider,
      height,
      slidersEqual,
      equalColor,
      roundedCorners,
      reversed,
      mouseDown,
      zIndex
    })}
  >
    {slider.dot && (
      <Dot
        dot={slider.dot}
        sliderColor={slider.color}
        reversed={reversed}
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
  reversed: PropTypes.bool.isRequired,
  mouseDown: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired
};

export default Progress;
