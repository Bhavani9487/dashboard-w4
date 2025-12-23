import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import KanbanPage from "./pages/KanbanPage.jsx";
import TablesPage from "./pages/TablesPage.jsx";

import MoviesPage from "./pages/MoviesPage.jsx";
import AddMovie from "./pages/AddMovie.jsx";
import EditMovie from "./pages/EditMovie.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-sm">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Topbar */}
          <header className="h-16 bg-white border-b shadow-sm flex items-center px-6">
            <Topbar />
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
              <Route path="/tables" element={<TablesPage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/add-movie" element={<AddMovie />} />
              <Route path="/edit-movie/:id" element={<EditMovie />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
