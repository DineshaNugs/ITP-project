const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nic: { type: String, required: true },
    validMonths: { type: String, required: true },
    trainClass: { type: String, required: true },
    fromStation: { type: String, required: true },
    toStation : { type: String, required: true },
    createdDate : { type: Date, required: true },
}, {
    timestamps: true,
})

module.exports = SeasonPass = mongoose.model("seasonPass", passSchema);