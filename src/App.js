import React, {useState} from "react";
import './App.css';

function App() {

  const [newTodo, setNewTodo]= useState("");
  const [todos, setTodos]= useState([]);

  const handleNewTodoSubmit = (e)=> {
    e.preventDefault();
    if (newTodo.length == 0){
      return;
    };

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

 const handleTodoDelete = (delIdx)=> {
   const filteredTodos = todos.filter((todo,i)=> {
     return i != delIdx
   });
   setTodos(filteredTodos);
 };

 const todoItem = {
   text: newTodo,
   complete: false
 };

 const handleToggleComplete = (idx) => {
   const updatedTodos = todos.map((todo,i)=>{
    if (idx==i){
      todo.complete = !todo.complete;
    }
    return todo;
   });
   setTodos(updatedTodos);
 }




  return (
    <div className="App">
      <form onSubmit={(e)=>{
        handleNewTodoSubmit(e);
      }}>
        <header className="App-header">
          <input type="text" value={newTodo} onChange={(e)=>{
            setNewTodo(e.target.value);
          }}></input>
          <button className="btn btn-success"
          style={{marginTop:"5px"}}
          >
            Add</button>
        </header>
      </form>
      <hr />
{/* display list */}
      {todos.map((todo,i)=> {
        const todoClasses =[]

        if (todo.complete){
          todoClasses.push("line_through");
        }
          return (
            <div>
              <span className={todoClasses.join(" ")}>{todo.text}</span>
              <input onChange={(e)=>{
                handleToggleComplete(i);
              }} checked={todo.complete} type="checkbox"
              style={{marginLeft:"15px"}}
              ></input>
              <button className="btn btn-success" onClick={(e)=>{
                handleTodoDelete(i);
              }}
              style={{marginLeft:"15px"}}
              >
                Delete</button>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default App;
