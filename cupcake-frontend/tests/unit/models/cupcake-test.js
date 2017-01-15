import { moduleForModel, test } from 'ember-qunit';
import { manualSetup, make } from 'ember-data-factory-guy';

moduleForModel('cupcake', 'Unit | Model | cupcake', {
  // Specify the other units that are required for this test.
  needs: ['model:rating'],
  beforeEach: function() {
    manualSetup(this.container);
  }
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('calculates summary ratings', function(assert){
  let rat1 = make('rating', {value: 4});
  let rat2 = make('rating', {value: 2});
  let cup = make('cupcake', {ratings: [rat1, rat2]});
  cup.toJSON({includeId: true});  
  assert.equal(cup.get('summaryRating'), 3, 'calculates average rating from rating values');
});
