import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'li',
	classNameBindings: ['isActive:active'],

	isActive: function() {
		return this.get('service') === this.get('selectedService');
	}.property('service', 'selectedService'),

	actions: {
		selectService: function(service) {
			this.sendAction('selectServiceAction', service);
		}
	}
});
