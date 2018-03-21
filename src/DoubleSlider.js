import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

export const mediaQuery = px => `@media screen and (max-width: ${px}px)`;

export const transition = 'all 450ms cubic-bezier(.23, 1, .32, 1) 0ms';

export const ProgressSlider = glamorous.div({
  position: 'relative',
  float: 'none',
  marginBottom: 50,
  width: '100%',
  height: 14,
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition,
  [mediaQuery(768)]: {
    display: 'none'
  }
}, ({ readOnly, backgroundColor, part }) => {
  const styles = [];
  if (readOnly) styles.push({ cursor: 'auto' });
  styles.push({ backgroundColor });
  if (part) {
    styles.push({
      float: 'right',
      marginTop: 1,
      marginBottom: 0,
      width: '50%',
      cursor: 'pointer',
      [mediaQuery(1024)]: {
        width: '40%'
      }
    });
  } else {
    styles.push({
      [mediaQuery(1024)]: {
        display: 'none'
      }
    });
  }

  return styles;
});

const Dot = glamorous.span({
  position: 'absolute',
  top: 0,
  transform: 'translateX(-50%)',
  display: 'block',
  zIndex: 5,
  transition
}, ({ right }) => [{ right: `${right || 0}%` }]);

const DotIcon = glamorous.img({
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: 50,
  height: 50
});

export const Progress = glamorous.div({
  position: 'absolute',
  top: 0,
  right: 0,
  height: 14,
  transition
}, ({ color, progress, equal, equalColor, most }) => ({
  width: `${progress || 0}%`,
  backgroundColor: equal && equalColor ? equalColor : color,
  zIndex: most ? 1 : 2
}));

const limitProgress = progress => Math.max(Math.min(progress, 100), 0);

export default class DoubleSlider extends Component {
  static propTypes = {
    sliders: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired,
        dot: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        dotColor: PropTypes.string
      }).isRequired
    ).isRequired,
    activeSlider: PropTypes.oneOf([0, 1]).isRequired,
    backgroundColor: PropTypes.string,
    equalColor: PropTypes.string,
    onSlide: PropTypes.func.isRequired,
    readOnly: PropTypes.bool
  };

  static defaultProps = {
    backgroundColor: '#EEEEEE',
    readOnly: false
  };

  handleSliderClick = (e) => {
    const { sliders, activeSlider, onSlide, readOnly } = this.props;

    if (readOnly) return;

    const sliderEl = this.sliderElement(e);
    const newProgress = this.progressFromMousePos(e, sliderEl);

    const oldProgress = sliders[activeSlider].progress;
    if (newProgress === oldProgress) return;

    onSlide(newProgress);
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
    const progressFromLeft = mouseFromLeft / sliderEl.offsetWidth;
    // Return progress in percents
    return limitProgress(Math.round((1 - progressFromLeft) * 100));
  };

  mostProgress = () => {
    const sliders = this.props.sliders;
    const most = sliders.reduce(
      (acc, slider, i) =>
        slider.progress > acc[1] ? [i, slider.progress] : acc,
      [0, 0]
    );
    return most[0];
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
    const { sliders, backgroundColor, equalColor, readOnly } = this.props;
    const mostProgress = this.mostProgress();
    const slidersEqual = this.slidersEqual();

    return (
      <ProgressSlider
        readOnly={readOnly}
        backgroundColor={backgroundColor}
        onClick={this.handleSliderClick}
      >
        {sliders.map((slider, i) =>
          <Fragment key={i}>
            <Progress
              className="progress"
              color={slider.color}
              progress={slider.progress}
              most={i === mostProgress}
              equal={slidersEqual}
              equalColor={equalColor}
            />
            {slider.dot && (
              <Dot className="dot" right={slider.progress}>
                <DotIcon
                  className="icon"
                  src={slider.dot}
                  css={slider.dotStyle}
                />
              </Dot>
            )}
          </Fragment>
        )}
      </ProgressSlider>
    );
  };
}
