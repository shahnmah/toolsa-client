import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import BuyNow from './Pages/Home/Home/BuyNow/BuyNow';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='buyNow/:toolId' element={<RequireAuth>
          <BuyNow></BuyNow>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route index path='myProfile' element={<MyProfile/>}/>
          <Route path='addReview' element={<AddReview/>}/>
          <Route path='myOrder' element={<MyOrders/>}/>
          <Route path='addProduct' element={<AddProduct/>}/>
          <Route path='makeAdmin' element={<MakeAdmin/>}/>
        </Route>
        <Route path='portfolio' element={<MyPortfolio/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
