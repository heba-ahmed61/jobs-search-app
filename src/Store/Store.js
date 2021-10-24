import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { getJobsReducers } from "../RootReducer/Reducer";
import thunk from "redux-thunk";
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(
    combineReducers({
        jobsReducer : getJobsReducers
    }),
    initialState ,
    composeEnhancers(applyMiddleware(thunk))

)
export default store;