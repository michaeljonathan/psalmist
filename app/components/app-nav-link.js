import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['app-nav-link'],
	classNameBindings: ['isActive:active'],

	isActive: function() {
		return this.get('targetPageIdentifier') === this.get('currentPageIdentifier');
	}.property('targetPageIdentifier', 'currentPageIdentifier'),

	actions: {

		'activatePage': function() {
			this.sendAction('activateAction', this.get('targetPageIdentifier'));
		}

	}
});
