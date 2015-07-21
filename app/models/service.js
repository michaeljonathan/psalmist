import DS from "ember-data";

var Service = DS.Model.extend({

	name: DS.attr('string'),

	itemsList: DS.attr(),

	items: function() {
		var itemIDs = this.get('itemsList');
		var store = this.get('store');
		var itemPromises = [];
		for (var i = 0; i < itemIDs.length; i++) {
			itemPromises.push(store.find('service-item', itemIDs[i]));
		}
		return itemPromises;
	}.property('itemsList')

});

export default Service;
