import './App.css';
import { useState } from 'react';
import styled from "styled-components";

function App() {
 
  const [number, setNumber] = useState(Number(localStorage.getItem('counter'))|| 0);
  console.log(number);

  const add = () => {
    setNumber((current => current + 1));
    localStorage.setItem('counter', number);
    console.log(number);
  }
  const sub = () => {
    setNumber((current => current - 1));
    localStorage.setItem('counter', number);
    console.log(number);
  }
  localStorage.setItem('counter', number);
  const Title = styled.div`
  color: lightblue;
  display: flex;
  justify-content: center;
  font-size: 30px;
  background-color: black;
  border-style: solid;
  border-width: 10px;`;
  const Btn = styled.div`
  display: flex;
  justify-content: center;
  background-color:
  margin: 20px;
  padding: 30px;
  `;
  const btnstyle = {
    padding: '10px',
    width: '70px',
    color: 'black',
    borderRadius: '10px',
    backgroundColor: 'white',
    marginRight: '20px',
    borderColor: 'lightblue'
  }

  
  return (
    <div>
      <Title><h1>Counter {number}</h1></Title>
      <Btn><button style = {btnstyle} onClick = {add}>+</button>
      <button style = {btnstyle} onClick = {sub}>-</button></Btn>

    </div>
  );
}


export default App;
