const mongoose = require('mongoose');

const POSCheck = mongoose.model(
    'doc.pos.check',
    new mongoose.Schema({
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        pos: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.pos' },
        shift: { type: mongoose.Schema.Types.ObjectId, ref: 'doc.pos.shift' },
        salesman: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.person' },
        customer: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.person' },
        archive: Boolean
    })
);

module.exports = POSCheck;