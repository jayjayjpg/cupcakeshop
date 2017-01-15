import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rating-widget', 'Integration | Component | rating widget', {
  integration: true
});

test('it renders', function(assert) {
  
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{rating-widget}}`);
  this.set('alreadyRated', true);
  this.set('summary', 4);

  assert.ok(this.$().children().first().hasClass('rating-widget'), 'has appropriate class "rating-widget"');

});
