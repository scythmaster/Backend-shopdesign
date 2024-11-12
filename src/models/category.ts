import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
    name: string,
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    description: string,
    createdAt: Date
}

const CategorySchema = new Schema({
    name: { type: String, required: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    description: String,
    createdAt: { type: Date, default: Date.now }
});

export const Category =  mongoose.model<ICategory>('Categories', CategorySchema);