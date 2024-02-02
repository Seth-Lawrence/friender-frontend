import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import RoutesList from './RoutesList';
const BASE_API = 'localhost:5000'

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
