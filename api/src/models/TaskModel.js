import TaskSchema from './TaskSchema.js';

// add task to db

export const addTask = obj => {
  return TaskSchema(obj).save();
}

//get all the tasks

export const getTasks = () => {
  return TaskSchema.find();
};

export const updateTasks = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, {type});
};

//ids is an array
export const deleteTasks = (ids) => {
  // console.log(ids, "lkjhgf")
  return TaskSchema.deleteMany({
    _id: {
      $in: ids
    }
  });
};