import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/admin/dashboard';
import BookManagement from './pages/admin/bookmanagement'
import MemberPage from './pages/admin/member';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/management-buku" element={<BookManagement/>}/>
      <Route path="/member" element={<MemberPage/>}/>
    </Routes>
  )
}

export default App
