import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: uuidv4(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id) => {
    const newText = prompt("Edit task:");
    if (newText) {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, text: newText } : task
      ));
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">✨ Neon Todo List ✨</h1>
      <AddTodo addTask={addTask} />
      <TodoList tasks={tasks} toggleComplete={toggleComplete} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
