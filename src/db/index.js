import mongoose from 'mongoose';
import {DB_NAME} from '../constant.js';


const connectDB = async () => {
    try{
        const connection  =  await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`);
        console.log(`MongoDB connected!! DB Host: ${connection.connection.host}`);
    }
    catch(error){
        console.log("This is DB Connection error",error);
        process.exit(1);
    }

}


export default connectDB;