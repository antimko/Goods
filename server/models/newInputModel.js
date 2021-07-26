const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleOrServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const ArticleOrServiceModel = mongoose.model('post', ArticleOrServiceSchema);

module.exports = ArticleOrServiceModel;
