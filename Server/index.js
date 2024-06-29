import express from "express";
import dotenv from "dotenv";
import fitnessRouter from "./routes/routes.js";
import dbConnect from "./config/database.js";

const app = express();


dotenv.config();

const PORT = process.env.PORT || 4000;


app.use(express.json());


app.use("/api/v1", fitnessRouter);


app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT}`)
})

dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage</h1>`);
})


