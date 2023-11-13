import express from "express";
import { connectDb } from "./src/dbConfig.js";
import taskRouter from "./router.js";
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config";
import path from 'path';



const app = express();
const PORT = 8000;
connectDb();

const __dirname = path.resolve();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "build")))

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/task", taskRouter);

// app.use("/", (req, res) => {
//     res.json({
//         status: "success",
//         message: "You are now on server",
//     })
// })

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname , "/index.html"))
})

app.listen(PORT, (error) => {
    error 
    ? console.log(error) 
    : console.log(`Server is running at http://localhost:${PORT}`)
})
