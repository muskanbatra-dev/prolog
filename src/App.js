
import './App.css';
import Login from './components/Login';
import Forgot from './components/Forgot';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/forgot" element={<Forgot/>}></Route>
     
      </Routes>
    </Router>
  );
}

export default App;
