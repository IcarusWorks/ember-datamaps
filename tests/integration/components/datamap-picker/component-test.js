import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('datamap-picker', 'Integration | Component | datamap picker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{datamap-picker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#datamap-picker}}
      template block text
    {{/datamap-picker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
