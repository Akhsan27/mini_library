import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Manajemen Buku", path: "/admin/books" },
  { name: "Member", path: "/admin/member" },
  { name: "Peminjaman", path: "/admin/borrow" },
  { name: "Denda & Pembayaran", path: "/admin/fines" },
  { name: "Notifikasi", path: "/admin/notification" },
  { name: "Pengaturan Sitem", path: "/admin/settings" },
];

const AdminSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-xl font-bold mb-8">Admin Perpustakaan</h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition ${
                isActive ? "bg-blue-600" : "hover:bg-gray-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
