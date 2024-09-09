import { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TodoForm() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    if (value) {
      setTasks([...tasks, value]);
      setValue("");
    }
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <form
          className="flex flex-col items-center text-center bg-[#91A2FF] w-100  p-10 drop-shadow-2xl rounded-md"
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
            {tasks.map((task, index) => (
              <li
                className="p-2 border-black bg-white drop-shadow-md rounded-md"
                key={index}
              >
                {task}
              </li>
            ))}
          </ul>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
