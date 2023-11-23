import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from "./contexts/authContext.js"
import * as authService from '../src/services/authService.js'

import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx';
import Add from './components/Add/Add.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Services from './components/SiteServices/Services.jsx';
import Path from './path.js';
import Logout from "./components/Logout/logout.jsx";

function App() {

  const navigate = useNavigate();

  const [auth, setAuth] = useState(()=>{
    localStorage.removeItem('accessToken');

    return {}
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  };

  const registerSubmitHandler =async (values) => {
    const result = await authService.register(values.email, values.username, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  };

  const logoutHandler =()=> {
    setAuth({});
    localStorage.removeItem('accessToken');

  }
  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username:auth.username,
    email:auth.email,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <AuthContext.Provider value={values}>
    <div className="content-container">

      <Header />
      
      {/* <main> */}
      <Routes>
          <Route path={Path.Home} element={<Home />}></Route>
          <Route path={Path.About} element={<About />}></Route>
          <Route path={Path.Services} element={<Services />}></Route>
          <Route path={Path.Catalog} element={<Catalog />}></Route>
          <Route path={Path.Add} element={<Add />}></Route>
          <Route path={Path.Login} element={<Login />}></Route>
          <Route path={Path.Register} element={<Register />}></Route>
          <Route path={Path.Logout} element={<Logout />}></Route>
          
          </Routes>
      {/* </main> */}
      <Footer />
  
    </div>
    </AuthContext.Provider>
  )
}

export default App
