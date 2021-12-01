import { TASKS_SET_VISIBLE } from "./tasksActionTypes"

const tasksSetVisibility = (value) => {
    return {
        type: TASKS_SET_VISIBLE,
        payload: value
    }
}

export { tasksSetVisibility }