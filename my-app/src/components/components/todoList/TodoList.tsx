import React from "react";
import { todoListInterface } from "../../shared/types/types";

const TodoList = (props: todoListInterface) => {
    console.log(props.tasks)
  return <div> Hello from todolist </div>;
};

export default TodoList;
