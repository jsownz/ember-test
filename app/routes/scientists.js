import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Marie Curie', 'Bill Nye', 'Neil Degrasse Tyson'];
  }
});
