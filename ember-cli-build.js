'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    autoprefixer: {
      browsers: ['last 2 versions', 'ie >= 8', 'bb 10', 'android 3'],
      cascade: true
    },
    pixrem: {
      rootvalue: "10px"
    },
    'ember-font-awesome': {
      useScss: true, // for ember-cli-sass
      includeFontFiles: false,
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
