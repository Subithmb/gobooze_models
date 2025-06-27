const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const subscriptionSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("subscriptions", subscriptionSchema);
