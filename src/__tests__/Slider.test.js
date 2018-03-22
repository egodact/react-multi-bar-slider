import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Slider from '../Slider';
import StyledSlider from '../Slider/StyledSlider';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  global.sliderProps = {
    width: 1000,
    height: 20,
    backgroundColor: 'purple',
    style: {},
    onSlide: () => {},
    onMouseMoveActivate: () => {},
    onMouseMoveDeactivate: () => {},
    onMouseMove: () => {},
    roundedCorners: true,
    readOnly: false
  };
});

afterAll(() => {
  delete global.sliderProps;
});

/* global sliderProps */
describe('Slider.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<Slider {...sliderProps}>Foo</Slider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const slider = render(<Slider {...sliderProps}>Foo</Slider>);
    expect(slider).toBeDefined();
  });

  it('renders a StyledSlider', () => {
    const slider = shallow(<Slider {...sliderProps}>Foo</Slider>);
    expect(slider.find(StyledSlider).length).toBe(1);
  });
});
