import DS from "ember-data";

var LyricsBlock = DS.Model.extend({
	
	name: DS.attr('string'),

	lyrics: DS.hasMany('lyric', {async: true}),

	lyricsVersion: DS.belongsTo('lyrics-version', {'async': true}),

	lyricsArray: function() {
		return this.get('lyrics').map(function(lyric) {
			return lyric.get('text');
		});
	}.property('lyrics.@each.text'),

	lnLyrics: function() {
		return this.get('lyricsArray') ? this.get('lyricsArray').toArray().join('\n') : '';
	}.property('lyrics')

});

LyricsBlock.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Verse 1',
			lyrics: [1, 2, 3, 4]
		},
		{
			id: 2,
			name: 'Verse 2',
			lyrics: [5, 6, 7, 8]
		}
	]
});

export default LyricsBlock;
