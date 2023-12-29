require('dotenv').config()
const mongoose=require("mongoose");
 const mongoURI=process.env.MONGO_URI;

const connectToMongo=()=>{
    mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose Connected");
}
module.exports=connectToMongo;