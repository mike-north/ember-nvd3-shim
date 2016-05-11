(function() {
  /* globals define, nv */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }
  console.log(d3);
  console.log(nv);
  generateModule('nv', { 'default': nv });
})();
