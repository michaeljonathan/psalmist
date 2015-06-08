import Ember from "ember";

var ServiceRoute = Ember.Route.extend({
	model: function() {
		// Get currently selected service here
		return this.store.find('service', 1);
	},
	setupController: function(controller, model) {
		// Assign model to controller as the current service
		var service = model;
		controller.set('service', service);

		// DEBUG
		window.scontrol = controller;
		window.sitems = service.get('items');

		// Select first item if nothing is selected
		/* Not sure whether we'd want this to happen or not just yet
		if (!controller.get('currentItem')) {
			var items = service.get('items');
			var firstItem = items ? items.objectAt(0) : null;
			if (firstItem) {
				controller.set('currentItem', firstItem);
			}
		}
		*/
	}
});

export default ServiceRoute;
