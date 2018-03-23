import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import StyledSlider from '../StyledSlider';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  global.styledSliderProps = {
    width: 1000,
    height: 20,
    backgroundColor: 'purple',
    roundedCorners: true,
    readOnly: false,
    css: {}
  };
});

afterAll(() => {
  delete global.styledSliderProps;
});

/* global styledSliderProps */
describe('StyledSlider.js', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<StyledSlider {...styledSliderProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const styledSlider = render(<StyledSlider {...styledSliderProps} />);
    expect(styledSlider).toBeDefined();
  });
});
