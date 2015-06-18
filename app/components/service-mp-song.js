import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		activateLyric: function(lyric) {
			console.log('activateLyric ack by service-mp-song');
			this.sendAction('activateLyricAction', lyric);
		}
	}
});
