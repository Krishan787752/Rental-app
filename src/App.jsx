import React from 'react'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from './Pages/Buy';
import Rent from './Pages/Rent';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <div>
      <Router>
     <Navbar/>

      <Routes>
       <Route path='*' element={<Dashboard/>} />
      <Route path='/Pages/Buy' element={<Buy/>}/>
      <Route path='/Pages/Rent' element={<Rent/>}/>
     </Routes>
     </Router>

    </div>
  )
}

export default App
