const mongoose = require('mongoose');

const Supplier = mongoose.model(
    'ref.supplier',
    new mongoose.Schema({
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        person: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.person' }
    })
);

module.exports = Supplier;