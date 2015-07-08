import DS from "ember-data";

var ServiceItem = DS.Model.extend({

	itemType: DS.attr('string'),

	song: DS.belongsTo('song', {'async': true}),

	isSequenceEnabled: DS.attr('boolean'),
	sequence: DS.attr(),
	secondaryVersionName: DS.attr('string'),

	service: DS.belongsTo('service', {'async': true}),

	name: function() {
		switch (this.get('itemType')) {
			case 'song':
				return this.get('song').get('title');
			default:
				return 'No name';
		}
	}.property('itemType', 'song.title'),

	description: function() {
		switch (this.get('itemType')) {
			case 'song':
				return this.get('song').get('description');
			default:
				return '';
		}
	}.property('itemType', 'song.title')

});

ServiceItem.reopenClass({
	FIXTURES: [{
		id: 1,
		itemType: 'song',
		song: '55974df67270a0f41b19fa20',
		isSequenceEnabled: true,
		sequence: [],
		secondaryVersionName: 'Indonesian'
	}]
});

export default ServiceItem;
