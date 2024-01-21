import Navbar from "./Navbar"
import Home from "./component/Home"
import { Routes, Route } from "react-router-dom"
import Resumed from "./page/Resumed"
import Contact from "./page/Contact"
import Project from "./page/Project"


function App() {
  
  return (
    <>
    <>
      <Navbar/> 
      
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/resumed" element ={<Resumed/>}/>
        <Route path="/project" element ={<Project/>}/>

        <Route path="/contact" element ={<Contact/>}/>
      </Routes>
    </>
    </>
  )
}

export default App
