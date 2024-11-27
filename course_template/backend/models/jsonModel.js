const mongoose = require('mongoose');

const jsonSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema
module.exports = mongoose.model('JsonData', jsonSchema);
