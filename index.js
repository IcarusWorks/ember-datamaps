/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-datamaps',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/d3/d3.js');
    app.import(app.bowerDirectory + '/topojson/topojson.js');
    app.import(app.bowerDirectory + '/datamaps/dist/datamaps.world.min.js');
    app.import(app.bowerDirectory + '/datamaps/dist/datamaps.can.min.js');
    app.import(app.bowerDirectory + '/datamaps/dist/datamaps.usa.min.js');
  }
};
