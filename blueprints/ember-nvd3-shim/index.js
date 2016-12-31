/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-nvd3-shim',
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;

    return this.addBowerPackageToProject('nvd3','^1.8.0')
      .then(function () {
        return self.addAddonToProject('brzpegasus/ember-d3#v3');
      });
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
