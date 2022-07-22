import './App.css';
import banana from './img/banana.jpg'

function App() {
  return (
    <div className="App">
      <h1>My react app</h1>
			<h2>Author : WAudouin</h2>
			<img src={banana} alt="banana" />
    </div>
  );
}

export default App;
