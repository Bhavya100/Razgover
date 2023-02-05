import Nav from "./components/nav";
import Home from "./Home";
import Duo from "./Duo";
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duo" element={<Duo />} />
      </Routes>
      </BrowserRouter>


  )
}

export default App