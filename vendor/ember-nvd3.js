(function() {
  /* globals define, nv */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('nv', { 'default': nv || {} });
})();
