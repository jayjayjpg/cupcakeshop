import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cupcakes', function(){});
  this.route('cupcake', { path: '/cupcakes/:id' });
});

export default Router;
