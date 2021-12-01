import * as todayTaskActions from '../Actions/todayTaskActions'

const todayReducer = (state = [], action) => {
    switch (action.type) {
        case todayTaskActions.TODAY_TASKS_LOADED:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default todayReducer;