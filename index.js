function styleLoader(source, map) {
  const callback = this.async();
  const themeName = (this.query && this.query.theme) || '';

  const buildResult = (result, source) => `${result}
${source}`;

  let theme;
  try {
    theme = require(themeName);
  } catch (e) {
    process.emitWarning(`sass-varaibles-loader unable to load ${themeName}`);
    theme = () => '';
  }

  const result = theme();
  if (typeof result === 'string') {
    callback(null, buildResult(result, source), map);
  }

  if (Promise.resolve(result) === result) {
    result
      .then(output => {
        callback(null, buildResult(output, source), map);
      })
      .catch(error => {
        process.emitWarning(
          `sass-varaibles-loader error in ${themeName}: theme must emit a string`,
        );
        callback(null, source, map);
      });
  }
}

module.exports = styleLoader;
