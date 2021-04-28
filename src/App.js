import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Car from './components/Cars';

function App() {
  new Car()
  return (
    <div className="App">
     <HelloWorld />
    </div>
  );
}

export default App;
