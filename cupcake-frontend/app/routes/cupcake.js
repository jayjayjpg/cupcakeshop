import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(JSON.stringify(params));
    return this.store.find('cupcake', params.id);
  }
});
