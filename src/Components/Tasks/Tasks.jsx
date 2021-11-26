import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import Task from './Task';
import serverMethods from '../../serverMethods';
import CreateTaskForm from './CreateTaskForm';

export default function Tasks() {
    let params = useParams();
    let [tasks, setTasks] = useState([]);
    let [all, setAll] = useState(false);

    let onChange = (event) => {
        setAll(event.target.checked);
    }

    let addTask = (listId, task) => {
        serverMethods.postMethod(listId, task).then((data) => setTasks(data));
    }

    let deleteTask = (taskId) => {
        serverMethods.deleteMethod(taskId).then((data) => setTasks(data));
    }

    let patchDoneState = (taskId, state) => {
        serverMethods.patchMethod(taskId, state).then((data) => setTasks(data));
    }

    let filteredTasks = useMemo(() => {
        return all ? tasks : tasks.filter((task) => !task.taskDone);
    }, [tasks, all])

    // First load
    useEffect(() => {
        serverMethods.getTaskListById(params.id, all).then((data) => setTasks(data));
    }, [params.id]);

    return (
        <div id="tasks">
            <div id="showAllPanel">
                <input type="checkbox" onChange={onChange} />
                <label>Show all</label>
            </div>
            {filteredTasks.map((task) => <Task key={task.taskId} task={task} deleteHandler={deleteTask} changeHandler={patchDoneState} />)}
            <CreateTaskForm listId={params.id} onSubmit={addTask} />
        </div>
    )
}
