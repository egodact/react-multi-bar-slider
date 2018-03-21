import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import transition from './utils/transition';
import getHalf from './utils/getHalf';

export const StyledSlider = glamorous.div({
  height: 14,
  boxSizing: 'border-box',
  transition
}, ({ readOnly, width, height, backgroundColor, roundedCorners }) => ({
  width,
  height,
  backgroundColor,
  borderRadius: roundedCorners ? getHalf(height) : 0,
  cursor: readOnly ? 'auto' : 'pointer'
}));

const Slider = ({
  width,
  height,
  backgroundColor,
  style,
  onSlide,
  onMouseMoveActivate,
  onMouseMoveDeactivate,
  onMouseMove,
  roundedCorners,
  readOnly,
  children
}) => (
  <StyledSlider
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    css={style}
    roundedCorners={roundedCorners}
    readOnly={readOnly}
    onClick={onSlide}
    onMouseDown={onMouseMoveActivate}
    onMouseUp={onMouseMoveDeactivate}
    onMouseLeave={onMouseMoveDeactivate}
    onMouseMove={onMouseMove}
  >
    {children}
  </StyledSlider>
);

Slider.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onSlide: PropTypes.func.isRequired,
  onMouseMoveActivate: PropTypes.func.isRequired,
  onMouseMoveDeactivate: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Slider;
