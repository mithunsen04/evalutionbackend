

const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  device: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Post', postSchema);
