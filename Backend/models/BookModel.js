import mongoose from "mongoose";

const userSchema = mongoose.Schema({
book_name:{
    type:String,
    require:true
},
publisher:{
    type:String,
    default:"None"
},
edition:{
    type:Number,
    default:1,
},
no_of_pages:{
    type:Number,
    require:true
},
isbn_no:{
    type:Number,
    require:true,
    minLength:5,
    unique:true
},
thumbnail:{
    type:String,
    default:""
},
price:{
    type:Number,
    require:true,
},
subscribed:{
    type:Boolean,
    default:false
}
})

export default mongoose.model("books", userSchema);