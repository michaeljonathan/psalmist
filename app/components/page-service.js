import Ember from 'ember';

export default Ember.Component.extend({

	/************/
	/* Page DOM */
	/************/

	classNames: ['page', 'page-service'],
	classNameBindings: ['isActive::page-inactive'],

	isActive: function() {
		return this.get('pageIdentifier') === this.get('currentPageIdentifier');
	}.property('pageIdentifier', 'currentPageIdentifier'),

	/********/
	/* Item */
	/********/

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

	selectedSecondaryVersionName: function() {
		if (!this.get('selectedSong')) {
			return false;
		}
		if (!this.get('activeLyric')) {
			return false;
		}
		return this.get('selectedItem.secondaryVersionName');
	}.property('selectedSong', 'activeLyric', 'selectedItem.secondaryVersionName'),

	actions: {

		selectItem: function(item) {
			this.set('selectedItem', item);
		},

		activateLyric: function(activationData) {
			if (activationData && activationData.song) {
				this.set('activeSong', activationData.song);
			}
			if (activationData && activationData.lyricsBlock) {
				this.set('activeLyricsBlock', activationData.lyricsBlock);
			}
			if (activationData && activationData.lyric) {
				this.set('activeLyric', activationData.lyric);
			}
		},

		activateVersion: function(version) {
			var selectedItem = this.get('selectedItem');
			selectedItem.set('secondaryVersionName', version);
			selectedItem.save();
		}

	}
});
