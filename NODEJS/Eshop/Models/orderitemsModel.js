const mongoose = require('mongoose');

const orderitemsSchema = new mongoose.Schema({
    id: {
        type: Object,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Orderitems = mongoose.model('Orderitems', orderitemsSchema);

module.exports = Orderitems;
