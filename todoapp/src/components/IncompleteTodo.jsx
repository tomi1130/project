import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px",
};

export const IncompleteTodo = (props) => {
  const { Todo, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTodo</p>
      <ul>
        {Todo.map((todo, i) => (
          <li key={todo} className="list-row">
            <p>{todo}</p>
            <button onClick={() => onClickComplete(i)}>完了</button>
            <button onClick={() => onClickDelete(i)}>削除</button>
          </li>
        ))}
      </ul>
      {/* <button
    onClick={() => {
      const incompleteTodosCopy = incompleteTodos.slice();
      incompleteTodos.push("あ");
      setIncompleteTodos(incompleteTodosCopy);
    }}
  >
    あを追加
  </button> */}
    </div>
  );
};
