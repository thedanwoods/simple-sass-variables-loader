function styleLoader(source, map) {
  const themeName = (this.query && this.query.theme) || '';
  let theme;

  try {
    theme = require(themeName);
  } catch (e) {
    process.emitWarning(`sass-varaibles-loader unable to load ${themeName}`);
    theme = () => '';
  }

  if (typeof theme !== 'function' || typeof theme() !== 'string') {
    process.emitWarning(`sass-varaibles-loader error in  ${themeName}: theme must return a string`);
    theme = () => '';
  }

  const output = `${theme()}
${source}`;

  this.callback(null, output, map);
}

module.exports = styleLoader;
