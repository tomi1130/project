import React from "react";

export const CompleteTodo = (props) => {
  const { Todo, onClickreturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      <ul>
        {Todo.map((todo, i) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickreturn(i)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
