const mongoose = require('mongoose');

/**
 * Product receipt document
 * @type {Model<{}>}
 */
const ProductReceipt = mongoose.model(
    'doc.product.receipt',
    new mongoose.Schema({
        recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.supplier' },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        depot: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.depot' },
        comment: String
    })
);

module.exports = ProductReceipt;