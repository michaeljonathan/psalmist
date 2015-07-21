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

			var _this = this,
				service,
				store,
				serviceItem;

			_this.get('service')
			.then(function(promisedService) {
				if (!promisedService) {
					console.log('No current service.');
				}
				service = promisedService;
				return _this.get('store');
			}).then(function(promisedStore) {
				store = promisedStore;

				serviceItem = store.createRecord('serviceItem', {
					itemType: 'song',
					song: song,
					isSequenceEnabled: false,
					sequence: [],
					secondaryVersionName: ''
				});
				serviceItem.set('service', service);

				return serviceItem.save();
			}).then(function() {
				// What the server does on behalf:
				// var serviceItemsList = service.get('itemsList');
				// serviceItemsList.push(serviceItem.get('id'));
				// service.set('itemsList', serviceItemsList);
				// service.save();
				service.reload();
			});

		}

	}

});
