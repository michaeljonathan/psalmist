import Ember from 'ember';

export default Ember.Component.extend({

	/****************/
	/* Category DOM */
	/****************/

	classNames: ['library-category', 'library-category-songs'],
	classNameBindings: ['isActive::library-category-inactive'],

	isActive: function() {
		return this.get('categoryIdentifier') === this.get('currentCategoryIdentifier');
	}.property('categoryIdentifier', 'currentCategoryIdentifier'),

	/*********/
	/* Songs */
	/*********/

	isCreatingSong: false,
	editingSong: null,
	previewingSong: null,

	songs: function() {
		return this.get('store').find('song');
	}.property(),

	actions: {

		previewSong: function(song) {
			this.set('previewingSong', song);
		},

		addSongToService: function(song) {
			this.sendAction('addSongToServiceAction', song);
		},

		startCreatingSong: function() {
			this.set('isCreatingSong', true);
		},

		doneCreatingSong: function() {
			this.set('isCreatingSong', false);
		},

		startEditingSong: function(song) {
			this.set('editingSong', song);
		},

		doneEditingSong: function() {
			this.set('editingSong', null);
		}

	}

});
