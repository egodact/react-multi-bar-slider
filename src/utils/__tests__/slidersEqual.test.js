import slidersEqual from '../slidersEqual';

describe('slidersEqual.js', () => {
  it('returns true when all sliders are equal', () => {
    const fakeSliders = [
      {
        props: {
          progress: 56
        }
      },
      {
        props: {
          progress: 56
        }
      },
      {
        props: {
          progress: 56
        }
      }
    ];
    expect(slidersEqual(fakeSliders)).toBe(true);
  });

  it('returns false when not all sliders are equal', () => {
    const fakeSliders = [
      {
        props: {
          progress: 56
        }
      },
      {
        props: {
          progress: 76
        }
      },
      {
        props: {
          progres: 56
        }
      }
    ];
    expect(slidersEqual(fakeSliders)).toBe(false);
  });
});
