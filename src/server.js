import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

const logger = morgan("dev");

const controllerHome = (req, res) => {
    return res.send("Hello");
}

const controllerLogin = (req, res) => {
    return res.send("login");
}

app.use(logger);
app.get("/", controllerHome);
app.get("/login", controllerLogin);


const handleListning = () => 
    console.log(`✅ Server is linstening on port http://localhost:${PORT} 🎉`);

app.listen(PORT, handleListning);