import './App.css';
import Navebar from './Components/Pages/Navebar/Navebar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Footer/Footer';
import Order from './Components/Pages/Order/Order';
import Login from './Components/Pages/Login/SignIn/Login';
import SignUp from './Components/Pages/Login/SignUp/SignUp';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import Review from './Components/Pages/Dashboard/Review';
import MyProfile from './Components/Pages/Dashboard/MyProfile';

function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/:Id" element={<Order />} />

      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard/>
      </RequireAuth>}>
      <Route index element={<MyOrder/>}></Route>
      <Route path="review"  element={<Review/>}></Route>
      <Route path="profile"  element={<MyProfile/>}></Route>
      </Route >

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
