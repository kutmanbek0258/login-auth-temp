const mongoose = require('mongoose');

const ProductReturnFromCustomer = mongoose.model(
    'doc.product.return_from_customer',
    new mongoose.Schema({
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        pos: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.pos' },
        pos_check: { type: mongoose.Schema.Types.ObjectId, ref: 'doc.pos.check' },
        comment: String
    })
);

module.exports = ProductReturnFromCustomer;