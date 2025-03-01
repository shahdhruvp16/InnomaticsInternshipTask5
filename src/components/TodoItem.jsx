import { motion } from "framer-motion";

const TodoItem = ({ task, toggleComplete, editTask, deleteTask }) => {
  return (
    <motion.div 
      className={`todo-item ${task.completed ? "completed" : ""}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <div className="actions">
        <button onClick={() => editTask(task.id)} className="edit-btn">Edit</button>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
      </div>
    </motion.div>
  );
};

export default TodoItem;
