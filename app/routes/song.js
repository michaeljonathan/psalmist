import Ember from "ember";

var SongRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('song', params.song_id);
	}
});

export default SongRoute;
