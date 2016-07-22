/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-nvd3-shim',
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      {name: 'nvd3', target: '^1.8.0'},
      {name: 'd3', target: '^3.0.0'}
    ]);
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
