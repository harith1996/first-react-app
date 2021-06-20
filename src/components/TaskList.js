import Task from "./Task";

const TaskList = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    subject={task.subject}
                    day={task.day}
                    reminder={task.reminder}
                    onDelete={onDelete}
                ></Task>
            ))}
        </>
    );
};

export default TaskList;
