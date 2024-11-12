import { Schema } from "mongoose";

const PaymentSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['credit card', 'paypal', 'cash on delivery'] },
    transactionId: { type: String },
    status: { type: String, enum: ['successful', 'failed', 'pending'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
  });
  