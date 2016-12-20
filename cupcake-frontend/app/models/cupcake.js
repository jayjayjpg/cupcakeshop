import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  weight: DS.attr('number'),
  ratings: DS.hasMany('rating'),
  thumbnail: DS.attr('string')
});
