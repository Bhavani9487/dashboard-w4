export default function TablesPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bookings Table</h2>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Movie</th>
            <th className="p-3 text-left">Tickets</th>
            <th className="p-3 text-left">Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">Avatar 2</td>
            <td className="p-3">120</td>
            <td className="p-3">₹45,000</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">KGF 2</td>
            <td className="p-3">90</td>
            <td className="p-3">₹32,000</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">Jawan</td>
            <td className="p-3">150</td>
            <td className="p-3">₹60,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
