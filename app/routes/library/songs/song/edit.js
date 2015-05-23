import Ember from "ember";

var SongEditRoute = Ember.Route.extend({
	model: function() {
		var song = this.modelFor('library.songs.song');
		return song;
	}
});

export default SongEditRoute;
