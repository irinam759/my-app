import logo from './logo.svg';
import './App.css';
import CarsView from './components/CarsView';
import Car from './data-models/Cars';

function App() {
 const car1 = new Car('Mazda', '6', 2017, 10000);
 const car2 = new Car('Mazda', '6', 2017, 10000);
 const car3 = new Car('Mazda', '6', 2017, 10000);
 const carsArray = [car1,car2,car3];

  return (
    <div>
    <CarsView carsData={carsArray}/>
    </div>
  );
}

export default App;
