import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList';
import Navbar from './Navbar';


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
