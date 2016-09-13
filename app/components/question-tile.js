import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),
  editQuestionForm: false,
  actions: {
    addToList(fave) {
      this.get('favorite').add(fave);
    },

    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
