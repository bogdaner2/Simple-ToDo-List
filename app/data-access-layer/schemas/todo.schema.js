const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
	target: String,
	createdAt: Date,
	done: Boolean,
});

module.exports = mongoose.model('Todo', Todo);