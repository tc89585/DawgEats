const mongoose = require('mongoose');

const { Schema } = mongoose;

const restautantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: String,
  number: String,
  cuisine: String,
  imageUrl: {
    type: String,
    required: true,
  },
  description: String,
});

module.exports = Restaurant = mongoose.model('restaurant', restautantSchema);
