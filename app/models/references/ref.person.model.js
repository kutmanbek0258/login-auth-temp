const mongoose = require('mongoose');

const Person = mongoose.model(
    'ref.person',
    new mongoose.Schema({
        name: String,
        surname: String,
        phone: String,
        email: String,
        address: String
    })
);

module.exports = Person;