import Ember from 'ember';

export function popular(params/*, hash*/) {
  var answer = params[0];
  if (answer.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="zero-response">(awaiting response)</span>');
  } else if (answer.get('answers').get('length') <= 5) {
    return Ember.String.htmlSafe('<span class="some-response">(looking for a few more responses)</span>');
  }
}

export default Ember.Helper.helper(popular);
