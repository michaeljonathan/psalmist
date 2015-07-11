import Ember from 'ember';

export default Ember.Component.extend({

	/************/
	/* Page DOM */
	/************/

	classNames: ['page', 'page-library'],
	classNameBindings: ['isActive::page-inactive'],

	isActive: function() {
		return this.get('pageIdentifier') === this.get('currentPageIdentifier');
	}.property('pageIdentifier', 'currentPageIdentifier'),

	currentCategoryIdentifier: '',

	actions: {

		activateCategory: function(categoryIdentifier) {
			this.set('currentCategoryIdentifier', categoryIdentifier);
		},

		selectItem: function() {
			console.log("Ignored attempt to selectItem from page-library.");
		}

	}

});
