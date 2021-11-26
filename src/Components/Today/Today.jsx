import React, { useEffect, useState } from 'react'
import TodayTask from './TodayTask'
import serverMethods from '../../serverMethods';

export default function Today() {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        serverMethods.getTodayTasks().then((data) => setTasks(data));
    }, []);

    return (
        <div id='today'>
            {tasks.map((task) => <TodayTask key={task.taskId} task={task} nonVisible={false} />)}
        </div>
    )
}
