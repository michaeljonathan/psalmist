import Ember from 'ember';

export default Ember.Component.extend({

	primaryText: function() {
		var activeLyric = this.get('activeLyric');
		var song = this.get('song');
		if (activeLyric && song) {
			return activeLyric.text[song.get('primaryLyricsVersion')];
		}
		return null;
	}.property('activeLyric', 'song'),

	secondaryText: function() {
		var activeLyric = this.get('activeLyric');
		var selectedSecondaryVersionName = this.get('selectedSecondaryVersionName');
		if (activeLyric && selectedSecondaryVersionName) {
			return activeLyric.text[selectedSecondaryVersionName];
		}
		return null;
	}.property('activeLyric', 'selectedSecondaryVersionName')

});
