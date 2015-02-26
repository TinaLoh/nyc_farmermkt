import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('markets');
  this.route('search', { path: "/search/:query"});
});

export default Router;
