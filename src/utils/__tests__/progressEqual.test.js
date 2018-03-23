import progressEqual from '../progressEqual';

describe('progressEqual.js', () => {
  it('returns true when all progress bars are equal', () => {
    const fakeProgress = [
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
    expect(progressEqual(fakeProgress)).toBe(true);
  });

  it('returns false when not all progress bars are equal', () => {
    const fakeProgress = [
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
    expect(progressEqual(fakeProgress)).toBe(false);
  });
});
