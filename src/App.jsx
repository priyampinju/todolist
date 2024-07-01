import React from "react";
import Input from "./components/Input";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="text-center bg-cyan-900 h-[100vh] pt-10">
      <h1 className="font-bold text-gray-50 text-2xl">To-Do List</h1>
      <Input />
      <Tasks />
    </div>
  );
};

export default App;
