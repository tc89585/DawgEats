const mongoose = require('mongoose');
//schema -> model class -> instance of a model is a document
const { Schema } = mongoose;
const { restaurantSchema } = require('./restaurant.js');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  restaurants: [restaurantSchema],
});

module.exports = User = mongoose.model('user', userSchema);
