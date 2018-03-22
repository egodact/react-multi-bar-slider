# react-multi-bar-slider
Slider component with multiple bars for React.

[Demo](https://github.com/rafaelklaessen/react-multi-bar-slider-demo)

![Multi slider screenshot](https://github.com/rafaelklaessen/react-multi-bar-slider/raw/master/screenshots/screenshot.png "Screenshot of the multi slider demo")

## Install
`yarn add react-multi-bar-slider` or `npm install --save react-multi-bar-slider`

## Usage
See the [demo](https://github.com/rafaelklaessen/react-multi-bar-slider-demo).

### Basic example
```javascript
import MultiSlider from 'react-multi-bar-slider';

export default class App extends Component {
  state = {
    progress: 10
  };

  onSlide = newProgress => this.setState({ progress: newProgress });

  render() {
    return (
      <MultiSlider
        sliders={[
          {
            color: 'green',
            progress: this.state.progress,
            dot: true
          },
          {
            color: 'purple',
            progress: 45
          }
        ]}
        onSlide={this.onSlide}
      />
    );
  }
}
```

### Advanced example
```javascript
import MultiSlider from 'react-multi-bar-slider';

export default class App extends Component {
  state = {
    progress: 10
  };

  onSlide = newProgress => this.setState({ progress: newProgress });

  render() {
    return (
      <MultiSlider
        sliders={[
          {
            color: 'green',
            progress: this.state.progress
            dot: {
              color: 'grey'
            }
          },
          {
            color: 'purple',
            progress: 45,
            dot: {
              color: 'grey'
            }
          }
        ]}
        width={600}
        height={20}
        slidableZoneSize={40}
        backgroundColor="bisque"
        equalColor="blue"
        style={{ marginBottom: 40 }}
        onSlide={this.onSlide}
        roundedCorners
        reversed
      />
    );
  }
}
```

## Props
`*` = Required

Prop | Description | default
---- | ----------- | -------
`sliders*` | Slider bars (see below for full prop type) |
`width` | Width of the slider | `100%`
`height` | Height of the slider | `14px`
`slidableZoneSize` | Size of the zone in which sliders can be dragged | `7px`,
`backgroundColor` | Background color of the slider | `#EEEEEE`
`equalColor` | Color of all bars when their values are equal |
`style` | Custom style for the slider | `{}`
`onSlide*` | Callback that gets called when the progress is updated |
`roundedCorners` | When set to `true`, the slider has rounded corners | `false`
`reversed` | When set to `true`, the slider is reversed | `false`
`readOnly` | When set to `true`, the slider can't be updated | `false`
