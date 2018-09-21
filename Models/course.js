var mongoose = require('mongoose');

// Credential Schema
var Course = mongoose.Schema({
	name: {
		type: String
	}
	
});

 module.exports = mongoose.model('Course', Course);


