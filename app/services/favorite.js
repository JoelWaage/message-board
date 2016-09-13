import Ember from 'ember';

export default Ember.Service.extend({
  faves: [],

  add(fave) {
    this.get('faves').pushObject(fave);
  }
});
