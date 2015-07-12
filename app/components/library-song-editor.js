import Ember from 'ember';

var textToSongData = function(rawText) {

	// Parse rawText into internal JSON format

	var blockRegExp = /\[([A-Za-z0-9\s]*)\]/;
	var versionRegExp = /\(([A-Za-z0-9\s]*)\)/;

	var blocks = [];
	var currentBlock = null;
	var currentVersion = null;

	var lines = rawText.split('\n');

	for (var lineNumber = 0; lineNumber < lines.length; lineNumber++) {

		// Grab line (trimmed)
		var line = lines[lineNumber];
		line = line.trim();

		// Empty line
		if (!line) {
			continue;
		}

		// New block definition
		var blockNameMatches = line.match(blockRegExp);
		if (blockNameMatches) {
			var blockName = blockNameMatches[1];
			if (currentVersion) {
				currentBlock.versions.push(currentVersion);
			}
			if (currentBlock) {
				blocks.push(currentBlock);
			}
			currentBlock = {
				name: blockName,
				versions: []
			};
			currentVersion = null;
			continue;
		}

		// New version definition
		var versionNameMatches = line.match(versionRegExp);
		if (versionNameMatches) {
			var versionName = versionNameMatches[1];
			if (!currentBlock) {
				return {
					status: 'error',
					error: 'Version "'+versionName+'" on line '+lineNumber+' has no block'
				};
			}
			if (currentVersion) {
				currentBlock.versions.push(currentVersion);
			}
			currentVersion = {
				name: versionName,
				lyrics: []
			};
			continue;
		}

		// New lyric
		if (!currentVersion) {
			currentVersion = {
				name: 'default',
				lyrics: []
			};
		}
		currentVersion.lyrics.push(line);
	}

	if (currentBlock) {
		if (currentVersion) {
			currentBlock.versions.push(currentVersion);
		}
		blocks.push(currentBlock);
	}

	// Process internal JSON format to lyricsVersions and lyricsBlocks

	var outputLyricsVersions = [];
	var outputLyricsBlocks = [];

	for (var i = 0; i < blocks.length; i++) {

		var block = blocks[i];

		var outputLyricsBlock = {
			name: block.name,
			lyrics: []
		};

		for (var j = 0; j < block.versions.length; j++) {

			var version = block.versions[j];

			if (outputLyricsVersions.indexOf(version.name) === -1) {
				outputLyricsVersions.push(version.name);
			}

			for (var k = 0; k < version.lyrics.length; k++) {

				var lyricText = version.lyrics[k];

				if (outputLyricsBlock.lyrics.length <= k) {
					var outputLyric = {
						text: {}
					};
					outputLyric.text[version.name] = lyricText;
					outputLyricsBlock.lyrics.push(outputLyric);
				} else {
					outputLyricsBlock.lyrics[k].text[version.name] = lyricText;
				}

			}

		}

		outputLyricsBlocks.push(outputLyricsBlock);
	}

	// Return
	return {
		status: 'ok',
		lyricsVersions: outputLyricsVersions,
		lyricsBlocks: outputLyricsBlocks
	};
};

var songDataToText = function(lyricsVersions, lyricsBlocks) {

	var outputString = '';

	for (var i = 0; i < lyricsBlocks.length; i++) {

		var lyricsBlock = lyricsBlocks[i];

		outputString += '['+lyricsBlock.name+']\n';

		for (var j = 0; j < lyricsVersions.length; j++) {

			var lyricsVersion = lyricsVersions[j];

			outputString += '('+lyricsVersion+')\n';

			for (var k = 0; k < lyricsBlock.lyrics.length; k++) {

				var lyric = lyricsBlock.lyrics[k];

				outputString += lyric.text[lyricsVersion]+'\n';

			}
		}

		outputString += '\n';
	}

	return outputString;
};

export default Ember.Component.extend({

	formData: {
		title: '',
		description: '',
		lyrics: ''
	},

	didInsertElement: function() {

		// Prepare formData from song, if any
		var song = this.get('song');
		if (song) {
			var formData = {
				title: song.get('title'),
				description: song.get('description'),
				lyrics: songDataToText(song.get('lyricsVersions'), song.get('lyricsBlocks'))
			};
			this.set('formData', formData);
		}

	},

	actions: {

		save: function() {

			var formData = this.get('formData'),
				existingSong = this.get('song'),
				songData = textToSongData(formData.lyrics),
				song;

			if (!(songData && songData.status === 'ok')) {
				alert('Something went wrong.');
				return;
			}

			if (existingSong) {
				song = existingSong;
			} else {
				song = this.get('store').createRecord('song');
			}

			console.log(songData);

			song.set('title', formData.title);
			song.set('description', formData.description);
			song.set('lyricsVersions', songData.lyricsVersions);
			song.set('lyricsBlocks', songData.lyricsBlocks);
			song.save();

			this.sendAction('doneEditingAction');
		},

		cancel: function() {
			if (window.confirm('Discard any changes?')) {
				this.sendAction('doneEditingAction');
			}
		}

	}

});
