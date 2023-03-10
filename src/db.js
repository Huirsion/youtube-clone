import mongoose from "mongoose";

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser : true, 
    useUnifiedTopology : true,
}); // connect database

const db = mongoose.connection; // connection์ ๋ํ access

const handleOpen = () => console.log("โ Connected to DB ๐");
const handleError = (error) => console.log("โ DB ERROR โ๏ธโ๏ธ", error);

db.on("error", handleError);
db.once("open", handleOpen);