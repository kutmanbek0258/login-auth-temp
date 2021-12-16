const mongoose = require('mongoose');

/**
 * items of product receipt
 * @type {Model<{}>}
 */
const ProductOrderToSupplier = mongoose.model(
    'doc.product.order_to_supplier.item',
    new mongoose.Schema({
        document: { type: mongoose.Schema.Types.ObjectId },
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.product' },
        quantity: Number,
        price: Number,
        currency: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.currency' }
    })
);

module.exports = ProductOrderToSupplier;