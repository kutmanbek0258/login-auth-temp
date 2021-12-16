const mongoose = require('mongoose');

const POSShift = mongoose.model(
    'doc.pos.shift',
    new mongoose.Schema({
        opened_at: Date,
        closed_at: Date,
        open: Boolean,
        salesman: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.person' },
        pos: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.pos' }
    })
);

module.exports = POSShift;