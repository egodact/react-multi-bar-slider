const processStyle = (style, props) =>
  typeof style === 'function' ? style(props) : style;

export default processStyle;
