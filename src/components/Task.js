import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = ({ id, subject, day, reminder, onDelete }) => {
    return (
        <div className="task">
            <h3>
                {subject}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(id)}
                />
            </h3>
            <p>{day}</p>
            <p>Reminder: {reminder ? "Yes" : "No"}</p>
        </div>
    );
};

Task.propTypes = {
    id: PropTypes.number,
    subject: PropTypes.string,
    day: PropTypes.string,
    reminder: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default Task;
