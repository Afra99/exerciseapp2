import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import InputForm from "../Formulir/InputForm";
import Homee from "../Formulir/Homee";
import AppBar from '@material-ui/core/AppBar';





function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
    
    <Router>
        
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        

 
        <button className="hamburger" type="button" onClick={showSidebar}>
          <div></div>
        </button>
        <h1 >Menu</h1>
        <ul onClick={showSidebar}>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/InputForm">Form</Link></li>
        </ul>
      </nav>
      <Routes>
      <Route path="/Home" element={<Homee />} />
      <Route path="/InputForm" element={<InputForm />} />
      </Routes>

      
     
      </Router>










    );
  }
  
  export default Sidebar;