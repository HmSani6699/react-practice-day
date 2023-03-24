import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>

      <div className='user-container'>
        <DisplayInfo name="Alia bart" address="Oganda"></DisplayInfo>
        <DisplayInfo name="Noman" address="Momensahi"></DisplayInfo>
        <DisplayInfo name="Sani" address="Dhaka"></DisplayInfo>
      </div>
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
    <div className='posts-container'>
      <h1>All posts: {posts.length}</h1>
      {
        posts.map(post => <Post
          name={post.title}
          body={post.body}
          key={post.id}
        ></Post>)
      }
    </div>
  )
};

function Post(props) {
  return (
    <div style={{ border: '3px solid', margin: '20px', padding: '10px', borderRadius: '20px' }}>
      <h1>Title: {props.name}</h1>
      <p>Body: {props.body}</p>
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
