/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-nvd3-shim',
  
  included: function included(app) {
    app.import(app.bowerDirectory + '/d3/d3.js');

    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {

      app.import(app.bowerDirectory + '/nvd3/build/nv.d3.js');

      var options1 = app.options['ember-cli-nvd3'];
      var options2 = app.options['ember-nvd3-shim'];

      if ((options1 === undefined && options2 === undefined) || // if both options are not present
         (options1 && options1.includeCss !== false) ||
         (options2 && options2.includeCss !== false)) {
        app.import(app.bowerDirectory + '/nvd3/build/nv.d3.css');
      }

      app.import('vendor/ember-d3.js', {
        exports: {
          d3: ['default']
        }
      });

      app.import('vendor/ember-nvd3.js', {
        exports: {
          nv: ['default']
        }
      });
    }
  }
};
