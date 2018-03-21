import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

export const transition = 'all 450ms cubic-bezier(.23, 1, .32, 1) 0ms';

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

const Dot = glamorous.span({
  position: 'absolute',
  display: 'block',
  zIndex: 5,
  borderRadius: '50%'
}, ({ right, hasIcon, width, height, color, noTransition }) => ({
  top: hasIcon ? 0 : '50%',
  right: `${right || 0}%`,
  transform: hasIcon ? 'translateX(-50%)' : 'translate(50%, -50%)',
  width: hasIcon ? 0 : width,
  height: hasIcon ? 0 : height,
  backgroundColor: hasIcon ? 'transparent' : color,
  transition: noTransition ? 'none' : transition
}));

const DotIcon = glamorous.img({
  position: 'absolute',
  transform: 'translateX(-50%)',
  userSelect: 'none'
}, ({ width, height }) => ({
  width,
  height
}));

export const Progress = glamorous.div({
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

export const SlidableZone = glamorous.div({
  position: 'absolute',
  width: '100%'
}, ({ size, sliderCount }) => ({
  top: -size,
  bottom: -size,
  zIndex: sliderCount
}));

const limitProgress = progress => Math.max(Math.min(progress, 100), 0);

export default class MultiSlider extends Component {
  static propTypes = {
    sliders: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired,
        dot: PropTypes.oneOfType([
          PropTypes.shape({
            color: PropTypes.string,
            icon: PropTypes.string,
            style: PropTypes.object
          }),
          PropTypes.bool
        ])
      }).isRequired
    ).isRequired,
    activeSlider: PropTypes.number,
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
    activeSlider: 0,
    width: '100%',
    height: 14,
    slidableZoneSize: 7,
    backgroundColor: '#EEEEEE',
    sliderStyle: {},
    readOnly: false
  };

  state = { mouseDown: false };

  handleSliderClick = (e) => {
    const { sliders, activeSlider, onSlide, readOnly } = this.props;

    if (readOnly) return;

    const sliderEl = this.sliderElement(e);
    const newProgress = this.progressFromMousePos(e, sliderEl);

    const oldProgress = sliders[activeSlider].progress;
    if (newProgress === oldProgress) return;

    onSlide(newProgress);
  };

  handleSliderMouseDown = () => this.setState({ mouseDown: true });
  handleSliderMouseUp = () => this.setState({ mouseDown: false });

  handleSliderMouseMove = (e) => {
    if (!this.state.mouseDown) return;
    this.handleSliderClick(e);
  };

  sliderElement = (e) => {
    const sliderEl = e.target;

    // Make sure we select the slider element
    if (sliderEl.classList[1] === 'icon') {
      return sliderEl.parentNode.parentNode;
    }
    if (sliderEl.classList[1] === 'dot' || sliderEl.classList[1] === 'progress') {
      return sliderEl.parentNode;
    }
    return sliderEl;
  };

  progressFromMousePos = (e, sliderEl) => {
    const boundingRect = sliderEl.getBoundingClientRect();
    const mouseFromLeft = e.pageX - boundingRect.left;
    const progressFromLeft = mouseFromLeft / boundingRect.width;
    // Return progress in percents
    return limitProgress(Math.round((1 - progressFromLeft) * 100));
  };

  sortSliders = () => {
    const sliders = [...this.props.sliders];
    return sliders.sort((a, b) => b.progress - a.progress);
  };

  slidersEqual = () => {
    const sliders = this.props.sliders;
    return sliders.reduce((acc, slider, i) => {
      if (!acc) return acc;
      if (!sliders[i - 1]) return true;
      if (slider.progress === sliders[i - 1].progress) return true;
      return false;
    }, true);
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
    const slidersEqual = this.slidersEqual();
    const sortedSliders = this.sortSliders();

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
        onMouseMove={this.handleSliderMouseMove}
      >
        {sliders.map((slider, i) =>
          <Fragment key={i}>
            <Progress
              className="progress"
              color={slider.color}
              progress={slider.progress}
              height={height}
              equal={slidersEqual}
              equalColor={equalColor}
              zIndex={sortedSliders.indexOf(slider)}
              noTransition={this.state.mouseDown}
            />
            {slider.dot && (
              <Dot
                className="dot"
                right={slider.progress}
                hasIcon={!!slider.dot.icon}
                width={slider.dot.width || 28}
                height={slider.dot.height || 28}
                color={slider.dot.color || slider.color}
                css={slider.dot.style}
                noTransition={this.state.mouseDown}
              >
                {slider.dot.icon && (
                  <DotIcon
                    className="icon"
                    src={slider.dot.icon}
                    width={slider.dot.width || 50}
                    height={slider.dot.height || 50}
                    draggable={false}
                    css={slider.dot.iconStyle}
                  />
                )}
              </Dot>
            )}
          </Fragment>
        )}
        <SlidableZone size={slidableZoneSize} sliderCount={sliders.length} />
      </ProgressSlider>
    );
  };
}
