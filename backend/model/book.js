const mongoose = require('mongoose');

const book = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('books', book)