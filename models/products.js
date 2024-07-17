const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Name is Missing"]
    },
    price:{
        type: Number,
        required: [true, "Price is Missing"]
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum:{
            values: ["apple", "samsung", "dell", "mi"],
            message: `{VALUES} is not supported`
        }
    }
})

module.exports = mongoose.model("Product", productSchema);