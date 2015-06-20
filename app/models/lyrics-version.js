import DS from "ember-data";

var LyricsVersion = DS.Model.extend({
	
	name: DS.attr('string'),

	lyricsBlocks: DS.hasMany('lyrics-block', {'async': true}),

	song: DS.belongsTo('song', {'async': true})

});

LyricsVersion.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'English',
			lyricsBlocks: [1]
		},
		{
			id: 2,
			name: 'Indonesian',
			lyricsBlocks: [2]
		}
	]
});

export default LyricsVersion;
