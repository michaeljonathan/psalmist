import Ember from 'ember';
import LocalState from 'psalmist/models/local-state';

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
	}.property('activeLyric', 'selectedSecondaryVersionName'),

	// Experimenting with localState

	localState: LocalState.create(),

	localStateUpdaterObserver: function() {
		var primaryText = this.get('primaryText');
		var secondaryText = this.get('secondaryText');
		this.set('localState.congregationDisplayData', {
			primaryText: primaryText,
			secondaryText: secondaryText
		});
	}.observes('primaryText', 'secondaryText')

});
