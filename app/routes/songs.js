import Ember from "ember";

var SongsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('song');
	}
});

export default SongsRoute;
