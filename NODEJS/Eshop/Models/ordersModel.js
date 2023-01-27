const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    orderitems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Orderitems", required: true }],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true, default: "Pending" },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    dateOrdered: { type: Date, default: Date.now() },
});

ordersSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

ordersSchema.set("toJSON", {
    virtuals: true,
})

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;

/* 

{
  "orderitems": [
    {
      "quantity": 3,
      "product": "63cb5a6b02406eafa2f4f747"
    },
    {
      "quantity": 2,
      "product": "63cfc619235df2f602d2d0a7"
    }
  ],
  "shippingAddress1": "SkillQode",
  "shippingAddress2": "MicraSolution",
  "city": "Surat",
  "zip": "395010",
  "country": "India",
  "phone": 9499556267,
  "user": "63cf4a838ec3404d47717ffc"
}

*/
