import Ember from 'ember';

export default Ember.Component.extend({

	checked: function(key, value) {
		if (value === undefined) {
			// property being used as a getter
			return this.get('versionName') === this.get('activeSecondaryVersionName');
		} else {
			// property being used as a setter
			this.sendAction('activateAction', value ? this.get('versionName') : '');
			return value;
		}
	}.property('versionName', 'activeSecondaryVersionName')

});
