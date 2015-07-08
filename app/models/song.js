import DS from "ember-data";

var Song = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	lyricsVersions: DS.attr(),
	lyricsBlocks: DS.attr(),

    primaryLyricsVersion: function() {
        return this.get('lyricsVersions') ? this.get('lyricsVersions').objectAt(0) : false;
    }.property('lyricsVersions'),

    secondaryLyricsVersions: function() {
        return this.get('lyricsVersions') ? this.get('lyricsVersions').slice(1) : false;
    }.property('lyricsVersions')

});

export default Song;

/* Example

{
    "_id" : 12345,
    "title" : "You Are My Vision",
    "description" : "Rend Collective Version",
    "lyricsVersions" : [
        "English",
        "Indonesian"
    ],
    "lyricsBlocks" : [ 
        {
            "name" : "Verse 1",
            "lyrics" : [ 
                {
                    "text" : {
                        "English": "You are my vision, O king of my heart",
                        "Indonesian": "Engkaulah visiku, O raja hatiku"
                    }
                }, 
                {
                    "text" : {
                        "English": "Nothing else satisfies, only You, Lord",
                        "Indonesian": "Tiada yang lain yang bisa memuaskan, hanya Engkau, Tuhan"
                    }
                }, 
                {
                    "text" : {
                        "English":  "You are my best thought by day or by night",
                        "Indonesian": "Engkau senantiasa kupikirkan, siang dan malam"
                    }
                }, 
                {
                    "text" : {
                        "English": "Waking or sleeping, Your presence, my light",
                        "Indonesian": "Terbangun maupun tertidur, hadiratMu, cahayaku"
                    }
                }
            ]
        }
    ]
}

*/
