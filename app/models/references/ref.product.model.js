const mongoose = require('mongoose');

const Product = mongoose.model(
    'ref.product',
    new mongoose.Schema({
        name: String,
        description: String,
        group: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.product.group' }
    })
);

module.exports = Product;