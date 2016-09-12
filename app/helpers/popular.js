import Ember from 'ember';

export function popular(params/*, hash*/) {
  var answer = params[0];
  if (answer.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="popular-response">(awaiting response)</span>');
  }
}

export default Ember.Helper.helper(popular);
