export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-sm text-gray-500">Total Users</p>
        <h3 className="text-3xl font-bold">1,240</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-sm text-gray-500">Revenue</p>
        <h3 className="text-3xl font-bold">$9,430</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-sm text-gray-500">Active Sessions</p>
        <h3 className="text-3xl font-bold">87</h3>
      </div>
    </div>
  );
}
