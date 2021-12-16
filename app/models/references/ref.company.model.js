const mongoose = require('mongoose');

/**
 * Company reference
 * @type {Model<{}>}
 */
const Company = mongoose.model(
    'ref.company',

    new mongoose.Schema({
        name: String,
        description: String,
        ITN: String,
        admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        address: String,
        phone: String,
        email: String,
        postcode: String
    })
);

module.exports = Company;