// necessay dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/actions";

const Tasks = () => {
  // get the tasks from redux state
  const tasks = useSelector((state) => state.tasks);
  // get the dispatch function from redux to dispatch actions
  const dispatch = useDispatch();

  //function to handle deleting a task
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id)); //dispatch the deleteTask action
  };

  // function to handle editing a task
  const handleEditTask = (id) => {
    const updatedTask = prompt("Edit Task:", tasks[id]); // prompt user to edit task
    if (updatedTask) {
      dispatch(editTask(id, updatedTask)); // dispatch the editTask action
    }
  };

  return (
    <ul className="w-[60%] mt-10 mx-auto bg-emerald-600 px-16 py-2 rounded-md text-white font-medium ">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between  border-b-[1px] pb-2 px-5"
        >
          <div> {task} </div>
          <div className="flex justify-between">
            <button onClick={() => handleEditTask(index)} className="pr-3">
              ✍
            </button>
            <button onClick={() => handleDeleteTask(index)}>🗑</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
