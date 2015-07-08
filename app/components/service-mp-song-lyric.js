import Ember from 'ember';

export default Ember.Component.extend({

	isActive: function() {
		return this.get('lyric') === this.get('activeLyric');
	}.property('lyric', 'activeLyric'),

	primaryLyricText: function() {
		var lyric = this.get('lyric');
		var primaryLyricsVersion = this.get('primaryLyricsVersion');
		if (lyric && primaryLyricsVersion) {
			return lyric.text[primaryLyricsVersion];
		}
		return false;
	}.property('lyric', 'primaryLyricsVersion'),

	actions: {

		'activateLyric': function() {
			this.sendAction('activateAction', {
				lyric: this.get('lyric')
			});
		}

	}
});
