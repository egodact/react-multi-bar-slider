import React, { Children } from 'react';
import PropTypes from 'prop-types';
import processStyle from '../utils/processStyle';
import StyledProgress from './StyledProgress';

const Progress = ({
  color,
  progress,
  style,
  height,
  slidersEqual,
  equalColor,
  roundedCorners,
  reversed,
  mouseDown,
  zIndex,
  children,
  ...props
}) => (
  <StyledProgress
    className="progress"
    color={color}
    progress={progress}
    height={height}
    equal={slidersEqual}
    equalColor={equalColor}
    roundedCorners={roundedCorners}
    reversed={reversed}
    noTransition={mouseDown}
    zIndex={zIndex}
    css={processStyle(style, {
      color,
      progress,
      height,
      slidersEqual,
      equalColor,
      roundedCorners,
      reversed,
      mouseDown,
      zIndex
    })}
    {...props}
  >
    {children && Children.map(children, child =>
      React.cloneElement(child, {
        sliderColor: color,
        reversed,
        mouseDown
      })
    )}
  </StyledProgress>
);

Progress.displayName = 'Progress';

Progress.propTypes = {
  color: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  slidersEqual: PropTypes.bool,
  equalColor: PropTypes.string,
  roundedCorners: PropTypes.bool,
  reversed: PropTypes.bool,
  mouseDown: PropTypes.bool,
  zIndex: PropTypes.number,
  children: PropTypes.node
};

export default Progress;
