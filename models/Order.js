import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    product: {
        required: false,
        type: String,
    },

    fname: {
        required: false,
        type: String,
    },

    lname: {
        required: false,
        type: String,
    },

    companyName: {
        required: false,
        type: String,
    },

    country: {
        required: false,
        type: String,
    },

    streetAddress: {
        required: false,
        type: String,
    },

    apartmentSuit: {
        required: false,
        type: String,
    },

    city: {
        required: false,
        type: String,
    },

    state: {
        required: false,
        type: String
    },

    phone: {
        required: false,
        type: Number,
    },

    email: {
        required: false,
        type: String,
    },

    products: {
        required: false,
        type: Object,
    },

    date: {
        required: false,
        type: String,
    },

    shipping: {
        required: false,
        type: String,
    },

    category: {
        required: false,
        type: String,
    },

    downloadable: {
        required: false,
        type: Boolean,
    },

    cost: {
        required: false,
        type: Number,
    },

    quantity: {
        required: false,
        type: Number,
    },

    total: {
        required: false,
        type: Number
    },

    coupon: {
        required: false,
        type: String,
    },

    notes: {
        required: false,
        type: String,
    },

    orderNumber: {
        required: false,
        type: String,
    },

    paymentMethod: {
        required: false,
        type: String,
    },

    status: {
        required: false,
        type: String
    },

    currencySymbol: {
        required: false,
        type: String,
    }

})


// orderSchema.pre("save", async () => {})

module.exports = mongoose.models.order || mongoose.model("order", orderSchema);
// module.exports = mongoose.model.order || mongoose.model("order", orderSchema);