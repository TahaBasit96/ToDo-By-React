import React, { useState } from "react"
import "./App.css"
import ToDoinput from "./components/ToDoinput"
import Todolist from "./components/Todolist";


function App() {
const [listTodo,setListTodo]=useState('[]');
let addList=(inputText)=>{
if(inputText!=='')
  setListTodo([...listTodo,inputText]);
  
}
const deleteListItem = (key)=>{
  let newListTodo = [...listTodo];
  newListTodo.splice(key,1)
  setListTodo([...newListTodo])
}
  return (
   <div className="main-container">
    <div className="center-container">
       <ToDoinput  addList={addList}/>
       <h1 className="app-heading">ToDo</h1>
       <hr />
       {listTodo.map((listItem,i)=>{
        return(
<Todolist key={i}  index={i} item={listItem} deleteItem/>
        )
       })}

    </div>
   </div>
  )
}

export default App
