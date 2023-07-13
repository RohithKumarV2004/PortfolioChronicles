import mongoose from "mongoose";


const connect = async()=>{
    try{
        console.log("sucess")
        await mongoose.connect(process.env.MONGO);
        console.log("yes")
    } catch (error) {
        console.log("fail")
        throw new Error("connection failed");
    }
}
export default connect;