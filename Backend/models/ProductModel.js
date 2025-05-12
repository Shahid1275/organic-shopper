// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     ingredients: {
//         type: Array,
//         required: true,
//     },
//     benefits: {
//         type: Array,
//         required: true,
//     },
//     stockStatus: {
//         type: String,
//         required: true,
//     },
//     price: {  
//         type: Number,
//         required: true,
//     },
//     image: {
//         type: Array,
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//     },
//     subCategory: {
//         type: String,
//         required: true,
//     },
//     sizes: {
//         type: Array,
//         required: true,
//     },
//     date: {
//         type: Number,
//         required: true,
//     },
//     bestseller: {
//         type: Boolean,
//     },
//     reviews: {
//         type: Array,
//         required: true,
//     }
// })

// const productModel = mongoose.models.product || mongoose.model('Product', productSchema);

// export default productModel;
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String], 
        required: true,
    },
    benefits: {
        type: [String], 
        required: true,
    },
    stockStatus: {
        type: String,
        required: true,
    },
    price: {  
        type: Map, 
        required: true,
    },
    image: {
        type: [String],  
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    sizes: {
        type: [String], 
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    bestseller: {
        type: Boolean,
        default: false, 
    },
    reviews: {
        type: [{ // CHANGED: Specified schema for Array of review objects
            name: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
            date: { type: Number, required: true }
        }],
        required: true,
    }
})

const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);

export default productModel;