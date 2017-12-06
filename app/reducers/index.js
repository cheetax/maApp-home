import { combineReducers } from "redux";
import userInfo from "./info";
import actionStatus from './status'

const rootReducer = combineReducers({
    userInfo,
    actionStatus,
})

export default rootReducer