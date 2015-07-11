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

	editingSong: null,
	previewingSong: null,

	songs: function() {
		return this.get('store').find('song');
	}.property(),

	actions: {

		previewSong: function(song) {
			this.set('previewingSong', song);
		},

		startEditingSong: function(song) {
			this.set('editingSong', song);
		},

		doneEditingSong: function() {
			this.set('editingSong', null);
		}

	}

});
