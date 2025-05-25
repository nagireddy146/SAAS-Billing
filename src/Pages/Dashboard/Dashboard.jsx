import { useAuth } from "../../Context/AuthContext";
import DashboardLayout from "../../Components/Layouts/DashboardLayout";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();

  // Dummy subscription data
  const userPlan = {
    name: "Pro",
    price: "$20/mo",
    status: "Active",
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome to your dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <p className="mt-2 text-gray-600">You are logged in.</p>

      {/* Current Plan Card */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mt-6">
        <h2 className="text-xl font-semibold mb-2">Your Current Plan</h2>
        <p className="text-lg font-medium">
          {userPlan.name} Plan - {userPlan.price}
        </p>
        <p
          className={`mt-2 font-semibold ${
            userPlan.status === "Active" ? "text-green-600" : "text-red-600"
          }`}
        >
          Status: {userPlan.status}
        </p>
        <Link
          to="/dashboard/manage-subscription"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Manage Subscription
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
