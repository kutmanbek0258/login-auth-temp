const mongoose = require('mongoose');

const ProductRecount = mongoose.model(
    'doc.product.recount',
    new mongoose.Schema({
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        depot: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.depot' },
        comment: String
    })
);

module.esports = ProductRecount;