import Ember from 'ember';

export default Ember.Component.extend({

	currentPageIdentifier: 'service', // Default page

	service: function() {
		return this.get('store').find('service', 1); // TODO
	}.property(),

	actions: {

		activatePage: function(pageIdentifier) {
			this.set('currentPageIdentifier', pageIdentifier);
		}

	}

});
