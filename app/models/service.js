import DS from "ember-data";

var Service = DS.Model.extend({

	name: DS.attr('string'),

	items: DS.hasMany('service-item', {'async': true})

});

Service.reopenClass({
	FIXTURES: [{
		id: 1,
		name: 'LLL 2014 06 13',
		items: [1]
	}]
});

export default Service;

/*
Service.reopenClass({
	FIXTURES: [{
		id: 1,
		title: 'LLL 2014 06 13',
		serviceItems: [
			{
				id: 1,
				itemType: 'song',
				song: {
					id: 1,
					title: 'You Are My Vision',
					description: 'Be Thou My Vision, RC Version',
					lyricsVersions: [
						{
							id: 1,
							name: 'English',
							lyricsBlocks: [
								{
									id: 1,
									name: 'Verse 1',
									lyrics: [
										'You are my vision, O king of my heart',
										'Nothing else satisfies, only You, Lord',
										'You are my best thought by day or by night',
										'Waking or sleeping, Your presence, my light'
									]
								}
							]
						}
					]
				},
				sequenceEnabled: false,
				sequence: [],
				versions: ['English']
			}
		]
	}]
});
*/
