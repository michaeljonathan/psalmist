import Ember from 'ember';

var reorderServiceItemsList = function(oosContext, newItemsList) {

	return oosContext.get('service')
	.then(function(service) {
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
	});

};

var deleteServiceItemByViewID = function(oosContext, itemEmberViewID) {

	var serviceOosItemComponent,
		serviceItem,
		serviceItemName,
		service;

	serviceOosItemComponent = Ember.View.views[itemEmberViewID];
	if (!serviceOosItemComponent) {
		alert('Unable to delete item (cannot match view).');
		return;
	}

	return serviceOosItemComponent.get('item')
	.then(function(promisedServiceItem) {
		serviceItem = promisedServiceItem;
		return oosContext.get('service');
	}).then(function(promisedService) {
		service = promisedService;					
		return serviceItem.get('name');
	}).then(function(promisedServiceItemName) {
		serviceItemName = promisedServiceItemName;
		return service.get('name');
	}).then(function(serviceName) {
		if (!window.confirm('Remove '+serviceItemName+' from '+serviceName+'?')) {
			return;
		}
		return serviceItem.destroyRecord();
	}).then(function() {
		return service.reload();
	});
};

export default Ember.Component.extend({

	$itemsList: function() {
		return this.$('.items');
	}.property(),

	isBrowsingServices: false,

	services: function() {
		return this.get('store').find('service');
	}.property(),

	actions: {

		toggleBrowsingServices: function() {
			this.toggleProperty('isBrowsingServices');
		},

		selectItem: function(item) {
			this.sendAction('selectItemAction', item);
		},

		selectService: function(service) {
			this.set('isBrowsingServices', false);
			this.sendAction('selectServiceAction', service);
		},

		createNewService: function() {
			this.set('isBrowsingServices', false);
			this.sendAction('createNewServiceAction');
		}
	},

	didInsertElement: function() {

		var _this = this;
		var $itemsList = this.get('$itemsList');

		// Enable sorting and deleting of serviceItems
		var isSortableWithinBoundaries = true;
		$itemsList.sortable({

			// Drag and drop to reorder service.itemsList
			update: function() {
				var updatedItemsList = $itemsList.sortable('toArray', {
					attribute: 'service-item-id'
				});
				reorderServiceItemsList(_this, updatedItemsList);
			},

			// Drag out to delete serviceItem object
			receive: function() {
				isSortableWithinBoundaries = true;
			},
			over: function() {
				isSortableWithinBoundaries = true;
			},
			out: function() {
				isSortableWithinBoundaries = false;
			},
			beforeStop: function(e, ui) {
				if (isSortableWithinBoundaries) {
					return;
				}

				var itemEmberViewID = ui.item.attr('id');
				deleteServiceItemByViewID(_this, itemEmberViewID);
			}
		});
	}

});
