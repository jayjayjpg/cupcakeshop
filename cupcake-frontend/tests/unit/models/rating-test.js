import { moduleForModel, test } from 'ember-qunit';

moduleForModel('rating', 'Unit | Model | rating', {
  // Specify the other units that are required for this test.
  needs: ['model:cupcake']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
