import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"

import Nav from "./component/Nav"

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
