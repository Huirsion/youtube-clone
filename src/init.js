import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListning = () => 
    console.log(`✅ Server is linstening on http://localhost:${PORT} 🎉`);

app.listen(PORT, handleListning);