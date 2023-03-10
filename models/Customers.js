import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    fname: {
        required: false,
        type: String
    },

    lname: {
        required: false,
        type: String
    },

    username: {
        type: String,
        required: false,
        unique: true,
    },

    email: {
        type: String,
        required: true,
    },

    lastActive: {
        type: String,
        required: false,

    },

    dateRegistered: {
        type: String,
        required: false,
    },

    orders: {
        required: false,
        type: Number,
    },

    totalSpend: {
        required: false,
        type: Number,

    },

    aov: {
        type: String,
        required: false,
    },

    country: {
        type: String,
        required: false,
    },

    city: String,
    phone: String,
    region: String,
    postalCode: String,
});


module.exports = mongoose.models.customer || mongoose.model("customer", customerSchema);