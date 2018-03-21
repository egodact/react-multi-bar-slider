import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import transition from './utils/transition';
import getProgressFromMousePosition from './utils/getProgressFromMousePosition';
import slidersEqual from './utils/slidersEqual';
import sortSliders from './utils/sortSliders';
import sliderPropType from './utils/sliderPropType';
import Progress from './Progress';

export const ProgressSlider = glamorous.div({
  height: 14,
  boxSizing: 'border-box',
  transition
}, ({ readOnly, width, height, backgroundColor }) => ({
  width,
  height,
  backgroundColor,
  cursor: readOnly ? 'auto' : 'pointer'
}));

export const SlidableZone = glamorous.div({
  position: 'absolute',
  width: '100%'
}, ({ size, sliderCount }) => ({
  top: -size,
  bottom: -size,
  zIndex: sliderCount
}));

export default class MultiSlider extends Component {
  static propTypes = {
    sliders: PropTypes.arrayOf(sliderPropType).isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slidableZoneSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    equalColor: PropTypes.string,
    sliderStyle: PropTypes.object,
    onSlide: PropTypes.func.isRequired,
    readOnly: PropTypes.bool
  };

  static defaultProps = {
    width: '100%',
    height: 14,
    slidableZoneSize: 7,
    backgroundColor: '#EEEEEE',
    sliderStyle: {},
    readOnly: false
  };

  state = { mouseDown: false };

  handleSliderClick = (e) => {
    const { onSlide, readOnly } = this.props;
    if (readOnly) return;

    const newProgress = getProgressFromMousePosition(e);
    onSlide(newProgress);
  };

  handleSliderMouseDown = () => this.setState({ mouseDown: true });
  handleSliderMouseUp = () => this.setState({ mouseDown: false });

  handleSliderMouseMove = (e) => {
    if (!this.state.mouseDown) return;
    this.handleSliderClick(e);
  };

  render = () => {
    const {
      sliders,
      width,
      height,
      slidableZoneSize,
      backgroundColor,
      equalColor,
      sliderStyle,
      readOnly
    } = this.props;
    const sortedSliders = sortSliders(sliders);

    return (
      <ProgressSlider
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        css={sliderStyle}
        readOnly={readOnly}
        onClick={this.handleSliderClick}
        onMouseDown={this.handleSliderMouseDown}
        onMouseUp={this.handleSliderMouseUp}
        onMouseLeave={this.handleSliderMouseUp}
        onMouseMove={this.handleSliderMouseMove}
      >
        {sliders.map((slider, i) =>
          <Progress
            slider={slider}
            height={height}
            slidersEqual={slidersEqual(sliders)}
            equalColor={equalColor}
            sortedSliders={sortedSliders}
            mouseDown={this.state.mouseDown}
            key={i}
          />
        )}
        <SlidableZone size={slidableZoneSize} sliderCount={sliders.length} />
      </ProgressSlider>
    );
  };
}
