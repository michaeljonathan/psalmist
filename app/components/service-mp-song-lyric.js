import Ember from 'ember';

export default Ember.Component.extend({
	actions: {

		'activateLyric': function(lyric) {
			console.log('attempting to activate lyric:');
			console.log(lyric);
			this.sendAction('activateAction', lyric);
		}

	}
});
