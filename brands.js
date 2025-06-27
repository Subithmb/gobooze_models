const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const brandSchema = new mongoose.Schema(
  {
    brandName: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:false
    },
    
    brandImage: {
        type:String,
        required:false
    },
    addedBy:{
        type: Schema.Types.ObjectId,
        ref: "User",    
    },
    updatedBy:{
      type: Schema.Types.ObjectId,
      ref: "User",
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

module.exports = mongoose.model("brands", brandSchema);
