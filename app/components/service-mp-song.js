import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		activateVersion: function(version) {
			this.sendAction('activateVersionAction', version);
		},
		activateLyric: function(activationData) {
			activationData.song = this.get('song');
			this.sendAction('activateLyricAction', activationData);
		}
	}
});
