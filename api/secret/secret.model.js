'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var POISchema = new Schema({
	name: String,
	email: String,
	friend: String
},{
	versionKey: false
});

module.exports = mongoose.model('Secret', POISchema);