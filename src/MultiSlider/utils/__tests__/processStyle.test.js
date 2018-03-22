import processStyle from '../processStyle';

describe('processStyle.js', () => {
  it('returns given style when its not a function', () => {
    const style = { foo: 'bar' };
    expect(processStyle(style, {})).toBe(style);
  });

  it('calls style when its a function with given props', () => {
    const style = jest.fn();
    const props = { foo: 'bar' };
    processStyle(style, props);
    expect(style.mock.calls[0][0]).toBe(props);
  });
});
