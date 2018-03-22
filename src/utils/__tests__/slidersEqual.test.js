import slidersEqual from '../slidersEqual';

describe('slidersEqual.js', () => {
  it('returns true when all sliders are equal', () => {
    const fakeSliders = [
      {
        progress: 56
      },
      {
        progress: 56
      },
      {
        progress: 56
      }
    ];
    expect(slidersEqual(fakeSliders)).toBe(true);
  });

  it('returns false when not all sliders are equal', () => {
    const fakeSliders = [
      {
        progress: 56
      },
      {
        progress: 76
      },
      {
        progres: 56
      }
    ];
    expect(slidersEqual(fakeSliders)).toBe(false);
  });
});
