import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Authentication/Login'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Regitser from './Authentication/Regitser';
import Home from './component/Home';

function App() {
  return (
    <div className="bg-gray-200 h-[100vh] flex flex-col justify-center items-center">
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
     
     <Route path="/" element={<Navigate to="/login" />} />

     <Route path='/register' element={<Regitser/>}/>
     <Route path='/home' element={<Home/>}/>
   
      </Routes>
     </BrowserRouter>
      
    <ToastContainer position='top-center' autoClose= '2000' />

    </div>
  );
}

export default App;
