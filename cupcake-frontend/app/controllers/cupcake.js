import Ember from 'ember';

export default Ember.Controller.extend({
  summaryRating: Ember.computed('model.@each.ratings', function(){
    return DS.PromiseObject.create({
      promise: this.get('model.ratings').then((ratings) =>{
        if (Ember.isEmpty(ratings)){
          return "No ratings for this cupcake, yet.";
        }
        let ratingVals = ratings.mapBy('value');
        console.log("ratingsList: " + JSON.stringify(ratingVals));
        let sum = ratingVals.reduce(function(a, b){ return a + b;}, 0);
        console.log("sum " + sum);
        return sum / ratingVals.length;
      })
    });
  }).property('')
});
