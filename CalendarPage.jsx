import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Avatar Movie Show",
    start: new Date(2025, 0, 10, 10, 0),
    end: new Date(2025, 0, 10, 12, 0),
  },
  {
    title: "KGF Evening Show",
    start: new Date(2025, 0, 12, 18, 0),
    end: new Date(2025, 0, 12, 21, 0),
  },
];

export default function CalendarPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Movie Schedule</h2>

      <div className="bg-white p-4 rounded shadow">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
}
