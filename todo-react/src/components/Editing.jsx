import { useState } from "react";
import propTypes from "prop-types";
//Using the codes as same as TodoForm.jsx. But I added "task.text" so when a user press the editing icon, it shows current task in the input. If task.text is undefined, "" helps to avoid error
const Editing = ({ task, editTodo }) => {
  const [value, setValue] = useState(task.text || "");
  const handleUpdate = (e) => {
    e.preventDefault();
    //if a user write something, it appears on display.
    if (value.trim() !== "") {
      console.log("Updating task:", task.id, value);

      editTodo(task.id, value);
    }
  };

  return (
    <div className="my-5">
      <input
        type="text"
        value={value}
        className="p-1 drop-shadow-md rounded-md mr-2 border-2 border-blue-800 text-sm tracking-wider"
        placeholder="Update your tasks"
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        className="bg-[#4200FF] text-white text-center text-sm w-25 p-1 drop-shadow-md mr- rounded-md border-2 border-blue-800 hover:bg-white hover:border-blue-800 hover:text-blue-800 ease-in-out duration-100 tracking-wide "
        onClick={handleUpdate}
      >
        Update Task
      </button>
    </div>
  );
};
//I had a error for "editTodo was not function" because I am using it in props so used propTypes as React Library. It helps ensure correct type, so I can remove errors.
Editing.propTypes = {
  task: propTypes.shape({
    id: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
  }).isRequired,
  editTodo: propTypes.func.isRequired,
};
export default Editing;
