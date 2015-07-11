import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['library-category-selector'],
	classNameBindings: ['isActive:active'],

	isActive: function() {
		return this.get('targetCategoryIdentifier') === this.get('currentCategoryIdentifier');
	}.property('targetCategoryIdentifier', 'currentCategoryIdentifier'),

	actions: {

		'activateCategory': function() {
			this.sendAction('activateAction', this.get('targetCategoryIdentifier'));
		}

	}
});
