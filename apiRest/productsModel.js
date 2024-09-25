const mongoose = require ('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type: String
    },
    mark:{
        type: String
    },
    typeProduct:{
        type: String
    },
    date:{
        type: String
    },
    description:{
        type:String
    }
},
{
 timestamps : true,
 versionKey: false   
});

const ModelProduct = mongoose.model("product", productSchema);
module.exports = ModelProduct;