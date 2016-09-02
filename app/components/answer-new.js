import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save4() {
      var params = {
        name: this.get("name"),
        ans: this.get("ans"),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('save5', params);
    }
  }
});
