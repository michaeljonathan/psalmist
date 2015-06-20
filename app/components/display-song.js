import Ember from 'ember';

export default Ember.Component.extend({

	activeSecondaryLyric: false,

	activeSecondaryLyricPromiseObserver: function() {
		 // First things first, clear up display immediately
		 // to prevent wrong secondary lyrics displaying
		this.set('activeSecondaryLyric', false);

		// Only if promised, then once secondary lyrics are
		// resolved, put it on display
		var asl = this.get('activeSecondaryLyricPromise');
		var _this = this;
		if (asl.then) {
			asl.then(function(lyric) {
				_this.set('activeSecondaryLyric', lyric);
			});
		}
	}.observes('activeSecondaryLyricPromise')
});
