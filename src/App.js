import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <DisplayInfo name="Alia bart" address="Oganda"></DisplayInfo>
      <DisplayInfo name="Noman" address="Momensahi"></DisplayInfo>
      <DisplayInfo name="Sani" address="Dhaka"></DisplayInfo>
    </div>
  );
}
const displayStyle = {
  border: '2px solid',
  backgroundColor: 'orange',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px',
}
const binStyle = {
  padding: '8px 15px',
  borderRadius: '15px',
  border: 'none',
  cursor: 'pointer'
}

function DisplayInfo(props) {
  const [counter, setCounter] = useState(0);

  const powerCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter)
  }
  return (
    <div /* className='display-info' */ style={displayStyle}>
      <h1 style={{ color: 'blue' }}>Name: {props.name}</h1>
      <p>Address: {props.address}</p>
      <h4>Power: {counter}</h4>
      <button style={binStyle} onClick={powerCounter}>Boost The Power</button>
    </div>
  )
}

export default App;
