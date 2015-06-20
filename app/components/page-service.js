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

	activeSecondaryLyric: function() {

		if (!this.get('selectedSong')) {
			return false;
		}

		var activeLyric,
			activeLyricIndex,
			activeLyricsBlock,
			activeLyricsBlockIndex,
			activeSong,
			secondaryVersionName;

		activeLyric = this.get('activeLyric');
		secondaryVersionName = this.get('selectedItem.secondaryVersionName');
		if (!(activeLyric && secondaryVersionName)) {
			return false;
		}

		return activeLyric.get('lyricsBlock').then(function(lyricsBlock) {
			activeLyricsBlock = lyricsBlock;
			activeLyricIndex = activeLyricsBlock.get('lyrics').indexOf(activeLyric);
			return activeLyricsBlock.get('lyricsVersion');
		}).then(function(lyricsVersion) {
			activeLyricsBlockIndex = lyricsVersion.get('lyricsBlocks').indexOf(activeLyricsBlock);
			return lyricsVersion.get('song');
		}).then(function(song) {
			activeSong = song;
			return activeSong.get('lyricsVersions');
		}).then(function(lyricsVersions) {
			return lyricsVersions.filterBy('name', secondaryVersionName);
		}).then(function(matchedLyricsVersions) {
			var matchedLyricsVersion = matchedLyricsVersions[0];
			if (!matchedLyricsVersion) {
				return false;
			}
			return matchedLyricsVersion.get('lyricsBlocks');
		}).then(function(lyricsBlocks) {
			var matchedLyricsBlock = lyricsBlocks.objectAt(activeLyricsBlockIndex);
			if (!matchedLyricsBlock) {
				return false;
			}
			return matchedLyricsBlock.get('lyrics');
		}).then(function(lyrics) {
			var matchedLyric = lyrics.objectAt(activeLyricIndex);
			return matchedLyric;
		});

	}.property('selectedSong', 'activeLyric', 'selectedItem.secondaryVersionName'),

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
		},

		activateVersion: function(version) {
			var selectedItem = this.get('selectedItem');
			selectedItem.set('secondaryVersionName', version);
			selectedItem.save();
		}

	}
});
