const mongoose = require('mongoose');

/**
 * items of product receipt
 * @type {Model<{}>}
 */
const ProductWriteOffItem = mongoose.model(
    'doc.product.write_off.item',
    new mongoose.Schema({
        document: { type: mongoose.Schema.Types.ObjectId },
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.product' },
        quantity: Number,
        price: Number,
        currency: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.currency' }
    })
);

module.exports = ProductWriteOffItem;