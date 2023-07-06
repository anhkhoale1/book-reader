const mongoose = require("mongoose");

const chapter = new mongoose.Schema({
  chapter_name: {
    required: true,
    type: String,
  },
  chapter_content: {
    required: true,
    type: String,
  },
  book_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId, 
  }
});

module.exports = mongoose.model("chapters", chapter);
