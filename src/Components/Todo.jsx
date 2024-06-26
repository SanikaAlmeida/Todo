import { useEffect, useState,useRef } from 'react'
import './CSS/Todo.css'
import Todoitems from './Todoitems';

let count=0;
const Todo = () => {
  const [todos,setTodos]=useState([]);
  const inputRef= useRef(null);

  const add=()=>{
    const newTodoText = inputRef.current.value.trim();
    if (newTodoText !== '')
    {
      setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
      inputRef.current.value='';
      localStorage.setItem("todos_count",count)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      add();
    }
  };

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
    count=localStorage.getItem("todos_count")
  },[])

//whenever the todos state variable changes (when a new todo item is added or removed), the changes are reflected in the local storage after a short delay. 
  useEffect(()=>{
    setTimeout(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },100);
  },[todos])

  return (
    <div className='todo'>
        <div className="todo-header">TO-DO LIST</div>
        <div className="todoadd">
            <input ref={inputRef} type="text" placeholder='Add your tasks' className='todoinput'
            onKeyDown={handleKeyPress} />
            <div className="todobtn" onClick={add}>Add</div>       
        </div>
        <div className="todolist"></div>
        {todos.map((item,index)=>{
            return <Todoitems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
        })}
    </div>
  )
}

export default Todo