import axios from 'axios';
import { useState } from 'react';
import { Todo } from 'Todo';
import { TodoType } from 'types/todo';
import { UserProfile } from 'UserProfile';
import './App.css';
import {Test} from './Test'

const user={
  name:"aaa",
  hobbies:["gwerg","erga"],
}

function App() {
  const[todos,setTodos] =useState<Array<TodoType>>([]);
  const onClickFetchData =()=>{
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      setTodos(res.data);
    })
  }
  return (
    <div className="App">
    <Test color="red" fontSize="18px" />
    <UserProfile user={user}/>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo:any) =>(
        <Todo key={todo.id}title={todo.title} userId={todo.userId} completed = {todo.completed}/>
      ))}
    </div>
  );
}

export default App;
