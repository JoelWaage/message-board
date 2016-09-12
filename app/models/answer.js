import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  ans: DS.attr(),
  question: DS.belongsTo('question', { async: true }),

  answerSentence: Ember.computed(function() {
    return this.get('name') + ' thinks ' + this.get('ans') + '.';
  })
});
