import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navebar from './Components/Pages/Navebar/Navebar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Footer/Footer';
import Order from './Components/Pages/Order/Order';
import Login from './Components/Pages/Login/SignIn/Login';
import SignUp from './Components/Pages/Login/SignUp/SignUp';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import RequireAuth from './Components/Pages/RquireAdmin/RequireAuth';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import Review from './Components/Pages/Dashboard/Review';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import MannageProduct from './Components/Pages/Dashboard/MannageProduct';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Components/Pages/RquireAdmin/RequireAdmin/RequireAdmin';
import Paymens from './Components/Pages/Dashboard/Paymens';


function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/:Id" element={<RequireAuth><Order /></RequireAuth>} />

      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard/>
      </RequireAuth>}>
      <Route index element={<MyOrder/>}></Route>
      <Route path="review"  element={<Review/>}></Route>
      <Route path="profile"  element={<MyProfile/>}></Route>
      <Route path="payment/:id"  element={<Paymens/>}></Route>
      <Route path="addproduct"  element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
      <Route path="mannageproduct"  element={<RequireAdmin><MannageProduct/></RequireAdmin>}></Route>
      <Route path="user"  element={<RequireAdmin><MakeAdmin/></RequireAdmin>}></Route>
      </Route >

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
