import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

const initialData = {
  todo: ["Design UI", "Create Sidebar"],
  inProgress: ["Build Dashboard"],
  done: ["Project Setup"],
};

export default function KanbanPage() {
  const [columns, setColumns] = useState(initialData);

  function onDragEnd(result) {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceList = Array.from(columns[source.droppableId]);
    const [movedItem] = sourceList.splice(source.index, 1);

    const destList = Array.from(columns[destination.droppableId]);
    destList.splice(destination.index, 0, movedItem);

    setColumns({
      ...columns,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList,
    });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Kanban Board</h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(columns).map(([columnId, tasks]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 p-4 rounded-lg min-h-[300px]"
                >
                  <h3 className="font-semibold mb-4 capitalize">
                    {columnId.replace(/([A-Z])/g, " $1")}
                  </h3>

                  {tasks.map((task, index) => (
                    <Draggable
                      key={task}
                      draggableId={task}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-3 mb-3 rounded shadow"
                        >
                          {task}
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
