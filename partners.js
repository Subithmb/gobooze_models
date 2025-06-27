const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const partnerSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: false,
    },
    role_id: {
      type: ObjectId,
      required: true,
      ref: "Role",
    },
    store_id: {
      type: [ObjectId],
      required: false,
      ref: "Store",
    },
    email: {
      type: String,
      required: false,
    },
    token: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    alternative_phone_number: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    otp: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
    city: {
      type: String,
      required: false,
    },
    zip_code: {
      type: String,
      required: false,
    },
    is_active: {     ///Working Status
      type: Boolean,
      default: false,
      required: false,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
        required: false,
      },
      coordinates: {
        type: [Number, Number], // [<longitude>, <latitude> ]
        required: false,
        // index: '2dsphere'
      },
    },
    address: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false,
    },
    identityImages: {
      type: Array,
      required: false,
    },
    status: {        /// account status
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
    fbToken: {
      key: {
        type: String,
        required: false,
        default: "",
      },
      enabled: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

partnerSchema.index({ location: "2dsphere" })

module.exports = mongoose.model("Partner", partnerSchema, "partners");
