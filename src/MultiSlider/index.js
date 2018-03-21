import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import getProgressFromMousePosition from './utils/getProgressFromMousePosition';
import slidersEqual from './utils/slidersEqual';
import sortSliders from './utils/sortSliders';
import sliderPropType from './utils/sliderPropType';
import Slider from './Slider';
import Progress from './Progress';

export const SlidableZone = glamorous.div({
  position: 'absolute',
  width: '100%'
}, ({ size, sliderCount }) => ({
  top: -size,
  bottom: -size,
  zIndex: sliderCount
}));

export default class MultiSlider extends PureComponent {
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

  handleSlide = (e) => {
    const { onSlide, readOnly } = this.props;
    if (readOnly) return;

    const newProgress = getProgressFromMousePosition(e);
    onSlide(newProgress);
  };

  handleMouseMoveActivate = () => this.setState({ mouseDown: true });
  handleMouseMoveDeactivate = () => this.setState({ mouseDown: false });

  handleMouseMove = (e) => {
    if (!this.state.mouseDown) return;
    this.handleSlide(e);
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
      <Slider
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        sliderStyle={sliderStyle}
        onSlide={this.handleSlide}
        onMouseMoveActivate={this.handleMouseMoveActivate}
        onMouseMoveDeactivate={this.handleMouseMoveDeactivate}
        onMouseMove={this.handleMouseMove}
        readOnly={readOnly}
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
      </Slider>
    );
  };
}
