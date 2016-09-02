import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        question: this.get("question"),
        author: this.get("author"),
        notes: this.get("notes")
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
