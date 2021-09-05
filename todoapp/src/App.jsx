import React, { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";

export const App = () => {
  const [todoText, settodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([// eslint-disable-line
  ]);

  const [completeTodos, setcompleteTodos] = useState([]);// eslint-disable-line

  const onChangeTodoText = (event) => settodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    settodoText("");
  };

  const onClickDelete = (i) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(i, 1);
    setIncompleteTodos(newTodo);
  };

  const onClickComplete = (i) => {
    const newIncompleteTodo = [...incompleteTodos];
    newIncompleteTodo.splice(i, 1);

    const newcompleteTodo = [...completeTodos, incompleteTodos[i]];
    setIncompleteTodos(newIncompleteTodo);
    setcompleteTodos(newcompleteTodo);
  };

  const onClickreturn = (i) => {
    const newcompleteTodo = [...completeTodos];
    newcompleteTodo.splice(i, 1);

    const newIncompleteTodo = [...incompleteTodos, completeTodos[i]];
    setIncompleteTodos(newIncompleteTodo);
    setcompleteTodos(newcompleteTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個まで</p>
      )}

      <IncompleteTodo
        Todo={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />

      <CompleteTodo Todo={completeTodos} onClickreturn={onClickreturn} />
    </>
  );
};
