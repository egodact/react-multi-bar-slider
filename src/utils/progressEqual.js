const progressEqual = progress =>
  progress.reduce((acc, progressBar, i) => {
    if (!acc) return acc;
    if (!progress[i - 1]) return true;
    return progressBar.props.progress === progress[i - 1].props.progress;
  }, true);

export default progressEqual;
