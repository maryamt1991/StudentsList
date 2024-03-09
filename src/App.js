import "./App.css";
import Students from "./components/students/students";
import React, { useState , useEffect } from "react";
import NewStudent from "./components/students/newStudent/newstudent";
import Toolbar from "./containers/Header/Toolbar/Toolbar"
import {BrowserRouter , Route , Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
    <Toolbar/>
    <div style={{marginTop:"70px"}}>
    <Routes> 
      <Route path="/" Component={HomePage}/>
      <Route path="/add-student" Component={AddStudent}/>
      <Route path="/student/:id" Component={EditStudent}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
