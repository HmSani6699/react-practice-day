import logo from './logo.svg';
import './App.css';

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
  borderRadius: '20px'
}
function DisplayInfo(props) {
  return (
    <div /* className='display-info' */ style={displayStyle}>
      <h1 style={{ color: 'cadetblue' }}>Name: {props.name}</h1>
      <p>Address: {props.address}</p>
    </div>
  )
}

export default App;
