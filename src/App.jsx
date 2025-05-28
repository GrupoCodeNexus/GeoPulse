import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Routes/Home'
import Error from './Routes/Error'
import Sobre from './Routes/Sobre'
import Solucao from './Routes/Solucao'
import Login from './Routes/Login'
import Cadastrar from './Routes/Cadastrar'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/solucao" element={<Solucao/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastrar" element={<Cadastrar/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
