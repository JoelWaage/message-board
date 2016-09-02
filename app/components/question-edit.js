import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionShow: false,
  actions: {
    editQuestionShow() {
      this.set('editQuestionShow', true);
    },
  }
});
