import React from 'react'
import classNames from 'classnames';
import { Link } from "react-router-dom";

export default function TodayTask(props) {
    let task = props.task;

    return (
        <div className={classNames("task", { "nonvisible": props.nonVisible && task.done })}>
            <div className="task-status">
                <h1 className={classNames("task-name", { "task-done": task.done })}>{task.title}</h1>
            </div>
            <p className={classNames("task-description", { "nonvisible": task.description == null })}>{task.description}</p>
            {task.dueDate != null ? <p className={classNames({ "date-red": task.dueDate && new Date() > new Date(task.dueDate) })}>{task.dueDate.split("T")[0]}</p> : null}
            <Link to={"/todo-list/" + task.taskList.listId}>{task.taskList.title}</Link>
        </div>
    )
}
