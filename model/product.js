import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Product price must be provided"],
  },
  featured: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: Number,
    default: 5
    }, 
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: `{VALUE} is not supported`
        }
  }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)
export default Product;