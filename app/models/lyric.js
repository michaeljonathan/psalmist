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
		},

		{
			id: 5,
			text: 'Engkaulah visiku, O raja hatiku'
		},
		{
			id: 6,
			text: 'Tiada yang lain yang bisa memuaskan, hanya Engkau, Tuhan'
		},
		{
			id: 7,
			text: 'Engkau senantiasa kupikirkan, siang dan malam'
		},
		{
			id: 8,
			text: 'Terbangun maupun tertidur, hadiratMu, cahayaku'
		}
	]
});

export default Lyric;
