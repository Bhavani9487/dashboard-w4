import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

export default function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, updateMovie } = useContext(MovieContext);

  const movie = movies.find((m) => m.id === Number(id));

  const [title, setTitle] = useState(movie?.title || "");
  const [tickets, setTickets] = useState(movie?.tickets || "");
  const [revenue, setRevenue] = useState(movie?.revenue || "");
  const [error, setError] = useState("");

  if (!movie) {
    return <p className="text-red-500">Movie not found</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !tickets || !revenue) {
      setError("All fields are required");
      return;
    }

    updateMovie(movie.id, {
      title,
      tickets: Number(tickets),
      revenue: Number(revenue),
    });

    navigate("/movies");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 className="text-2xl font-bold mb-4">✏️ Edit Movie</h2>

      {error && (
        <p className="text-red-500 mb-3">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Update Movie
        </button>
      </form>
    </div>
  );
}
