import DS from "ember-data";

var Song = DS.Model.extend({
	title: DS.attr('string'),
	lyrics: DS.attr('string')
});

Song.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: 'Title of Song 1',
			lyrics: 'Lyrics of song 1, lyrics of song 1'
		},
		{
			id: 2,
			title: 'Title of Song 2',
			lyrics: 'Lyrics of song 2, lyrics of song 2'
		}
	]
});

export default Song;
