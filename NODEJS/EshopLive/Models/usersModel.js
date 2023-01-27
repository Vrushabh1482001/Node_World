const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    street: { type: String, required: true },
    apartment: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    isAdmin: { type: Boolean, required: true },
});

usersSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

usersSchema.set("toJSON", {
    virtuals: true,
});
const Users = mongoose.model('Users', usersSchema);

module.exports = Users;


/* {
        "name": "Satasiya Vrushabh",
            "email": "vrushabhsatasiya82001@email.com",
                "passwordHash": "Vru@82001",
                    "street": "Laxminagar",
                        "apartment": "Laxminagar",
                            "city": "surat",
                                "zip": "395010",
                                    "country": "India",
                                        "phone": 7069182001,
                                            "isAdmin": true

} */