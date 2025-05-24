import DashboardLayout from "../../Components/Layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Welcome to your dashboard</h1>
      <p className="mt-2 text-gray-600">You are logged in.</p>
    </DashboardLayout>
  );
};

export default Dashboard;
