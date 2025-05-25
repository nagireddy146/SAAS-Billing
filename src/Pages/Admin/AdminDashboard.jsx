import DashboardLayout from "../../Components/Layouts/DashboardLayout";

const AdminDashboard = () => {
  // Dummy users array
  const users = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      plan: "Basic",
      status: "active"
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      plan: "Pro",
      status: "expired"
    }
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Plan</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.plan}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    user.status === "active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default AdminDashboard;
