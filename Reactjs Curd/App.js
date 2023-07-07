import { useState } from 'react';
import './App.css';
import {Task} from "./Task";

function App(){
  let [todoList, setTodoList] = useState([]);
  let [newTask, setNewTask] = useState("");

  const handleEvent = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
      completed: false,

    };
    setTodoList(task.taskName !== "" ? [...todoList, task]:todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task)=>task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task)=>{
        if(task.id == id){
          return {...task, completed: true};
        }else {
          return task;
        }
      })
    );
  };
  return(

    <div className='App'>
      <div className='addTask'>
        <input onChange={handleEvent}></input>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {todoList.map((task)=>{
          return(
            <Task
              taskName = {task.taskName}
              id = {task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            ></Task>
          );
        })}
      </div>

    </div>
  );
}
// function App(){
//   let [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count = count+1);
//       }}>Increase</button>

//       <button onClick={() => {
//         setCount(count=count-1);
//       }}>Decrease</button>

//       <button onClick={()=>{
//         setCount(count=0);
//       }}>Set to Zero</button>
//       {count}
//     </div>
//   );

// }

// function App(){
//   let [showText, setShowText] = useState(true);
//   let [textColor, setColor] = useState("red");

//   return (
//     <div>
//       <button onClick={()=>{

//         // setShowText(!showText);
//         setColor(textColor==="red" ? "green" : "red");

//       }}>Show Text</button>
//       {showText && <h1 style={{color: textColor}}>Hi I am Snahal</h1>}
//     </div>
//   );
// }


// function App(){

//   const [inputValue, setInputvalue] = useState("");
//   const updateChange = (event)=>{
//     setInputvalue(event.target.value);
//   };
//   return(
//     <div>
//       <input type = "text" onChange={updateChange}></input>
//       {inputValue}
//     </div>
//   );
// }



// function App(){
//   // let age = 12;

//   let [age, sAge] = useState(12); // Created to update the value
// //         anyname    fix
//   const increaseAge = () => {
//     // age = age +1;
//     sAge(age = age +1); 

//     console.log(age);
//   };
//   return <div className='App'>
//     {age} 
//     <button onClick={increaseAge}>Increase Age</button>
//   </div>
// }


// function App(){
//   const planets = [
//     {name: "mars", isGasPlanet:false},
//     {name: "Earth", isGasPlanet:false},
//     {name: "Jupiter", isGasPlanet:true},
//     {name: "Venus", isGasPlanet:false},
//     {name: "Neptune", isGasPlanet:true},
//     {name: "Uranus", isGasPlanet:true}
//   ];

//   return(
//     <div>
//       {planets.map((planet,key)=>
//         planet.isGasPlanet && <h1>{planet.name}</h1>
//       )}
//     </div>
//   );
// }

// function App(){
//   const isGreen = true;
//   return(
//     <div className="App">
//       <h1 style={{color: isGreen ? "green" : "red"}} className="name">Snahal</h1>
//       {isGreen && <button>BUTTON</button>}
//     </div>
//   );
// }


// function App() {
//   const name = <h1>Snahal</h1>;
//   return (<div className="App">
//     <User name="snahal" age={21} email="snahal@snhal.com" />
//     <User name="Goldman" age={12} email="Goldman@snhal.com" />
//     <User name="Amazon" age={29} email="Amazon@snhal.com" />
//   </div>
//   );
// }

// // Component
// const User = (props) => {
//   return(
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

export default App;
