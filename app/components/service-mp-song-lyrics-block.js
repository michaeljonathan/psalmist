import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		activateLyric: function(lyric) {
			this.sendAction('activateLyricAction', lyric);
		}
	}
});
