import getSliderElement from '../getSliderElement';

describe('getSliderElement.js', () => {
  it('works correctly', () => {
    const fakeEvent = {
      target: {
        classList: []
      }
    };
    expect(getSliderElement(fakeEvent)).toBe(fakeEvent.target);
  });

  it('works correctly for icons', () => {
    const fakeEvent = {
      target: {
        classList: ['', 'icon'],
        parentNode: {
          parentNode: {
            foo: 'bar'
          }
        }
      }
    };
    expect(getSliderElement(fakeEvent)).toEqual({ foo: 'bar' });
  });

  it('works correctly for dots and progress elements', () => {
    const fakeEvent = {
      target: {
        classList: ['', 'dot'],
        parentNode: {
          foo: 'bar'
        }
      }
    };
    expect(getSliderElement(fakeEvent)).toEqual({ foo: 'bar' });

    const fakeEvent2 = {
      target: {
        classList: ['', 'progress'],
        parentNode: {
          foo: 'bar'
        }
      }
    };
    expect(getSliderElement(fakeEvent2)).toEqual({ foo: 'bar' });    
  });
});
