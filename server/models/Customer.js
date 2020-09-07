import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Customer = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, reqired: true },
    creatorEmail: { type: String, required: true },
    points: { type: Number, default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Customer.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true,
});

export default Customer;
