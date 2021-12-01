import React, { useEffect } from 'react'
import TodayTask from './TodayTask'
import * as actions from '../../Actions/asyncActions'
import { useSelector, useDispatch } from 'react-redux';

export default function Today() {
    let dispatch = useDispatch();
    let todayTasks = useSelector(x => x.today);

    useEffect(() => {
        dispatch(actions.loadTodayTasks);
    }, [dispatch]);

    return (
        <div id='today'>
            {todayTasks.map((task) => <TodayTask key={task.taskId} task={task} nonVisible={false} />)}
        </div>
    )
}
