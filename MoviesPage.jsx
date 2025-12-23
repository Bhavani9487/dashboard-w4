import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

export default function MoviesPage() {
  const { movies } = useContext(MovieContext);
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          🎬 Movies Management
        </h2>

        <Link
          to="/add-movie"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          + Add Movie
        </Link>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Movie</th>
              <th className="p-3 border">Tickets Sold</th>
              <th className="p-3 border">Revenue</th>
              <th className="p-3 border text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredMovies.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="p-4 text-center text-gray-500"
                >
                  No movies found
                </td>
              </tr>
            ) : (
              filteredMovies.map((movie) => (
                <tr
                  key={movie.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="p-3 border font-medium">
                    {movie.title}
                  </td>
                  <td className="p-3 border">
                    {movie.tickets}
                  </td>
                  <td className="p-3 border">
                    ₹{movie.revenue}
                  </td>
                  <td className="p-3 border text-center">
                    <Link
                      to={`/edit-movie/${movie.id}`}
                      className="text-indigo-600 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
