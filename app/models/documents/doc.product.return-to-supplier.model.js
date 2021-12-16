const mongoose = require('mongoose');

const ProductReturnToSupplier = mongoose.model(
    'doc.product.return_to_supplier',
    new mongoose.Schema({
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        comment: String
    })
);

module.exports = ProductReturnToSupplier;