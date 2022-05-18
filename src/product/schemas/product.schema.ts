/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Schema } from 'mongoose'

export const ProductSchema = new Schema({
   name: { type: String, required: true }, 
   brand: String,
   description: String,
   imageURL: String,
   price: Number,
   createdAt: {
      type: Date,
      default: Date.now
   }
})