const mongoose = require('mongoose');

const ProductGroup = mongoose.model(
    'ref.product.group',
    new mongoose.Schema({
        name: String
    })
);

module.exports = ProductGroup;