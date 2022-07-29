import React from "react";
import TodoList from "../components/todoList/TodoList";
import { todoInterface } from "../shared/types/types";

export function Body() {
  const aa: todoInterface = {task: {name:'task1'}};
  const tasksList = [aa];
  return (
    <div>
      {" "}
      <TodoList 
        tasks={tasksList}
      />
    </div>
  );
}
