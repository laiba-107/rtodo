import React from "react";
import TaskColumn from "../Components/TaskColumn";

function TaskBoard({ columns }) {
    return (
        <div className="row">
            {columns.map((column, index) => (
                <div className="col-md-4" key={index}>
                    <TaskColumn column={column} />
                </div>
            ))}
        </div>
    );
}

export default TaskBoard;
