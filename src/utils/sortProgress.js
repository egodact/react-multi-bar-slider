const sortProgress = progress =>
  [...progress].sort(
    (a, b) => b.props.progress - a.props.progress
  );

export default sortProgress;
