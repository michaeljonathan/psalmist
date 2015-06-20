import Ember from 'ember';

export default Ember.Component.extend({

	activeItem: false,

	selectedItem: false,

	/********/
	/* Song */
	/********/

	activeSong: false,
	activeLyricsBlock: false,
	activeLyric: false,

	selectedSong: function() {
		if (this.get('selectedItem') && this.get('selectedItem').get('itemType') === 'song') {
			return this.get('selectedItem').get('song');
		}
		return false;
	}.property('selectedItem'),

	activeLyricObserver: function() {

		// Set activeLyricsBlock and activeSong based on the activeLyric
		var lyric = this.get('activeLyric');
		if (lyric) {
			this.set('activeLyricsBlock', lyric.get('lyricsBlock'));
			this.set('activeSong', lyric.get('lyricsBlock.lyricsVersion.song'));
		}

		// Set activeItem based on the current selectedItem
		this.set('activeItem', this.get('selectedItem'));

	}.observes('activeLyric'),

	actions: {

		selectItem: function(item) {
			this.set('selectedItem', item);
		},

		activateLyric: function(lyric) {
			this.set('activeLyric', lyric);
		}

	}
});
