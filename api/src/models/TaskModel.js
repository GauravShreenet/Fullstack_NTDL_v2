import TaskSchema from './TaskSchema.js';

// add task to db

export const addTask = obj => {
  return TaskSchema(obj).save();
}

//get all the tasks

export const getTasks = () => {
  return TaskSchema.find();
};

