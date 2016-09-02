import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionShow: false,
  actions: {
    editQuestionShow() {
      this.set('editQuestionShow', true);
    },
    update(question) {
      var params = {
        query: this.get("query"),
        author: this.get("author"),
        notes: this.get("notes")
      };
      this.set('editQuestionShow', false);
      this.sendAction('update', question, params);
    }
  }
});
