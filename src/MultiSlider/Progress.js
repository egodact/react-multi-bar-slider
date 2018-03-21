import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import sliderPropType from './utils/sliderPropType';
import glamorous from 'glamorous';
import transition from './utils/transition';
import Dot from './Dot';

export const StyledProgress = glamorous.div({
  position: 'absolute',
  top: 0,
  right: 0
}, ({ color, progress, height, equal, equalColor, zIndex, noTransition }) => ({
  width: `${progress || 0}%`,
  height,
  backgroundColor: equal && equalColor ? equalColor : color,
  zIndex,
  transition: noTransition ? 'none' : transition
}));

const Progress = ({
  slider,
  height,
  slidersEqual,
  equalColor,
  sortedSliders,
  mouseDown
}) => (
  <Fragment>
    <StyledProgress
      className="progress"
      color={slider.color}
      progress={slider.progress}
      height={height}
      equal={slidersEqual}
      equalColor={equalColor}
      zIndex={sortedSliders.indexOf(slider)}
      noTransition={mouseDown}
    />
    {slider.dot && (
      <Dot
        dot={slider.dot}
        progress={slider.progress}
        sliderColor={slider.color}
        mouseDown={mouseDown}
      />
    )}
  </Fragment>
);

Progress.propTypes = {
  slider: sliderPropType,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  slidersEqual: PropTypes.bool.isRequired,
  equalColor: PropTypes.string.isRequired,
  sortedSliders: PropTypes.arrayOf(sliderPropType).isRequired,
  mouseDown: PropTypes.bool.isRequired
};

export default Progress;
