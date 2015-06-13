import Ember from "ember";

export default Ember.Controller.extend({

	needs: ['service'],

	song: function() {
		return this.get('model');
	}.property('model'),

	actions: {

		'activateLyric': function(lyric) {
			this.get('controllers.service').send('activateLyric', lyric);
		}

	}

});