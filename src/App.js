import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Router>
        <>
          <Navbar />

          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path="/home" component={<Home />} />
          </Routes>

        </>
      </Router>
    </div>
  );
}

export default App;
