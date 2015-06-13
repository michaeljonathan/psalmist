import DS from "ember-data";

var Lyric = DS.Model.extend({

	text: DS.attr('string'),

	lyricsBlock: DS.belongsTo('lyrics-block', {async: true})

});

Lyric.reopenClass({
	FIXTURES: [
		{
			id: 1,
			text: 'You are my vision, O king of my heart'
		},
		{
			id: 2,
			text: 'Nothing else satisfies, only You, Lord'
		},
		{
			id: 3,
			text: 'You are my best thought by day or by night'
		},
		{
			id: 4,
			text: 'Waking or sleeping, Your presence, my light'
		}
	]
});

export default Lyric;
