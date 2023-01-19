const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    id: { type: Object, required: true },
    orderiterms: { type: Array, required: true },
    shippingAddress1: { type: Boolean, required: true },
    shippingAddress1: { type: Boolean, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    Country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    dateOrdered: { type: Date, required: true },
});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
