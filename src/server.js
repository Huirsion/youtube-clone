import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send("Hello");
}

const handleLogin = (req, res) => {
    return res.send("Login Page");
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListning = () => 
    console.log(`✅ Server is linstening on port http://localhost:${PORT} 🎉`);

app.listen(PORT, handleListning);