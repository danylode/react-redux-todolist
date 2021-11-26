import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Task from './Task';
import serverMethods from '../../serverMethods';
import CreateTaskForm from './CreateTaskForm';

export default function Tasks() {
    let params = useParams();
    let [tasks, setTasks] = useState([]);
    let [nonVisible, setNonVisible] = useState(true);

    let onChange = (event) => {
        setNonVisible(!event.target.checked);
    }

    let addTask = (listId, task) => {
        serverMethods.postMethod(listId, task).then((data) => setTasks(data));
    }

    let deleteTask = (taskId) => {
        serverMethods.deleteMethod(taskId).then((data) => setTasks(data));
    }

    let patchDoneState = (task) => {
        serverMethods.patchMethod(task).then((data) => setTasks(data));
    }

    useEffect(() => {
        serverMethods.getTaskListById(params.id).then((data) => setTasks(data));
    }, [params.id]);

    return (
        <div id="content">
            <div id="showAllPanel">
                <input type="checkbox" onChange={onChange} />
                <label>Show all</label>
            </div>
            {tasks.map((task) => <Task key={task.taskId} task={task} deleteHandler={deleteTask} changeHandler={patchDoneState} nonVisible={nonVisible} />)}
            <CreateTaskForm listId={params.id} onSubmit={addTask} />
        </div>
    )
}
