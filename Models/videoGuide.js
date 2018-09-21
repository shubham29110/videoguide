var mongoose = require('mongoose');

// Credential Schema
var VideoGuide = mongoose.Schema({
	title: {
		type: String
	},
	video_url: {
		type: String
	},
	duration: {
		type :Number
	},
	courseId: {
		type :mongoose.Schema.Types.ObjectId,
		unique:true
	}
	
});

module.exports =   mongoose.model('Videoguide', VideoGuide);