const mongoose = require('mongoose');

const ProductWriteOff = mongoose.model(
    'doc.product.write_off',
    new mongoose.Schema({
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        depot: { type: mongoose.schema.Types.ObjectId, ref: 'ref.depot' },
        comment: String
    })
)