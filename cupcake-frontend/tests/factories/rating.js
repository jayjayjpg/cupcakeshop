import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('rating', {
  default: {
    title: 'Its alright.',
    value: 3,
    description: 'For a cupcake this is actually not too bad.',
    name: 'another title?'
  }
});
