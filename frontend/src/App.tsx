import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/admin/dashboard";
import BookManagement from "./pages/admin/bookmanagement";
import MemberPage from "./pages/admin/member";
import SettingsPage from "./pages/admin/settings";
import NotificationPage from "./pages/admin/notification";
import BorrowPage from "./pages/admin/peminjaman";
import FinePage from "./pages/admin/denda";
import AdminLayout from "./pages/admin/adminlayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Admin pages */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="books" element={<BookManagement />} />
        <Route path="member" element={<MemberPage />} />
        <Route path="borrow" element={<BorrowPage />} />
        <Route path="fines" element={<FinePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="notification" element={<NotificationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
