# Install NodeJS in Ubuntu 
Visit [NodeJs Package Manager](https://nodejs.org/en/download/package-manager#debian-and-ubuntu-based-linux-distributions) and download the latest release from its github repo. 
For E.g. Open the terminal and run the command:  <br><br>
`curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs`
<br>
After installing check the version of `node -v ` and `npm -v`.
<br>

## Install ReactJs in Ubuntu

To do so we will first install yarn package manager because it is easy to manage and it can install packages simultaneously and is better than npm.
<br><br>
`sudo npm install -g yarn` 
<br><br>

Now to install reactjs type `yarn create react-app openboard` use any name instead of openboard. It will take some min to create. 
* cd to your openboard directory and you can see app.js where you can edit and to start server just type `yarn start`. To stop server Ctrl+C.

# What is JSX
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
```javascript
function App() {
  const name = "Snahal"
  return <div className="App"> {name} </div>
}
```

# Components and props in React

Componenet is like a creating a function that returns some values like html or normal values. Its like a user defined function in CPP.<be>
props is like an argument for the function but deceleration is some what different than in CPP.

```javascript
function App() {
  const name = <h1>Snahal</h1>;
  return (<div className="App">
    <User name="snahal" age={21} email="snahal@snhal.com" />  // passing values 
    <User name="Goldman" age={12} email="Goldman@snhal.com" />
    <User name="Amazon" age={29} email="Amazon@snhal.com" />
  </div>
  );
}

// component
const User = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>  // Arguments
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};
```

# Ternary Operator and CSS

Ternary Operator is the same as we use in cpp. and CSS can be declared in line but ~~background-color~~ is written as backgroundColor. 

```javascript
function App(){
  const isGreen = true;
  return(
    <div className="App">
      <h1 style={{color: isGreen ? "green" : "red"}} className="name">Snahal</h1> // Ternary Operator
      {isGreen && <button>BUTTON</button>} // another way of if else
    </div>
  );
}
```
We can also use simple if-else statements but it's better to use a ternary operator to avoid extra usage of lines.

# List and map in React

```javascript
function App(){
  const names = [
    {name: "snahal", age:21},
    {name: "goldman", age:13}
  ];

  return(
    <div>
      {names.map((user,key)=>{
        return <h1>{user.name} {user.age}</h1>;
      })}
    </div>
  );
}
```
# useState in React to trigger an event and change the display value

```javascript
import { useState } from 'react';
import './App.css';


function App(){
  // let age = 12;

  let [age, sAge] = useState(12); // Created to update the value
//         anyname    fix
  const increaseAge = () => {
    // age = age +1;
    sAge(age = age +1);
    
    console.log(age);
  };
  return <div className='App'>
    {age} 
    <button onClick={increaseAge}>Increase Age</button>
  </div>
}
```


