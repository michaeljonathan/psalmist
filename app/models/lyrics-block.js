import DS from "ember-data";

var LyricsBlock = DS.Model.extend({
	
	name: DS.attr('string'),

	lyrics: DS.attr(),

	lryicsVersion: DS.belongsTo('lyrics-version', {'async': true}),

	lnLyrics: function() {
		return this.get('lyrics') ? this.get('lyrics').toArray().join('\n') : '';
	}.property('lyrics')

});

LyricsBlock.reopenClass({
	FIXTURES: [{
		id: 1,
		name: 'Verse 1',
		lyrics: [
			'You are my vision, O king of my heart',
			'Nothing else satisfies, only You, Lord',
			'You are my best thought by day or by night',
			'Waking or sleeping, Your presence, my light'
		]
	}]
});

export default LyricsBlock;
