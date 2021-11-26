import React, { useEffect, useState } from 'react'
import TodayTask from './TodayTask'
import serverMethods from '../../serverMethods';

export default function Today() {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        serverMethods.getTodayTasks().then((data) => setTasks(data));
    }, []);

    let deleteTask = (taskId) => {
        serverMethods.deleteMethod(taskId).then((data) => setTasks(data));
    }

    let patchDoneState = (task) => {
        serverMethods.patchMethod(task).then((data) => setTasks(data));
    }

    return (
        <div id='content'>
            {tasks.map((task) => <TodayTask key={task.taskId} task={task} nonVisible={false} deleteHandler={deleteTask} changeHandler={patchDoneState} />)}
        </div>
    )
}
