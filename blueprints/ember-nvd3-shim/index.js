/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-nvd3-shim',
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject('ember-d3@~0.2.0').then(function() {
      return this.addBowerPackageToProject('nvd3', '~1.8.3');
    }.bind(this));
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
