import { Schema } from "mongoose";

const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
      {
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        productName: String,
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
      }
    ],
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String
    },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
  });
  