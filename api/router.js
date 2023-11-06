import express from "express";
import { addTask } from "./src/models/TaskModel.js";
const router = express.Router();

router.get("/", (req, res)=> {
    res.json({
        status: "success",
        message: "still to do",
    });
});

router.post("/", async (req, res) => {
    console.log(req.body);

    //add data to the database
    const result = await addTask(req.body);

    result?._id 
    ? res.json({
        status: "success",
        message: "The Task has been added",
    })
    : res.json({
        status: "Error",
        message: "Error try later",
    })
});

export default router;