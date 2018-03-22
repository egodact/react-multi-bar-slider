import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MultiSlider from '../index';
import Slider from '../Slider';
import Progress from '../Progress';
import SlidableZone from '../SlidableZone';

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

describe('MultiSlider.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<MultiSlider {...multiSliderProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const multiSlider = render(<MultiSlider {...multiSliderProps} />);
    expect(multiSlider).toBeDefined();
  });

  it('renders a Slider', () => {
    const multiSlider = shallow(<MultiSlider {...multiSliderProps} />);
    expect(multiSlider.find(Slider).length).toBe(1);
  });

  it('renders a Progress for every given slider', () => {
    const multiSlider = shallow(<MultiSlider {...multiSliderProps} />);
    expect(multiSlider.find(Progress).length).toBe(2);
  });

  it('renders a SlidableZone', () => {
    const multiSlider = shallow(<MultiSlider {...multiSliderProps} />);
    expect(multiSlider.find(SlidableZone).length).toBe(1);
  });

  it('handles slider clicks correctly', () => {
    const onSlide = jest.fn();
    const multiSlider = shallow(
      <MultiSlider {...multiSliderProps} onSlide={onSlide} />
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
    expect(onSlide.mock.calls[0][0]).toBe(11);
  });

  it('handles mouse moves correctly', () => {
    const onSlide = jest.fn();
    const multiSlider = shallow(
      <MultiSlider {...multiSliderProps} onSlide={onSlide} />
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
    expect(onSlide.mock.calls[0][0]).toBe(11);

    multiSlider.find(Slider).prop('onMouseMoveDeactivate')();
    multiSlider.update();
    multiSlider.find(Slider).prop('onMouseMove')(fakeEvent);
    expect(onSlide.mock.calls.length).toBe(1);
  });
});
