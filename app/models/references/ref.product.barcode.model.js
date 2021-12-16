const mongoose = require('mongoose');

const ProductBarcode = mongoose.model(
    'ref.product.barcode',
    new mongoose.Schema({
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.product' },
        barcode: String
    })
);

module.exports = ProductBarcode;