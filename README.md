# react-multi-bar-slider
Slider component with multiple bars for React.

[Demo repo](https://github.com/rafaelklaessen/react-multi-bar-slider-demo)

![Multi slider screenshot](https://github.com/rafaelklaessen/react-multi-bar-slider/raw/master/screenshots/screenshot.png "Screenshot of the multi slider demo")

## Install
`yarn add react-multi-bar-slider` or `npm install --save react-multi-bar-slider`

## Usage
See the [demo repo](https://github.com/rafaelklaessen/react-multi-bar-slider-demo).

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

Prop | Description | Type | Default
---- | ----------- | ---- | -------
`sliders*` | Slider bars (see below for full prop type) | `array` |
`width` | Width of the slider | `number` or `string` | `100%`
`height` | Height of the slider | `number` or `string` | `14px`
`slidableZoneSize` | Size of the zone in which sliders can be dragged | `number` or `string` | `7px`,
`backgroundColor` | Background color of the slider | `string` | `#EEEEEE`
`equalColor` | Color of all bars when their values are equal | `string` |
`style` | Custom style for the slider | `object` or `function` | `{}`
`onSlide*` | Callback that gets called when the progress is updated | `function` |
`roundedCorners` | When set to `true`, the slider has rounded corners | `bool` | `false`
`reversed` | When set to `true`, the slider is reversed | `bool` | `false`
`readOnly` | When set to `true`, the slider can't be updated | `bool` | `false`

All other props (not documented here) will be passed on to the root element.

#### The slider prop type
Field | Description | Type | Default
----- | ----------- | ---- | -------
`color*` | Color of the bar | `string` |
`progress*` | Progress of the bar | `number` |
`style` | Custom style for the bar | `object` of `function` |
`dot` | The slider dot (see below) | `bool` or `function` |

#### The dot prop type
`slider.dot` can be either a boolean or an object. When it's `true`, it'll show a standard dot.
The object has the following fields:

Field | Description | Type | Default
----- | ----------- | ---- | -------
`width` | Width of the dot | `number` or `string` | `50` when the dot has an icon, `28` if not
`height` | Height of the dot | `number` or `string` | `50` when the dot has an icon, `28` if not
`color` | Color of the dot | `string` |
`icon` | URL of the image to use as dot icon | `string` |
`style` | Custom style for the dot | `object` or `function` |

#### How custom styles work
When a function is passed to a `style` prop rather than an object, it is expected to return an object.
The style function will be called with all props that that component has (except for the `style` prop and any internal callbacks). The return value of the function will be used as style (see the [demo repo](https://github.com/rafaelklaessen/react-multi-bar-slider-demo) for an example).
