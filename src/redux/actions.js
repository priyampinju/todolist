// action to add new task
export const addTask = (task) => ({
  type: "ADD_TASK", // action type
  payload: task, // task data
});

// delete a task by index
export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id, // id of the task to be deleted
});

// action to edit a task by its id
export const editTask = (id, updatedTask) => ({
  type: "EDIT_TASK",
  payload: { id, updatedTask }, // id and updated task data
});
