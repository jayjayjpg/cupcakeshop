import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  weight: DS.attr('number'),
  ratings: DS.hasMany('rating'),
  thumbnail: DS.attr('string'),
  hasRatings: Ember.computed.notEmpty('ratings'),
  ratingVals: Ember.computed.mapBy('ratings', 'value'),
  ratingSum: Ember.computed.sum('ratingVals'),
  summaryRating: Ember.computed('ratingVals', 'hasRatings', function(){
    return this.get('ratingSum') / this.get('ratingVals').length;
  })
});
