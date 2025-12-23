import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

export default function AddMovie() {
  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [tickets, setTickets] = useState("");
  const [revenue, setRevenue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !tickets || !revenue) {
      setError("All fields are required");
      return;
    }

    addMovie({
      title,
      tickets: Number(tickets),
      revenue: Number(revenue),
    });

    navigate("/movies");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 className="text-2xl font-bold mb-4">➕ Add Movie</h2>

      {error && (
        <p className="text-red-500 mb-3">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Tickets Sold"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save Movie
        </button>
      </form>
    </div>
  );
}
