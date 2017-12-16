'use stirct';
const path = require('path');
const glob = require('glob');

module.exports = pattern => {
  if (typeof pattern !== 'string') {
    throw new TypeError('pattern is expects a string.');
  }

  return glob.sync(pattern).reduce((acc, file) => {
    const basename = path.basename(file, path.extname(file));
    const dirnames = path
      .dirname(file)
      .split(path.sep)
      .splice(1);

    acc[path.join(...dirnames, basename)] = file;
    return acc;
  }, {});
};
