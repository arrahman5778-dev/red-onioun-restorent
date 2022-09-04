
import './App.css';
import Header from './components/Pages/Shared/Header/Header';
import Footer from './components/Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Pages/UserLogin/Login/Login';
import Home from './components/Pages/Home/Home/Home';
import Register from './components/Pages/UserLogin/Register/Register';

function App() {
  return (
    <div>
      <Header />
      <Routes>
              <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
