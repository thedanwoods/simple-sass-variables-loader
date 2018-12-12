# Simple Sass Variables Loader

Simple Sass Variables Loader is a lightweight webpack loader that imports variable declarations and appends them to the top of a `.scss` file.

This allows you to `npm install` visual themes that can be consumed by multiple applications.

## Usage

In your webpack config, add the loader to run before your `sass-loader` (or equivalent) compiler:

```
{
  loader: require.resolve('simple-sass-variables-loader'),
  options: { theme: 'the-theme-i-want' }
},
```

Webpack runs loaders from right-to-left, or bottom-to-top, so be sure to add this loader obect _after_ `sass-loader` in the config.

`the-theme-i-want` should be the name of a node package that exports a function that returns your variable declarations as a string. For example:

```
module.exports = () => '$some-variable-name: #ff0';
```

