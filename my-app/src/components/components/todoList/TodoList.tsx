import React from "react";
import { todoListInterface } from "../../shared/types/types";
import Button from "@mui/material/Button";

const TodoList = (props: todoListInterface) => {
  console.log(props.tasks);
  return (
    <div>
      {" "}
      Hello from todolist
      <Button variant="contained">Hello World</Button>
    </div>
  );
};

export default TodoList;
