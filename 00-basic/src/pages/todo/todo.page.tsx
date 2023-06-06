import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import classes from "./todo.page.css";
import axios from "axios";


export const TodoPage: React.FC = () => {
  const { data } = useQuery(
    ["todolist"],
    () => {
      return axios.get("http://localhost:3000/todos").then((res) => {
        return res.data;
      });
    },
    {
      //refetchOnMount: true,
      staleTime: 15000,
    }
  );

  return (
    <>
      <h1>Todo Page</h1>
      <div className={classes.todoList}>
        {data?.map((todo) => (
          <>
            <div>{todo.isDone ? "✅" : "⭕️"}</div>
            <div>{todo.description}</div>
          </>
        ))}
      </div>
      <Link to="/list">To List</Link>
    </>
  );
};
