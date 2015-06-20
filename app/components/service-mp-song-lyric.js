import Ember from 'ember';

export default Ember.Component.extend({

	isActive: function() {
		return this.get('lyric') == this.get('activeLyric');
	}.property('lyric', 'activeLyric'),

	actions: {

		'activateLyric': function(lyric) {
			this.sendAction('activateAction', lyric);
		}

	}
});
