import './App.css'
import './assets/bootstrap.css'
import About from './composants/About'
import Error from './composants/Error'
import Footer from './composants/Footer'
import Home from './composants/Home'
import Header from './composants/Header'
import Logement from './composants/Logement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Header/>
    <Routes>
    
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/logement/:idlog' element={<Logement/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}
export default App