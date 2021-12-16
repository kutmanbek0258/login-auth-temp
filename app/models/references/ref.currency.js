const mongoose = require('mongoose');

/**
 * Currency reference
 * @type {Model<{}>}
 */
const Currency = mongoose.model(
    'ref.currency',
    new mongoose.Schema({
        name: String,
        code: String,
        rate_of_usd: Number
    })
);

module.exports = Currency;