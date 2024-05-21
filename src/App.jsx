import Navbar from "./components/navbar/Navbar"
import './App.css'
import Footer from "./components/footer/Footer"
import MainPages from "./MainPages"
import { Route, Routes } from "react-router-dom"
import Privacy from "./components/documents/Privacy"
import Public from "./components/documents/Public"
import Rules from "./components/documents/Rules"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPages/>}/>
        <Route path="/privacy-policy" element={<Privacy/>}/>
        <Route path="/contract-offer" element={<Public/>}/>
        <Route path="/return-policy" element={<Rules/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
