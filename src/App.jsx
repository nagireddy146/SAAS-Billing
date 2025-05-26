import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Plans from './Pages/Plans/Plans';
import Dashboard from './Pages/DashBoard/dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import ManageSubscription from './Pages/Dashboard/ManageSubscription';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import Unauthorized from './Pages/Unauthorized';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plans" element={<Plans />} />
         <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/admin" element={
  <ProtectedRoute allowedRoles={["admin"]}>
    <AdminDashboard />
  </ProtectedRoute>
} />
<Route path="/dashboard" element={
  <ProtectedRoute allowedRoles={["user"]}>
    <Dashboard />
  </ProtectedRoute>
} />

        <Route path = "/dashboard/manage-subscription" element={
          <ProtectedRoute>
            <ManageSubscription />
          </ProtectedRoute>
        } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
