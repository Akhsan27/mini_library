import AdminSidebar from "../../components/adminsidebar";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/headeradmin";

const AdminLayout = () => {
    return(
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar/>
            <main className="flex-1">
                <HeaderAdmin/>
                <div className="p-6">
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}

export default AdminLayout