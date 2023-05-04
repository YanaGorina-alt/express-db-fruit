const { Schema, model} = require('mongoose');

const vegSchema = new Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Veg = model('Veg', vegSchema);

module.exports = Veg;