import React, { Component } from 'react';
import DoubleSlider from './DoubleSlider';
import studentIcon from './student.png';
import coachIcon from './coach.png';
import glamorous from 'glamorous';

const Container = glamorous.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 600,
  height: 14
});

export default class App extends Component {
  state = {
    progress: 10
  };

  onSlide = (progress) => {
    this.setState({ progress })
  };

  render = () => (
    <Container>
      <DoubleSlider
        sliders={[
          {
            color: 'green',
            progress: 87,
            dot: {
              icon: studentIcon,
              iconStyle: { bottom: -7 }
            }
          },
          {
            color: 'purple',
            progress: 45,
            dot: {
              icon: coachIcon,
              iconStyle: { top: 7 }
            }
          },
          {
            color: 'orange',
            progress: this.state.progress,
            dot: true
          },
        ]}
        activeSlider={2}
        equalColor="blue"
        progress={this.state.progress}
        onSlide={this.onSlide}
      />
    </Container>
  );
}
