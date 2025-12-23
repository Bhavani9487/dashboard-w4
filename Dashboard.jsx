export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">Total Users</p>
          <h2 className="text-3xl font-bold">1,200</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">Tickets Sold</p>
          <h2 className="text-3xl font-bold">3,450</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-3xl font-bold">₹1,25,000</h2>
        </div>
      </div>
    </div>
  );
}
