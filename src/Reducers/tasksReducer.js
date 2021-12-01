import { combineReducers } from 'redux';
import * as taskActionsTypes from '../Actions/tasksActionTypes'

const patchTask = (state, patchInfo) => {
    return state.map(x => x.taskId === patchInfo.taskId ? { ...x, taskDone: patchInfo.newState } : x);
}

const addTask = (state, task) => {
    return [...state, task]
}

const deleteTask = (state, task) => {
    return state.filter(x => x.taskId !== task.taskId);
}

const taskListsReducer = (tasks = [], action) => {
    switch (action.type) {
        case taskActionsTypes.TASK_LOADED:
            return action.payload;
        case taskActionsTypes.TASK_ADD:
            return addTask(tasks, action.payload);
        case taskActionsTypes.TASK_STATUS_UPDATED:
            return patchTask(tasks, action.payload);
        case taskActionsTypes.TASK_DELETE:
            return deleteTask(tasks, action.payload);
        default:
            return tasks;
    }
}

const taskVisibilityReducer = (state = false, action) => {
    switch (action.type) {
        case taskActionsTypes.TASKS_SET_VISIBLE:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers(
    {
        currentTasks: taskListsReducer,
        visible: taskVisibilityReducer
    });