import mongoose from "mongoose"
const connectToDB = async () => {
    try {
        await  mongoose.connect("mongodb://localhost/Hanami_products");
        console.log('Mongodb is connected!!!!');
    } catch (error) {
        console.log(error);
    }
}
export default connectToDB;