import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MultiSlider from '../MultiSlider';
import Slider from '../MultiSlider/Slider';
import SlidableZone from '../MultiSlider/SlidableZone';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  global.multiSliderProps = {
    sliders: [
      {
        color: '#00BDAF',
        progress: 17,
        dot: {
          icon: 'foo.png',
          iconStyle: { bottom: -7 }
        }
      },
      {
        color: '#AB47BC',
        progress: 45,
        style: ({ slidersEqual }) => ({
          borderTopLeftRadius: slidersEqual ? 7 : 0
        }),
        dot: {
          icon: 'bar.png',
          iconStyle: { top: 7 }
        }
      }
    ],
    slidableZoneSize: 50,
    onSlide: () => {}
  };
});

afterAll(() => {
  delete global.multiSliderProps;
});

const Child = () => <div />;

/* global multiSliderProps */
describe('MultiSlider.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <MultiSlider {...multiSliderProps}>
          <Child progress={4} />
        </MultiSlider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const multiSlider = render(
      <MultiSlider {...multiSliderProps}>
        <Child progress={4} />
      </MultiSlider>
    );
    expect(multiSlider).toBeDefined();
  });

  it('renders a Slider', () => {
    const multiSlider = shallow(
      <MultiSlider {...multiSliderProps}>
        <Child progress={4} />
      </MultiSlider>
    );
    expect(multiSlider.find(Slider).length).toBe(1);
  });

  it('passes on undocumented props to the Slider', () => {
    const multiSlider = shallow(
      <MultiSlider {...multiSliderProps} foo="bar">
        <Child progress={4} />
      </MultiSlider>
    );
    expect(multiSlider.find(Slider).prop('foo')).toBe('bar');
  });

  it('passes the correct props to its Progress children', () => {
    const multiSlider = shallow(
      <MultiSlider {...multiSliderProps}>
        <Child progress={4} />
      </MultiSlider>
    );
    expect(multiSlider.find('Child').props()).toEqual({
      height: 14,
      progressEqual: true,
      equalColor: undefined,
      roundedCorners: false,
      reversed: false,
      mouseDown: false,
      zIndex: 0,
      progress: 4
    });
  });

  it('renders a SlidableZone', () => {
    const multiSlider = shallow(
      <MultiSlider {...multiSliderProps}>
        <Child progress={4} />
      </MultiSlider>
    );
    expect(multiSlider.find(SlidableZone).length).toBe(1);
  });

  it('handles slider clicks correctly', () => {
    const onSlide = jest.fn();
    const multiSlider = shallow(
      <MultiSlider {...multiSliderProps} onSlide={onSlide}>
        <Child progress={4} />
      </MultiSlider>
    );
    multiSlider.find(Slider).prop('onSlide')({
      target: {
        classList: [],
        getBoundingClientRect: () => ({
          left: 154,
          width: 876
        })
      },
      pageX: 933.64
    });
    expect(onSlide.mock.calls[0][0]).toBe(89);
  });

  it('handles mouse moves correctly', () => {
    const onSlide = jest.fn();
    const multiSlider = shallow(
      <MultiSlider {...multiSliderProps} onSlide={onSlide}>
        <Child progress={4} />
      </MultiSlider>
    );
    const fakeEvent = {
      target: {
        classList: [],
        getBoundingClientRect: () => ({
          left: 154,
          width: 876
        })
      },
      pageX: 933.64
    };
    multiSlider.find(Slider).prop('onMouseMove')(fakeEvent);
    expect(onSlide.mock.calls.length).toBe(0);

    multiSlider.find(Slider).prop('onMouseMoveActivate')();
    multiSlider.update();
    multiSlider.find(Slider).prop('onMouseMove')(fakeEvent);
    expect(onSlide.mock.calls[0][0]).toBe(89);

    multiSlider.find(Slider).prop('onMouseMoveDeactivate')();
    multiSlider.update();
    multiSlider.find(Slider).prop('onMouseMove')(fakeEvent);
    expect(onSlide.mock.calls.length).toBe(1);
  });
});
