import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {   
    console.log(`method : ${req.method}, url : ${req.url}`);
    next();
}

const controllerHome = (req, res) => {
    return res.send("Hello");
}

app.use(logger);
app.get("/", controllerHome);


const handleListning = () => 
    console.log(`✅ Server is linstening on port http://localhost:${PORT} 🎉`);

app.listen(PORT, handleListning);