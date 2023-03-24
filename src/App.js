import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <DisplayInfo name="Alia bart" address="Oganda"></DisplayInfo>
      <DisplayInfo name="Noman" address="Momensahi"></DisplayInfo>
      <DisplayInfo name="Sani" address="Dhaka"></DisplayInfo>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);
  return (
    <div>
      <h1>All posts: {posts.length}</h1>
      {
        posts.map(post => console.log(post))
      }
    </div>
  )
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
