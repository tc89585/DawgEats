const mongoose = require('mongoose');
//schema -> model class -> instance of a model is a document
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  restaurants: Array
});

module.exports = User = mongoose.model('user', userSchema);
