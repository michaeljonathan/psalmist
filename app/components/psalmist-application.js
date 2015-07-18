import Ember from 'ember';

export default Ember.Component.extend({

	currentPageIdentifier: 'service', // Default page

	service: function() {
		return this.get('store').find('service', '55a6d56ede8c26d021b411bf'); // TODO
	}.property(),

	actions: {

		activatePage: function(pageIdentifier) {
			this.set('currentPageIdentifier', pageIdentifier);
		},

		addSongToService: function(song) {
			if (!song) {
				console.error('No song to add to service.');
			}

			var service = this.get('service');
			if (!service) {
				console.log('No current service.');
			}

			var store = this.get('store');
			var serviceItem = store.createRecord('serviceItem', {
				itemType: 'song',
				song: song,
				isSequenceEnabled: false,
				sequence: [],
				secondaryVersionName: '',
				service: service
			});
			console.log(serviceItem);
		}

	}

});
