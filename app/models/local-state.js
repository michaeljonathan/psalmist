import StorageObject from 'ember-local-storage/local/object';

export default StorageObject.extend({
	storageKey: 'psalmist-local-state',
	initialContent: {
		congregationDisplayData: {
			primaryText: 'This is top lyric',
			secondaryText: 'This is bottom lyric'
		},
		teamDisplayData: {
			lyrics: []
		}
	}
});
