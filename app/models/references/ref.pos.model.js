const mongoose = require('mongoose');

const POS = mongoose.model(
    'ref.pos',
    new mongoose.Schema({
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        name: String
    })
);

module.exports = POS;