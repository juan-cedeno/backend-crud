
const {Schema , model} = require('mongoose')


const productSchema = new Schema ({

    name : {
        type : String,
        unique : true,
        required : true
    },

    price : {
        type: Number,
        required : true
    }
})

module.exports = model('Product' , productSchema)