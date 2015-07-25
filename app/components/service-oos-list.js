import Ember from 'ember';

var updateServiceItemsList = function (service, newItemsList) {
	if (!service || !newItemsList) {
		alert('Service items did not update (missing arguments).');
		return;
	}

	// Make sure the new items list is truly a re-ordering of
	// the old one. We use .slice() to copy the arrays before
	// calling .sort(), as to avoid mutating the original arrays.
	var oldItemsList = service.get('itemsList');
	if (oldItemsList.slice().sort().join(',') !== newItemsList.slice().sort().join(',')) {
		alert('Service items did not update (items are different).');
	}

	service.set('itemsList', newItemsList);
	return service.save();
};

export default Ember.Component.extend({

	$itemsList: function() {
		return this.$('.items');
	}.property(),

	actions: {
		selectItem: function(item) {
			this.sendAction('selectAction', item);
		}
	},

	didInsertElement: function() {

		var _this = this;
		var $itemsList = this.get('$itemsList');

		// Enable sorting of serviceItems
		$itemsList.sortable({
			update: function() {
				var updatedItemsList = $itemsList.sortable('toArray', {
					attribute: 'service-item-id'
				});

				_this.get('service')
				.then(function(service) {
					updateServiceItemsList(service, updatedItemsList);
				});
			}
		});
	}

});
