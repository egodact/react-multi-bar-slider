import React, { Component } from 'react';
import DoubleSlider from './DoubleSlider';
import studentIcon from './student.png';
import coachIcon from './coach.png';

export default class App extends Component {
  state = {
    progress: 10
  };

  onSlide = (progress) => {
    this.setState({ progress })
  };

  render = () => (
    <DoubleSlider
      sliders={[
        {
          color: 'green',
          progress: this.state.progress,
          dot: studentIcon,
          dotStyle: { bottom: -7 }
        },
        {
          color: 'purple',
          progress: 45,
          dot: coachIcon,
          dotStyle: { top: 7 }
        }
      ]}
      activeSlider={0}
      equalColor="blue"
      progress={this.state.progress}
      onSlide={this.onSlide}
    />
  );
}
