const mongoose = require('mongoose');

const Shop = mongoose.model(
    'ref.shop',
    new mongoose.Schema({
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.company' },
        name: String,
        address: String,
        phone: String,
        email: String,
        receipt_depot: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.depot' },
        sale_depot: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.depot' },
        price_template: { type: mongoose.Schema.Types.ObjectId, ref: 'ref.price.template' }
    })
);

module.exports = Shop;