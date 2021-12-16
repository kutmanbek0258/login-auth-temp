const mongoose = require('mongoose');

const ProductMove = mongoose.model(
    'doc.product.move',
    new mongoose.Schema({
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        sender_depot: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.depot' },
        recipient_depot: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.depot' },
        comment: String
    })
);

module.exports = ProductMove;