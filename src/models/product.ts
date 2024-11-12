import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
        name: string;
        price: string;
        description: string;
        category: string;
        image: string;
        quantity: string;
        createdAt: Date;
        modifiedAt: Date | null;
        discount: number
}

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    brand: { type: String },
    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 0 }, // Average rating score
    images: [{ url: String, alt: String }],
    attributes: [
      {
        key: String,
        value: String
      }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
export const Product =  mongoose.model<IProduct>('Products', ProductSchema);