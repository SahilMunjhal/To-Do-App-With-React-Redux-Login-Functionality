import logo from './logo.svg';
import './App.css';
import {AllRoutes} from "./components/router";
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AllRoutes/>
    </div>
  );
}

export default App;
