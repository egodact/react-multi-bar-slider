import React from 'react';
import PropTypes from 'prop-types';
import processStyle from '../utils/processStyle';
import StyledSlider from './StyledSlider';

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
    roundedCorners={roundedCorners}
    readOnly={readOnly}
    css={processStyle(style, {
      width,
      height,
      backgroundColor,
      roundedCorners,
      readOnly
    })}
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
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  onSlide: PropTypes.func.isRequired,
  onMouseMoveActivate: PropTypes.func.isRequired,
  onMouseMoveDeactivate: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  roundedCorners: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Slider;
