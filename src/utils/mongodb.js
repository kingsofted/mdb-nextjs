import mongoose from "mongoose";

const connectMongoDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to mongoDB. ")
    }catch(error){
        console.log(error);
        throw new Error("Connection failed!");
    }
};

export default connectMongoDb;