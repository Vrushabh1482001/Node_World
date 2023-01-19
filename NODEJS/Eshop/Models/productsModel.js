const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    id: { type: String, require: true },
    name: { type: String, require: true },
    description: { type: String, require: true },
    richdescription: { type: String, require: true },
    image: { type: String, require: true },
    images: { type: String, require: true },
    brands: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: mongoose.Schema.Types.ObjectId, require: true },
    countInStock: { type: Number, require: true },
    rating: { type: Number, require: true },
    isFeatured: { type: Boolean, require: true },
    dataCreated: { type: Date, require: true },
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;

{
    "id": "P0001"
    "name": "Macbook Air"
    "description": "The MacBook Air has an anodized aluminum casing that is 0.16 inches at its thinnest point and 0.76 inches at its thickest. Often described as the same size as a pad of paper, the laptop has just one USB port, an audio headphone jack and built-in speakers and microphone."
    "richdescription":
    "image": ""
    "images":
    "brands":
    "price":
    "category":
    "countInStock":
    "rating":
    "isFeatured":
    "dataCreated":
}   
