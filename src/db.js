import mongoose from "mongoose";

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser : true, 
    useUnifiedTopology : true,
}); // connect database

const db = mongoose.connection; // connection에 대한 access

const handleOpen = () => console.log("✅ Connected to DB 👍");
const handleError = (error) => console.log("❌ DB ERROR ❗️❗️", error);

db.on("error", handleError);
db.once("open", handleOpen);