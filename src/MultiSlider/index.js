import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getProgressFromMousePosition from './utils/getProgressFromMousePosition';
import slidersEqual from './utils/slidersEqual';
import sortSliders from './utils/sortSliders';
import sliderPropType from './utils/sliderPropType';
import Slider from './Slider';
import Progress from './Progress';
import SlidableZone from './SlidableZone';

export default class MultiSlider extends PureComponent {
  static propTypes = {
    sliders: PropTypes.arrayOf(sliderPropType).isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slidableZoneSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    equalColor: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    onSlide: PropTypes.func.isRequired,
    roundedCorners: PropTypes.bool,
    reverse: PropTypes.bool,
    readOnly: PropTypes.bool
  };

  static defaultProps = {
    width: '100%',
    height: 14,
    slidableZoneSize: 7,
    backgroundColor: '#EEEEEE',
    roundedCorners: false,
    style: {},
    reversed: false,
    readOnly: false
  };

  state = { mouseDown: false };

  handleSlide = (e) => {
    const { onSlide, reversed, readOnly } = this.props;
    if (readOnly) return;

    const newProgress = getProgressFromMousePosition(e, reversed);
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
      style,
      roundedCorners,
      reversed,
      readOnly
    } = this.props;
    const allSlidersEqual = slidersEqual(sliders);
    const sortedSliders = sortSliders(sliders);

    return (
      <Slider
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        style={style}
        onSlide={this.handleSlide}
        onMouseMoveActivate={this.handleMouseMoveActivate}
        onMouseMoveDeactivate={this.handleMouseMoveDeactivate}
        onMouseMove={this.handleMouseMove}
        roundedCorners={roundedCorners}
        readOnly={readOnly}
      >
        {sliders.map((slider, i) =>
          <Progress
            slider={slider}
            height={height}
            slidersEqual={allSlidersEqual}
            equalColor={equalColor}
            roundedCorners={roundedCorners}
            reversed={reversed}
            mouseDown={this.state.mouseDown}
            zIndex={sortedSliders.indexOf(slider)}
            key={i}
          />
        )}
        <SlidableZone size={slidableZoneSize} zIndex={sliders.length} />
      </Slider>
    );
  };
}
