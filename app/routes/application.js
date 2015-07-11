import Ember from "ember";

var ApplicationRoute = Ember.Route.extend({
	model: function() {
		// Get currently selected service here
		return this.store.find('service', 1);
	}
});

export default ApplicationRoute;
