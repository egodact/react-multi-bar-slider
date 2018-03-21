import React, { Component } from 'react';
import MultiSlider from './MultiSlider';
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
  height: 600
});

const Break = glamorous.div({
  marginBottom: 75
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
      <MultiSlider
        sliders={[
          {
            color: '#00BDAF',
            progress: this.state.progress,
            dot: {
              icon: studentIcon,
              iconStyle: { bottom: -7 }
            }
          },
          {
            color: '#AB47BC',
            progress: 45,
            dot: {
              icon: coachIcon,
              iconStyle: { top: 7 }
            }
          }
        ]}
        slidableZoneSize={50}
        progress={this.state.progress}
        onSlide={this.onSlide}
      />
      <Break />
      <MultiSlider
        sliders={[
          {
            color: '#00BDAF',
            progress: this.state.progress
          },
          {
            color: '#AB47BC',
            progress: 45
          }
        ]}
        width="50%"
        equalColor="#3F51B5"
        style={{ marginLeft: '50%' }}
        progress={this.state.progress}
        onSlide={this.onSlide}
        readOnly
      />
      <Break />
      <MultiSlider
        sliders={[
          {
            color: '#42A5F5',
            progress: this.state.progress,
            dot: {
              color: '#1976D2'
            }
          }
        ]}
        height={18}
        slidableZoneSize={36}
        progress={this.state.progress}
        onSlide={this.onSlide}
        roundedCorners
      />
    </Container>
  );
}
