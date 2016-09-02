import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
