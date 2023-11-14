import { Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx';
import Add from './components/Add/Add.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Services from './components/Services/Services.jsx';

function App() {

  return (
    <div className="content-container">

      <Header />
      
      {/* <main> */}
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          {/* <Route path='/logout' element={<Home />}></Route> */}
          
          </Routes>
      {/* </main> */}
      <Footer />

    </div>
  )
}

export default App
