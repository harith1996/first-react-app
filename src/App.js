import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            subject: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            subject: "Meeting at School",
            day: "Feb 6th at 1:30pm",
            reminder: false,
        },
        {
          id: 3,
          subject: "Cook Food",
          day: "Feb 7th at 2:30pm",
          reminder: false,
        }
    ]);
    const onDelete = (id) => {
      setTasks(tasks.filter((task) => {
        return task.id !== id;
      }));
    }
    return (
        <div>
            <Header title="Task Tracker" />
            {tasks.length > 0 ? <TaskList tasks={tasks} onDelete={onDelete}></TaskList> : <p>No tasks to show</p>}
        </div>
    );
}

export default App;
