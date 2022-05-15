const mongoose = require("mongoose");
const stakeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    categroy: { type: String , required: true },
    brand: { type: String , required: true },
    name: { type: String , required: true },
    // image: { type: String, required: true },
    amount: { type: Number, required: true },
    discription: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: Number, required: true },
}, { timestamps: true, collection: 'sell' })
module.exports = mongoose.model('sell', stakeSchema);