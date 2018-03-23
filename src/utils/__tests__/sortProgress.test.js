import sortProgress from '../sortProgress';

describe('sortProgress.js', () => {
  it('sorts given progress bars correctly', () => {
    const fakeProgress = [
      {
        props: {
          progress: 56
        }
      },
      {
        props: {
          progress: 31
        }
      },
      {
        props: {
          progress: 94
        }
      }
    ];
    expect(sortProgress(fakeProgress)).toEqual([
      {
        props: {
          progress: 94
        }
      },
      {
        props: {
          progress: 56
        }
      },
      {
        props: {
          progress: 31
        }
      }
    ]);
  });

  it('doesn\'t modify the progress bar array', () => {
    const fakeProgress = [
      {
        props: {
          progress: 45
        }
      },
      {
        props: {
          progress: 86
        }
      }
    ];
    sortProgress(fakeProgress);
    expect(fakeProgress[0].props.progress).toBe(45);
  });
});
