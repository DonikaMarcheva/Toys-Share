import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./contexts/authContext.jsx"
import { DataProvider } from './contexts/dataContext.jsx';

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
import Logout from "./components/Logout/Logout.jsx";
import ToyDetails from './components/ToyDetails/toyDetails.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';



function App() {

  return (
    <AuthProvider>
       <DataProvider>
    <div className="content-container">

      <Header />
      
      {/* <main> */}
      <Routes>
          <Route path={Path.Home} element={<Home />}></Route>
          <Route path={Path.About} element={<About />}></Route>
          <Route path={Path.Services} element={<Services />}></Route>
          <Route path={Path.Catalog} element={<Catalog />}></Route>
          <Route path={Path.ToyDetails} element= {<ToyDetails />}></Route>
          <Route path={Path.Add} element={<Add />}></Route>
          <Route path={Path.Login} element={<Login />}></Route>
          <Route path={Path.Register} element={<Register />}></Route>
          <Route path={Path.Logout} element={<Logout />}></Route>
          <Route path={Path.NotFound} element={<PageNotFound />} />
          
          </Routes>
      {/* </main> */}
      <Footer />
  
    </div>
    </DataProvider>
    </AuthProvider>
  )
}

export default App
