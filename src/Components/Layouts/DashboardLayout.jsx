import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li><Link to="/dashboard" className="hover:underline">Home</Link></li>
          <li><Link to="/plans" className="hover:underline">Plans</Link></li>
          <li><Link to="/login" className="hover:underline">Logout</Link></li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
