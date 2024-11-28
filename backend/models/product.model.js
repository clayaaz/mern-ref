import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type: String,
        require :true
    },
    price:{
        type:Number,
        require: true
    },
    image:{
        type:String,
        require: true
    }
},{
    timestamps: true //time stamps for created/updated
});

const Product = mongoose.model('Product', productSchema);
// Product == products (moongose is gonna do this itself)

export default Product;