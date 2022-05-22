import logo from './logo.svg';
import './App.css';
import Navebar from './Components/Pages/Navebar/Navebar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
