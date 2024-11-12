import { Schema } from "mongoose";

const PromoCodeSchema = new Schema({
    code: { type: String, required: true, unique: true },
    discountPercentage: { type: Number, required: true },
    maxDiscountAmount: { type: Number },
    expirationDate: { type: Date },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
  });
  