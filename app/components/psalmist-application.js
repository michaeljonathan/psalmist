import Ember from 'ember';

export default Ember.Component.extend({

	currentPageIdentifier: 'service', // Default page

	service: null,

	actions: {

		activatePage: function(pageIdentifier) {
			this.set('currentPageIdentifier', pageIdentifier);
		},

		addSongToService: function(song) {
			if (!song) {
				console.error('No song to add to service.');
			}

			var service,
				store,
				serviceItem;

			service = this.get('service');
			if (!service) {
				alert('No current service.');
				return;
			}

			store = this.get('store');
			
			serviceItem = store.createRecord('serviceItem', {
				itemType: 'song',
				song: song,
				isSequenceEnabled: false,
				sequence: [],
				secondaryVersionName: ''
			});
			serviceItem.set('service', service);
			serviceItem.save()
			.then(function() {
				// What the server does on behalf:
				// var serviceItemsList = service.get('itemsList');
				// serviceItemsList.push(serviceItem.get('id'));
				// service.set('itemsList', serviceItemsList);
				// service.save();
				service.reload();
			});

		},

		selectService: function(service) {
			this.set('service', service);
		},

		createNewService: function() {
			var _this = this,
				service = this.get('store').createRecord('service');
			service.set('name', 'New Service');
			service.set('itemsList', []);
			service.save()
			.then(function() {
				_this.set('service', service);
			});
		}

	}

});
