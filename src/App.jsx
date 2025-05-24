import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Plans from './Pages/Plans/Plans';
import Dashboard from './Pages/DashBoard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Navigate to="/login" />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
