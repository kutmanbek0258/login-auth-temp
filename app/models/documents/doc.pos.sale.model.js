const mongoose = require('mongoose');

const POSSale = mongoose.model(
    'doc.pos.sale',
    new mongoose.Schema({
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        pos: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.pos' },
        shift: { type: mongoose.Schema.Types.ObjectId, ref: 'doc.pos.shift' },
        salesman: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.person' },
        comment: String
    })
);

module.exports = POSSale;