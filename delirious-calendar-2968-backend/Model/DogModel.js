const mongoose = require('mongoose');

// Define the schema
const DogsSchema = mongoose.Schema({
  id: { type: Number },
  image: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  breed: { type: String, required: true },
  distance: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true }
});

// Create the model
const DogsModel = mongoose.model('Dog', DogsSchema);

// Export the model
module.exports = DogsModel;
