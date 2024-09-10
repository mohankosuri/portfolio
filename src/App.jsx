 import React from 'react'
 import Navbar from './components/Navbar'
 import Projects from './components/Projects'
 import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
 const App = () => {
   return (
    <div className="font-sans">
    <Navbar />
  
    <Routes>
    <Route path='/' Component={Hero}></Route>
      <Route path='/About' Component={About}></Route>
      <Route path='/Contact' Component={Contact}></Route>
      <Route path='/Projects' Component={Projects}></Route>
    
    </Routes>

    
    <Footer />
  </div>
   )
 }
 
 export default App