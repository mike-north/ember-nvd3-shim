/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-nvd3-shim',
  included: function included(app) {
    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
      app.import(app.bowerDirectory + '/d3/d3.min.js');
      app.import(app.bowerDirectory + '/nvd3/build/nv.d3.js');
      app.import(app.bowerDirectory + '/nvd3/build/nv.d3.css');
      app.import('vendor/ember-nvd3.js', {
        exports: {
          nv: ['default']
        }
      });
    }
  }
};
