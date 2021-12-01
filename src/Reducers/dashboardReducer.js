import * as dashboardActionsTypes from "../Actions/dashboardActionTypes";
import * as taskActionsTypes from '../Actions/tasksActionTypes';

const incrementListCountById = (state, listId, count) => {
    return state.map(x => x.listId === listId ? { ...x, listTaskCount: x.listTaskCount + count } : x);
}

const dashboardReducer = (dashboard = [], action) => {
    switch (action.type) {
        case dashboardActionsTypes.DASHBOARD_LOADED:
            return action.payload;
        case taskActionsTypes.TASK_ADD:
            return incrementListCountById(dashboard, action.payload.taskListId, 1);
        case taskActionsTypes.TASK_DELETE:
            return incrementListCountById(dashboard, action.payload.taskListId, -1);
        case taskActionsTypes.TASK_STATUS_UPDATED:
            let patchInfo = action.payload;
            return incrementListCountById(dashboard, patchInfo.listId, patchInfo.oldState - patchInfo.newState);
        default:
            return dashboard;
    }
}

export default dashboardReducer;