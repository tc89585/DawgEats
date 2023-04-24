const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: {
  type: String,
   //required: true,
 },
 address: String,
 number: String,
 cuisine: String,
 imageUrl: {
   type: String,
   //required: true,
 },
 description: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = {Restaurant, restaurantSchema};