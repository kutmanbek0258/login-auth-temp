const mongoose = require('mongoose');

/**
 * Product posting document
 * @type {Model<{}>}
 */
const ProductPosting = mongoose.model(
    'doc.product.posting',
    new mongoose.Schema({
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        depot: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.depot' },
        comment: String
    })
);

module.exports = ProductPosting;