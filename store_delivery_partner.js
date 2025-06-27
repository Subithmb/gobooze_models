const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const storeDeliveryPartner = new mongoose.Schema(
  {
    store_id: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    partner: {
      type: ObjectId,
      ref: "Partner",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
  },
  {
    suppressReservedKeysWarning: true,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "StoreDeliverPartner",
  storeDeliveryPartner,
  "store_delivery_partners"
);
