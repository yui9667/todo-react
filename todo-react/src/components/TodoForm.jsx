import { useState } from "react";
import Editing from "./Editing";
import Icons from "./icons";
function TodoForm() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const newTask = {
        id: Date.now(),
        text: value,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setValue("");
    }
  };
  //This is for adding mark to each tasks. so use map method to check all tasks and if my task.id and id works, completed selection will be opposite boolean (true/false) because of ! otherwise just no change anything and show the task
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //Editing did not update properly and still gets the old version, so use prevTasks instead, and the same logic here as toggleCompletion
  //Added return here so I can replace old task to new task (prev called functional form must use return )
  const handleUpdateTask = (id, updatedText) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      );

      return newTasks;
    });
    setEditingTaskId(null);
  };
  //if the task.id is not match to id. then the task will keep in the form.
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="flex flex-col items-center text-center bg-[#91A2FF] w-100 p-10 drop-shadow-2xl rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl  tracking-wider">Todo List</h1>
        <div className="my-5">
          <input
            type="text"
            value={value}
            className="p-2 mx-3 drop-shadow-md rounded-md"
            placeholder="Adding your task"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="bg-[#4200FF] text-white w-20 p-2 drop-shadow-md rounded-md border-2 border-blue-800 hover:bg-white hover:border-blue-800 hover:text-blue-800 ease-in-out duration-100 "
            type="submit"
          >
            Add
          </button>
        </div>
        <ul className=" flex flex-col text-start w-80 gap-4  ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`p-2 border-black bg-white drop-shadow-md rounded-md cursor-pointer flex justify-between pl-5  ${
                task.completed ? " line-through text-gray-500" : "none"
              } `}
            >
              {editingTaskId === task.id ? (
                <Editing
                  key={task.id}
                  task={task}
                  editTodo={handleUpdateTask}
                />
              ) : (
                <>
                  <span>{task.text}</span>
                  <Icons
                    onEditClick={() => setEditingTaskId(task.id)}
                    onDeleteClick={() => handleDeleteTask(task.id)}
                    onToggleCompletion={() => toggleTaskCompletion(task.id)}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default TodoForm;
