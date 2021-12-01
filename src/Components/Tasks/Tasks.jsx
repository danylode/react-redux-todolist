import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import Task from './Task';
import CreateTaskForm from './CreateTaskForm';
import { useDispatch, useSelector } from 'react-redux';
import * as asyncActions from '../../Actions/asyncActions'
import { tasksSetVisibility } from '../../Actions/actions'

export default function Tasks() {
    let params = useParams();

    let dispatch = useDispatch();
    let tasks = useSelector(state => state.tasks.currentTasks);
    let showAll = useSelector(state => state.tasks.visible);

    let onChange = (event) => {
        dispatch(tasksSetVisibility(event.target.checked))
    }

    let addTask = (listId, task) => {
        dispatch(asyncActions.postTask(listId, task));
    }

    let deleteTask = (taskId) => {
        dispatch(asyncActions.deleteTask(taskId));
    }

    let patchDoneState = (task) => {
        dispatch(asyncActions.patchTask(task));
    }

    let filteredTasks = useMemo(() => showAll ? tasks : tasks.filter((task) => !task.taskDone), [tasks, showAll])

    useEffect(() => {
        dispatch(asyncActions.loadTasks(params.id));
    }, [dispatch, params.id]);

    return (
        <div id="tasks">
            <div id="showAllPanel">
                <input type="checkbox" onChange={onChange} />
                <label>Show all</label>
            </div>
            {filteredTasks.map((task) => <Task key={task.taskId} task={task} deleteHandler={deleteTask} changeHandler={patchDoneState} />)}
            <CreateTaskForm listId={params.id} addTask={addTask} />
        </div>
    )
}
