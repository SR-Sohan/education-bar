import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav-bar/NavBar';
import CourseBar from './Components/Course-bar/CourseBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="">
        <NavBar></NavBar>
        <CourseBar></CourseBar>
    </div>
  );
}

export default App;
