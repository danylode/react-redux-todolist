import * as todayTaskActions from '../Actions/todayTaskActions'

const todayReducer = (state = [], action) => {
    switch (action.type) {
        case todayTaskActions.TODAY_TASKS_LOADED:
            return action.payload;
        default:
            return state;
    }
}

export default todayReducer;