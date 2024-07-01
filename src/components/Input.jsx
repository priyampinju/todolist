// necessryy dependencies
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const Input = () => {
  // state to store the current task input
  const [task, setTask] = useState("");
  // get the dispatch function from redux to dispatch actions
  const dispatch = useDispatch();

  // ffunction to handle adding task
  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task)); // dispatch the addTask action
      setTask(""); // Clear the input field
    }
  };

  return (
    <div className="mt-10">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} //update state on input change
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()} // add task on Enter key press
        className="mr-5 rounded-lg"
      />

      <button
        onClick={handleAddTask}
        className="ml-5 bg-slate-400 px-4 rounded-lg font-medium"
      >
        Add Task
      </button>
    </div>
  );
};

export default Input;
