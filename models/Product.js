import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    virtual: Boolean,
    downloadable: Boolean,
    regularPrice: Number,
    salePrice: Number,
    visibility: Boolean,
    image: String,
    category: String,
    tags: Array,
    sku: String,
    stockStatus: String,
    soldIndividualy: Boolean,
    shortDescription: String,
    date: String,
    published: Boolean
});


module.exports = mongoose.models.product || mongoose.model("product", productSchema);