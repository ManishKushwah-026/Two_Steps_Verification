import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import PersonalDetails from './components/PersonalDetails';
import AddressDetails from './components/AddressDetails';
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
    
      <Router>
        <nav className="Navbar">
          <h2 className='logo'>
            <img src="https://www.onito.io/assets/img/onito-onlyname-logo-removebg.png" alt="logo"/>
          </h2>
            <Link to="/">Home</Link>
            <Link to="/personaldetails">Form</Link>
            <Link to="/getAllUsers">Users</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/personaldetails' element={<PersonalDetails />} />
          <Route path='/addressdetails' element={<AddressDetails />} />
          <Route path='/getAllUsers' element={<UserInfo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
