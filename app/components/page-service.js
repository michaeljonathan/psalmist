import Ember from 'ember';

export default Ember.Component.extend({

	selectedItem: false,

	/* Song */

	activeLyricsBlock: false,
	selectedSong: function() {
		if (this.get('selectedItem') && this.get('selectedItem').get('itemType') === 'song') {
			return this.get('selectedItem').get('song');
		}
		return false;
	}.property('selectedItem'),

	actions: {

		setSelectedItem: function(item) {
			this.set('selectedItem', item);
		},

		activateLyric: function(lyric) {
			/* For a Song: activate a lyric line */
			var lyricsBlock = lyric.get('lyricsBlock');
			var song = lyric.get('lyricsBlock.lyricsVersion.song');
			console.log('Service: [Song] Activated lyric.');
			console.log('    Text: ' + lyric.get('text'));
			console.log('    Block: ' + lyricsBlock.get('name'));
			console.log('    Song: ' + song.get('title'));
		}

	}
});
