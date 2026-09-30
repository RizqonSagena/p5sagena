import express from "express";
import morgan from "morgan";

const app = express();

app.use (express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/status", (req, res) => {
    return res.status(200).json({
        systemname : "Inventory API v1",
        author : "Muhammad Rizqon Sagena",
        message : "API sudah aktif",
        uptime : process.uptime(),
    });
});

export default app;