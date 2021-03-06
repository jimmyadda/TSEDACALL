const mongoose = require("mongoose");
const moment = require("moment");

// const userSubSchema = new mongoose.Schema({
//     _id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "users"
//     },
//     fname: {
//         type: String,
//         required: true,
//     },
//     lname: {
//         type: String,
//         required: true,
//     },
//     telephone: {
//         type: String
//     },
//     email: {
//         type: String,
//         required:true
//     },
//     address: {
//         type: String
//     },
//     zip: {
//         type: String
//     },
//     city: {
//         type: String
//     },
//     country: {
//         type: String
//     },
//     anonymous: {
//         type: Boolean,
//         default:false
//     },
//     isRegistered: {
//         type: Boolean,
//         required:true
//     },
//     message: {
//         type: String,
//         default:''
//     }
// }, { _id: false });

const donationSchema = new mongoose.Schema({
    // userDetails: {
    //     type: userSubSchema,
    //     required: true,
    // },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
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
        type: String,
        required:true
    },
    address: {
        type: String
    },
    zip: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    anonymous: {
        type: Boolean,
        default:false
    },
    isRegistered: {
        type: Boolean,
        required:true,
        default:false
    },
    message: {
        type: String,
        default:''
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
    promise: {
        type: Boolean,
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
        type: Number,
        required: true,
    },
    currency:{
        type: String,
        required: true,
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
    type_payment:{
        type: String,
    },
    type_donator:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

donationSchema.pre("save", async function(next) {
    const donation = this;

    next();
});

const Payment = mongoose.model("Donation", donationSchema);

module.exports = Payment;