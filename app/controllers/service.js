import Ember from "ember";

export default Ember.Controller.extend({

	currentItem: false,

	currentSong: function() {
		if (this.get('currentItem') && this.get('currentItem').get('itemType') === 'song') {
			return this.get('currentItem').get('song');
		}
		return false;
	}.property('currentItem'),

	actions: {

		setCurrentItem: function(item) {
			this.set('currentItem', item);
		}

	}
});