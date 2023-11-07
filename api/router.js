import express from "express";
import { addTask, getTasks } from "./src/models/TaskModel.js";
const router = express.Router();

router.get("/", async (req, res)=> {
    const taskLists = await getTasks();
    res.json({
        status: "success",
        message: "Task is here",
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