//import React, { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TodoForm() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <form className="flex flex-col items-center text-center bg-[#91A2FF] w-96 h-96 p-10">
          <div>
            <h1 className="text-xl">Todo List</h1>
            <input type="text" className="" placeholder="Adding your task" />
            <button className="bg-[#4200FF] text-white" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
