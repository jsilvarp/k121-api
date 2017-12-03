'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const POISchema = new Schema({
	name: String,
	email: String,
	friend: String
},{
	versionKey: false
});

module.exports = mongoose.model('Secret', POISchema);
