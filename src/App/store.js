import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';

import dashboardReducer from '../Reducers/dashboardReducer'
import tasksReducer from "../Reducers/tasksReducer";
import todayReducer from '../Reducers/todayReducer'

const rootReducer = combineReducers({
    today: todayReducer,
    dashboard: dashboardReducer,
    tasks: tasksReducer
});


export default createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

