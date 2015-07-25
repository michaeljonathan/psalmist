import Ember from 'ember';

var updateData = function(dcContext) {
	var localStateString = window.localStorage.getItem('psalmist-local-state');
	if (!localStateString) {
		console.log("Did not update data.");
	}

	var localStateObject = window.JSON.parse(localStateString);
	dcContext.set('data', localStateObject.congregationDisplayData);
};

export default Ember.Component.extend({
	
	data: {},

	didInsertElement: function() {

		updateData(this);

		var _this = this;
		window.addEventListener('storage', function() {
			updateData(_this);
		});

	}

});
