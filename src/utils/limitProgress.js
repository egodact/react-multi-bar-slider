const limitProgress = progress => Math.max(Math.min(progress, 100), 0);
export default limitProgress;
