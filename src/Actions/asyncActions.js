import * as tasksActionsTypes from './tasksActionTypes';
import * as dashboardActionsTypes from './dashboardActionTypes';
import * as todayTaskActions from './todayTaskActions'

//Dashboard
const loadDashboard = dispatch => {
    fetch('https://localhost:5001/api/Dashboard/npgsql')
        .then(res => res.json())
        .then(data => dispatch({ type: dashboardActionsTypes.DASHBOARD_LOADED, payload: data }));
}

//Today

const loadTodayTasks = dispatch => {
    fetch('https://localhost:5001/api/collection/today')
        .then(res => res.json())
        .then(data => dispatch({ type: todayTaskActions.TODAY_TASKS_LOADED, payload: data }));
}

//Tasks

const loadTasks = listId => dispatch => {
    fetch(`https://localhost:5001/api/tasks?listId=${listId}&all=true`)
        .then(res => res.json())
        .then(data => dispatch({ type: tasksActionsTypes.TASKS_LOADED, payload: data }));
}

const postTask = (listId, task) => dispatch => {
    fetch(`https://localhost:5001/api/tasks?listId=${listId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => response.json())
        .then((data) => dispatch({ type: tasksActionsTypes.TASKS_ADD, payload: data }))
}

const deleteTask = listId => dispatch => {
    fetch(`https://localhost:5001/api/tasks/${listId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then((data) => dispatch({ type: tasksActionsTypes.TASKS_DELETE, payload: data }))
}

const patchTask = (patchInfo) => dispatch => {
    let taskObject = [{
        "path": "Done",
        "op": "add",
        "value": patchInfo.newState
    }]
    fetch(`https://localhost:5001/api/tasks/${patchInfo.taskId}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json-patch+json"
        },
        body: JSON.stringify(taskObject)
    })
        .then((response) => response.json())
        .then(() => dispatch({ type: tasksActionsTypes.TASKS_REPLACE, payload: patchInfo }))
}

export { loadDashboard, loadTasks, postTask, deleteTask, patchTask, loadTodayTasks }
