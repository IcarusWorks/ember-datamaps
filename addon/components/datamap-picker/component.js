import Ember from 'ember';
import layout from './template';

/* global Datamap */

export default Ember.Component.extend({
  layout,
  attributeBindings: ['style'],

  style: Ember.computed('property', function() {
    return 'min-height: 550px;';
  }),

  didInsertElement() {
    this._super(...arguments);

    const map = new Datamap({
      element: this.$()[0],
      scope: 'usa'
    });

    this.set('map', map);
  }
});
