import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		selectItem: function() {
			console.log("Ignored attempt to selectItem from page-library.");
		}
	}

});
