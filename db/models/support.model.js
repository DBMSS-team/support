const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supportSchema = new Schema({
	question: { type: String, required: true },
	answer: { type: String, required: true },
});

const Support = mongoose.model('Support', supportSchema);

module.exports = { Support };
