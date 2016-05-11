import nv from 'nv';
import { module, test } from 'qunit';

module('Unit | Utility | nv');

test('it exists', function(assert) {
  assert.ok(nv);
});

test('it exists', function(assert) {
  assert.equal(typeof nv.charts, 'object', 'Charts api is present');
});
