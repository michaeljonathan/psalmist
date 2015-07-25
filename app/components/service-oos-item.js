import Ember from 'ember';

export default Ember.Component.extend({

	attributeBindings: ['itemId:service-item-id'],

	itemId: function() {
		return this.get('item.id');
	}.property('item.id'),

	isSelected: function() {
		return this.get('item') === this.get('selectedItem');
	}.property('item', 'selectedItem'),

	actions: {
		select: function() {
			this.sendAction('selectAction', this.get('item'));
		}
	}
});
