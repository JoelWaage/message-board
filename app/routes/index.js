import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
