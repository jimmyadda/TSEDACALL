const mongoose = require("mongoose");
const moment = require("moment");
const momentTz = require('moment-timezone');

const userSubSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    telephone: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
}, { _id: false });

const donationSchema = new mongoose.Schema({
    userDetails: {
        type: userSubSchema,
        required: true,
    },
    processId: {
        type: String,
    },
    processToken: {
        type: String,
    },
    allPaymentsNum: {
        type: String,
    },
    asmachta: {
        type: String,
    },
    cardBrand: {
        type: String,
    },
    cardBrandCode: {
        type: String,
    },
    cardExp: {
        type: String,
    },
    cardSuffix: {
        type: String,
    },
    cardType: {
        type: String,
    },
    cardTypeCode: {
        type: String,
    },
    description: {
        type: String,
    },
    firstPaymentSum: {
        type: String,
    },
    paymentDate:{
        type: String,
    },
    paymentType:{
        type: String,
    },
    paymentsNum:{
        type: String,
    },
    periodicalPaymentSum:{
        type: String,
    },
    status:{
        type: String,
    },
    sum:{
        type: String,
    },
    transactionId:{
        type: String,
    },
    transactionToken:{
        type: String,
    },
    transactionTypeId:{
        type: String,
    },
    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "campaigns",
        required: true,
    },
    createdAt: {
        type: String,
        default: new Date()
    }
});

donationSchema.pre("save", async function(next) {
    const donation = this;

    next();
});

const Payment = mongoose.model("Donation", donationSchema);

module.exports = Payment;