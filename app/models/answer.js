import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  ans: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});