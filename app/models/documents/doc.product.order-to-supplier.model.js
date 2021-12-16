const mongoose = require('mongoose');

/**
 * Order to supplier document
 * @type {Model<{}>}
 */
const OderToSupplier = mongoose.model(
    'doc.product.order_to_supplier',
    new mongoose.Schema({
        recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.supplier' },
        comment: String
    })
);

module.exports = OderToSupplier;