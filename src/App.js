
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
import Addservice from './Pages/Addservice/Addservice';
import ManageService from './Pages/ManageService/ManageService';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';

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
       <Route path="/checkout/:serviceId" element={<RequireAuth>
        <Checkout></Checkout>
       </RequireAuth>}></Route>
       <Route path="/addservice" element={<RequireAuth>
        <Addservice></Addservice>
       </RequireAuth>}></Route>
       
       <Route path="/manage" element={<RequireAuth>
        <ManageService></ManageService>
       </RequireAuth>}></Route>
       <Route path="/orders" element={<RequireAuth>
        
        <Order></Order>
       </RequireAuth>}></Route>
       <Route path="/services" element={<Services></Services>}></Route>
       <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
       

     </Routes>
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
