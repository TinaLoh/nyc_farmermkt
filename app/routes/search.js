import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var q = params.query;
    return Ember.$.getJSON('https://data.cityofnewyork.us/resource/b7kx-qikm.json?borough=' + q).then(function(results) {
      return results;
    });
  }
  
});
