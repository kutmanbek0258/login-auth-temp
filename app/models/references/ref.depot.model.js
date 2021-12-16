const mongoose = require('mongoose');

const Depot = mongoose.model(
    'ref.depot',
    new mongoose.Schema({
        shop: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.shop' },
        name: String
    })
);

module.exports = Depot;