import { useState } from "react";

const AddTodo = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input 
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default AddTodo;
