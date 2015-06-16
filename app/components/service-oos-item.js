import Ember from 'ember';

export default Ember.Component.extend({

	isSelected: function() {
		return this.get('item') === this.get('selectedItem');
	}.property('item', 'selectedItem'),

	actions: {
		select: function() {
			this.sendAction('selectAction', this.get('item'));
		}
	}
});
