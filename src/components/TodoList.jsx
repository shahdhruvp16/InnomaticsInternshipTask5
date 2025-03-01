import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete, editTask, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem 
          key={task.id} 
          task={task} 
          toggleComplete={toggleComplete} 
          editTask={editTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TodoList;
