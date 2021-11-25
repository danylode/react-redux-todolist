import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Task from './Task';
import serverMethods from '../../serverMethods';

export default function Tasks() {
    let [tasks, setTasks] = useState([]);
    let params = useParams();

    let showing = (event) => {
        document.querySelectorAll('.task').forEach((x) => {
            x.classList.toggle('nonvisible', !event.target.checked && x.getElementsByClassName('task-checkbox')[0].checked);
        });
    }

    useEffect(() => {
        serverMethods.getTaskListById(params.id).then((data) => setTasks(data));
    },[params.id]);

    return (
        <div id="content">
            <div id="showAllPanel">
                <input type="checkbox" onChange={showing} defaultChecked/>
                <label>Show all</label>
            </div>
            {tasks.map((task) => <Task key={task.taskId} task={task}/>)}
        </div>
    )
}
