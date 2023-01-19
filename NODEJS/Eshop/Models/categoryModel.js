const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: { type: Object, required: true },
    name: { type: String, required: true },
    color: { type: String, required: true },
    icon: { type: String, required: true },
    image: { type: String, required: true }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
