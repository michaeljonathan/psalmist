import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		activateLyric: function(activationData) {
			activationData.lyricsBlock = this.get('lyricsBlock');
			this.sendAction('activateLyricAction', activationData);
		}
	}
});
