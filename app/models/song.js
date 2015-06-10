import DS from "ember-data";

var Song = DS.Model.extend({

	title: DS.attr('string'),
	description: DS.attr('string'),

	lyricsVersions: DS.hasMany('lyrics-version', {'async': true}),

	primaryLyricsVersion: function() {
		return this.get('lyricsVersions') ? this.get('lyricsVersions').objectAt(0) : false;
	}.property('lyricsVersions')

});

Song.reopenClass({
	FIXTURES: [{
		id: 1,
		title: 'You Are My Vision',
		description: 'Be Thou My Vision, RC Version',
		lyricsVersions: [1]
	}]
});

export default Song;
