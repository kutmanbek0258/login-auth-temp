const mongoose = require('mongoose');

const PriceTemplate = mongoose.model(
    'ref.price.template',
    new mongoose.Schema({
        name: String,
        template: JSON
    })
);

module.exports = PriceTemplate;