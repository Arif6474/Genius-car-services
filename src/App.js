
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/about" element={<RequireAuth>
        <About></About>
       </RequireAuth>}></Route>
       <Route path="/checkout" element={<RequireAuth>
        <Checkout></Checkout>
       </RequireAuth>}></Route>
       <Route path="/services" element={<Services></Services>}></Route>
       <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
       

     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
