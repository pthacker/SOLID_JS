import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  let dataFromStorage = JSON.parse(window.localStorage.getItem('todoList')) || [];
  const [todoList,setTodoList] = useState(dataFromStorage);
  const [text,setText] = useState('');

  useEffect(()=>{
    dataFromStorage = JSON.parse(window.localStorage.getItem('todoList'));
  },[todoList])
  const handleOnEnter = (e) =>{
 if(e.keyCode===13){
   const todoObj = {
     id: new Date(),
     text: text
   }
  setTodoList((prevState)=>{
      const finalData = [...prevState,todoObj];
  window.localStorage.setItem('todoList', JSON.stringify(finalData))
    return [
      ...prevState,
      todoObj
    ]
  })
  setText('');
 }
  }

  const handleOnChange = (e) => setText(e.target.value);
  return (
    <div className="App">
      <textarea onKeyDown={handleOnEnter} value={text} onChange={handleOnChange}/>
    { todoList && todoList.map(singleToDo=>{
      return <div>
        {singleToDo.text}
      </div>
    })}
    </div>
  );
}

export default App;
