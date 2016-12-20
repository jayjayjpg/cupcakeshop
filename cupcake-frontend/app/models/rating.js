import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  value: DS.attr('number'),
  name: DS.attr('string'),
  cupcake: DS.belongsTo('cupcake')
});
