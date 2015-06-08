import Ember from "ember";

export default Ember.Controller.extend({

	currentItem: false,

	actions: {

		setCurrentItem: function(item) {
			this.set('currentItem', item);
		}

	}
});