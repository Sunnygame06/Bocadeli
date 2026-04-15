import mongoose, {Schema, model} from "mongoose"

const productSchema = new Schema({
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    stock: {type: Number},
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    isActive: {type: Boolean}
},{
    timestamps: true,
    strict: false
})

export default model("Product", productSchema)