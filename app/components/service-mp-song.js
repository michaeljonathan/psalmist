import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		activateVersion: function(version) {
			this.sendAction('activateVersionAction', version);
		},
		activateLyric: function(lyric) {
			this.sendAction('activateLyricAction', lyric);
		}
	}
});
