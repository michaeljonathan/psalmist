import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('service', { path: '/service' });
	this.route('library', { path: '/library' }, function() {
		this.route('songs', { path: '/songs'}, function() {
			this.route('song', { path: '/:song_id' }, function () {
				this.route('edit', { path: '/edit' });
			});
		}); 
	});
});

export default Router;
