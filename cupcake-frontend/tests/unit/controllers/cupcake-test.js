import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:cupcake', 'Unit | Controller | cupcake', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('calculates summary ratings', function(assert){
  let controller = this.subject();
  let rat1 = Ember.Object.create({value: 3});
  let rat2 = Ember.Object.create({value: 2});
  let ratings = Ember.ArrayProxy.create().set('content', []).pushObjects([rat1, rat2]);
  ratings.pushObject(rat2);
  let model = Ember.Object.create({title: "cup1", ratings: ratings});
  Ember.run(() => {
    controller.set('model', model);
  
    assert.equal(controller.get('summaryRating.content'), 2.5, 'calculates average rating from rating values');
  });
});
