const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({

    name: { type: String, require: true },
    description: { type: String, require: true },
    richdescription: { type: String, require: true },
    image: { type: String, require: true },
    images: { type: String, require: true },
    brand: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", require: true },
    countInStock: { type: Number, require: true },
    rating: { type: Number, require: true },
    isFeatured: { type: Boolean, require: true },
    dateCreated: { type: Date, default: Date.now() },
});


productsSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

productsSchema.set("toJSON", {
    virtuals: true,
});
const Products = mongoose.model('Products', productsSchema);

module.exports = Products;

/* {
    
        "name": "Macbook Air",
            "description": "The MacBook Air has an anodized aluminum casing that is 0.16 inches at its thinnest point and 0.76 inches at its thickest. Often described as the same size as a pad of paper, the laptop has just one USB port, an audio headphone jack and built-in speakers and microphone.",
                "richdescription": "https://www.apple.com/in/macbook-air-m1/",
    "image": "path",
        "images": "Folder paths",
            "brands": "Apple",
                "price": 99999,
                    "category": "63c8d24a90e8188aac67f726",
    "countInStock": 999,
    "rating": 5,
    "isFeatured": true,
    "dataCreated": 20230119
}   */
