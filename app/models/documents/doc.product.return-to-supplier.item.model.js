const mongoose = require('mongoose');

/**
 * items of product return to supplier
 * @type {Model<{}>}
 */
const ProductOrderToSupplierItem = mongoose.model(
    'doc.product.return_to_supplier.item',
    new mongoose.Schema({
        document: { type: mongoose.Schema.Types.ObjectId },
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.product' },
        quantity: Number,
        price: Number,
        currency: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.currency' }
    })
);

module.exports = ProductOrderToSupplierItem;